import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, ComplaintsWithPercent } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})
export class AppComponent {
  dataSource: ComplaintsWithPercent[];

  constructor(service: Service) {
    this.dataSource = service.getComplaintsData();
  }

  customizeTooltip = (info: any) => ({
    html: `<div><div class='tooltip-header'>${
      info.argumentText}</div>`
                + '<div class=\'tooltip-body\'><div class=\'series-name\'>'
                + `<span class='top-series-name'>${info.points[0].seriesName}</span>`
                + ': </div><div class=\'value-text\'>'
                + `<span class='top-series-value'>${info.points[0].valueText}</span>`
                + '</div><div class=\'series-name\'>'
                + `<span class='bottom-series-name'>${info.points[1].seriesName}</span>`
                + ': </div><div class=\'value-text\'>'
                + `<span class='bottom-series-value'>${info.points[1].valueText}</span>`
                + '% </div></div></div>',
  });

  customizeLabelText = (info: any) => `${info.valueText}%`;
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
