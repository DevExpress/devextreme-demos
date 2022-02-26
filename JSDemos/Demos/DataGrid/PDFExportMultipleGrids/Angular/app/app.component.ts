import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxButtonModule, DxTabPanelModule, DxDataGridModule, DxDataGridComponent,
} from 'devextreme-angular';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';

import 'devextreme/data/odata/store';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
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
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: ['Product_ID', 'Product_Name', 'Product_Sale_Price', 'Product_Retail_Price'],
      filter: ['Product_ID', '<', 10],
    };

    this.ratingDataSource = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: ['Product_ID', 'Product_Name', 'Product_Consumer_Rating', 'Product_Category'],
      filter: ['Product_ID', '<', 10],
    };
  }

  exportGrids(e) {
    const context = this;
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
      component: context.priceDataGrid.instance,
      topLeft: { x: 0, y: 5 },
      columnWidths: [20, 40, 40, 40],
      customizeCell: ({ gridCell, pdfCell }) => {
        setAlternatingRowsBackground(gridCell, pdfCell);
      },
      onRowExporting: (e) => { rowIndex++; }
    }).then(() => {
        doc.addPage();
        rowIndex = -1;
        exportDataGridToPdf({
          jsPDFDocument: doc,
          component: context.ratingDataGrid.instance,
          topLeft: { x: 0, y: 5 },
          columnWidths: [20, 40, 40, 40],
          customizeCell: ({ gridCell, pdfCell }) => {
            setAlternatingRowsBackground(gridCell, pdfCell);
          },
          onRowExporting: (e) => { rowIndex++; }
        }).then(() => {
          doc.save('MultipleGrids.pdf');
        })
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxButtonModule,
    DxTabPanelModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
