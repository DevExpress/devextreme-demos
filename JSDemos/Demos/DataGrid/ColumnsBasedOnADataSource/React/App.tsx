import React from 'react';
import DataGrid from 'devextreme-react/data-grid';
import { orders } from './data.js';

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="grid"
        dataSource={orders}
        keyExpr="OrderNumber"
        showBorders={true}
      />
    );
  }
}

export default App;
