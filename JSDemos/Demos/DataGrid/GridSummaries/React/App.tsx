import React from 'react';
import DataGrid, {
  Column, Selection, Summary, TotalItem,
} from 'devextreme-react/data-grid';
import { formatDate } from 'devextreme/localization';
import service from './data.js';

class App extends React.Component {
  orders: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
  }

  customizeDate(data) {
    return `First: ${formatDate(data.value, 'MMM dd, yyyy')}`;
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          dataSource={this.orders}
          keyExpr="ID"
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="single" />
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
          <Summary>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; }' is... Remove this comment to see the full error message
              column="OrderNumber"
              summaryType="count" />
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; custo... Remove this comment to see the full error message
              column="OrderDate"
              summaryType="min"
              customizeText={this.customizeDate} />
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; value... Remove this comment to see the full error message
              column="SaleAmount"
              summaryType="sum"
              valueFormat="currency" />
          </Summary>
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
