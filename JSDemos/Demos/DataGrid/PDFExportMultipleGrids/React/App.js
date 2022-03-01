import React from 'react';
import Button from 'devextreme-react/button';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';

import 'devextreme/data/odata/store';

const priceDataSource = {
  store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
    key: 'Product_ID',
  },
  select: ['Product_ID', 'Product_Name', 'Product_Sale_Price', 'Product_Retail_Price'],
  filter: ['Product_ID', '<', 10],
};
const ratingDataSource = {
  store: {
    type: 'odata',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
    key: 'Product_ID',
  },
  select: ['Product_ID', 'Product_Name', 'Product_Consumer_Rating', 'Product_Category'],
  filter: ['Product_ID', '<', 10],
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.priceGridRef = React.createRef();
    this.ratingGridRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="exportContainer">
          <Button
            text="Export multiple grids"
            icon="exportpdf"
            onClick={this.exportGrids}
          />
        </div>
        <TabPanel id="tabPanel" deferRendering={false}>
          <Item title="Price">
            <DataGrid id="priceDataGrid" ref={this.priceGridRef} dataSource={priceDataSource} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="Product_ID" caption="ID" width={50} />
              <Column dataField="Product_Name" caption="Name" />
              <Column dataField="Product_Sale_Price" caption="Sale Price" dataType="number" format="currency" />
              <Column dataField="Product_Retail_Price" caption="Retail Price" dataType="number" format="currency" />
            </DataGrid>
          </Item>
          <Item title="Rating">
            <DataGrid id="ratingDataGrid" ref={this.ratingGridRef} dataSource={ratingDataSource} showBorders={true} rowAlternationEnabled={true}>
              <Column dataField="Product_ID" caption="ID" width={50} />
              <Column dataField="Product_Name" caption="Name" />
              <Column dataField="Product_Consumer_Rating" caption="Rating" />
              <Column dataField="Product_Category" caption="Category" />
            </DataGrid>
          </Item>
        </TabPanel>
      </div>
    );
  }

  exportGrids = () => {
    const context = this;
    // eslint-disable-next-line new-cap
    const doc = new jsPDF();

    let rowIndex = -1;
    function setAlternatingRowsBackground(gridCell, pdfCell) {
      if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
        if (rowIndex % 2 === 0) {
          pdfCell.backgroundColor = '#D3D3D3';
        }
      }
    }

    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: context.priceDataGrid,
      topLeft: { x: 0, y: 5 },
      columnWidths: [20, 40, 40, 40],
      customizeCell: ({ gridCell, pdfCell }) => {
        setAlternatingRowsBackground(gridCell, pdfCell);
      },
      onRowExporting: () => { rowIndex += 1; },
    }).then(() => {
      doc.addPage();
      rowIndex = -1;
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: context.ratingDataGrid,
        topLeft: { x: 0, y: 5 },
        columnWidths: [20, 40, 40, 40],
        customizeCell: ({ gridCell, pdfCell }) => {
          setAlternatingRowsBackground(gridCell, pdfCell);
        },
        onRowExporting: () => { rowIndex += 1; },
      }).then(() => {
        doc.save('MultipleGrids.pdf');
      });
    });
  }

  setAlternatingRowsBackground(gridCell, excelCell) {
    if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
      if (excelCell.fullAddress.row % 2 === 0) {
        excelCell.fill = {
          type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' },
        };
      }
    }
  }

  get priceDataGrid() {
    return this.priceGridRef.current.instance;
  }

  get ratingDataGrid() {
    return this.ratingGridRef.current.instance;
  }
}

export default App;
