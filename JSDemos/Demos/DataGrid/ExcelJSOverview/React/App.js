﻿import React from 'react';
import DataGrid, { Column, Export, Selection, GroupPanel, Grouping } from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'. We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';
import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.employees = service.getEmployees();
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      <DataGrid
        id="gridContainer"
        dataSource={this.employees}
        keyExpr="ID"
        showBorders={true}
        onExporting={this.onExporting}>

        <Selection mode="multiple" />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />

        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="City" />
        <Column dataField="State" groupIndex={0} />
        <Column dataField="Position" width={130} />
        <Column dataField="BirthDate" dataType="date" width={100} />
        <Column dataField="HireDate" dataType="date" width={100} />

        <Export enabled={true} allowExportSelectedData={true} />
      </DataGrid>
    );
  }

  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }
}

export default App;
