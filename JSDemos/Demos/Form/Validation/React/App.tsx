import React from 'react';
import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  Label,
  CompareRule,
  EmailRule,
  PatternRule,
  RangeRule,
  RequiredRule,
  StringLengthRule,
  AsyncRule,
} from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';
import Validator from 'devextreme/ui/validator';
import 'devextreme-react/autocomplete';
import service from './data.js';

class App extends React.Component {
  buttonOptions: any;

  checkBoxOptions: any;

  cityEditorOptions: any;

  confirmOptions: any;

  countryEditorOptions: any;

  dateBoxOptions: any;

  formInstance: any;

  maxDate: any;

  passwordOptions: any;

  phoneEditorOptions: any;

  state: any;

  constructor() {
    super();
    this.formInstance = null;
    this.buttonOptions = {
      text: 'Register',
      type: 'success',
      useSubmitBehavior: true,
    };
    this.checkBoxOptions = {
      text: 'I agree to the Terms and Conditions',
      value: false,
    };
    this.cityEditorOptions = {
      dataSource: service.getCities(),
      minSearchLength: 2,
    };
    this.countryEditorOptions = {
      dataSource: service.getCountries(),
    };
    this.passwordOptions = {
      mode: 'password',
      onValueChanged: () => {
        const editor = this.formInstance.getEditor('ConfirmPassword');
        if (editor.option('value')) {
          const instance = Validator.getInstance(editor.element());
          // @ts-expect-error TS(2339): Property 'validate' does not exist on type 'DOMCom... Remove this comment to see the full error message
          instance.validate();
        }
      },
      buttons: [
        {
          name: 'password',
          location: 'after',
          options: {
            icon: '../../../../images/icons/eye.png',
            type: 'default',
            onClick: () => this.changePasswordMode('Password'),
          },
        },
      ],
    };
    this.confirmOptions = {
      mode: 'password',
      buttons: [
        {
          name: 'password',
          location: 'after',
          options: {
            icon: '../../../../images/icons/eye.png',
            type: 'default',
            onClick: () => this.changePasswordMode('ConfirmPassword'),
          },
        },
      ],
    };
    this.phoneEditorOptions = {
      mask: '+1 (X00) 000-0000',
      maskRules: {
        X: /[02-9]/,
      },
      maskInvalidMessage: 'The phone must have a correct USA phone format',
    };
    this.maxDate = new Date().setFullYear(new Date().getFullYear() - 21);
    this.dateBoxOptions = {
      invalidDateMessage:
        'The date must have the following format: MM/dd/yyyy',
    };
    this.state = {
      customer: service.getCustomer(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordComparison = this.passwordComparison.bind(this);
    this.onInitialized = this.onInitialized.bind(this);
    this.changePasswordMode = this.changePasswordMode.bind(this);
  }

  changePasswordMode(name) {
    const editor = this.formInstance.getEditor(name);
    editor.option('mode', editor.option('mode') === 'text' ? 'password' : 'text');
  }

  onInitialized(e) {
    this.formInstance = e.component;
  }

  render() {
    const {
      customer,
    } = this.state;
    return (
      <React.Fragment>
        <form action="your-action" onSubmit={this.handleSubmit}>
          // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
          <Form
            formData={customer}
            readOnly={false}
            onInitialized={this.onInitialized}
            showColonAfterLabel={true}
            showValidationSummary={true}
            validationGroup="customerData"
          >
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Credentials">
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Email" editorType="dxTextBox">
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Email is required" />
                // @ts-expect-error TS(2786): 'EmailRule' cannot be used as a JSX component.
                <EmailRule message="Email is invalid" />
                // @ts-expect-error TS(2786): 'AsyncRule' cannot be used as a JSX component.
                <AsyncRule
                  // @ts-expect-error TS(2322): Type '{ message: string; validationCallback: (para... Remove this comment to see the full error message
                  message="Email is already registered"
                  validationCallback={asyncValidation} />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Password" editorType="dxTextBox" editorOptions={this.passwordOptions}>
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Password is required" />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem name="ConfirmPassword" editorType="dxTextBox" editorOptions={this.confirmOptions}>
                // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                <Label text="Confirm Password" />
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Confirm Password is required" />
                // @ts-expect-error TS(2786): 'CompareRule' cannot be used as a JSX component.
                <CompareRule
                  // @ts-expect-error TS(2322): Type '{ message: string; comparisonTarget: () => a... Remove this comment to see the full error message
                  message="Password and Confirm Password do not match"
                  comparisonTarget={this.passwordComparison}
                />
              </SimpleItem>
            </GroupItem>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Personal Data">
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Name">
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Name is required" />
                // @ts-expect-error TS(2786): 'PatternRule' cannot be used as a JSX component.
                <PatternRule message="Do not use digits in the Name"
                  pattern={/^[^0-9]+$/} />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Date"
                editorType="dxDateBox"
                editorOptions={this.dateBoxOptions}>
                // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                <Label text="Date of birth" />
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Date of birth is required" />
                // @ts-expect-error TS(2786): 'RangeRule' cannot be used as a JSX component.
                <RangeRule max={this.maxDate} message="You must be at least 21 years old" />
              </SimpleItem>
            </GroupItem>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Billing address">
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Country" editorType="dxSelectBox" editorOptions={this.countryEditorOptions}>
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Country is required" />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="City" editorType="dxAutocomplete" editorOptions={this.cityEditorOptions}>
                // @ts-expect-error TS(2786): 'PatternRule' cannot be used as a JSX component.
                <PatternRule pattern={/^[^0-9]+$/} message="Do not use digits in the City name" />
                // @ts-expect-error TS(2786): 'StringLengthRule' cannot be used as a JSX compone... Remove this comment to see the full error message
                <StringLengthRule min={2} message="City must have at least 2 symbols" />
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="City is required" />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Address">
                // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
                <RequiredRule message="Address is required" />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Phone"
                helpText="Enter the phone number in USA phone format"
                editorOptions={this.phoneEditorOptions}
              >
                // @ts-expect-error TS(2786): 'PatternRule' cannot be used as a JSX component.
                <PatternRule
                  // @ts-expect-error TS(2322): Type '{ message: string; pattern: RegExp; }' is no... Remove this comment to see the full error message
                  message="The phone must have a correct USA phone format"
                  pattern={/^[02-9]\d{9}$/}
                />
              </SimpleItem>
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Accepted"
                editorType="dxCheckBox"
                editorOptions={this.checkBoxOptions}>
                // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
                <Label visible={false} />
                // @ts-expect-error TS(2786): 'CompareRule' cannot be used as a JSX component.
                <CompareRule message="You must agree to the Terms and Conditions"
                  comparisonTarget={this.checkComparison}
                />
              </SimpleItem>
            </GroupItem>
            // @ts-expect-error TS(2786): 'ButtonItem' cannot be used as a JSX component.
            <ButtonItem horizontalAlignment="left"
              buttonOptions={this.buttonOptions}
            />
          </Form>
        </form>
      </React.Fragment>
    );
  }

  checkComparison() {
    return true;
  }

  handleSubmit(e) {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
    e.preventDefault();
  }

  passwordComparison() {
    return this.state.customer.Password;
  }
}

function sendRequest(value) {
  const invalidEmail = 'test@dx-email.com';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value !== invalidEmail);
    }, 1000);
  });
}

function asyncValidation(params) {
  return sendRequest(params.value);
}

export default App;
