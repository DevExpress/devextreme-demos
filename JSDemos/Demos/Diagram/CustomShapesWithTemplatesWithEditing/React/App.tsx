

interface PopupContentFuncProps {
currentEmployee: any;
handleNameChange: (e: any) => void;
handleTitleChange: (e: any) => void;
handleCityChange: (e: any) => void;
handleStateChange: (e: any) => void;
handleEmailChange: (e: any) => void;
handleSkypeChange: (e: any) => void;
handlePhoneChange: (e: any) => void;
updateEmployeeClick: () => void;
cancelEditEmployeeClick: () => void;
}import React from 'react';
import Diagram, {
  CustomShape, ContextToolbox, PropertiesPanel, Group, Tab, Toolbox, Nodes, AutoLayout,
} from 'devextreme-react/diagram';
import { Popup } from 'devextreme-react/popup';
import TextBox from 'devextreme-react/text-box';
import Button from 'devextreme-react/button';
import ArrayStore from 'devextreme/data/array_store';
import CustomShapeTemplate from './CustomShapeTemplate.js';
import CustomShapeToolboxTemplate from './CustomShapeToolboxTemplate.js';
import service from './data.js';

const pageCommands = ['pageSize', 'pageOrientation', 'pageColor'];

const nameLabel = { 'aria-label': 'Name' };
const emailLabel = { 'aria-label': 'Email' };
const titleLabel = { 'aria-label': 'Title' };
const stateLabel = { 'aria-label': 'State' };
const cityLabel = { 'aria-label': 'City' };
const phoneLabel = { 'aria-label': 'Phone' };
const skypeLabel = { 'aria-label': 'Skype' };

class App extends React.Component {
  constructor(props) {
    super(props);

    const that = this;
    this.generatedID = 100;
    this.employees = service.getEmployees();
    this.diagramRef = React.createRef();
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: this.employees,
      onInserting(values: { ID: any; Full_Name: any; Title: any; }, key) {
        this.update(key, {
          ID: values.ID || (that.generatedID += 1),
          Full_Name: values.Full_Name || "Employee's Name",
          Title: values.Title || "Employee's Title",
        });
      },
    });

    this.state = {
      currentEmployee: {},
      popupVisible: false,
    };

    this.onRequestLayoutUpdate = this.onRequestLayoutUpdate.bind(this);
    this.customShapeTemplate = this.customShapeTemplate.bind(this);
    this.customShapeToolboxTemplate = this.customShapeToolboxTemplate.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.cancelEditEmployee = this.cancelEditEmployee.bind(this);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSkypeChange = this.handleSkypeChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  itemTypeExpr() {
    return 'employee';
  }

  itemCustomDataExpr(obj: { Full_Name: any; Prefix: any; Title: any; City: any; State: any; Email: any; Skype: any; Mobile_Phone: any; }, value: { Full_Name: any; Prefix: any; Title: any; City: any; State: any; Email: any; Skype: any; Mobile_Phone: any; }) {
    if (value === undefined) {
      return {
        Full_Name: obj.Full_Name,
        Prefix: obj.Prefix,
        Title: obj.Title,
        City: obj.City,
        State: obj.State,
        Email: obj.Email,
        Skype: obj.Skype,
        Mobile_Phone: obj.Mobile_Phone,
      };
    }
    obj.Full_Name = value.Full_Name;
    obj.Prefix = value.Prefix;
    obj.Title = value.Title;
    obj.City = value.City;
    obj.State = value.State;
    obj.Email = value.Email;
    obj.Skype = value.Skype;
    obj.Mobile_Phone = value.Mobile_Phone;
    return null;
  }

  onRequestLayoutUpdate(e: { changes: string | any[]; allowed: boolean; }) {
    for (let i = 0; i < e.changes.length; i += 1) {
      if (e.changes[i].type === 'remove') {
        e.allowed = true;
      } else if (e.changes[i].data.Head_ID !== undefined && e.changes[i].data.Head_ID !== null) {
        e.allowed = true;
      }
    }
  }

  customShapeTemplate(item: { dataItem: { Full_Name: any; Title: any; }; }) {
    return CustomShapeTemplate(item.dataItem,
      () => { this.editEmployee(item.dataItem); },
      () => { this.deleteEmployee(item.dataItem); });
  }

  customShapeToolboxTemplate() {
    return CustomShapeToolboxTemplate();
  }

  editEmployee(employee: { Full_Name: any; Title: any; }) {
    this.setState({
      currentEmployee: { ...employee },
      popupVisible: true,
    });
  }

  deleteEmployee(employee: { ID: any; }) {
    this.dataSource.push([{ type: 'remove', key: employee.ID }]);
  }

  updateEmployee() {
    this.dataSource.push([{
      type: 'update',
      key: this.state.currentEmployee.ID,
      data: {
        Full_Name: this.state.currentEmployee.Full_Name,
        Title: this.state.currentEmployee.Title,
        City: this.state.currentEmployee.City,
        State: this.state.currentEmployee.State,
        Email: this.state.currentEmployee.Email,
        Skype: this.state.currentEmployee.Skype,
        Mobile_Phone: this.state.currentEmployee.Mobile_Phone,
      },
    }]);
    this.setState({
      currentEmployee: {},
      popupVisible: false,
    });
  }

  cancelEditEmployee() {
    this.setState({
      currentEmployee: {},
      popupVisible: false,
    });
  }

  handleChange(field: string, value) {
    const currentEmployee = { ...this.state.currentEmployee };
    currentEmployee[field] = value;
    this.setState({
      currentEmployee,
    });
  }

  handleNameChange(e: { value: any; }) {
    this.handleChange('Full_Name', e.value);
  }

  handleTitleChange(e: { value: any; }) {
    this.handleChange('Title', e.value);
  }

  handleCityChange(e: { value: any; }) {
    this.handleChange('City', e.value);
  }

  handleStateChange(e: { value: any; }) {
    this.handleChange('State', e.value);
  }

  handleEmailChange(e: { value: any; }) {
    this.handleChange('Email', e.value);
  }

  handleSkypeChange(e: { value: any; }) {
    this.handleChange('Skype', e.value);
  }

  handlePhoneChange(e: { value: any; }) {
    this.handleChange('Mobile_Phone', e.value);
  }

  render() {
    const popupContentRender = () => (
      <PopupContentFunc
        currentEmployee={this.state.currentEmployee}
        handleNameChange={this.handleNameChange}
        handleTitleChange={this.handleTitleChange}
        handleCityChange={this.handleCityChange}
        handleStateChange={this.handleStateChange}
        handleEmailChange={this.handleEmailChange}
        handleSkypeChange={this.handleSkypeChange}
        handlePhoneChange={this.handlePhoneChange}
        updateEmployeeClick={this.updateEmployee}
        cancelEditEmployeeClick={this.cancelEditEmployee}
      />
    );
    return (
      <div id="container">
        <Diagram id="diagram" ref={this.diagramRef} customShapeRender={this.customShapeTemplate} customShapeToolboxRender={this.customShapeToolboxTemplate} onRequestLayoutUpdate={this.onRequestLayoutUpdate}>
          <CustomShape type="employee" baseType="rectangle" category="employee" title="New Employee"
            defaultWidth={1.5} defaultHeight={1} toolboxWidthToHeightRatio={2}
            minWidth={1.5} minHeight={1} maxWidth={3} maxHeight={2}
            allowEditText={false} />
          <Nodes dataSource={this.dataSource} keyExpr="ID" typeExpr={this.itemTypeExpr} customDataExpr={this.itemCustomDataExpr} parentKeyExpr="Head_ID">
            <AutoLayout type="tree" />
          </Nodes>
          <ContextToolbox shapeIconsPerRow={1} width={100} />
          <Toolbox showSearch={false} shapeIconsPerRow={1}>
            <Group category="employee" title="Employee" expanded={true} />
          </Toolbox>
          <PropertiesPanel>
            <Tab>
              <Group title="Page Properties" commands={pageCommands} />
            </Tab>
          </PropertiesPanel>
        </Diagram>
        <Popup
          visible={this.state.popupVisible}
          onHiding={this.cancelEditEmployee}
          dragEnabled={false}
          showTitle={true}
          title="Edit Employee"
          width={400}
          height={480}
          contentRender={popupContentRender}
        />
      </div>
    );
  }
}

