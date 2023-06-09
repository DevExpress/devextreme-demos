import React from 'react';

import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter, Search,
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
        height={440}
        dataSource={dataSource}
        showBorders={true}
        remoteOperations={true}
        wordWrapEnabled={true}
      >
        // @ts-expect-error TS(2786): 'Scrolling' cannot be used as a JSX component.
        <Scrolling mode="virtual" rowRenderingMode="virtual" />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={100} />
        // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
        <HeaderFilter visible={true}>
          // @ts-expect-error TS(2786): 'Search' cannot be used as a JSX component.
          <Search enabled={true} />
        </HeaderFilter>

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Id" width={75} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="StoreName" caption="Store" width={150} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ProductCategoryName" caption="Category" width={120} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ProductName" caption="Product" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="DateKey" caption="Date" dataType="date" format="yyyy-MM-dd" width={100} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="SalesAmount" caption="Amount" format="currency" width={100}>
          // @ts-expect-error TS(2786): 'HeaderFilter' cannot be used as a JSX component.
          <HeaderFilter groupInterval={1000} />
        </Column>
      </DataGrid>
    );
  }
}

export default App;
