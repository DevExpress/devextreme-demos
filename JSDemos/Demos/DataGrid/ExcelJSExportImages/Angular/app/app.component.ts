import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Service, Employees } from './app.service';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
// Our demo infrastructure requires us to use 'file-saver-es'. We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service]
})

export class AppComponent {
  employees: Employees[];
  
  constructor(private service: Service) {
    this.employees = service.getEmployess();
  }
  
  onExporting(e) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');
    
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      topLeftCell: { row: 2, column: 2 },
      autoFilterEnabled: true,
      customizeCell: ({ gridCell, excelCell }) => {
        if(gridCell.rowType === "data") {
          if(gridCell.column.dataField === "Picture") {
            excelCell.value = undefined;
            
            const image = workbook.addImage({
              base64: gridCell.value,
              extension: 'png',
            });
            
            worksheet.getRow(excelCell.row).height = 90;
            worksheet.addImage(image, {
              tl: { col: excelCell.col - 1, row: excelCell.row - 1 },
              br: { col: excelCell.col, row: excelCell.row }
            });
          }
        }
      }
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
      });
    });
    e.cancel = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);