import React from 'react';
import DataGrid, {
  Column, Export, Summary, GroupPanel, Grouping, SortByGroupSummaryInfo, TotalItem,
} from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

import service from './data.js';

class App extends React.Component {
  companies: any;

  constructor(props) {
    super(props);
    this.companies = service.getCompanies();
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
        <DataGrid
          id="gridContainer"
          dataSource={this.companies}
          keyExpr="ID"
          showBorders={true}
          onExporting={this.onExporting}>

          // @ts-expect-error TS(2786): 'GroupPanel' cannot be used as a JSX component.
          <GroupPanel visible={true} />
          // @ts-expect-error TS(2786): 'Grouping' cannot be used as a JSX component.
          <Grouping autoExpandAll={true} />
          // @ts-expect-error TS(2786): 'SortByGroupSummaryInfo' cannot be used as a JSX c... Remove this comment to see the full error message
          <SortByGroupSummaryInfo summaryItem="count" />

          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Name" width={190} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Address" width={200} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="City" />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="State" groupIndex={0} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Phone" format={this.phoneNumberFormat} />
          // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
          <Column dataField="Website" caption="" alignment="center" width={100} cellRender={this.renderGridCell} />

          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />

          // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
          <Summary>
            // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
            <TotalItem
              // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; displ... Remove this comment to see the full error message
              column="Name"
              summaryType="count"
              displayFormat="Total count: {0} companies"
            />
          </Summary>
        </DataGrid>
      </div>
    );
  }

  renderGridCell(data) {
    return <a href={ data.text } target='_blank' rel='noopener noreferrer'>Website</a>;
  }

  phoneNumberFormat(value) {
    const USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);

    return `(${USNumber[1]}) ${USNumber[2]}-${USNumber[3]}`;
  }

  onExporting(e) {
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
}

export default App;
