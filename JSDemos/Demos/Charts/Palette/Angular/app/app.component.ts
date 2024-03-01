import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPieChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { getPalette } from 'devextreme/viz/palette';
import { DataItem, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
moduleId: __moduleName,
  providers: [Service],
  preserveWhitespaces: true,
})

export class AppComponent {
  data: DataItem[];

  paletteCollection: string[];

  paletteExtensionModes: string[];

  paletteExtensionMode: string;

  palette: string;

  constructor(service: Service) {
    this.data = service.getData();
    this.paletteExtensionModes = service.getPaletteExtensionModes();
    this.paletteCollection = service.getPaletteCollection();
    this.palette = this.paletteCollection[0];
    this.paletteExtensionMode = 'blend';
  }

  get baseColors() {
    return getPalette(this.palette).simpleSet;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxPieChartModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
