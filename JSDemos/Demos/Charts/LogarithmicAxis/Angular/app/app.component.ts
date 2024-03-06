import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxChartModule } from 'devextreme-angular';

import { Service, RelativeMass } from './app.service';

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
  relativeMasses: RelativeMass[];

  constructor(service: Service) {
    this.relativeMasses = service.getRelativeMasses();
  }

  customizePoint = (arg: any) => {
    let color; let
      hoverStyle;
    switch (arg.data.type) {
      case 'Star':
        color = 'red';
        hoverStyle = { border: { color: 'red' } };
        break;
      case 'Satellite':
        color = 'gray';
        hoverStyle = { border: { color: 'gray' } };
    }
    return { color, hoverStyle };
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
