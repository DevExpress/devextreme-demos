import React, { useState } from 'react';
import {
  TreeList, Editing, Column, RequiredRule, Lookup,
} from 'devextreme-react/tree-list';
import { tasks, employees } from './data.js';

const statuses = [
  'Not Started',
  'Need Assistance',
  'In Progress',
  'Deferred',
  'Completed',
];

const App = () => {
  const [newRowData, setNewRowData] = useState({ Task_Status: 'Not Started', Task_Start_Date: new Date(), Task_Due_Date: new Date() });

  const onInitNewRow = (e) => {
    e.data = newRowData;
  };

  return (
    <div id="tree-list-demo">
      <TreeList
        id="tasks"
        dataSource={tasks}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showBorders={true}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
        onInitNewRow={onInitNewRow}
      >
        <Editing
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true}
          mode="batch" />
        <Column
          minWidth={250}
          dataField="Task_Subject">
          <RequiredRule />
        </Column>
        <Column
          minWidth={120}
          dataField="Task_Assigned_Employee_ID"
          caption="Assigned">
          <Lookup
            dataSource={employees}
            valueExpr="ID"
            displayExpr="Name" />
          <RequiredRule />
        </Column>
        <Column
          minWidth={120}
          dataField="Task_Status"
          caption="Status">
          <Lookup
            dataSource={statuses} />
        </Column>
        <Column
          dataField="Task_Start_Date"
          caption="Start Date"
          dataType="date" />
        <Column
          dataField="Task_Due_Date"
          caption="Due Date"
          dataType="date" />
      </TreeList>
    </div>
  );
};

export default App;