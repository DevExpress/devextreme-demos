import React from 'react';
import {
  DataGrid, HeaderFilter, Search, Column,
} from 'devextreme-react/data-grid';
import { employees } from './data.js';

const searchFields = ['City', 'State'];
const searchEditorOptions = { placeholder: 'Search city or state' };

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="employees"
        dataSource={employees}
        columnAutoWidth={true}
        showRowLines={true}
        showBorders={true}
        keyExpr="ID"
      >
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position">
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter allowSelectAll={false}>
            // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
            <Search enabled={true} />
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
        <Column dataField="HomePhone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="HireDate" dataType="date" />
      </DataGrid>
    );
  }
}

export default App;
