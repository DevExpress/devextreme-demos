import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {DxMenuModule, DxSelectBoxModule, DxCheckBoxModule, DxMenuComponent} from 'devextreme-angular';

import { Product, Service } from './app.service';
import {DxMenuTypes} from "devextreme-angular/ui/menu";

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
})
export class AppComponent {
  products: Product[];

  showSubmenuModes = [{
    name: 'onHover' as DxMenuTypes.SubmenuShowMode,
    delay: { show: 0, hide: 500 },
  }, {
    name: 'onClick' as DxMenuTypes.SubmenuShowMode,
    delay: { show: 0, hide: 300 },
  }];

  showFirstSubmenuModes = this.showSubmenuModes[1];

  currentProduct: Product;

  constructor(service: Service) {
    this.products = service.getProducts();
  }

  itemClick(data) {
    const item = data.itemData;

    if (item.price) {
      this.currentProduct = item;
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxMenuModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
