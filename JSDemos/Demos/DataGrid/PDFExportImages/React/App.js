import React, { useCallback } from 'react';
import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import service from './data.js';

const exportFormats = ['pdf'];

export default function App() {
  const employees = service.getEmployees();

  const onExporting = useCallback(({ component }) => {
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component,
      margin: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
      },
      topLeft: { x: 5, y: 5 },
      columnWidths: [30, 30, 30, 30, 30, 30],
      onRowExporting: useCallback((e) => {
        const isHeader = e.rowCells[0].text === 'Picture';
        if (!isHeader) {
          e.rowHeight = 40;
        }
      }, []),
      customDrawCell: useCallback((e) => {
        if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
          doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
          e.cancel = true;
        }
      }, []),
    }).then(() => {
      doc.save('DataGrid.pdf');
    });
  }, []);

  const renderGridCell = useCallback((cellData) => (
    <div>
      <img src={cellData.value}></img>
    </div>
  ), []);

  return (
    <div>
      <DataGrid
        id="gridContainer"
        dataSource={employees}
        keyExpr="ID"
        showBorders={true}
        showRowLines={true}
        showColumnLines={false}
        onExporting={onExporting}>

        <Export enabled={true} formats={exportFormats} />
        <Column dataField="Picture" width={90} cellRender={renderGridCell} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" />
        <Column dataField="BirthDate" dataType="date" />
        <Column dataField="HireDate" dataType="date" />
      </DataGrid>
    </div>
  );
}