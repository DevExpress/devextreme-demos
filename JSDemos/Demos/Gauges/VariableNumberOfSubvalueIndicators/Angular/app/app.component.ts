import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxLinearGaugeModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxCircularGaugeTypes } from 'devextreme-angular/ui/circular-gauge';
import { Service, PowerInfo } from './app.service';

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
  powerInfo: PowerInfo[];

  currentValue: PowerInfo;

  constructor(service: Service) {
    this.powerInfo = service.getPowerInfo();
    this.currentValue = this.powerInfo[0];
  }

  customizeText = ({ valueText }: Parameters<DxCircularGaugeTypes.ScaleLabel['customizeText']>[0]) => `${valueText} kW`;

  customizeTooltip({ index, valueText }) {
    let result = `${valueText} kW`;

    result = (index >= 0)
      ? `Secondary ${index + 1}: ${result}`
      : `Primary: ${result}`;

    return {
      text: result,
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxLinearGaugeModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
