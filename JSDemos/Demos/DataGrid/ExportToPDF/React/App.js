import React from 'react';
import DataGrid, { Column, GroupPanel, Grouping } from 'devextreme-react/data-grid';
import Button from 'devextreme-react/button';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

import { exportDataGrid } from 'devextreme/pdf_exporter';

import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.dataGridRef = React.createRef();
    this.dataSource = service.getEmployees();
    this.exportGrid = this.exportGrid.bind(this);
  }
  render() {
    return (
      <div>
        <Button
          id='exportButton'
          text='Export to PDF'
          onClick={this.exportGrid}
        />
        <DataGrid
          id='gridContainer'
          ref={this.dataGridRef}
          dataSource={this.dataSource}
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
    );
  }

  exportGrid() {
    const doc = new jsPDF('p', 'pt', 'a4');
    exportDataGrid({
      jsPDFDocument: doc,
      component: this.dataGrid
    }).then(function() {
      doc.save('Employees.pdf');
    });
  }

  get dataGrid() {
    return this.dataGridRef.current.instance;
  }
}

export default App;
