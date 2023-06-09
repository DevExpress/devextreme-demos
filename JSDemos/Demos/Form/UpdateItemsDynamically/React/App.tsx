import React from 'react';
import 'devextreme-react/text-area';

import Form, { GroupItem, SimpleItem, Label } from 'devextreme-react/form';
import service from './data.js';

class App extends React.Component {
  addPhoneButtonOptions: any;

  checkBoxOptions: any;

  employee: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.employee = service.getEmployee();

    this.checkBoxOptions = {
      text: 'Show Address',
      value: true,
      onValueChanged: (e) => {
        this.setState({
          isHomeAddressVisible: e.component.option('value'),
        });
      },
    };

    this.addPhoneButtonOptions = {
      icon: 'add',
      text: 'Add phone',
      onClick: () => {
        this.employee.Phones.push('');
        this.updatePhones();
      },
    };

    this.state = {
      phoneOptions: this.getPhonesOptions(),
      isHomeAddressVisible: true,
    };

    this.generateNewPhoneOptions = this.generateNewPhoneOptions.bind(this);
    this.getPhonesOptions = this.getPhonesOptions.bind(this);
    this.updatePhones = this.updatePhones.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="long-title"><h3>Personal details</h3></div>
        <div className="form-container">
          // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
          <Form
            colCount={2}
            id="form"
            formData={this.employee}>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem>
              // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
              <GroupItem>
                // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
                <GroupItem caption="Personal Data">
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="FirstName" />
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="LastName" />
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem editorType="dxCheckBox" editorOptions={this.checkBoxOptions} />
                </GroupItem>
              </GroupItem>
              // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
              <GroupItem>
                // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
                <GroupItem caption="Home Address"
                  name="HomeAddress"
                  visible={this.state.isHomeAddressVisible}>
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="Address" />
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="City" />
                </GroupItem>
              </GroupItem>
            </GroupItem>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Phones"
              name="phones-container">
              // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
              <GroupItem
                // @ts-expect-error TS(2322): Type '{ children: any; name: string; }' is not ass... Remove this comment to see the full error message
                name="phones">
                // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                { this.state.phoneOptions.map((phone, index) => <SimpleItem
                  key = {`Phones${index}`}
                  // @ts-expect-error TS(2322): Type '{ children: Element; key: string; dataField:... Remove this comment to see the full error message
                  dataField={`Phones[${index}]`}
                  editorOptions={phone}>
                  // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                  <Label text={`Phone ${index + 1}`} />
                </SimpleItem>)}
              </GroupItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem itemType="button"
                horizontalAlignment="left"
                cssClass="add-phone-button"
                buttonOptions={this.addPhoneButtonOptions}>
              </SimpleItem>
            </GroupItem>
          </Form>
        </div>
      </React.Fragment>
    );
  }

  getPhonesOptions() {
    const options = [];
    for (let i = 0; i < this.employee.Phones.length; i += 1) {
      options.push(this.generateNewPhoneOptions(i));
    }
    return options;
  }

  generateNewPhoneOptions(index) {
    return {
      mask: '+1 (X00) 000-0000',
      maskRules: { X: /[01-9]/ },
      buttons: [{
        name: 'trash',
        location: 'after',
        options: {
          stylingMode: 'text',
          icon: 'trash',
          onClick: () => {
            this.employee.Phones.splice(index, 1);
            this.updatePhones();
          },
        },
      }],
    };
  }

  updatePhones() {
    this.setState({
      phoneOptions: this.getPhonesOptions(),
    });
  }
}

export default App;
