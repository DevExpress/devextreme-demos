import React from 'react';
import {
  TreeList, Scrolling, Paging, Pager, Column, Lookup,
} from 'devextreme-react/tree-list';
import { tasks, employees } from './data.js';

const allowedPageSizes = [5, 10, 20];

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
        autoExpandAll={true}
        columnAutoWidth={true}
        showBorders={true}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
      >
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling
          // @ts-expect-error TS(2322): Type '{ mode: string; }' is not assignable to type... Remove this comment to see the full error message
          mode="standard" />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; defaultPageSize: number;... Remove this comment to see the full error message
          enabled={true}
          defaultPageSize={10} />
        // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
        <Pager
          // @ts-expect-error TS(2322): Type '{ showPageSizeSelector: boolean; allowedPage... Remove this comment to see the full error message
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
          showInfo={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ width: number; dataField: string; }' is no... Remove this comment to see the full error message
          width={390}
          dataField="Task_Subject" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Task_Assigned_Employee_ID"
          caption="Assigned">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; Name: string; }[... Remove this comment to see the full error message
            dataSource={employees}
            valueExpr="ID"
            displayExpr="Name" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Task_Status"
          caption="Status">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: string[]; }' is not assignable... Remove this comment to see the full error message
            dataSource={statuses} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ width: number; dataField: string; caption:... Remove this comment to see the full error message
          width={100}
          dataField="Task_Start_Date"
          caption="Start Date"
          dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ width: number; dataField: string; caption:... Remove this comment to see the full error message
          width={100}
          dataField="Task_Due_Date"
          caption="Due Date"
          dataType="date" />
      </TreeList>
    );
  }
}

export default App;
