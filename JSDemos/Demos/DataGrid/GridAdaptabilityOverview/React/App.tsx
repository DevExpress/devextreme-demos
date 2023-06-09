import React from 'react';
import DataGrid, {
  Column, Editing, Grouping, GroupPanel, Pager, Paging, ColumnChooser,
} from 'devextreme-react/data-grid';

import service from './data.js';

const allowedPageSizes = [5, 8, 15, 30];

class App extends React.Component {
  dataSource: any;

  constructor(props) {
    super(props);
    this.dataSource = service.getOrders();
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          dataSource={this.dataSource}
          keyExpr="ID"
          columnHidingEnabled={true}
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing allowAdding={true} allowUpdating={true} mode="batch" />
          // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
          <Grouping contextMenuEnabled={true} expandMode="rowClick" />
          // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
          <GroupPanel visible={true} emptyPanelText="Use the context menu of header columns to group data" />
          // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
          <Pager
            // @ts-expect-error TS(2322): Type '{ allowedPageSizes: number[]; showInfo: bool... Remove this comment to see the full error message
            allowedPageSizes={allowedPageSizes}
            showInfo={true}
            showNavigationButtons={true}
            showPageSizeSelector={true}
            visible={true} />
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={8} />
          // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
          <ColumnChooser enabled={true} mode="select" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column allowGrouping={false} dataField="OrderNumber" width={130} caption="Invoice Number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" format="currency" />
        </DataGrid>
      </div>
    );
  }
}

export default App;
