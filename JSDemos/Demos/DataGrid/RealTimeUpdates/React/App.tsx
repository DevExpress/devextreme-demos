import React from 'react';
import DataGrid, {
  Column, Summary, TotalItem, MasterDetail, Paging,
} from 'devextreme-react/data-grid';
import { Slider, Tooltip } from 'devextreme-react/slider';
import DataSource from 'devextreme/data/data_source';
import {
  productsStore, ordersStore, getOrderCount, addOrder,
} from './data.js';

const dataSource = new DataSource({
  store: productsStore,
  reshapeOnPush: true,
});

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);

    this.state = {
      updateFrequency: 100,
    };

    this.onUpdateFrequencyChanged = this.onUpdateFrequencyChanged.bind(this);
    this.detailRender = this.detailRender.bind(this);

    setInterval(() => {
      if (getOrderCount() > 500000) {
        return;
      }

      for (let i = 0; i < this.state.updateFrequency / 20; i += 1) {
        addOrder();
      }
    }, 50);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          dataSource={dataSource}
          repaintChangesOnly={true}
          columnAutoWidth={true}
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
          <Paging defaultPageSize={10} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="ProductName"
            dataType="string" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; forma... Remove this comment to see the full error message
            dataField="UnitPrice"
            dataType="number"
            format="currency" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="OrderCount"
            dataType="number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
            dataField="Quantity"
            dataType="number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; forma... Remove this comment to see the full error message
            dataField="Amount"
            dataType="number"
            format="currency" />
          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem column="ProductName" summaryType="count" />
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem column="Amount" summaryType="sum" displayFormat="{0}" valueFormat="currency" />
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem column="OrderCount" summaryType="sum" displayFormat="{0}" />
          </Summary>
          // @ts-expect-error TS(2786): 'MasterDetail' cannot be used as a JSX component.
          <MasterDetail
            // @ts-expect-error TS(2322): Type '{ children: never[]; enabled: boolean; rende... Remove this comment to see the full error message
            enabled={true}
            render={this.detailRender}>
          </MasterDetail>
        </DataGrid>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Update frequency:</span>
            // @ts-expect-error TS(2786): 'Slider' cannot be used as a JSX component.
            <Slider
              min={10}
              step={10}
              max={5000}
              value={this.state.updateFrequency}
              onValueChanged={this.onUpdateFrequencyChanged}>
              // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
              <Tooltip
                // @ts-expect-error TS(2322): Type '{ children: never[]; enabled: boolean; forma... Remove this comment to see the full error message
                enabled={true}
                format="#0 per second"
                showMode="always"
                position="top">
              </Tooltip>
            </Slider>
          </div>
        </div>
      </div>
    );
  }

  detailRender(detail) {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={this.getDetailGridDataSource(detail.data)}
        repaintChangesOnly={true}
        columnAutoWidth={true}
        showBorders={true}>
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={5} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="OrderID"
          dataType="number" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="ShipCity"
          dataType="string" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; forma... Remove this comment to see the full error message
          dataField="OrderDate"
          dataType="datetime"
          format="yyyy/MM/dd HH:mm:ss" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; forma... Remove this comment to see the full error message
          dataField="UnitPrice"
          dataType="number"
          format="currency" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="Quantity"
          dataType="number" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ caption: string; dataType: string; format:... Remove this comment to see the full error message
          caption="Amount"
          dataType="number"
          format="currency"
          allowSorting={true}
          calculateCellValue={this.getAmount} />
        // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
        <Summary>
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="OrderID" summaryType="count" />
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="Quantity" summaryType="sum" displayFormat="{0}" />
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem column="Amount" summaryType="sum" displayFormat="{0}" valueFormat="currency" />
        </Summary>
      </DataGrid>
    );
  }

  onUpdateFrequencyChanged(e) {
    this.setState({
      updateFrequency: e.value,
    });
  }

  getDetailGridDataSource(product) {
    return {
      store: ordersStore,
      reshapeOnPush: true,
      filter: ['ProductID', '=', product.ProductID],
    };
  }

  getAmount(order) {
    return order.UnitPrice * order.Quantity;
  }
}

export default App;
