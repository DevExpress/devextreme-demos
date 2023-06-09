import React from 'react';

import { Template } from 'devextreme-react/core/template';
import TreeList, {
  Column, ColumnChooser, HeaderFilter, SearchPanel, Selection, Lookup,
} from 'devextreme-react/tree-list';

import { employees, priorities, tasks } from './data.js';
import EmployeeCell from './EmployeeCell.js';

const expandedKeys = [1, 2];
const selectedKeys = [1, 29, 42];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        dataSource={dataSourceOptions}
        showBorders={true}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        defaultExpandedRowKeys={expandedKeys}
        defaultSelectedRowKeys={selectedKeys}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
        id="tasks"
      >
        // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
        <SearchPanel visible={true} width={250} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
        <Selection mode="multiple" />
        // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
        <ColumnChooser enabled={true} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Subject" width={300} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Task_Assigned_Employee_ID"
          caption="Assigned"
          allowSorting={true}
          minWidth={200}
          cellTemplate="employeeTemplate"
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={employees} displayExpr="Name" valueExpr="ID" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Task_Status"
          caption="Status"
          minWidth={100}
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={statuses} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="Task_Priority"
          caption="Priority"
          visible={false}
        >
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={priorities} valueExpr="id" displayExpr="value" />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; minWid... Remove this comment to see the full error message
          dataField="Task_Completion"
          caption="% Completed"
          minWidth={100}
          customizeText={customizeTaskCompletionText}
          visible={false}
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Task_Start_Date"
          caption="Start Date"
          dataType="date"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Task_Due_Date"
          caption="Due Date"
          dataType="date"
        />

        // @ts-expect-error TS(2786): 'Template' cannot be used as a JSX component.
        <Template name="employeeTemplate" render={EmployeeCell} />
      </TreeList>
    );
  }
}

const dataSourceOptions = {
  store: tasks.map((task) => {
    employees.forEach((employee) => {
      if (task.Task_Assigned_Employee_ID === employee.ID) {
        // @ts-expect-error TS(2339): Property 'Task_Assigned_Employee' does not exist o... Remove this comment to see the full error message
        task.Task_Assigned_Employee = employee;
      }
    });
    return task;
  }),
};

function customizeTaskCompletionText(cellInfo) {
  return `${cellInfo.valueText}%`;
}

const statuses = [
  'Not Started',
  'Need Assistance',
  'In Progress',
  'Deferred',
  'Completed',
];

export default App;
