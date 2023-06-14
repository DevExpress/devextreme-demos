import React, { useState } from 'react';
import 'devextreme-react/text-area';
import Form, { GroupItem, SimpleItem, Label } from 'devextreme-react/form';
import service from './data.js';

const App = () => {
  const [employee, setEmployee] = useState(service.getEmployee());
  const [isHomeAddressVisible, setIsHomeAddressVisible] = useState(true);
  const [phoneOptions, setPhoneOptions] = useState(getPhonesOptions());

  const checkBoxOptions = {
    text: 'Show Address',
    value: true,
    onValueChanged: (e) => {
      setIsHomeAddressVisible(e.component.option('value'));
    },
  };

  const addPhoneButtonOptions = {
    icon: 'add',
    text: 'Add phone',
    onClick: () => {
      employee.Phones.push('');
      updatePhones();
    },
  };

  function getPhonesOptions() {
    const options = [];
    for (let i = 0; i < employee.Phones.length; i += 1) {
      options.push(generateNewPhoneOptions(i));
    }
    return options;
  }

  function generateNewPhoneOptions(index) {
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
            employee.Phones.splice(index, 1);
            updatePhones();
          },
        },
      }],
    };
  }

  function updatePhones() {
    setPhoneOptions(getPhonesOptions());
  }

  return (
    <React.Fragment>
      <div className="long-title"><h3>Personal details</h3></div>
      <div className="form-container">
        <Form
          colCount={2}
          id="form"
          formData={employee}
        >
          <GroupItem>
            <GroupItem>
              <GroupItem caption="Personal Data">
                <SimpleItem dataField="FirstName" />
                <SimpleItem dataField="LastName" />
                <SimpleItem editorType="dxCheckBox" editorOptions={checkBoxOptions} />
              </GroupItem>
            </GroupItem>
            <GroupItem>
              <GroupItem caption="Home Address" name="HomeAddress" visible={isHomeAddressVisible}>
                <SimpleItem dataField="Address" />
                <SimpleItem dataField="City" />
              </GroupItem>
            </GroupItem>
          </GroupItem>
          <GroupItem caption="Phones" name="phones-container">
            <GroupItem name="phones">
              {phoneOptions.map((phone, index) => (
                <SimpleItem
                  key={`Phones${index}`}
                  dataField={`Phones[${index}]`}
                  editorOptions={phone}
                >
                  <Label text={`Phone ${index + 1}`} />
                </SimpleItem>
              ))}
            </GroupItem>
            <SimpleItem
              itemType="button"
              horizontalAlignment="left"
              cssClass="add-phone-button"
              buttonOptions={addPhoneButtonOptions}
            />
          </GroupItem>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default App;
