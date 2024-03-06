import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxButtonModule, DxTabPanelModule, DxDataGridModule, DxDataGridComponent,
} from 'devextreme-angular';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';

import 'devextreme/data/odata/store';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})

export class AppComponent {
  @ViewChild('priceDataGrid', { static: false }) priceDataGrid: DxDataGridComponent;

  @ViewChild('ratingDataGrid', { static: false }) ratingDataGrid: DxDataGridComponent;

  priceDataSource: any;

  ratingDataSource: any;

  constructor() {
    this.priceDataSource = {
      store: {
        type: 'odata',
        version: 2,
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: ['Product_ID', 'Product_Name', 'Product_Sale_Price', 'Product_Retail_Price'],
      filter: ['Product_ID', '<', 10],
    };

    this.ratingDataSource = {
      store: {
        type: 'odata',
        version: 2,
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: ['Product_ID', 'Product_Name', 'Product_Consumer_Rating', 'Product_Category'],
      filter: ['Product_ID', '<', 10],
    };
  }

  setAlternatingRowsBackground(dataGrid, gridCell, pdfCell) {
    if (gridCell.rowType === 'data') {
      const rowIndex = dataGrid.getRowIndexByKey(gridCell.data.Product_ID);
      if (rowIndex % 2 === 0) {
        pdfCell.backgroundColor = '#D3D3D3';
      }
    }
  }

  exportGrids() {
    const context = this;
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: context.priceDataGrid.instance,
      topLeft: { x: 7, y: 5 },
      columnWidths: [20, 50, 50, 50],
      customizeCell: ({ gridCell, pdfCell }) => {
        context.setAlternatingRowsBackground(context.priceDataGrid.instance, gridCell, pdfCell);
      },
    }).then(() => {
      doc.addPage();
      exportDataGrid({
        jsPDFDocument: doc,
        component: context.ratingDataGrid.instance,
        topLeft: { x: 7, y: 5 },
        columnWidths: [20, 50, 50, 50],
        customizeCell: ({ gridCell, pdfCell }) => {
          context.setAlternatingRowsBackground(context.ratingDataGrid.instance, gridCell, pdfCell);
        },
      }).then(() => {
        doc.save('MultipleGrids.pdf');
      });
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxButtonModule,
    DxTabPanelModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
