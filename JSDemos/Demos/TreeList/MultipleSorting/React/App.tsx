import React from 'react';
import {
  TreeList, Sorting, Column, Lookup,
} from 'devextreme-react/tree-list';
import { tasks, employees } from './data.js';

const statuses = [
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
        // @ts-expect-error TS(2786): 'Sorting' cannot be used as a JSX component.
        <Sorting
          // @ts-expect-error TS(2322): Type '{ mode: string; }' is not assignable to type... Remove this comment to see the full error message
          mode="multiple" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ minWidth: number; dataField: string; }' is... Remove this comment to see the full error message
          minWidth={300}
          dataField="Task_Subject" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; minWidth: number; dataF... Remove this comment to see the full error message
          minWidth={120}
          dataField="Task_Assigned_Employee_ID"
          caption="Assigned"
          defaultSortOrder="asc">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; Name: string; }[... Remove this comment to see the full error message
            dataSource={employees}
            valueExpr="ID"
            displayExpr="Name" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; minWidth: number; dataF... Remove this comment to see the full error message
          minWidth={120}
          dataField="Task_Status"
          caption="Status"
          defaultSortOrder="asc">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: string[]; }' is not assignable... Remove this comment to see the full error message
            dataSource={statuses} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Task_Start_Date"
          caption="Start Date"
          dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Task_Due_Date"
          caption="Due Date"
          dataType="date" />
      </TreeList>
    );
  }
}

export default App;
