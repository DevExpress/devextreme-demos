import React from 'react';
import Button from 'devextreme-react/button';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import DataGrid, { Column } from 'devextreme-react/data-grid';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';
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
  priceGridRef: any;

  ratingGridRef: any;

  constructor(props) {
    super(props);

    this.priceGridRef = React.createRef();
    this.ratingGridRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="exportContainer">
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button
            text="Export multiple grids"
            icon="xlsxfile"
            onClick={this.exportGrids}
          />
        </div>
        // @ts-expect-error TS(2786): 'TabPanel' cannot be used as a JSX component.
        <TabPanel id="tabPanel" deferRendering={false}>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item title="Price">
            // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
            <DataGrid id="priceDataGrid" ref={this.priceGridRef} dataSource={priceDataSource} showBorders={true} rowAlternationEnabled={true}>
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_ID" caption="ID" width={50} />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Name" caption="Name" />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Sale_Price" caption="Sale Price" dataType="number" format="currency" />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Retail_Price" caption="Retail Price" dataType="number" format="currency" />
            </DataGrid>
          </Item>
          // @ts-expect-error TS(2786): 'Item' cannot be used as a JSX component.
          <Item title="Rating">
            // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
            <DataGrid id="ratingDataGrid" ref={this.ratingGridRef} dataSource={ratingDataSource} showBorders={true} rowAlternationEnabled={true}>
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_ID" caption="ID" width={50} />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Name" caption="Name" />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Consumer_Rating" caption="Rating" />
              // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
              <Column dataField="Product_Category" caption="Category" />
            </DataGrid>
          </Item>
        </TabPanel>
      </div>
    );
  }

  exportGrids = () => {
    const context = this;
    const workbook = new Workbook();
    const priceSheet = workbook.addWorksheet('Price');
    const ratingSheet = workbook.addWorksheet('Rating');

    priceSheet.getRow(2).getCell(2).value = 'Price';
    priceSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    ratingSheet.getRow(2).getCell(2).value = 'Rating';
    ratingSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    exportDataGrid({
      worksheet: priceSheet,
      component: context.priceDataGrid,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        context.setAlternatingRowsBackground(gridCell, excelCell);
      },
    }).then(() => exportDataGrid({
      worksheet: ratingSheet,
      component: context.ratingDataGrid,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        context.setAlternatingRowsBackground(gridCell, excelCell);
      },
    })).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
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
