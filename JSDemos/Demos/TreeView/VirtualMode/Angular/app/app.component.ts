import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTreeViewModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  moduleId: __moduleName,
})
export class AppComponent {
  dataSource: any;

  constructor() {
    this.dataSource = new DataSource({
      store: new ODataStore({
        version: 2,
        url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/HierarchicalItems',
      }),
    });
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeViewModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
