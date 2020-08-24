
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { Service, Country } from './app.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';
/*
  // Use this import for codeSandBox
  import * as ExcelJS from "exceljs/dist/exceljs.min.js";
  import * as FileSaver from "file-saver";
*/

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
  countries: Country[];
  
  constructor(service: Service) {
    this.countries = service.getCountries();
  }

  onExporting(e) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('CountriesPopulation');
    
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      topLeftCell: { row: 4, column: 1 }
    }).then(function(cellRange) {
      // header
      // https://github.com/exceljs/exceljs#rows
      const headerRow = worksheet.getRow(2);
      headerRow.height = 30; 
      // https://github.com/exceljs/exceljs#merged-cells
      worksheet.mergeCells(2, 1, 2, 8);
      
      // https://github.com/exceljs/exceljs#value-types
      headerRow.getCell(1).value = 'Country Area, Population, and GDP Structure';
      // https://github.com/exceljs/exceljs#fonts
      headerRow.getCell(1).font = { name: 'Segoe UI Light', size: 22 };
      // https://github.com/exceljs/exceljs#alignment
      headerRow.getCell(1).alignment = { horizontal: 'center' };
      
      // footer
      const footerRowIndex = cellRange.to.row + 2;
      const footerRow = worksheet.getRow(footerRowIndex);
      worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);
      
      footerRow.getCell(1).value = 'www.wikipedia.org';
      footerRow.getCell(1).font = { color: { argb: 'BFBFBF' }, italic: true };
      footerRow.getCell(1).alignment = { horizontal: 'right' };
    }).then(function() {
      // https://github.com/exceljs/exceljs#writing-xlsx
      workbook.xlsx.writeBuffer().then(function(buffer) {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'CountriesPopulation.xlsx');
      });
    });
    e.cancel = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);