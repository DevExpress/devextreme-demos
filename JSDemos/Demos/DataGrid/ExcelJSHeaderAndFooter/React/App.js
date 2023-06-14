import React, { useState } from 'react';
import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { countries } from './data.js';

const gdpFormat = {
  type: 'percent',
  precision: 1,
};

const App = () => {
  const [gridInstance, setGridInstance] = useState(null);

  const onExporting = (e) => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('CountriesPopulation');

    exportDataGrid({
      component: gridInstance,
      worksheet,
      topLeftCell: { row: 4, column: 1 },
    }).then((cellRange) => {
      const headerRow = worksheet.getRow(2);
      headerRow.height = 30;
      worksheet.mergeCells(2, 1, 2, 8);

      headerRow.getCell(1).value = 'Country Area, Population, and GDP Structure';
      headerRow.getCell(1).font = { name: 'Segoe UI Light', size: 22 };
      headerRow.getCell(1).alignment = { horizontal: 'center' };

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
  };

  return (
    <DataGrid
      dataSource={countries}
      keyExpr="ID"
      showBorders={true}
      onExporting={onExporting}
      ref={setGridInstance}
    >
      <Export enabled={true} />

      <Column dataField="Country" />
      <Column dataField="Area" />
      <Column caption="Population">
        <Column
          dataField="Population_Total"
          caption="Total"
          format="fixedPoint"
        />
        <Column
          dataField="Population_Urban"
          caption="Urban"
          format="percent"
        />
      </Column>
      <Column caption="Nominal GDP">
        <Column
          dataField="GDP_Total"
          caption="Total, mln $"
          format="fixedPoint"
          sortOrder="desc"
        />
        <Column caption="By Sector">
          <Column
            dataField="GDP_Agriculture"
            caption="Agriculture"
            format={gdpFormat}
            width={95}
          />
          <Column
            dataField="GDP_Industry"
            caption="Industry"
            format={gdpFormat}
            width={80}
          />
          <Column
            dataField="GDP_Services"
            caption="Services"
            format={gdpFormat}
            width={85}
          />
        </Column>
      </Column>
    </DataGrid>
  );
};

export default App;
