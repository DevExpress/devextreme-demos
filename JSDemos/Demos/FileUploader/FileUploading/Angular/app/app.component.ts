import {
  NgModule, Component, enableProdMode, Pipe, PipeTransform,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxCheckBoxModule, DxFileUploaderModule, DxSelectBoxModule,
} from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Pipe({ name: 'demodate' })
export class DemoDatePipe<TArgs, TReturn> implements PipeTransform {
  transform(date: number) {
    return new Date(date);
  }
}

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})
export class AppComponent {
  value: File[] = [];
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxCheckBoxModule,
    DxFileUploaderModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent, DemoDatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
