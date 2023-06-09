import React from 'react';

import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

import { countries } from './data.js';

const gdpFormat = {
  type: 'percent',
  precision: 1,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        dataSource={countries}
        keyExpr="ID"
        showBorders={true}
        onExporting={this.onExporting}
      >
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />

        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Country" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Area" />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Population">
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="Population_Total"
            caption="Total"
            format="fixedPoint"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="Population_Urban"
            caption="Urban"
            format="percent"
          />
        </Column>
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column caption="Nominal GDP">
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column
            // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
            dataField="GDP_Total"
            caption="Total, mln $"
            format="fixedPoint"
            sortOrder="desc"
          />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column caption="By Sector">
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Agriculture"
              caption="Agriculture"
              format={gdpFormat}
              width={95}
            />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Industry"
              caption="Industry"
              format={gdpFormat}
              width={80}
            />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column
              // @ts-expect-error TS(2322): Type '{ dataField: string; caption: string; format... Remove this comment to see the full error message
              dataField="GDP_Services"
              caption="Services"
              format={gdpFormat}
              width={85}
            />
          </Column>
        </Column>
      </DataGrid>
    );
  }

  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('CountriesPopulation');

    exportDataGrid({
      component: e.component,
      worksheet,
      topLeftCell: { row: 4, column: 1 },
    }).then((cellRange) => {
      // header
      const headerRow = worksheet.getRow(2);
      headerRow.height = 30;
      worksheet.mergeCells(2, 1, 2, 8);

      headerRow.getCell(1).value = 'Country Area, Population, and GDP Structure';
      headerRow.getCell(1).font = { name: 'Segoe UI Light', size: 22 };
      headerRow.getCell(1).alignment = { horizontal: 'center' };

      // footer
      const footerRowIndex = cellRange.to.row + 2;
      const footerRow = worksheet.getRow(footerRowIndex);
      worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);

      footerRow.getCell(1).value = 'www.wikipedia.org';
      footerRow.getCell(1).font = { color: { argb: 'BFBFBF' }, italic: true };
      footerRow.getCell(1).alignment = { horizontal: 'right' };
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'CountriesPopulation.xlsx');
      });
    });
    e.cancel = true;
  }
}

export default App;
