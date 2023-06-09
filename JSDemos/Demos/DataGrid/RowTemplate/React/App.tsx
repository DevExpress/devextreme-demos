import React from 'react';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import DataRow from './DataRow.js';

import service from './data.js';

class App extends React.Component {
  employees: any;

  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid id="gridContainer"
        dataSource={this.employees}
        keyExpr="ID"
        columnAutoWidth={true}
        showBorders={true}
        rowAlternationEnabled={true}
        hoverStateEnabled={true}
        dataRowRender={DataRow}>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Photo" width={100} allowFiltering={false} allowSorting={false} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Prefix" width={70} caption="Title" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="BirthDate" dataType="date" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="HireDate" dataType="date" />
      </DataGrid>
    );
  }
}

export default App;
