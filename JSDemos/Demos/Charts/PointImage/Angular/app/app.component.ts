import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, IceHockeyStatistics } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'Canadian Men’s National Ice Hockey Team\n at the World Championships';

  iceHockeyStatistics: IceHockeyStatistics[];

  constructor(service: Service) {
    this.iceHockeyStatistics = service.getIceHockeyStatistics();
  }

  customizePoint({ value }) {
    if (value == 1) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-gold.png', width: 20, height: 20 }, visible: true };
    } if (value == 2) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-silver.png', width: 20, height: 20 }, visible: true };
    } if (value == 3) {
      return { image: { url: '../../../../images/Charts/PointImage/icon-medal-bronse.png', width: 20, height: 20 }, visible: true };
    }
  }

  customizeText({ valueText }) {
    if (valueText == 1) {
      return `${valueText}st place`;
    } if (valueText == 2) {
      return `${valueText}nd place`;
    } if (valueText == 3) {
      return `${valueText}rd place`;
    }
    return `${valueText}th place`;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxChartModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
