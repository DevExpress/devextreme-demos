import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule, DxCheckBoxModule } from 'devextreme-angular';

import { Service, Employee } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service]
})
export class AppComponent {
    employees: Employee[];
    selectedRowKeys: any[] = [];
    recursiveSelectionEnabled = false;
    selectedEmployeeNames: string = 'Nobody has been selected';

    constructor(service: Service) {
        this.employees = service.getEmployees();
    }

    onSelectionChanged(e: any) {
        const employees: Employee[] = e.component.getSelectedRowsData("all");
        this.selectedEmployeeNames = this.getEmployeeNames(employees);
    }

    onValueChanged(e: any) {
        this.selectedRowKeys = [];
    }

    getEmployeeNames(employees: Employee[]) {
        if (employees.length > 0) {
            return employees.map(employee => employee.Full_Name).join(", ");
        } else {
            return 'Nobody has been selected';
        }
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxTreeListModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);