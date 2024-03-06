import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule } from 'devextreme-angular';

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
})
export class AppComponent {
  employees: Employee[];

  lookupData: any;

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.lookupData = {
      store: this.employees,
      sort: 'Full_Name',
    };
  }

  editorPreparing(e) {
    if (e.dataField === 'Head_ID' && e.row.data.ID === 1) {
      e.editorOptions.disabled = true;
      e.editorOptions.value = null;
    }
  }

  initNewRow(e) {
    e.data.Head_ID = 1;
  }

  allowDeleting(e) {
    return e.row.data.ID !== 1;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeListModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
