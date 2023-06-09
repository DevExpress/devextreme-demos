import React from 'react';
import DataGrid, {
  Column, Selection, Summary, GroupItem, SortByGroupSummaryInfo,
} from 'devextreme-react/data-grid';
import service from './data.js';

class App extends React.Component {
  orders: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
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
          <Column dataField="Employee" groupIndex={0} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" alignment="right" format="currency" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="TotalAmount" alignment="right" format="currency" />

          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary>
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; displ... Remove this comment to see the full error message
              column="OrderNumber"
              summaryType="count"
              displayFormat="{0} orders" />
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; value... Remove this comment to see the full error message
              column="SaleAmount"
              summaryType="max"
              valueFormat="currency"
              showInGroupFooter={false}
              alignByColumn={true} />
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; value... Remove this comment to see the full error message
              column="TotalAmount"
              summaryType="max"
              valueFormat="currency"
              showInGroupFooter={false}
              alignByColumn={true} />
            // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
            <GroupItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; value... Remove this comment to see the full error message
              column="TotalAmount"
              summaryType="sum"
              valueFormat="currency"
              displayFormat="Total: {0}"
              showInGroupFooter={true} />
          </Summary>
          // @ts-expect-error TS(2786): 'SortByGroupSummaryInfo' cannot be used as a JSX c... Remove this comment to see the full error message
          <SortByGroupSummaryInfo summaryItem="count" />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
