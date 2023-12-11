import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, Temperature } from './app.service';

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
  highAverage = 77;

  lowAverage = 58;

  temperaturesData: Temperature[];

  constructor(service: Service) {
    this.temperaturesData = service.getTemperaturesData();
  }

  customizePoint = ({ value }: { value: number }) => {
    if (value > this.highAverage) {
      return { color: '#ff7c7c', hoverStyle: { color: '#ff7c7c' } };
    } if (value < this.lowAverage) {
      return { color: '#8c8cff', hoverStyle: { color: '#8c8cff' } };
    }
  };

  customizeLabel = ({ value }: { value: number }) => {
    if (value > this.highAverage) {
      return {
        visible: true,
        backgroundColor: '#ff7c7c',
        customizeText: this.customizeText,
      };
    }
  };

  customizeText = ({ valueText }: { valueText: string }) => `${valueText}&#176F`;
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
