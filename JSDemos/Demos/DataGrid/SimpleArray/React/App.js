import React, { useCallback } from 'react';
import DataGrid from 'devextreme-react/data-grid';
import { customers } from './data.js';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

const App = () => {
  const handleCallback = useCallback(() => {
    // callback code
  }, []);

  return (
    <DataGrid
      dataSource={customers}
      keyExpr="ID"
      defaultColumns={columns}
      showBorders={true}
      onCallback={handleCallback}
    />
  );
};

export default App;