import React from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import applyChanges from 'devextreme/data/apply_changes';
import 'whatwg-fetch';

const URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

const sendChange = (url, change) => {
  switch (change.type) {
    case "insert":
      return sendRequest(url + "/InsertOrder", "POST", { values: JSON.stringify(change.data) });
    case "update":
      return sendRequest(url + "/UpdateOrder", "PUT", { key: change.key, values: JSON.stringify(change.data) });
    case "remove":
      return sendRequest(url + "/DeleteOrder", "DELETE", { key: change.key });
  }
};

const sendRequest = (url, method, data) => {
  method = method || 'GET';
  data = data || {};

  if (method === 'GET') {
    return fetch(url, {
      method: method,
      credentials: 'include'
    }).then(result => result.json().then(json => {
      if (result.ok) return json.data;
      throw json.Message;
    }));
  }

  const params = Object.keys(data).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
  }).join('&');

  return fetch(url, {
    method: method,
    body: params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
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

const initialState = {
  data: [],
  changes: [],
  editRowKey: null
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ROWS':
      return {
        ...state,
        ...payload,
      };
    case 'SAVING_COMPLETE':
      const newData = applyChanges(state.data, [payload.change], { keyExpr: "OrderID" });

      return {
        ...state,
        data: newData,
        changes: [],
        editRowKey: null,
      };
    case 'EDITING_CHANGED':
      return {
        ...state,
        ...payload,
      };
    case 'REQUEST_ERROR':
      return {
        ...state,
      };
    case 'FETCH_INIT':
      return {
        ...state,
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const loadData = () => {
    dispatch({ type: 'FETCH_INIT' });
    fetch(URL + "/Orders")
      .then(response => response.json())
      .then(({ data }) => {
        dispatch({
          type: 'UPDATE_ROWS',
          payload: {
            data: data
          },
        });
      })
      .catch(() => dispatch({ type: 'REQUEST_ERROR' }));
  };

  React.useEffect(() => loadData(), []);

  const onSaving = React.useCallback((e) => {
    e.cancel = true;

    var change = e.changes[0];

    if (change) {
      e.promise = sendChange(URL, change).then((data) => {
        if (change.type === "insert") {
          change.data = data;
        }

        dispatch({
          type: 'SAVING_COMPLETE',
          payload: {
            change: change
          }
        })
      });
    }
  });


  const onOptionChanged = React.useCallback((e) => {
    if (e.fullName === 'editing.editRowKey') {
      dispatch({
        type: 'EDITING_CHANGED',
        payload: {
          editRowKey: e.value
        }
      });
    } else if (e.fullName === 'editing.changes') {
      dispatch({
        type: 'EDITING_CHANGED',
        payload: {
          changes: e.value
        }
      });
    }
  });

  return (
    <DataGrid
      keyExpr="OrderID"
      dataSource={state.data}
      showBorders={true}
      repaintChangesOnly={true}
      onSaving={onSaving}
      onOptionChanged={onOptionChanged}>
      <Editing
        mode="row"
        allowAdding={true}
        allowDeleting={true}
        allowUpdating={true}
        changes={state.changes}
        editRowKey={state.editRowKey}
      />
      <Column dataField="OrderID" allowEditing={false}></Column>
      <Column dataField="ShipName"></Column>
      <Column dataField="ShipCountry"></Column>
      <Column dataField="ShipCity"></Column>
      <Column dataField="ShipAddress"></Column>
      <Column dataField="OrderDate" dataType="date"></Column>
      <Column dataField="Freight"></Column>
    </DataGrid >
  );
}

export default App;
