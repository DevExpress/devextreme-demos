import React, { useState } from 'react';
import { Popup, Position, ToolbarItem } from 'devextreme-react/popup';
import notify from 'devextreme/ui/notify';
import { EmployeeItem } from './EmployeeItem.js';
import { employees } from './data.js';

const App = () => {
  const [currentEmployee, setCurrentEmployee] = useState({});
  const [popupVisible, setPopupVisible] = useState(false);
  const [positionOf, setPositionOf] = useState('');

  const moreInfoButtonOptions = {
    text: 'More info',
    onClick: showMoreInfo,
  };

  const emailButtonOptions = {
    icon: 'email',
    text: 'Send',
    onClick: sendEmail,
  };

  const closeButtonOptions = {
    text: 'Close',
    onClick: hideInfo,
  };

  const showInfo = (employee) => {
    setCurrentEmployee(employee);
    setPositionOf(`#image${employee.ID}`);
    setPopupVisible(true);
  };

  const hideInfo = () => {
    setCurrentEmployee({});
    setPopupVisible(false);
  };

  const sendEmail = () => {
    const message = `Email is sent to ${currentEmployee.FirstName} ${currentEmployee.LastName}`;
    notify({
      message,
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
  };

  const showMoreInfo = () => {
    const message = `More info about ${currentEmployee.FirstName} ${currentEmployee.LastName}`;
    notify({
      message,
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);
  };

  const items = employees.map((employee) => (
    <li key={employee.ID}>
      <EmployeeItem employee={employee} showInfo={showInfo} />
    </li>
  ));

  return (
    <div id="container">
      <h1>Employees</h1>
      <ul>{items}</ul>
      <Popup
        visible={popupVisible}
        onHiding={hideInfo}
        dragEnabled={false}
        hideOnOutsideClick={true}
        showCloseButton={false}
        showTitle={true}
        title="Information"
        container=".dx-viewport"
        width={300}
        height={280}
      >
        <Position
          at="bottom"
          my="center"
          of={positionOf}
          collision="fit"
        />
        <ToolbarItem
          widget="dxButton"
          toolbar="top"
          locateInMenu="always"
          options={moreInfoButtonOptions}
        />
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="before"
          options={emailButtonOptions}
        />
        <ToolbarItem
          widget="dxButton"
          toolbar="bottom"
          location="after"
          options={closeButtonOptions}
        />
        <p>
          Full Name:&nbsp;
          <span>{currentEmployee.FirstName}</span>&nbsp;
          <span>{currentEmployee.LastName}</span>
        </p>
        <p>
          Birth Date: <span>{currentEmployee.BirthDate}</span>
        </p>
        <p>
          Address: <span>{currentEmployee.Address}</span>
        </p>
        <p>
          Hire Date: <span>{currentEmployee.HireDate}</span>
        </p>
        <p>
          Position: <span>{currentEmployee.Position}</span>
        </p>
      </Popup>
    </div>
  );
};

export default App;
