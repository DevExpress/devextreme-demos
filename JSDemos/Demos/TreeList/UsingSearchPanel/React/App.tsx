import React from 'react';
import {
  TreeList, SearchPanel, Column, Lookup,
} from 'devextreme-react/tree-list';
import { tasks, employees } from './data.js';

const dataSource = [
  'Not Started',
  'Need Assistance',
  'In Progress',
  'Deferred',
  'Completed',
];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="tasks"
        dataSource={tasks}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        showBorders={true}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
      >
        // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
        <SearchPanel visible={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column minWidth={300} dataField="Task_Subject" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column minWidth={120} dataField="Task_Assigned_Employee_ID" caption="Assigned">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={employees} valueExpr="ID" displayExpr="Name" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column minWidth={120} dataField="Task_Status" caption="Status">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={dataSource} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Start_Date" caption="Start Date" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
      </TreeList>
    );
  }
}

export default App;
