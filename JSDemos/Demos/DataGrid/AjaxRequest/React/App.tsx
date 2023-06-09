import React from 'react';
import DataGrid from 'devextreme-react/data-grid';

const columns = ['CompanyName', 'City', 'State', 'Phone', 'Fax'];

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource="../../../../data/customers.json"
        defaultColumns={columns}
        showBorders={true}
      />
    );
  }
}

export default App;
