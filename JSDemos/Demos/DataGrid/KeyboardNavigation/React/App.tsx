import React from 'react';
import DataGrid, {
  Column,
  Lookup,
  Editing,
  HeaderFilter,
  FilterPanel,
  FilterRow,
  Pager,
  Paging,
} from 'devextreme-react/data-grid';
import { employees, states } from './data.js';

const allowedPageSizes = [5, 10];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        focusedRowEnabled={true}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ allowUpdating: boolean; allowDeleting: boo... Remove this comment to see the full error message
          allowUpdating={true}
          allowDeleting={true}
          selectTextOnEditStart={true}
          useIcons={true}
        />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'FilterPanel' cannot be used as a JSX component.
        <FilterPanel visible={true} />
        // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
        <FilterRow visible={true} />
        // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
        <Pager
          // @ts-expect-error TS(2322): Type '{ allowedPageSizes: number[]; showPageSizeSe... Remove this comment to see the full error message
          allowedPageSizes={allowedPageSizes}
          showPageSizeSelector={true}
          showNavigationButtons={true}
        />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={10} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataField: string; capt... Remove this comment to see the full error message
          dataField="StateID"
          caption="State"
          dataType="number">
          // @ts-expect-error TS(2786): 'Lookup' cannot be used as a JSX component.
          <Lookup
            // @ts-expect-error TS(2322): Type '{ dataSource: { ID: number; Name: string; }[... Remove this comment to see the full error message
            dataSource={states}
            valueExpr="ID"
            displayExpr="Name"
          />
        </Column>
      </DataGrid>
    );
  }
}

export default App;
