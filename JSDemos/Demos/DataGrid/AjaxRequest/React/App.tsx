import React, { useState } from 'react';
import DataGrid from 'devextreme-react/data-grid';

// import { dataAsJsonFromTs } from '../../../../data/customers';
import 'devextreme/dist/css/dx.light.css';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <DataGrid dataSource="../../../../data/customers.json" />
      {/* <DataGrid dataSource={dataAsJsonFromTs} /> */}
    </>
  )
}

export default App;
