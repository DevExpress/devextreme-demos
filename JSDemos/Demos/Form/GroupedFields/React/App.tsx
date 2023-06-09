import React from 'react';
import 'devextreme-react/text-area';

import Form, {
  SimpleItem, GroupItem, TabbedItem, TabPanelOptions, Tab,
} from 'devextreme-react/form';
import service from './data.js';

class App extends React.Component {
  employee: any;

  constructor(props) {
    super(props);
    this.employee = service.getEmployee();
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
            <GroupItem caption="System Information">
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="ID" />
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="FirstName" />
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="LastName" />
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="HireDate" />
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="Position" />
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="OfficeNo" />
            </GroupItem>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Personal Data">
              // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
              <SimpleItem dataField="BirthDate" />
              // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
              <GroupItem caption='Home Address'>
                // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                <SimpleItem dataField="Address" />
                // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                <SimpleItem dataField="City" />
                // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                <SimpleItem dataField="State" />
                // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                <SimpleItem dataField="Zipcode" />
              </GroupItem>
            </GroupItem>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem caption="Contact Information">
              // @ts-expect-error TS(2786): 'TabbedItem' cannot be used as a JSX component.
              <TabbedItem>
                // @ts-expect-error TS(2786): 'TabPanelOptions' cannot be used as a JSX componen... Remove this comment to see the full error message
                <TabPanelOptions deferRendering={false} />
                // @ts-expect-error TS(2786): 'Tab' cannot be used as a JSX component.
                <Tab title="Phone">
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="Phone" />
                </Tab>
                // @ts-expect-error TS(2786): 'Tab' cannot be used as a JSX component.
                <Tab title="Skype">
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="Skype" />
                </Tab>
                // @ts-expect-error TS(2786): 'Tab' cannot be used as a JSX component.
                <Tab title="Email">
                  // @ts-expect-error TS(2786): 'SimpleItem' cannot be used as a JSX component.
                  <SimpleItem dataField="Email" />
                </Tab>
              </TabbedItem>
            </GroupItem>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
