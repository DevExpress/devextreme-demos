import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';

import { Service, Employee } from './app.service';

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
})
export class AppComponent {
  employees: Employee[];

  selectedRowKeys: any[] = [];

  recursiveSelectionEnabled = false;

  selectedEmployeeNames = 'Nobody has been selected';

  selectionMode = 'all';

  constructor(service: Service) {
    this.employees = service.getEmployees();
  }

  onSelectionChanged(e: any) {
    const selectedData: Employee[] = e.component.getSelectedRowsData(this.selectionMode);
    this.selectedEmployeeNames = this.getEmployeeNames(selectedData);
  }

  onOptionsChanged(e: any) {
    this.selectedRowKeys = [];
  }

  getEmployeeNames(employees: Employee[]) {
    if (employees.length > 0) {
      return employees.map((employee) => employee.Full_Name).join(', ');
    }
    return 'Nobody has been selected';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeListModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
