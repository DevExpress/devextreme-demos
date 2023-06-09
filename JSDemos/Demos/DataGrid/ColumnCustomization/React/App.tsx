import React from 'react';
import DataGrid, { Column, ColumnChooser, ColumnFixing } from 'devextreme-react/data-grid';

import service from './data.js';

class App extends React.Component {
  employees: any;

  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
  }

  calculateCellValue(data) {
    return [data.Title, data.FirstName, data.LastName].join(' ');
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        dataSource={this.employees}
        keyExpr="ID"
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnAutoWidth={true}
        showBorders={true}
      >
        // @ts-expect-error TS(2786): 'ColumnChooser' cannot be used as a JSX component.
        <ColumnChooser enabled={true} />
        // @ts-expect-error TS(2786): 'ColumnFixing' cannot be used as a JSX component.
        <ColumnFixing enabled={true} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ caption: string; width: number; fixed: boo... Remove this comment to see the full error message
          caption="Employee"
          width={230}
          fixed={true}
          calculateCellValue={this.calculateCellValue}
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="BirthDate"
          dataType="date"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; dataType: string; }' is... Remove this comment to see the full error message
          dataField="HireDate"
          dataType="date"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; alignment: string; }' i... Remove this comment to see the full error message
          dataField="Position"
          alignment="right"
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; width: number; }' is no... Remove this comment to see the full error message
          dataField="Address"
          width={230}
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column
          // @ts-expect-error TS(2322): Type '{ dataField: string; visible: boolean; }' is... Remove this comment to see the full error message
          dataField="Zipcode"
          visible={false}
        />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="HomePhone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="MobilePhone" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Skype" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Email" />
      </DataGrid>
    );
  }
}

export default App;
