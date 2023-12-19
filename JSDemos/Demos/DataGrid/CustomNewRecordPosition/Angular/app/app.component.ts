import {
  NgModule, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import Guid from 'devextreme/core/guid';
import CustomStore from 'devextreme/data/custom_store';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Service } from './app.service';

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
  dataSource: CustomStore;

  newRowPosition: DxDataGridTypes.NewRowPosition = 'viewportTop';

  scrollingMode: DxDataGridTypes.DataGridScrollMode = 'standard';

  changes = [];

  editRowKey = null;

  newRowPositionOptions: DxDataGridTypes.NewRowPosition[] = ['first', 'last', 'pageTop', 'pageBottom', 'viewportTop', 'viewportBottom'];

  scrollingModeOptions: DxDataGridTypes.DataGridScrollMode[] = ['standard', 'virtual'];

  constructor(service: Service) {
    this.dataSource = service.getDataSource();
  }

  onAddButtonClick = ({ row }: DxDataGridTypes.ColumnButtonClickEvent) => {
    const key = new Guid().toString();
    this.changes = [{
      key,
      type: 'insert',
      insertAfterKey: row.key,
    }];
    this.editRowKey = key;
  };

  isAddButtonVisible({ row }: { row: Record<string, unknown> }) {
    return !row.isEditing;
  }

  async onRowInserted(e: DxDataGridTypes.RowInsertedEvent) {
    await e.component.navigateToRow(e.key);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
