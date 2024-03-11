import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextBoxModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  moduleId: __moduleName,
})
export class AppComponent {
  emailValue: string;

  rules: any;

  constructor() {
    this.emailValue = 'smith@corp.com';
    this.rules = { X: /[02-9]/ };
  }

  valueChanged(data) {
    this.emailValue = `${data.value.replace(/\s/g, '').toLowerCase()}@corp.com`;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTextBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
