import React from 'react';
import DataGrid, { Column, GroupPanel, Grouping } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import { exportDataGrid } from 'devextreme/pdf_exporter';

import service from './data.js';

const dataGridRef = React.createRef();
const dataSource = service.getEmployees();

export default function App() {
  function exportGrid() {
    const doc = new jsPDF('p', 'pt', 'a4');
    const dataGrid = dataGridRef.current.instance;

    exportDataGrid({
      jsPDFDocument: doc,
      component: dataGrid
    }).then(() => {
      doc.save('Employees.pdf');
    });
  }

  return (
    <React.Fragment>
      <div>
        <Button
          id='exportButton'
          text='Export to PDF'
          onClick={exportGrid}
        />
        <DataGrid
          id='gridContainer'
          ref={dataGridRef}
          dataSource={dataSource}
          allowColumnReordering={true}
          showBorders={true}
          keyExpr='ID'>

          <GroupPanel visible={true} />
          <Grouping autoExpandAll={true} />

          <Column dataField='FirstName' />
          <Column dataField='LastName' />
          <Column dataField='City' />
          <Column dataField='State' groupIndex={0} />
          <Column dataField='Position' width={130} />
          <Column dataField='BirthDate' width={100} dataType='date' />
          <Column dataField='HireDate' width={100} dataType='date' />
        </DataGrid>
      </div>
    </React.Fragment>
  );
}
