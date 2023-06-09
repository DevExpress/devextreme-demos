import React from 'react';

import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';
import notify from 'devextreme/ui/notify';
import { EmployeeItem } from './EmployeeItem.js';
import { employees } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  moreInfoButtonOptions = null;

  emailButtonOptions = null;

  closeButtonOptions = null;

  constructor(props) {
    super(props);
    this.state = {
      currentEmployee: {},
      popupVisible: false,
      positionOf: '',
    };
    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
    this.moreInfoButtonOptions = {
      text: 'More info',
      onClick: this.showMoreInfo.bind(this),
    };
    this.emailButtonOptions = {
      icon: 'email',
      text: 'Send',
      onClick: this.sendEmail.bind(this),
    };
    this.closeButtonOptions = {
      text: 'Close',
      onClick: this.hideInfo,
    };
  }

  render() {
    const items = employees.map((employee) => <li key={employee.ID}>
      // @ts-expect-error TS(2786): 'EmployeeItem' cannot be used as a JSX component.
      <EmployeeItem
        employee={employee}
        showInfo={this.showInfo}
      />
    </li>);

    return (
      <div id="container">

        <h1>Employees</h1>

        <ul>{items}</ul>

        // @ts-expect-error TS(2786): 'Popup' cannot be used as a JSX component.
        <Popup
          visible={this.state.popupVisible}
          onHiding={this.hideInfo}
          dragEnabled={false}
          hideOnOutsideClick={true}
          showCloseButton={false}
          showTitle={true}
          title="Information"
          container=".dx-viewport"
          width={300}
          height={280}
        >
          // @ts-expect-error TS(2786): 'Position' cannot be used as a JSX component.
          <Position
            // @ts-expect-error TS(2322): Type '{ at: string; my: string; of: any; collision... Remove this comment to see the full error message
            at="bottom"
            my="center"
            of={this.state.positionOf}
            collision="fit"
          />
          // @ts-expect-error TS(2786): 'ToolbarItem' cannot be used as a JSX component.
          <ToolbarItem
            // @ts-expect-error TS(2322): Type '{ widget: string; toolbar: string; locateInM... Remove this comment to see the full error message
            widget="dxButton"
            toolbar="top"
            locateInMenu="always"
            options={this.moreInfoButtonOptions}
          />
          // @ts-expect-error TS(2786): 'ToolbarItem' cannot be used as a JSX component.
          <ToolbarItem
            // @ts-expect-error TS(2322): Type '{ widget: string; toolbar: string; location:... Remove this comment to see the full error message
            widget="dxButton"
            toolbar="bottom"
            location="before"
            options={this.emailButtonOptions}
          />
          // @ts-expect-error TS(2786): 'ToolbarItem' cannot be used as a JSX component.
          <ToolbarItem
            // @ts-expect-error TS(2322): Type '{ widget: string; toolbar: string; location:... Remove this comment to see the full error message
            widget="dxButton"
            toolbar="bottom"
            location="after"
            options={this.closeButtonOptions}
          />
          <p>
            Full Name:&nbsp;
            <span>{this.state.currentEmployee.FirstName}</span>&nbsp;
            <span>{this.state.currentEmployee.LastName}</span>
          </p>
          <p>
            Birth Date: <span>{this.state.currentEmployee.BirthDate}</span>
          </p>
          <p>
            Address: <span>{this.state.currentEmployee.Address}</span>
          </p>
          <p>
            Hire Date: <span>{this.state.currentEmployee.HireDate}</span>
          </p>
          <p>
            Position: <span>{this.state.currentEmployee.Position}</span>
          </p>
        </Popup>
      </div>
    );
  }

  showInfo(employee) {
    this.setState({
      currentEmployee: employee,
      positionOf: `#image${employee.ID}`,
      popupVisible: true,
    });
  }

  hideInfo() {
    this.setState({
      currentEmployee: {},
      popupVisible: false,
    });
  }

  sendEmail() {
    const message = `Email is sent to ${this.state.currentEmployee.FirstName} ${this.state.currentEmployee.LastName}`;
    notify({
      message,
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
  }

  showMoreInfo() {
    const message = `More info about ${this.state.currentEmployee.FirstName} ${this.state.currentEmployee.LastName}`;
    notify({
      message,
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
  }
}

export default App;
