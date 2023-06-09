import React from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import 'whatwg-fetch';

const URL = 'https://js.devexpress.com/Demos/Mvc/api/DataGridBatchUpdateWebApi';

const ordersStore = createStore({
  key: 'OrderID',
  loadUrl: `${URL}/Orders`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

async function sendBatchRequest(url, changes) {
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(changes),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
  });

  if (!result.ok) {
    const json = await result.json();

    throw json.Message;
  }
}

async function processBatchRequest(url, changes, component) {
  await sendBatchRequest(url, changes);
  await component.refresh(true);
  component.cancelEditData();
}

function App() {
  const onSaving = React.useCallback((e) => {
    e.cancel = true;

    if (e.changes.length) {
      e.promise = processBatchRequest(`${URL}/Batch`, e.changes, e.component);
    }
  }, []);

  return (
    // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
    <DataGrid
      id="gridContainer"
      dataSource={ordersStore}
      showBorders={true}
      remoteOperations={true}
      repaintChangesOnly={true}
      onSaving={onSaving}>
      // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
      <Editing
        // @ts-expect-error TS(2322): Type '{ mode: string; allowAdding: boolean; allowD... Remove this comment to see the full error message
        mode="batch"
        allowAdding={true}
        allowDeleting={true}
        allowUpdating={true}
      />
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="OrderID" allowEditing={false}></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="ShipName"></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="ShipCountry"></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="ShipCity"></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="ShipAddress"></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="OrderDate" dataType="date"></Column>
      // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
      <Column dataField="Freight"></Column>
    </DataGrid>
  );
}

export default App;
