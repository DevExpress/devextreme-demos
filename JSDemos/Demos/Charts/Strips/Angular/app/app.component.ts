import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';
import { DxChartTypes } from 'devextreme-angular/ui/chart';
import { Service, Temperature } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const customizeText = ({ valueText }: Parameters<DxChartTypes.ArgumentAxisLabel['customizeText']>[0]) => `${valueText}&#176F`;

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
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

  customizePoint = ({ value }: Parameters<DxChartTypes.Properties['customizePoint']>[0]) => {
    if (value > this.highAverage) {
      return { color: this.highAverageColor };
    } if (value < this.lowAverage) {
      return { color: this.lowAverageColor };
    }
  };

  customizeLabel = ({ value }: Parameters<DxChartTypes.Properties['customizeLabel']>[0]) => {
    if (value > this.highAverage) {
      return getLabelsSettings(this.highAverageColor);
    } if (value < this.lowAverage) {
      return getLabelsSettings(this.lowAverageColor);
    }
  };

  customizeText = customizeText;
}

function getLabelsSettings(backgroundColor: string) {
  return {
    visible: true,
    backgroundColor,
    customizeText,
  };
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
