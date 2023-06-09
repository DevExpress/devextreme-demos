import React from 'react';

import {
  Column, DataGrid, Paging, Summary, TotalItem, ValueFormat,
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

class OrderHistory extends React.Component {
  props: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      orderHistoryStore: null,
    };
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.state.orderHistoryStore}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={5} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderID" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderDate" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ShipCountry" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ShipCity" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="UnitPrice" format="currency" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Quantity" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Discount" format="percent" />

        // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
        <Summary>
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="UnitPrice" summaryType="sum">
            // @ts-expect-error TS(2786): 'ValueFormat' cannot be used as a JSX component.
            <ValueFormat format="currency" precision={2} />
          </TotalItem>
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="Quantity" summaryType="count" />
        </Summary>

      </DataGrid>
    );
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props;
    if (prevProps.productId !== productId) {
      this.setState({
        orderHistoryStore: createStore({
          key: 'OrderID',
          loadParams: { ProductID: productId },
          loadUrl: `${url}/GetOrdersByProduct`,
        }),
      });
    }
  }
}

export default OrderHistory;
