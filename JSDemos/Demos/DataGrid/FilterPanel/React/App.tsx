import React from 'react';
import DataGrid, {
  Column,
  FilterRow,
  HeaderFilter,
  FilterPanel,
  FilterBuilderPopup,
  Scrolling,
} from 'devextreme-react/data-grid';
import { orders } from './data.js';

const saleAmountEditorOptions = { format: 'currency', showClearButton: true };

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        columnsAutoWidth="true"
        // @ts-expect-error TS(2322): Type '{ customOperations: { name: string; caption:... Remove this comment to see the full error message
        filterBuilder={filterBuilder}
        defaultFilterValue={filterValue}
        dataSource={orders}
        keyExpr="ID"
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'FilterRow' cannot be used as a JSX component.
        <FilterRow visible={true} />
        // @ts-expect-error TS(2786): 'FilterPanel' cannot be used as a JSX component.
        <FilterPanel visible={true} />
        // @ts-expect-error TS(2786): 'FilterBuilderPopup' cannot be used as a JSX compo... Remove this comment to see the full error message
        <FilterBuilderPopup position={filterBuilderPopupPosition} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true} />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="infinite" />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; dataType: string; dataF... Remove this comment to see the full error message
          dataType="number"
          dataField="OrderNumber"
          caption="Invoice Number"
        >
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter groupInterval={10000} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="OrderDate" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ children: Element; editorOptions: { format... Remove this comment to see the full error message
          editorOptions={saleAmountEditorOptions}
          dataField="SaleAmount"
          dataType="number"
          format="currency"
        >
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter dataSource={saleAmountHeaderFilters} />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Employee" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CustomerInfo.StoreCity" caption="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CustomerInfo.StoreState" caption="State" />
      </DataGrid>
    );
  }
}

function getOrderDay(rowData) {
  return (new Date(rowData.OrderDate)).getDay();
}

const filterBuilderPopupPosition = {
  of: window,
  at: 'top',
  my: 'top',
  offset: { y: 10 },
};

const filterBuilder = {
  customOperations: [{
    name: 'weekends',
    caption: 'Weekends',
    dataTypes: ['date'],
    icon: 'check',
    hasValue: false,
    calculateFilterExpression: () => [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]],
  }],
  allowHierarchicalFields: true,
};

const filterValue = [['Employee', '=', 'Clark Morgan'], 'and', ['OrderDate', 'weekends']];

const saleAmountHeaderFilters = [{
  text: 'Less than $3000',
  value: ['SaleAmount', '<', 3000],
}, {
  text: '$3000 - $5000',
  value: [['SaleAmount', '>=', 3000], ['SaleAmount', '<', 5000]],
}, {
  text: '$5000 - $10000',
  value: [['SaleAmount', '>=', 5000], ['SaleAmount', '<', 10000]],
}, {
  text: '$10000 - $20000',
  value: [['SaleAmount', '>=', 10000], ['SaleAmount', '<', 20000]],
}, {
  text: 'Greater than $20000',
  value: ['SaleAmount', '>=', 20000],
}];

export default App;
