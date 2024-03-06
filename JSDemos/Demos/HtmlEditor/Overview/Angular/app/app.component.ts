import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxHtmlEditorModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';

import { Service, TabConfig } from './app.service';

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
  isMultiline = true;

  valueContent: string;

  tabs: TabConfig[];

  currentTab: string[];

  constructor(service: Service) {
    this.valueContent = service.getMarkup();
    this.tabs = service.getTabsData();
    this.currentTab = this.tabs[2].value;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxHtmlEditorModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
