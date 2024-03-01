import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDateRangeBoxModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

const msInDay = 1000 * 60 * 60 * 24;
const now = new Date();

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
moduleId: __moduleName,
})

export class AppComponent {
  startDate: Date = new Date(now.getTime() - msInDay * 3);

  endDate: Date = new Date(now.getTime() + msInDay * 3);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDateRangeBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
