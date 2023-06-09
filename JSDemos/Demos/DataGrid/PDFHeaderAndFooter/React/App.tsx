import React from 'react';

import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';

import { countries } from './data.js';

const gdpFormat = {
  type: 'percent',
  precision: 1,
};

const exportFormats = ['pdf'];

export default function App() {
  const onExporting = React.useCallback((e) => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();
    const lastPoint = { x: 0, y: 0 };

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      topLeft: { x: 1, y: 15 },
      columnWidths: [30, 20, 30, 15, 22, 22, 20, 20],
      customDrawCell({ rect }) {
        if (lastPoint.x < rect.x + rect.w) {
          lastPoint.x = rect.x + rect.w;
        }
        if (lastPoint.y < rect.y + rect.h) {
          lastPoint.y = rect.y + rect.h;
        }
      },
    }).then(() => {
      const header = 'Country Area, Population, and GDP Structure';
      const pageWidth = doc.internal.pageSize.getWidth();
      doc.setFontSize(15);
      const headerWidth = doc.getTextDimensions(header).w;
      doc.text(header, (pageWidth - headerWidth) / 2, 20);

      const footer = 'www.wikipedia.org';
      doc.setFontSize(9);
      doc.setTextColor('#cccccc');
      const footerWidth = doc.getTextDimensions(footer).w;
      doc.text(footer, (lastPoint.x - footerWidth), lastPoint.y + 5);

      doc.save('Companies.pdf');
    });
  });

  return (
    // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
    <DataGrid
      dataSource={countries}
      keyExpr="ID"
      showBorders={true}
      onExporting={onExporting}>

      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} formats={exportFormats} />
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
