import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, Temperature } from './app.service';

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
  highAverageColor = '#ff9b52';

  lowAverageColor = '#6199e6';

  highAverage: number;

  lowAverage: number;

  temperaturesData: Temperature[];

  constructor(service: Service) {
    this.temperaturesData = service.getTemperaturesData();
    const { highAverage, lowAverage } = service.getRangeOfAverageTemperature();
    this.highAverage = highAverage;
    this.lowAverage = lowAverage;
  }

  customizePoint = (arg: any) => {
    if (arg.value > this.highAverage) {
      return { color: this.highAverageColor };
    } if (arg.value < this.lowAverage) {
      return { color: this.lowAverageColor };
    }
  };

  customizeLabel = (arg: any) => {
    if (arg.value > this.highAverage) {
      return getLabelsSettings(this.highAverageColor);
    } if (arg.value < this.lowAverage) {
      return getLabelsSettings(this.lowAverageColor);
    }
  };

  customizeText = customizeText;
}

function getLabelsSettings(backgroundColor: any) {
  return {
    visible: true,
    backgroundColor,
    customizeText,
  };
}

function customizeText(arg: any) {
  return `${arg.valueText}&#176F`;
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
