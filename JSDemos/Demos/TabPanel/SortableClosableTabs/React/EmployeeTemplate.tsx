import React from 'react';
import { List } from 'devextreme-react/list';
import service from './data.js';

function itemRender(data: { Subject: any; }) {
  return <div>{data.Subject}</div>;
}

function EmployeeTemplate(props: { data: { ID?: any; FirstName?: any; LastName?: any; Picture?: any; Position?: any; Notes?: any; }; }) {
  const tasks = service
    .getTasks()
    .filter((task) => task.EmployeeID === props.data.ID);
  const {
    FirstName, LastName, Picture, Position, Notes,
  } = props.data;
  const completedTasks = tasks.filter((task) => task.Status === 'Completed');

  return (
    <React.Fragment>
      <div className="employeeInfo">
        <img className="employeePhoto" src={Picture} />
        <p className="employeeNotes">
          <b>{`Position: ${Position}`}</b>
          <br />
          {Notes}
        </p>
      </div>
      <div className="caption">{`${FirstName} ${LastName}'s Tasks:`}</div>
      <div className="task-list">
        <List
          dataSource={tasks}
          showSelectionControls={true}
          selectedItems={completedTasks}
          disabled={true}
          selectionMode="multiple"
          itemRender={itemRender}
        ></List>
      </div>
    </React.Fragment>
  );
}

export default EmployeeTemplate;
