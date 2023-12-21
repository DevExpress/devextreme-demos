import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';
import { DxChartTypes } from 'devextreme-angular/ui/chart';
import { Population, CorrelationDescription, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
})
export class AppComponent {
  title = 'Correlation between Total Population and\n Population with Age over 60';

  dataSource: Population[];

  correlationSource: CorrelationDescription[];

  constructor(service: Service) {
    this.dataSource = service.getPopulationData();
    this.correlationSource = service.getCorrelationSource();
  }

  customizeTooltip = ({
    point, argumentText, valueText, size,
  }: { point: Record<string, unknown>, argumentText: string, valueText: string, size: number }) => ({
    text: `${point.tag}<br/>Total Population: ${argumentText}M<br/>Population with Age over 60: ${valueText}M (${size}%)`,
  });

  argumentCustomizeText = ({ value }: Parameters<DxChartTypes.ArgumentAxisLabel['customizeText']>[0]) => `${value}M`;

  valueCustomizeText = ({ value }: Parameters<DxChartTypes.ValueAxisLabel['customizeText']>[0]) => `${value}M`;

  onSeriesClick({ target: series }: DxChartTypes.SeriesClickEvent) {
    series.isVisible()
      ? series.hide()
      : series.show();
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
