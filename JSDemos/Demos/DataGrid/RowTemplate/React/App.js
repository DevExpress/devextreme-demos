import React, { useEffect } from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import DataRow from './DataRow.js';

import service from './data.js';

const App = () => {
  const employees = service.getEmployees();

  useEffect(() => {
    // Code to be executed on component mount or update
  }, []);

  return (
    <DataGrid id="gridContainer"
      dataSource={employees}
      keyExpr="ID"
      columnAutoWidth={true}
      showBorders={true}
      rowAlternationEnabled={true}
      hoverStateEnabled={true}
      dataRowRender={DataRow}>
      <Column caption="Photo" width={100} allowFiltering={false} allowSorting={false} />
      <Column dataField="Prefix" width={70} caption="Title" />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" />
      <Column dataField="BirthDate" dataType="date" />
      <Column dataField="HireDate" dataType="date" />
    </DataGrid>
  );
};

export default App;
