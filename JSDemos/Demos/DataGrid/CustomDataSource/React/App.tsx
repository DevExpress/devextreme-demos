import React from 'react';

import 'devextreme/data/odata/store';
import DataGrid, { Column, Paging, Pager } from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== '';
}

const store = new CustomStore({
  key: 'OrderNumber',
  load(loadOptions) {
    let params = '?';
    [
      'skip',
      'take',
      'requireTotalCount',
      'requireGroupCount',
      'sort',
      'filter',
      'totalSummary',
      'group',
      'groupSummary',
    ].forEach((i) => {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) { params += `${i}=${JSON.stringify(loadOptions[i])}&`; }
    });
    params = params.slice(0, -1);
    return fetch(`https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders${params}`)
      .then((response) => response.json())
      .then((data) => ({
        data: data.data,
        totalCount: data.totalCount,
        summary: data.summary,
        groupCount: data.groupCount,
      }))
      .catch(() => { throw new Error('Data Loading Error'); });
  },
});

const allowedPageSizes = [8, 12, 20];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={store}
        showBorders={true}
        remoteOperations={true}
      >
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="OrderNumber"
          dataType="number"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="OrderDate"
          dataType="date"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="StoreCity"
          dataType="string"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="StoreState"
          dataType="string"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="Employee"
          dataType="string"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; forma... Remove this comment to see the full error message
          dataField="SaleAmount"
          dataType="number"
          format="currency"
        />
        // @ts-expect-error TS(2786): 'Paging' cannot be used as a JSX component.
        <Paging defaultPageSize={12} />
        // @ts-expect-error TS(2786): 'Pager' cannot be used as a JSX component.
        <Pager
          // @ts-expect-error TS(2322): Type '{ showPageSizeSelector: boolean; allowedPage... Remove this comment to see the full error message
          showPageSizeSelector={true}
          allowedPageSizes={allowedPageSizes}
        />
      </DataGrid>
    );
  }
}

export default App;
