import React from 'react';

import TreeList, {
  RemoteOperations, Column, SearchPanel, HeaderFilter, Editing, RequiredRule, Lookup,
} from 'devextreme-react/tree-list';
import AspNetData from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/TreeListTasks';

const tasksData = AspNetData.createStore({
  key: 'Task_ID',
  loadUrl: `${url}/Tasks`,
  insertUrl: `${url}/InsertTask`,
  updateUrl: `${url}/UpdateTask`,
  deleteUrl: `${url}/DeleteTask`,
  onBeforeSend(method, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const employeesData = AspNetData.createStore({
  key: 'ID',
  loadUrl: `${url}/TaskEmployees`,
});

const statusesData = [
  'Not Started',
  'Need Assistance',
  'In Progress',
  'Deferred',
  'Completed',
];

const expandedKeys = [1, 2];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="tree-list"
        dataSource={tasksData}
        keyExpr="Task_ID"
        parentIdExpr="Task_Parent_ID"
        hasItemsExpr="Has_Items"
        defaultExpandedRowKeys={expandedKeys}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        onInitNewRow={initNewRow}>
        // @ts-expect-error TS(2786): 'RemoteOperations' cannot be used as a JSX compone... Remove this comment to see the full error message
        <RemoteOperations filtering={true} sorting={true} grouping={true} />
        // @ts-expect-error TS(2786): 'SearchPanel' cannot be used as a JSX component.
        <SearchPanel visible={true} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ mode: string; allowAdding: boolean; allowU... Remove this comment to see the full error message
          mode="row"
          allowAdding={true}
          allowUpdating={true}
          allowDeleting={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Subject" minWidth={250}>
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Assigned_Employee_ID" caption="Assigned" minWidth={120}>
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={employeesData} valueExpr="ID" displayExpr="Name" />
          // @ts-expect-error TS(2786): 'RequiredRule' cannot be used as a JSX component.
          <RequiredRule />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Status" caption="Status" minWidth={120}>
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup dataSource={statusesData} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Start_Date" caption="Start Date" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Task_Due_Date" caption="Due Date" dataType="date" />
      </TreeList>
    );
  }
}

function initNewRow(e) {
  e.data.Task_Status = 'Not Started';
  e.data.Task_Start_Date = new Date();
  e.data.Task_Due_Date = new Date();
}

export default App;