function PopupContentFunc(props: PopupContentFuncProps) {
  return (
    <React.Fragment>
      <div className="dx-fieldset">
        <div className="dx-field">
          <div className="dx-field-label">Name</div>
          <div className="dx-field-value">
            <TextBox inputAttr={nameLabel} value={props.currentEmployee.Full_Name} onValueChanged={props.handleNameChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Title</div>
          <div className="dx-field-value">
            <TextBox inputAttr={titleLabel} value={props.currentEmployee.Title} onValueChanged={props.handleTitleChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">City</div>
          <div className="dx-field-value">
            <TextBox inputAttr={cityLabel} value={props.currentEmployee.City} onValueChanged={props.handleCityChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">State</div>
          <div className="dx-field-value">
            <TextBox inputAttr={stateLabel} value={props.currentEmployee.State} onValueChanged={props.handleStateChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Email</div>
          <div className="dx-field-value">
            <TextBox inputAttr={emailLabel} value={props.currentEmployee.Email} onValueChanged={props.handleEmailChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Skype</div>
          <div className="dx-field-value">
            <TextBox inputAttr={skypeLabel} value={props.currentEmployee.Skype} onValueChanged={props.handleSkypeChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
        <div className="dx-field">
          <div className="dx-field-label">Phone</div>
          <div className="dx-field-value">
            <TextBox inputAttr={phoneLabel} value={props.currentEmployee.Mobile_Phone} onValueChanged={props.handlePhoneChange} valueChangeEvent="input"></TextBox>
          </div>
        </div>
      </div>
      <div className="dx-fieldset buttons">
        <Button text="Update" type="default" onClick={props.updateEmployeeClick}></Button>
        <Button text="Cancel" onClick={props.cancelEditEmployeeClick}></Button>
      </div>
    </React.Fragment>
  );
}
export default App;
