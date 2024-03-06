import {
  NgModule, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Order, Service } from './app.service';

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
})
export class AppComponent {
  orders: Order[];

  constructor(private service: Service) {
    this.orders = service.getOrders();
  }

  calculateSelectedRow(options) {
    if (options.name === 'SelectedRowsSummary') {
      if (options.summaryProcess === 'start') {
        options.totalValue = 0;
      }

      const isRowSelected = options.component.isRowSelected(options.value?.ID);

      if (options.summaryProcess === 'calculate' && isRowSelected) {
        options.totalValue += options.value.SaleAmount;
      }
    }
  }

  onSelectionChanged(e) {
    e.component.refresh(true);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
