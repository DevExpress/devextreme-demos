import React from 'react';
import DataGrid, {
  Column, Editing, Summary, TotalItem,
} from 'devextreme-react/data-grid';
import service from './data.js';

const saleAmountEditorOptions = { format: 'currency' };

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
          repaintChangesOnly={true}
          showBorders={true}>
          // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
          <Editing
            // @ts-expect-error TS(2322): Type '{ children: never[]; mode: string; allowAddi... Remove this comment to see the full error message
            mode="batch"
            allowAdding={true}
            allowUpdating={true}
            allowDeleting={true}>
          </Editing>
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderNumber" width={130} caption="Invoice Number" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="OrderDate" dataType="date" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Employee" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreCity" caption="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="CustomerStoreState" caption="State" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="SaleAmount" alignment="right" format="currency" editorOptions={saleAmountEditorOptions} />
          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary recalculateWhileEditing={true}>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; }' is... Remove this comment to see the full error message
              column="OrderNumber"
              summaryType="count" />
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
