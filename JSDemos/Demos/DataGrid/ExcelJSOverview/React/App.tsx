import React from 'react';
import DataGrid, {
  Column, Export, Selection, GroupPanel, Grouping,
} from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';
import service from './data.js';

class App extends React.Component {
  employees: any;

  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        dataSource={this.employees}
        keyExpr="ID"
        showBorders={true}
        onExporting={this.onExporting}>

        // @ts-expect-error TS(2786): 'Selection' cannot be used as a JSX component.
        <Selection mode="multiple" />
        // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
        <GroupPanel visible={true} />
        // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
        <Grouping autoExpandAll={true} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="FirstName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="LastName" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="City" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="State" groupIndex={0} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Position" width={130} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="BirthDate" dataType="date" width={100} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="HireDate" dataType="date" width={100} />

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} allowExportSelectedData={true} />
      </DataGrid>
    );
  }

  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }
}

export default App;
