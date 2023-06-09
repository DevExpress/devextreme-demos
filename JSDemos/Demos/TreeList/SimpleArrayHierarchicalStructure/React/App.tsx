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
        defaultExpandedRowKeys={expandedRowKeys}
        showRowLines={true}
        showBorders={true}
        columnAutoWidth={true}
        itemsExpr="items"
        dataStructure="tree"
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; }' is ... Remove this comment to see the full error message
          dataField="Title"
          caption="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; }' is not assignable to... Remove this comment to see the full error message
          dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; }' is not assignable to... Remove this comment to see the full error message
          dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; }' is not assignable to... Remove this comment to see the full error message
          dataField="State" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; }' is not assignable to... Remove this comment to see the full error message
          dataField="Mobile_Phone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="Hire_Date"
          dataType="date" />
      </TreeList>
    );
  }
}

export default App;
