import React from 'react';

import 'devextreme/data/odata/store';
import DataGrid, { Column } from 'devextreme-react/data-grid';

const dataSourceOptions = {
  store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
    key: 'Product_ID',
  },
  select: [
    'Product_ID',
    'Product_Name',
    'Product_Cost',
    'Product_Sale_Price',
    'Product_Retail_Price',
    'Product_Current_Inventory',
  ],
  filter: ['Product_Current_Inventory', '>', 0],
};

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        // @ts-expect-error TS(2322): Type '{ store: { type: string; url: string; key: s... Remove this comment to see the full error message
        dataSource={dataSourceOptions}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Product_ID" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; width: number; }' is no... Remove this comment to see the full error message
          dataField="Product_Name"
          width={250}
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Product_Cost"
          caption="Cost"
          dataType="number"
          format="currency"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Product_Sale_Price"
          caption="Sale Price"
          dataType="number"
          format="currency"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; dataTy... Remove this comment to see the full error message
          dataField="Product_Retail_Price"
          caption="Retail Price"
          dataType="number"
          format="currency"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; }' is ... Remove this comment to see the full error message
          dataField="Product_Current_Inventory"
          caption="Inventory"
        />
      </DataGrid>
    );
  }
}

export default App;
