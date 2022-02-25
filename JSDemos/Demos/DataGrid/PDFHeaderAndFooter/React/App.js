import React from 'react';

import DataGrid, { Column, Toolbar, Item } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';
import { jsPDF } from 'jspdf';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';

import { countries } from './data.js';

const gdpFormat = {
  type: 'percent',
  precision: 1,
};

export default function App() {
  const dataGridRef = React.createRef();

  const exportGrid = React.useCallback(() => {
    const doc = new jsPDF();
    const dataGrid = dataGridRef.current.instance;

    const lastPoint = { x: 0, y: 0 };
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: dataGrid,
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
    <DataGrid
      dataSource={countries}
      keyExpr="ID"
      showBorders={true}>

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

      <Toolbar>
        <Item name="groupPanel" />
        <Item location="after">
          <Button
            icon='exportpdf'
            text='Export to PDF'
            onClick={exportGrid}
          />
        </Item>
      </Toolbar>
    </DataGrid>
  );
}
