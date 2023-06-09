import React from 'react';
import DataGrid, {
  Column, Selection, Paging, Summary, TotalItem,
} from 'devextreme-react/data-grid';
import service from './data.js';

const startupSelectedKeys = [1, 4, 7];

class App extends React.Component {
  orders: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
  }

  calculateSelectedRow(options) {
    if (options.name === 'SelectedRowsSummary') {
      if (options.summaryProcess === 'start') {
        options.totalValue = 0;
      } else if (options.summaryProcess === 'calculate') {
        if (options.component.isRowSelected(options.value.ID)) {
          options.totalValue += options.value.SaleAmount;
        }
      }
    }
  }

  onSelectionChanged(e) {
    e.component.refresh(true);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          defaultSelectedRowKeys={startupSelectedKeys}
          onSelectionChanged={this.onSelectionChanged}
          dataSource={this.orders}
          keyExpr="ID"
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging enabled={false} />
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="multiple" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderNumber" width={130} caption="Invoice Number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" width={160} dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" alignment="right" format="currency" />
          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary calculateCustomSummary={this.calculateSelectedRow}>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ name: string; summaryType: string; valueFo... Remove this comment to see the full error message
              name="SelectedRowsSummary"
              summaryType="custom"
              valueFormat="currency"
              displayFormat="Sum: {0}"
              showInColumn="SaleAmount" />
          </Summary>
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
