import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { DxFilterBuilderTypes } from 'devextreme-angular/ui/filter-builder';
import { PositionConfig } from 'devextreme/animation/position';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested/header-filter';
import { Order, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

const getOrderDay = function ({ OrderDate }): number {
  return (new Date(OrderDate)).getDay();
};

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  dataSource: Order[];

  filterValue: Array<string[] | string>;

  customOperations: DxFilterBuilderTypes.CustomOperation[];

  popupPosition: PositionConfig;

  saleAmountHeaderFilter: DxoHeaderFilterComponent['dataSource'];

  constructor(service: Service) {
    this.dataSource = service.getOrders();
    this.popupPosition = {
      of: window, at: 'top', my: 'top', offset: { y: 10 },
    };
    this.filterValue = [
      ['Employee', '=', 'Clark Morgan'],
      'and',
      ['OrderDate', 'weekends'],
    ];
    this.customOperations = [{
      name: 'weekends',
      caption: 'Weekends',
      dataTypes: ['date'],
      icon: 'check',
      hasValue: false,
      calculateFilterExpression() {
        return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
      },
    }];

    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
  }

  onInitialized(e) {
    e.component.columnOption('SaleAmount', {
      editorOptions: {
        format: 'currency',
        showClearButton: true,
      },
    });
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
