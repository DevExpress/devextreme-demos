import React, { useCallback } from 'react';
import DataGrid, { Column, MasterDetail } from 'devextreme-react/data-grid';
import DetailTemplate from './DetailTemplate.js';
import service from './data.js';

const employees = service.getEmployees();

const App = () => {
  const handleDetailTemplate = useCallback((e) => {
    // Callback logic here
  }, []);

  return (
    <DataGrid
      id="grid-container"
      dataSource={employees}
      keyExpr="ID"
      showBorders={true}
    >
      <Column dataField="Prefix" width={70} caption="Title" />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" width={170} />
      <Column dataField="State" width={125} />
      <Column dataField="BirthDate" dataType="date" />
      <MasterDetail enabled={true} component={useCallback(DetailTemplate, [])} />
    </DataGrid>
  );
};

export default App;