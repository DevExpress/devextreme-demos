import React from 'react';
import {
  TreeList, FilterRow, FilterPanel, HeaderFilter, Column,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

const filterValue = ['City', '=', 'Bentonville'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'TreeList' cannot be used as a JSX component.
      <TreeList
        id="employees"
        dataSource={employees}
        defaultExpandedRowKeys={expandedRowKeys}
        defaultFilterValue={filterValue}
        showBorders={true}
        keyExpr="ID"
        parentIdExpr="Head_ID"
      >
        // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
        <FilterRow visible={true} />
        // @ts-expect-error TS(2786): 'FilterPanel' cannot be used as a JSX component.
        <FilterPanel visible={true} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Full_Name" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" caption="Position" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Mobile_Phone" dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Hire_Date" dataType="date" />
      </TreeList>
    );
  }
}

export default App;
