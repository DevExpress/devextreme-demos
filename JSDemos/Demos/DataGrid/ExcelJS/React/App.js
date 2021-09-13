import React from 'react';
import DataGrid, {
  Column, Export, Selection, Summary, GroupPanel, Grouping, SortByGroupSummaryInfo, GroupItem, TotalItem,
} from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'. We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.orders = service.getOrders();
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      <div>
        <DataGrid
          id="gridContainer"
          dataSource={this.orders}
          keyExpr="ID"
          showBorders={true}
          onExporting={this.onExporting}
          onCellPrepared={this.onCellPrepared}>

          <Selection mode="multiple" />
          <GroupPanel visible={true} />
          <Grouping autoExpandAll={true} />
          <SortByGroupSummaryInfo summaryItem="count" />

          <Column dataField="Employee" groupIndex={0} />
          <Column dataField="OrderNumber" caption="Invoice Number" width={130} />
          <Column dataField="OrderDate" dataType="date" width={160} />
          <Column dataField="CustomerStoreCity" caption="City" groupIndex={1} />
          <Column dataField="CustomerStoreState" caption="State" cellRender={this.renderGridCell} />
          <Column dataField="SaleAmount" alignment="right" format="currency" sortOrder="desc" />
          <Export enabled={true} allowExportSelectedData={true} />

          <Summary>
            <GroupItem
              column="OrderNumber"
              summaryType="count"
              displayFormat="{0} orders"
              alignByColumn={false} />
            <GroupItem
              column="SaleAmount"
              summaryType="max"
              displayFormat="Max: {0}"
              valueFormat="currency"
              alignByColumn={true}
              showInGroupFooter={false} />
            <GroupItem
              column="SaleAmount"
              summaryType="sum"
              displayFormat="Sum: {0}"
              valueFormat="currency"
              alignByColumn={true}
              showInGroupFooter={true} />

            <TotalItem
              column="SaleAmount"
              summaryType="sum"
              displayFormat="Total Sum: {0}"
              valueFormat="currency" />
          </Summary>
        </DataGrid>
      </div>
    );
  }

  renderGridCell(data) {
    return <a href="http://example.com" target="_blank" rel="noopener noreferrer">{data.text}</a>;
  }

  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    /*
      The 'DevExpress.excelExporter.exportDataGrid' function uses the ExcelJS library.
      For more information about ExcelJS, see:
        - https://github.com/exceljs/exceljs#contents
        - https://github.com/exceljs/exceljs#browser
    */

    exportDataGrid({
      component: e.component,
      worksheet,
      topLeftCell: { row: 4, column: 1 },
      customizeCell(options) {
        /*
          The 'options.excelCell' field contains an ExcelJS object that describes an Excel cell.
          Refer to the following topics for more details about its members:
            - value and type - https://github.com/exceljs/exceljs#value-types
            - alignment - https://github.com/exceljs/exceljs#alignment
            - border - https://github.com/exceljs/exceljs#borders
            - fill - https://github.com/exceljs/exceljs#fills
            - font - https://github.com/exceljs/exceljs#fonts
            - numFmt - https://github.com/exceljs/exceljs#number-formats
          The 'options.gridCell' object fields are described in https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/ExcelDataGridCell/
        */

        const { gridCell } = options;
        const { excelCell } = options;
        if (gridCell.rowType === 'data') {
          if (gridCell.data.OrderDate < new Date(2014, 2, 3)) {
            excelCell.font = { color: { argb: 'AAAAAA' } };
          }
          if (gridCell.data.SaleAmount > 15000) {
            if (gridCell.column.dataField === 'SaleAmount') {
              Object.assign(excelCell, {
                font: { color: { argb: '000000' } },
                fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFBB00' } },
              });
            }
          }
          if (gridCell.column.dataField === 'CustomerStoreState') {
            Object.assign(excelCell, {
              value: { text: gridCell.value, hyperlink: 'http://example.com' },
              font: { color: { argb: 'FF0000FF' }, underline: true },
            });
          }
        }
        if (gridCell.rowType === 'group') {
          const nodeColors = ['BEDFE6', 'C9ECD7'];
          Object.assign(excelCell, {
            fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: nodeColors[gridCell.groupIndex] } },
          });
        }
        if (gridCell.rowType === 'groupFooter' && excelCell.value) {
          Object.assign(excelCell.font, { italic: true });
        }
      },
    }).then((cellRange) => {
      // header
      worksheet.getRow(2).height = 20;
      worksheet.mergeCells(2, 1, 2, 4);
      Object.assign(worksheet.getRow(2).getCell(1), {
        value: 'Sales amounts report',
        font: { bold: true, size: 16 },
        alignment: { horizontal: 'center' },
      });
      // footer
      const currentRowIndex = cellRange.to.row + 2;
      worksheet.mergeCells(currentRowIndex, 1, currentRowIndex, 4);
      worksheet.getRow(currentRowIndex).getCell(1).value = 'For demonstration purposes only';
      Object.assign(worksheet.getRow(currentRowIndex).getCell(1), {
        font: { italic: true },
        alignment: { horizontal: 'right' },
      });
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
      });
    });
    e.cancel = true;
  }

  onCellPrepared(e) {
    if (e.rowType === 'data') {
      if (e.data.OrderDate < new Date(2014, 2, 3)) {
        e.cellElement.style.color = '#AAAAAA';
      }
      if (e.data.SaleAmount > 15000) {
        if (e.column.dataField === 'OrderNumber') {
          e.cellElement.style.fontWeight = 'bold';
        }
        if (e.column.dataField === 'SaleAmount') {
          e.cellElement.style.backgroundColor = '#FFBB00';
          e.cellElement.style.color = '#000000';
        }
      }
    }
    if (e.rowType === 'group') {
      const nodeColors = ['#BEDFE6', '#C9ECD7'];
      e.cellElement.style.backgroundColor = nodeColors[e.row.groupIndex];
      e.cellElement.style.color = '#000';
      if (e.cellElement.firstChild && e.cellElement.firstChild.style) e.cellElement.firstChild.style.color = '#000';
    }
    if (e.rowType === 'groupFooter') {
      e.cellElement.style.fontStyle = 'italic';
    }
  }
}

export default App;
