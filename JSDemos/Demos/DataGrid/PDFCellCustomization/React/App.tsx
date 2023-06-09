import React from 'react';
import DataGrid, {
  Column, Summary, GroupPanel, Grouping, SortByGroupSummaryInfo, TotalItem, Export,
} from 'devextreme-react/data-grid';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';

import { companies } from './data.js';

const exportFormats = ['pdf'];

export default function App() {
  const onExporting = React.useCallback((e) => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      columnWidths: [40, 40, 30, 30, 40],
      customizeCell({ gridCell, pdfCell }) {
        if (gridCell.rowType === 'data' && gridCell.column.dataField === 'Phone') {
          pdfCell.text = pdfCell.text.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (gridCell.rowType === 'group') {
          pdfCell.backgroundColor = '#BEDFE6';
        } else if (gridCell.rowType === 'totalFooter') {
          pdfCell.font.style = 'italic';
        }
      },
      customDrawCell(options) {
        const { gridCell, pdfCell } = options;

        if (gridCell.rowType === 'data' && gridCell.column.dataField === 'Website') {
          options.cancel = true;
          doc.setFontSize(11);
          doc.setTextColor('#0000FF');

          const textHeight = doc.getTextDimensions(pdfCell.text).h;
          doc.textWithLink('website',
            options.rect.x + pdfCell.padding.left,
            options.rect.y + options.rect.h / 2 + textHeight / 2, { url: pdfCell.text });
        }
      },
    }).then(() => {
      doc.save('Companies.pdf');
    });
  });

  const renderGridCell = React.useCallback((data) => (
    <a href={ data.text } target='_blank' rel='noopener noreferrer'>Website</a>
  ), []);

  const phoneNumberFormat = React.useCallback((value) => {
    const USNumber = value.match(/(\d{3})(\d{3})(\d{4})/);
    return `(${USNumber[1]}) ${USNumber[2]}-${USNumber[3]}`;
  }, []);

  return (
    <div>
      // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
      <DataGrid
        id="gridContainer"
        dataSource={companies}
        keyExpr="ID"
        showBorders={true}
        onExporting={onExporting}>

        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} formats={exportFormats} />
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
        <Column dataField="Phone" format={(e) => phoneNumberFormat(e)} />
        // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
        <Column dataField="Website" caption="" alignment="center" width={100} cellRender={(e) => renderGridCell(e)} />

        // @ts-expect-error TS(2786): 'Summary' cannot be used as a JSX component.
        <Summary>
          // @ts-expect-error TS(2786): 'TotalItem' cannot be used as a JSX component.
          <TotalItem
            // @ts-expect-error TS(2322): Type '{ column: string; summaryType: string; displ... Remove this comment to see the full error message
            column="Name"
            summaryType="count"
            displayFormat="Total count: {0}"
          />
        </Summary>
      </DataGrid>
    </div>
  );
}
