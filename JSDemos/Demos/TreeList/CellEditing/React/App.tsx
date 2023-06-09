import React from 'react';
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

class App extends React.Component {
  render() {
    return (
      <div id="tree-list-demo">
        // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
        <TreeList
          id="tasks"
          dataSource={tasks}
          columnAutoWidth={true}
          wordWrapEnabled={true}
          showBorders={true}
          keyExpr="Task_ID"
          parentIdExpr="Task_Parent_ID"
          onInitNewRow={this.onInitNewRow}
        >
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ allowAdding: boolean; allowUpdating: boole... Remove this comment to see the full error message
            allowAdding={true}
            allowUpdating={true}
            allowDeleting={true}
            mode="cell" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; minWidth: number; dataF... Remove this comment to see the full error message
            minWidth={250}
            dataField="Task_Subject">
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element[]; minWidth: number; dat... Remove this comment to see the full error message
            minWidth={120}
            dataField="Task_Assigned_Employee_ID"
            caption="Assigned">
            // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
            <Lookup
              // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; Name: string; }[... Remove this comment to see the full error message
              dataSource={employees}
              valueExpr="ID"
              displayExpr="Name" />
            // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
            <RequiredRule />
          </Column>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ children: Element; minWidth: number; dataF... Remove this comment to see the full error message
            minWidth={120}
            dataField="Task_Status"
            caption="Status">
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
      </div>
    );
  }

  onInitNewRow(e) {
    e.data.Task_Status = 'Not Started';
    e.data.Task_Start_Date = new Date();
    e.data.Task_Due_Date = new Date();
  }
}

export default App;
