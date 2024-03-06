import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule } from 'devextreme-angular';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

const url = 'https://js.devexpress.com/Demos/Mvc/api/RowReordering';

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})
export class AppComponent {
  tasksStore: any;

  employeesStore: any;

  constructor() {
    this.tasksStore = AspNetData.createStore({
      key: 'ID',
      loadUrl: `${url}/Tasks`,
      updateUrl: `${url}/UpdateTask`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.employeesStore = AspNetData.createStore({
      key: 'ID',
      loadUrl: `${url}/Employees`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });

    this.onReorder = this.onReorder.bind(this);
  }

  onReorder(e) {
    e.promise = this.processReorder(e);
  }

  async processReorder(e) {
    const visibleRows = e.component.getVisibleRows();
    const newOrderIndex = visibleRows[e.toIndex].data.OrderIndex;

    await this.tasksStore.update(e.itemData.ID, { OrderIndex: newOrderIndex });
    await e.component.refresh();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
