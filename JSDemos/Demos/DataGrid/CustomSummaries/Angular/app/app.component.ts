import { NgModule, Component, enableProdMode } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Order, Service } from './app.service';

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
  orders: Order[];

  constructor(private service: Service) {
    this.orders = service.getOrders();
  }

  calculateSelectedRow(options: Parameters<DxDataGridTypes.Summary['calculateCustomSummary']>[0]) {
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

  async onSelectionChanged(e: DxDataGridTypes.SelectionChangedEvent) {
    await e.component.refresh(true);
  }
}

@NgModule({
  imports: [
    DxHttpModule,
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
