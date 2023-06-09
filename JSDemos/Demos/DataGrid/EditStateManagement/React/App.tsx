import React from 'react';
import DataGrid, { Column, Editing } from 'devextreme-react/data-grid';
import { LoadPanel } from 'devextreme-react/load-panel';
import 'whatwg-fetch';

import reducer from './reducer.js';
import {
  saveChange, loadOrders, setChanges, setEditRowKey,
} from './actions.js';

const initialState = {
  data: [],
  changes: [],
  editRowKey: null,
  isLoading: false,
};

const loadPanelPosition = { of: '#gridContainer' };

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const changesText = React.useMemo(() => JSON.stringify(state.changes.map((change) => ({
    type: change.type,
    key: change.type !== 'insert' ? change.key : undefined,
    data: change.data,
  })), null, ' '), [state.changes]);

  React.useEffect(() => {
    loadOrders(dispatch);
  }, []);

  const onSaving = React.useCallback((e) => {
    e.cancel = true;
    e.promise = saveChange(dispatch, e.changes[0]);
  }, []);

  const onChangesChange = React.useCallback((changes) => {
    setChanges(dispatch, changes);
  }, []);

  const onEditRowKeyChange = React.useCallback((editRowKey) => {
    setEditRowKey(dispatch, editRowKey);
  }, []);

  return (
    <React.Fragment>
      // @ts-expect-error TS(2786): 'LoadPanel' cannot be used as a JSX component.
      <LoadPanel
        position={loadPanelPosition}
        visible={state.isLoading}
      />
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        keyExpr="OrderID"
        dataSource={state.data}
        showBorders
        repaintChangesOnly
        onSaving={onSaving}>
        // @ts-expect-error TS(2786): 'Editing' cannot be used as a JSX component.
        <Editing
          // @ts-expect-error TS(2322): Type '{ mode: string; allowAdding: true; allowDele... Remove this comment to see the full error message
          mode="row"
          allowAdding
          allowDeleting
          allowUpdating
          changes={state.changes}
          onChangesChange={onChangesChange}
          editRowKey={state.editRowKey}
          onEditRowKeyChange={onEditRowKeyChange}
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
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Edit Row Key:</span>
          <div id="editRowKey">{state.editRowKey === null ? 'null' : state.editRowKey.toString()}</div>
        </div>
        <div className="option">
          <span>Changes:</span>
          <div id="changes">{changesText}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
