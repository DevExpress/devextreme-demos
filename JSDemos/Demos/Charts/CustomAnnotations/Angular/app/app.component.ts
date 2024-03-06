import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, State } from './app.service';

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
  populationData: State[];

  pipe: any = new DecimalPipe('en-US');

  constructor(service: Service) {
    this.populationData = service.getPopulationData();
  }

  getImagePath(annotation) {
    const name = annotation.argument.replace(/\s/, '');
    return `../../../../images/flags/${name}.svg`;
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
