import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Employee, Service } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    providers: [Service]
})
export class AppComponent {
    dataSource: Employee[];
    newRowPositionOptions = ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'];
    newRowPosition = 'viewportTop';
    scrollingModeOptions = ['infinite', 'standard', 'virtual'];
    scrollingMode = 'standard';
    changes = [];

    constructor(service: Service) {
        this.dataSource =  service.generateData(100000);
    }

    addButtonClick(e) {
        this.changes.push({
            type: 'insert',
            insertAfterKey: e.row.key,
        });
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);