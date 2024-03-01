import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxFunnelModule } from 'devextreme-angular';

import { itemInfo, Service } from './app.service';

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
  data: itemInfo[];

  constructor(service: Service) {
    this.data = service.getData();
  }

  customizeText(arg: any) {
    return `<span style='font-size: 28px'>${
      arg.percentText
    }</span><br/>${
      arg.item.argument}`;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxFunnelModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
