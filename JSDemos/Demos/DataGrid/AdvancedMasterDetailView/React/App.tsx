import React from 'react';

import {
  Column, DataGrid, MasterDetail, Paging,
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import MasterDetailView from './MasterDetailView.js';

const url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

const suppliersData = createStore({
  key: 'SupplierID',
  loadUrl: `${url}/GetSuppliers`,
});

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={suppliersData}
        remoteOperations={true}
        showBorders={true}
        id="gridContainer"
      >
        // @ts-expect-error TS(2786): 'MasterDetail' cannot be used as a JSX component.
        <MasterDetail
          // @ts-expect-error TS(2322): Type '{ enabled: boolean; component: typeof Master... Remove this comment to see the full error message
          enabled={true}
          component={MasterDetailView}
        />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={15} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ContactName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="ContactTitle" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="CompanyName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Country" />
      </DataGrid>
    );
  }
}

export default App;
