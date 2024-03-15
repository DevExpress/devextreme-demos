import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxPolarChartModule } from 'devextreme-angular';

import { Temperature, Service } from './app.service';

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
  temperaturesData: Temperature[];

  maxDay: Temperature;

  minNight: Temperature;

  constructor(service: Service) {
    this.temperaturesData = service.getTemperaturesData();
    this.maxDay = this.temperaturesData.reduce((prev, current) => (prev.day >= current.day ? prev : current));
    this.minNight = this.temperaturesData.reduce((prev, current) => (prev.night <= current.night ? prev : current));
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxPolarChartModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
