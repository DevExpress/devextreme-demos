import React from 'react';
import { TreeList, Column, ColumnFixing } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1, 2, 10];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="employees"
        dataSource={employees}
        columnAutoWidth={true}
        showRowLines={true}
        showBorders={true}
        defaultExpandedRowKeys={expandedRowKeys}
        keyExpr="ID"
        parentIdExpr="Head_ID"
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" caption="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column fixed={true} dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Mobile_Phone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Email" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Hire_Date" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Birth_Date" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Skype" />
        // @ts-expect-error TS(2786): 'ColumnFixing' cannot be used as a JSX component.
        <ColumnFixing enabled={true} />
      </TreeList>
    );
  }
}

export default App;
