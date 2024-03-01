import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, CatBreed } from './app.service';

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
  catBreedsData: CatBreed[];

  constructor(service: Service) {
    this.catBreedsData = service.getCatBreedsData();
  }

  pointClick(e: any) {
    const point = e.target;
    if (point.isSelected()) {
      point.clearSelection();
    } else {
      point.select();
    }
  }

  done(e: any) {
    e.component.getSeriesByPos(0).getPointsByArg('Siamese')[0].select();
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
