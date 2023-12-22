import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxLookupModule, DxLookupTypes } from 'devextreme-angular/ui/lookup';
import { Service, Employee } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  employees: Employee[];

  selectedEmployee: Employee;

  applyValueMode: string;

  applyValueModes: string[];

  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.applyValueMode = 'instantly';
    this.applyValueModes = ['instantly', 'useButtons'];
  }

  valueChanged({ value }: DxLookupTypes.ValueChangedEvent) {
    this.selectedEmployee = value;
  }

  getDisplayExpr = ({ FirstName, LastName }: Record<string, string> = {}) => (FirstName ? `${FirstName} ${LastName}` : undefined);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxLookupModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
