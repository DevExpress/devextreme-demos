import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import { Employee, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
moduleId: __moduleName,
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  employees: Employee[];

  searchEnabled: boolean;

  editorOptions: any;

  allowSelectAll: boolean;

  selectByClick: boolean;

  recursive: boolean;

  columnChooserModes: any;

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.searchEnabled = true;
    this.editorOptions = { placeholder: 'Search column' };
    this.allowSelectAll = true;
    this.selectByClick = true;
    this.recursive = true;
    this.columnChooserModes = [{
      key: 'dragAndDrop',
      name: 'Drag and drop',
    }, {
      key: 'select',
      name: 'Select',
    }];
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeListModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
