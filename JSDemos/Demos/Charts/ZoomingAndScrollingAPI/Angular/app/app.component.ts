import {
  NgModule, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxRangeSelectorModule } from 'devextreme-angular';
import { DxChartTypes } from 'devextreme-angular/ui/chart';
import { Service, ZoomingData } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  zoomingData: ZoomingData[];

  visualRange: DxChartTypes.ArgumentAxis['visualRange'] = {};

  constructor(service: Service) {
    this.zoomingData = service.getZoomingData();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxChartModule,
    DxRangeSelectorModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
