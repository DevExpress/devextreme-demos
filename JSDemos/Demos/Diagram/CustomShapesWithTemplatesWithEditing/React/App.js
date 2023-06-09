import React, { useState, useRef } from 'react';
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

function App() {
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const generatedID = useRef(100);
  const employees = service.getEmployees();
  const diagramRef = useRef(null);
  const dataSource = new ArrayStore({
    key: 'ID',
    data: employees,
    onInserting(values, key) {
      dataSource.update(key, {
        ID: values.ID || (generatedID.current += 1),
        Full_Name: values.Full_Name || "Employee's Name",
        Title: values.Title || "Employee's Title",
      });
    },
  });

  function itemTypeExpr() {
    return 'employee';
  }

  function itemCustomDataExpr(obj, value) {
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

  function onRequestLayoutUpdate(e) {
    for (let i = 0; i < e.changes.length; i += 1) {
      if (e.changes[i].type === 'remove') {
        e.allowed = true;
      } else if (e.changes[i].data.Head_ID !== undefined && e.changes[i].data.Head_ID !== null) {
        e.allowed = true;
      }
    }
  }

  function customShapeTemplate(item) {
    return CustomShapeTemplate(item.dataItem,
      () => { editEmployee(item.dataItem); },
      () => { deleteEmployee(item.dataItem); });
  }

  function customShapeToolboxTemplate() {
    return CustomShapeToolboxTemplate();
  }

  function editEmployee(employee) {
    setCurrentEmployee({ ...employee });
    setPopupVisible(true);
  }

  function deleteEmployee(employee) {
    dataSource.remove(employee.ID);
  }

  function updateEmployee() {
    dataSource.update(currentEmployee.ID, {
      Full_Name: currentEmployee.Full_Name,
      Title: currentEmployee.Title,
      City: currentEmployee.City,
      State: currentEmployee.State,
      Email: currentEmployee.Email,
      Skype: currentEmployee.Skype,
      Mobile_Phone: currentEmployee.Mobile_Phone,
    });
    setCurrentEmployee({});
    setPopupVisible(false);
  }

  function cancelEditEmployee() {
    setCurrentEmployee({});
    setPopupVisible(false);
  }

  function handleChange(field, value) {
    const newEmployee = { ...currentEmployee };
    newEmployee[field] = value;
    setCurrentEmployee(newEmployee);
  }

  function handleNameChange(e) {
    handleChange('Full_Name', e.value);
  }

  function handleTitleChange(e) {
    handleChange('Title', e.value);
  }

  function handleCityChange(e) {
    handleChange('City', e.value);
  }

  function handleStateChange(e) {
    handleChange('State', e.value);
  }

  function handleEmailChange(e) {
    handleChange('Email', e.value);
  }

  function handleSkypeChange(e) {
    handleChange('Skype', e.value);
  }

  function handlePhoneChange(e) {
    handleChange('Mobile_Phone', e.value);
  }

  const popupContentRender = () => (
    <PopupContentFunc
      currentEmployee={currentEmployee}
      handleNameChange={handleNameChange}
      handleTitleChange={handleTitleChange}
      handleCityChange={handleCityChange}
      handleStateChange={handleStateChange}
      handleEmailChange={handleEmailChange}
      handleSkypeChange={handleSkypeChange}
      handlePhoneChange={handlePhoneChange}
      updateEmployeeClick={updateEmployee}
      cancelEditEmployeeClick={cancelEditEmployee}
    />
  );

  return (
    <div id="container">
      <Diagram id="diagram" ref={diagramRef} customShapeRender={customShapeTemplate} customShapeToolboxRender={customShapeToolboxTemplate} onRequestLayoutUpdate={onRequestLayoutUpdate}>
        <CustomShape type="employee" baseType="rectangle" category="employee" title="New Employee"
          defaultWidth={1.5} defaultHeight={1} toolboxWidthToHeightRatio={2}
          minWidth={1.5} minHeight={1} maxWidth={3} maxHeight={2}
          allowEditText={false} />
        <Nodes dataSource={dataSource} keyExpr="ID" typeExpr={itemTypeExpr} customDataExpr={itemCustomDataExpr} parentKeyExpr="Head_ID">
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
        visible={popupVisible}
        onHiding={cancelEditEmployee}
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

function PopupContentFunc(props) {
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
        </