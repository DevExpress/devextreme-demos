import React, { useEffect, useState } from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';

import service from './data.js';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(service.getEmployees());
  }, []);

  function cellRender(data) {
    return <img src={data.value} />;
  }

  return (
    <DataGrid id="gridContainer"
      dataSource={employees}
      keyExpr="ID"
      showBorders={true}
    >
      <Column dataField="Picture"
        width={100}
        allowSorting={false}
        cellRender={cellRender}
      />
      <Column dataField="Prefix"
        width={70}
        caption="Title"
      />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column dataField="Position" />
      <Column dataField="BirthDate" dataType="date" />
      <Column dataField="HireDate" dataType="date" />
    </DataGrid>
  );
}

export default App;
