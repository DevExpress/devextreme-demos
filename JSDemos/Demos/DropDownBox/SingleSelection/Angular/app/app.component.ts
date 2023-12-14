import {
  NgModule, Component, ViewChild, enableProdMode, ChangeDetectionStrategy, ChangeDetectorRef,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import {
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxDataGridModule,
  DxTreeViewComponent,
} from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { DxDropDownBoxTypes } from 'devextreme-angular/ui/drop-down-box';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: DxTreeViewComponent;

  treeDataSource: CustomStore;

  gridDataSource: CustomStore;

  isTreeBoxOpened = false;

  isGridBoxOpened = false;

  gridBoxValue = [3];

  treeBoxValue: string | string[] = '1_1';

  gridColumns = ['CompanyName', 'City', 'Phone'];

  constructor(private httpClient: HttpClient, private ref: ChangeDetectorRef) {
    this.treeDataSource = this.makeAsyncDataSource(this.httpClient, 'treeProducts.json');
    this.gridDataSource = this.makeAsyncDataSource(this.httpClient, 'customers.json');
  }

  makeAsyncDataSource(http: HttpClient, jsonFile: string) {
    return new CustomStore({
      loadMode: 'raw',
      key: 'ID',
      load() {
        return lastValueFrom(http.get(`../../../../data/${jsonFile}`));
      },
    });
  }

  syncTreeViewSelection() {
    if (!this.treeView) return;

    if (this.treeBoxValue) {
      this.treeView.instance.selectItem(this.treeBoxValue);
    } else {
      this.treeView.instance.unselectAll();
    }
  }

  treeView_itemSelectionChanged(e: DxTreeViewTypes.ItemSelectionChangedEvent) {
    this.treeBoxValue = e.component.getSelectedNodeKeys();
  }

  gridBox_displayExpr = ({ CompanyName, Phone }) => CompanyName && `${CompanyName} <${Phone}>`;

  onTreeBoxOptionChanged(e: DxDropDownBoxTypes.OptionChangedEvent) {
    if (e.name === 'value') {
      this.isTreeBoxOpened = false;
      this.ref.detectChanges();
    }
  }

  onGridBoxOptionChanged(e: DxDropDownBoxTypes.OptionChangedEvent) {
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
      this.ref.detectChanges();
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeViewModule,
    DxDropDownBoxModule,
    HttpClientModule,
    DxDataGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
