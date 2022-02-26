import React from 'react';
import DataGrid, { Column, Export } from 'devextreme-react/data-grid';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import service from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.dataGridRef = React.createRef();
    this.employees = service.getEmployees();
    this.onExporting = this.onExporting.bind(this);
  }

  render() {
    return (
      <div>
        <DataGrid
          id="gridContainer"
          ref={this.dataGridRef}
          dataSource={this.employees}
          keyExpr="ID"
          showBorders={true}
          showRowLines={true}
          showColumnLines={false}>

          <Column dataField="Picture" width={90} cellRender={this.renderGridCell} />
          <Column dataField="FirstName" />
          <Column dataField="LastName" />
          <Column dataField="Position" />
          <Column dataField="BirthDate" dataType="date" />
          <Column dataField="HireDate" dataType="date" />
          
          <Toolbar>
            <Item location="after">
              <Button
                icon='exportpdf'
                onClick={exportGrid}
              />
            </Item>
          </Toolbar>
        </DataGrid>
      </div>
    );
  }

exportGrids = () => {
    const doc = new jsPDF();

    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: dataGrid,
      margin: 10,
      topLeft: { x: 0, y: 5 },
      columnWidths: [30, 30, 30, 30, 30, 30],
      onRowExporting: (arg) => {
        const isHeader = arg.rowCells[0].text === 'Picture';
        if (!isHeader) {
          arg.rowHeight = 40;
        }
      },
      customizeCell: (arg) => {
        if (arg.gridCell.rowType === 'data' && arg.gridCell.column.dataField === 'Picture') {
          arg.pdfCell.text = '';
        }
      },
      customDrawCell: (arg) => {
        if (arg.gridCell.rowType === 'data' && arg.gridCell.column.dataField === 'Picture') {
          doc.addImage(arg.gridCell.value, 'PNG', arg.rect.x, arg.rect.y, arg.rect.w, arg.rect.h);
          arg.cancel = true;
        }
      },
    }).then(() => {
      doc.save('DataGrid.pdf');
    });
  }

  renderGridCell(cellData) {
    return (<div><img src={cellData.value}></img></div>);
  }
}

export default App;
