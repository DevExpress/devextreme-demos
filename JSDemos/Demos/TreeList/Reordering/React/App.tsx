import React from 'react';
import { TreeList, Column } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="employees"
        dataSource={employees}
        allowColumnReordering={true}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        defaultExpandedRowKeys={expandedRowKeys}
        keyExpr="ID"
        parentIdExpr="Head_ID"
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column allowReordering={false} dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" caption="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Mobile_Phone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Hire_Date" dataType="date" />
      </TreeList>
    );
  }
}

export default App;
