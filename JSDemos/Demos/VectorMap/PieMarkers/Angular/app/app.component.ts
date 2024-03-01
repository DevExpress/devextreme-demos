import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { FeatureCollection, Service } from './app.service';

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
  worldMap: any = mapsData.world;

  markers: FeatureCollection;

  names: string[];

  constructor(service: Service) {
    this.markers = service.getMarkers();
    this.names = service.getNames();
    this.customizeText = this.customizeText.bind(this);
  }

  customizeText(arg) {
    return this.names[arg.index];
  }

  customizeTooltip(arg) {
    if (arg.layer.type === 'marker') {
      return {
        text: arg.attribute('tooltip'),
      };
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxVectorMapModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
