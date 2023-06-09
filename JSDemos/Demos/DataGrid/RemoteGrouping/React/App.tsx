import React from 'react';

import DataGrid, {
  Scrolling, RemoteOperations, Column, Grouping, GroupPanel, Summary, GroupItem,
} from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

const dataSource = AspNetData.createStore({
  key: 'Id',
  loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
});

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        height={420}
        width="100%"
        dataSource={dataSource}
        showBorders={true}
        wordWrapEnabled={true}
      >
        // @ts-expect-error TS(2786): 'RemoteOperations' cannot be used as a JSX compone... Remove this comment to see the full error message
        <RemoteOperations groupPaging={true} />
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" />
        // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
        <Grouping autoExpandAll={false} />
        // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
        <GroupPanel visible={true} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Id" dataType="number" width={75} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ProductSubcategoryName" caption="Subcategory" width={150} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="StoreName" caption="Store" width={150} groupIndex={0} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ProductCategoryName" caption="Category" width={120} groupIndex={1} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ProductName" caption="Product" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="DateKey" caption="Date" dataType="date" format="yyyy-MM-dd" width={100} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="SalesAmount" caption="Amount" format="currency" width={100} />

        // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
        <Summary>
          // @ts-expect-error TS(2786): 'GroupItem' cannot be used as a JSX component.
          <GroupItem
            // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; }' is... Remove this comment to see the full error message
            column="Id"
            summaryType="count" />
        </Summary>
      </DataGrid>
    );
  }
}

export default App;
