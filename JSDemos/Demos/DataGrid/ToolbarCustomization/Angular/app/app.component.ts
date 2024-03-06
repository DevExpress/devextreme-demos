import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxDataGridComponent,
  DxTemplateModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';
import query from 'devextreme/data/query';
import { Service, Order } from './app.service';

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
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;

  orders: Order[];

  expandAll = true;

  totalCount: number;

  groupingValues: any[];

  constructor(service: Service) {
    this.orders = service.getOrders();
    this.totalCount = this.getGroupCount('CustomerStoreState');

    this.groupingValues = [{
      value: 'CustomerStoreState',
      text: 'Grouping by State',
    }, {
      value: 'Employee',
      text: 'Grouping by Employee',
    }];
  }

  getGroupCount(groupField) {
    return query(this.orders)
      .groupBy(groupField)
      .toArray().length;
  }

  toggleGroupColumn(e) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.totalCount = this.getGroupCount(e.value);
  }

  toggleExpandAll() {
    this.expandAll = !this.expandAll;
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
