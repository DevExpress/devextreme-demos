import { NgModule, Component, OnInit, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';

import { DxDataGridModule, DxLoadPanelModule } from 'devextreme-angular';
import { Service, Order } from './app.service';
import { Observable } from 'rxjs';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service],
    preserveWhitespaces: true
})
export class AppComponent implements OnInit {
    orders$: Observable<Order[]>;
    changes: any = [];
    editRowKey: any = null;
    changesText: string = '';
    isLoading: boolean = false;

    constructor(private service: Service) { }

    ngOnInit() {
        this.orders$ = this.service.getOrders();
        this.isLoading = true;
        this.service.loadAll().finally(() => { this.isLoading = false });
    }

    onChangesChange(changes: Array<any>) {
        this.changesText = JSON.stringify(changes.map((change) => ({
            type: change.type,
            key: change.type !== 'insert' ? change.key : undefined,
            data: change.data
        })), null, ' ');
    }

    onSaving(e: any) {
        const change = e.changes[0];

        e.cancel = true;

        if(change) {
            this.isLoading = true;
            e.promise = this.service.saveChange(change)
                .finally(() => { this.isLoading = false; })
                .then(() => {
                    this.editRowKey = null;
                    this.changes = [];
                });
        }
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule,
        DxLoadPanelModule,
        HttpClientModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);