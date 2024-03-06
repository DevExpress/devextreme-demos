import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

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
  tasksData: any;

  employeesData: any;

  statusesData: Array<string>;

  constructor() {
    const url = 'https://js.devexpress.com/Demos/Mvc/api/TreeListTasks';

    this.tasksData = AspNetData.createStore({
      key: 'Task_ID',
      loadUrl: `${url}/Tasks`,
      insertUrl: `${url}/InsertTask`,
      updateUrl: `${url}/UpdateTask`,
      deleteUrl: `${url}/DeleteTask`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.employeesData = AspNetData.createStore({
      key: 'ID',
      loadUrl: `${url}/TaskEmployees`,
    });

    this.statusesData = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed',
    ];
  }

  initNewRow(e) {
    e.data.Task_Status = 'Not Started';
    e.data.Task_Start_Date = new Date();
    e.data.Task_Due_Date = new Date();
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
