import React, { useState } from 'react';
import DataGrid, {
  Column, Export, Summary, GroupPanel, Grouping, SortByGroupSummaryInfo, TotalItem,
} from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

import service from './data.js';

function App() {
  const [companies, setCompanies] = useState(service.getCompanies());

  function renderGridCell(data) {
    return <a href={ data.text } target='_blank' rel='noopener noreferrer'>Website</a>;
  }

  function phoneNumberFormat(value) {
    const USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);

    return `(${USNumber[1]}) ${USNumber[2]}-${USNumber[3]}`;
  }

  function onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Companies');

    worksheet.columns = [
      { width: 5 }, { width: 30 }, { width: 25 }, { width: 15 }, { width: 25 }, { width: 40 },
    ];

    exportDataGrid({
      component: e.component,
      worksheet,
      keepColumnWidths: false,
      topLeftCell: { row: 2, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        if (gridCell.rowType === 'data') {
          if (gridCell.column.dataField === 'Phone') {
            excelCell.value = parseInt(gridCell.value, 10);
            excelCell.numFmt = '[<=9999999]###-####;(###) ###-####';
          }
          if (gridCell.column.dataField === 'Website') {
            excelCell.value = { text: gridCell.value, hyperlink: gridCell.value };
            excelCell.font = { color: { argb: 'FF0000FF' }, underline: true };
            excelCell.alignment = { horizontal: 'left' };
          }
        }
        if (gridCell.rowType === 'group') {
          excelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'BEDFE6' } };
        }
        if (gridCell.rowType === 'totalFooter' && excelCell.value) {
          excelCell.font.italic = true;
        }
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Companies.xlsx');
      });
    });
    e.cancel = true;
  }

  return (
    <div>
      <DataGrid
        id="gridContainer"
        dataSource={companies}
        keyExpr="ID"
        showBorders={true}
        onExporting={onExporting}>

        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />
        <SortByGroupSummaryInfo summaryItem="count" />

        <Column dataField="Name" width={190} />
        <Column dataField="Address" width={200} />
        <Column dataField="City" />
        <Column dataField="State" groupIndex={0} />
        <Column dataField="Phone" format={phoneNumberFormat} />
        <Column dataField="Website" caption="" alignment="center" width={100} cellRender={renderGridCell} />

        <Export enabled={true} />

        <Summary>
          <TotalItem
            column="Name"
            summaryType="count"
            displayFormat="Total count: {0} companies"
          />
        </Summary>
      </DataGrid>
    </div>
  );
}

export default App;