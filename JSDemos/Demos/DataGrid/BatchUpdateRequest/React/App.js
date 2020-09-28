import React from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import 'whatwg-fetch';

var URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

const dataSource = createStore({
  key: 'OrderID',
  loadUrl: `${URL}/Orders`,
  onBeforeSend: (method, ajaxOptions) => {
    ajaxOptions.xhrFields = { withCredentials: true };
  }
});

const sendBatchRequest = (url, changes) => {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(changes),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    credentials: 'include'
  }).then(result => {
    if (result.ok) {
      return result.text().then(text => text && JSON.parse(text));
    } else {
      return result.json().then(json => {
        throw json.Message;
      });
    }
  });
};

const App = () => {
  const onSaving = React.useCallback((e) => {
    var changes = e.changes;

    e.cancel = true;

    if (changes.length) {
      e.promise = sendBatchRequest(`${URL}/Batch`, changes).then(() => {
        e.component.refresh().done(() => {
          e.component.cancelEditData();
        });
      });
    }
  });

  return (
    <DataGrid
      id="gridContainer"
      keyExpr="OrderID"
      dataSource={dataSource}
      showBorders={true}
      remoteOperations={true}
      repaintChangesOnly={true}
      onSaving={onSaving}>
      <Editing
        mode="batch"
        allowAdding={true}
        allowDeleting={true}
        allowUpdating={true}
      />
      <Column dataField="OrderID" allowEditing={false}></Column>
      <Column dataField="ShipName"></Column>
      <Column dataField="ShipCountry"></Column>
      <Column dataField="ShipCity"></Column>
      <Column dataField="ShipAddress"></Column>
      <Column dataField="OrderDate" dataType="date"></Column>
      <Column dataField="Freight"></Column>
    </DataGrid>
  );
}

export default App;
