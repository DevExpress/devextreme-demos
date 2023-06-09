import React from 'react';
import DataGrid, {
  Selection, FilterRow, GroupPanel, StateStoring, Pager, Column,
} from 'devextreme-react/data-grid';

import service from './data.js';

const allowedPageSizes = [5, 10, 20];

class App extends React.Component {
  dataGrid: any;

  orders: any;

  constructor(props) {
    super(props);
    this.orders = service.getOrders();
    this.dataGrid = React.createRef();
    this.onStateResetClick = this.onStateResetClick.bind(this);
  }

  onRefreshClick() {
    window.location.reload();
  }

  onStateResetClick() {
    this.dataGrid.current.instance.state(null);
  }

  render() {
    return (
      <React.Fragment>
        <div id="descContainer">Sort and filter data, group, reorder and resize columns, change page numbers and page size. Once you are done, <a onClick={this.onRefreshClick}>refresh</a> the web page to see that the grid’s state is automatically persisted to continue working from where you stopped or you can <a onClick={this.onStateResetClick}>reset</a> the grid to its initial state.</div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          dataSource={this.orders}
          allowColumnResizing={true}
          allowColumnReordering={true}
          showBorders={true}
          keyExpr="ID"
          ref={this.dataGrid}>
          // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
          <Selection mode="single" />
          // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
          <FilterRow visible={true} />
          // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
          <GroupPanel visible={true} />
          // @ts-expect-error TS(2786): 'StateStoring' cannot be used as a JSX component.
          <StateStoring enabled={true} type="localStorage" storageKey="storage" />
          // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
          <Pager showPageSizeSelector={true} allowedPageSizes={allowedPageSizes} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderNumber" caption="Invoice Number" width={130} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" sortOrder="desc" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" alignment="right" format="currency" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" groupIndex={0} />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default App;
