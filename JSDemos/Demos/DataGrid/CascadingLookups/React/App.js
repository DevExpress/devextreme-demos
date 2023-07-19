import React, { useState, useCallback } from 'react';
import DataGrid, { Column, Editing, Lookup } from 'devextreme-react/data-grid';
import service from './data.js';

const onEditorPreparing = (e) => {
  if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
    e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number');
  }
};

const App = () => {
  const [dataSource] = useState(service.getEmployees());
  const [states] = useState(service.getStates());
  const [cities] = useState(service.getCities());

  const getFilteredCities = useCallback((options) => ({
    store: cities,
    filter: options.data ? ['StateID', '=', options.data.StateID] : null,
  }), [cities]);

  const setStateValue = useCallback((that, rowData, value) => {
    rowData.CityID = null;
    that.defaultSetCellValue(rowData, value);
  }, []);

  return (
    <div id="data-grid-demo">
      <DataGrid
        dataSource={dataSource}
        keyExpr="ID"
        showBorders={true}
        onEditorPreparing={onEditorPreparing}
      >
        <Editing
          mode="row"
          allowUpdating={true}
          allowAdding={true}>
        </Editing>
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" />
        <Column dataField="StateID" caption="State" setCellValue={setStateValue}>
          <Lookup dataSource={states} displayExpr="Name" valueExpr="ID" />
        </Column>
        <Column dataField="CityID" caption="City">
          <Lookup dataSource={getFilteredCities} displayExpr="Name" valueExpr="ID" />
        </Column>
      </DataGrid>
    </div>
  );
};

export default App;
