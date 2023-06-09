import React from 'react';
import { TreeList, Column, ColumnChooser } from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="employees"
        dataSource={employees}
        showBorders={true}
        columnHidingEnabled={true}
        showRowLines={true}
        defaultExpandedRowKeys={expandedRowKeys}
        keyExpr="ID"
        parentIdExpr="Head_ID"
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" caption="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column hidingPriority={0} dataField="State" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column hidingPriority={1} dataField="Mobile_Phone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column hidingPriority={2} dataField="Hire_Date" dataType="date" />
        // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
        <ColumnChooser enabled={true} mode="select" />
      </TreeList>
    );
  }
}

export default App;
