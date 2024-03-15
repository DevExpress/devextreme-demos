import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxButtonModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxTreeListModule, DxTreeListTypes } from 'devextreme-angular/ui/tree-list';
import { Service, Employee } from './app.service';

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
  employees: Employee[];

  editOnkeyPress = true;

  enterKeyActions: DxTreeListTypes.EnterKeyAction[];

  enterKeyDirections: DxTreeListTypes.EnterKeyDirection[];

  enterKeyAction: DxTreeListTypes.EnterKeyAction = 'moveFocus';

  enterKeyDirection: DxTreeListTypes.EnterKeyDirection = 'column';

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.enterKeyActions = service.getEnterKeyActions();
    this.enterKeyDirections = service.getEnterKeyDirections();
  }

  onFocusedCellChanging(e: DxTreeListTypes.FocusedCellChangingEvent) {
    e.isHighlighted = true;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeListModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
