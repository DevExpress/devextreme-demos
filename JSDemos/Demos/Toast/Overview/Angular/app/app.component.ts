import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule, DxToastModule } from 'devextreme-angular';

import { Product, Service } from './app.service';

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
  products: Product[];

  isVisible = false;

  type = 'info';

  message = '';

  constructor(service: Service) {
    this.products = service.getProducts();
  }

  checkAvailable(e, product) {
    const type = e.value ? 'success' : 'error';
    const text = product.Name + (e.value ? ' is available' : ' is not available');

    this.type = type;
    this.message = text;
    this.isVisible = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxCheckBoxModule,
    DxToastModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
