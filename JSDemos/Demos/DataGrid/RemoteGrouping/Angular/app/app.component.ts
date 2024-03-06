import {
  NgModule, Component, enableProdMode, ChangeDetectionStrategy,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule } from 'devextreme-angular';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  dataSource: any;

  constructor() {
    this.dataSource = AspNetData.createStore({
      key: 'Id',
      loadUrl: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
    });
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
