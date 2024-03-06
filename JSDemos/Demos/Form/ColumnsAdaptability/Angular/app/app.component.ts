import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxFormModule, DxCheckBoxModule } from 'devextreme-angular';

import { Employee, Service } from './app.service';

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
  employee: Employee;

  colCountByScreen: Object;

  constructor(service: Service) {
    this.employee = service.getEmployee();
    this.colCountByScreen = {
      md: 4,
      sm: 2,
    };
  }

  screen(width) {
    return width < 720 ? 'sm' : 'md';
  }

  valueChanged(e) {
    if (e.value) {
      this.colCountByScreen = null;
    } else {
      this.colCountByScreen = {
        md: 4,
        sm: 2,
      };
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxCheckBoxModule,
    DxFormModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
