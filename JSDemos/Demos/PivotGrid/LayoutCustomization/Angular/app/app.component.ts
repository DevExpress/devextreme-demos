import { NgModule, Component, enableProdMode } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule, DxCheckBoxModule } from 'devextreme-angular';
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
import { Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  pivotGridDataSource: PivotGridDataSource;

  showTotalsPrior = false;

  rowsDataFieldArea = false;

  treeHeaderLayout = true;

  constructor(service: Service) {
    this.pivotGridDataSource = new PivotGridDataSource({
      fields: [{
        caption: 'Region',
        dataField: 'region',
        expanded: true,
        area: 'row',
      }, {
        caption: 'Country',
        dataField: 'country',
        expanded: true,
        area: 'row',
      }, {
        caption: 'City',
        dataField: 'city',
        area: 'row',
      }, {
        dataField: 'date',
        dataType: 'date',
        area: 'column',
      }, {
        caption: 'Sales',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        format: 'currency',
        area: 'data',
      }, {
        caption: 'Percent',
        dataField: 'amount',
        dataType: 'number',
        summaryType: 'sum',
        summaryDisplayMode: 'percentOfRowGrandTotal',
        area: 'data',
      }],
      store: service.getSales(),
    });
  }
}

@NgModule({
  imports: [
    DxHttpModule,
    BrowserModule,
    BrowserTransferStateModule,
    DxPivotGridModule,
    DxCheckBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
