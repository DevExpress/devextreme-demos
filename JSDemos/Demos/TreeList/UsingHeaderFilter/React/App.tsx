import React from 'react';
import {
  TreeList, HeaderFilter, Search, Selection, Column,
} from 'devextreme-react/tree-list';
import { employees } from './data.js';

const expandedRowKeys = [1];

const searchFields = ['City', 'State'];
const searchEditorOptions = { placeholder: 'Search city or state' };

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
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
        <Selection mode="single" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Full_Name" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Title" caption="Position">
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter allowSelectAll={false}>
            // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
            <Search
              // @ts-expect-error TS(2322): Type '{ enabled: boolean; }' is not assignable to ... Remove this comment to see the full error message
              enabled={true}
            />
          </HeaderFilter>
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City">
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter>
            // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
            <Search
              // @ts-expect-error TS(2322): Type '{ enabled: boolean; searchExpr: string[]; ed... Remove this comment to see the full error message
              enabled={true}
              searchExpr={searchFields}
              editorOptions={searchEditorOptions} />
          </HeaderFilter>
        </Column>
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
