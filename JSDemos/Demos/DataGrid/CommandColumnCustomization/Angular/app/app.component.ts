import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Service, Employee, State } from './app.service';

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
  employees: Employee[];

  states: State[];

  constructor(private service: Service) {
    this.employees = service.getEmployees();
    this.states = service.getStates();

    this.onCloneIconClick = this.onCloneIconClick.bind(this);
  }

  private static isChief(position: string) {
    return position && ['CEO', 'CMO'].indexOf(position.trim().toUpperCase()) >= 0;
  }

  isCloneIconVisible({ row }: { row: Record<string, unknown> }) {
    return !row.isEditing;
  }

  isCloneIconDisabled({ row }: { row: Record<string, unknown> }) {
    return AppComponent.isChief((row.data as Record<string, string>).Position);
  }

  isDeleteIconVisible({ row }: { row: Record<string, unknown> }) {
    return !AppComponent.isChief((row.data as Record<string, string>).Position);
  }

  onRowValidating(e: DxDataGridTypes.RowValidatingEvent) {
    const position = e.newData.Position as string;

    if (AppComponent.isChief(position)) {
      e.errorText = `The company can have only one ${position.toUpperCase()}. Please choose another position.`;
      e.isValid = false;
    }
  }

  onEditorPreparing(e: DxDataGridTypes.EditorPreparedEvent & { editorOptions: Record<string, unknown> }) {
    if (e.parentType === 'dataRow' && e.dataField === 'Position') {
      e.editorOptions.readOnly = AppComponent.isChief(e.value);
    }
  }

  onCloneIconClick(e: DxDataGridTypes.ColumnButtonClickEvent) {
    const clonedItem = { ...e.row.data, ID: this.service.getMaxID() };

    this.employees.splice(e.row.rowIndex, 0, clonedItem);
    e.event.preventDefault();
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
