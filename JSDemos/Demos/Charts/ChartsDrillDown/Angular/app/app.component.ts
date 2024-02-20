import {
  NgModule, Component, ElementRef, enableProdMode,
} from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule, DxButtonModule } from 'devextreme-angular';

import { Service, DataItem } from './app.service';

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
  dataSource: DataItem[];

  colors: string[];

  service: Service;

  isFirstLevel: boolean;

  constructor(service: Service, element: ElementRef) {
    this.dataSource = service.filterData('');
    this.colors = service.getColors();
    this.service = service;
    this.isFirstLevel = true;
  }

  onButtonClick() {
    if (!this.isFirstLevel) {
      this.isFirstLevel = true;
      this.dataSource = this.service.filterData('');
    }
  }

  onPointClick(e) {
    if (this.isFirstLevel) {
      this.isFirstLevel = false;
      this.dataSource = this.service.filterData(e.target.originalArgument);
    }
  }

  customizePoint = () => ({
    color: this.colors[Number(this.isFirstLevel)],
    ...this.isFirstLevel ? {} : {
      hoverStyle: {
        hatching: 'none',
      },
    },
  });
}

@NgModule({
  imports: [
    DxHttpModule,
    BrowserModule,
    BrowserTransferStateModule,
    DxChartModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
