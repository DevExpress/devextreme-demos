import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxDataGridComponent,
  DxButtonModule,
} from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';
import { Service, Employee, State } from './app.service';

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

  dataSource: ArrayStore;

  states: State[];

  selectedItemKeys: any[] = [];

  constructor(service: Service) {
    this.dataSource = new ArrayStore({
      key: 'ID',
      data: service.getEmployees(),
    });
    this.states = service.getStates();
  }

  onSelectionChanged(data: any) {
    this.selectedItemKeys = data.selectedRowKeys;
  }

  deleteRecords() {
    this.selectedItemKeys.forEach((key) => {
      this.dataSource.remove(key);
    });
    this.dataGrid.instance.refresh();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
