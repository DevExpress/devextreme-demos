import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';

import service from './data.js';

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
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderNumber" width={130} caption="Invoice Number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" hidingPriority={0} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" hidingPriority={1} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" dataType="date" hidingPriority={2} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" format="currency" />
        </DataGrid>
      </div>
    );
  }
}

export default App;
