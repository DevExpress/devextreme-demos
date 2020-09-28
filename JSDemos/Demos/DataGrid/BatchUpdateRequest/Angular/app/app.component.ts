import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { DxDataGridModule } from 'devextreme-angular';
import * as AspNetData from "devextreme-aspnet-data-nojquery";

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

const URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    preserveWhitespaces: true
})
export class AppComponent {
    dataSource: any = [];

    constructor(private http: HttpClient) {
        this.dataSource = AspNetData.createStore({
            key: "OrderID",
            loadUrl: URL + "/Orders",
            onBeforeSend: function (method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        });

        this.onSaving = this.onSaving.bind(this);
    }

    onSaving(e: any) {
        e.cancel = true;

        if(e.changes.length) {
            e.promise = this.sendBatchRequest(URL + "/Batch", e.changes).then(() => {
                e.component.refresh().done(() => {
                    e.component.cancelEditData();
                });
            });
        }
    }

    sendBatchRequest(url: string, changes: any): any {
        let result = this.http.post(url, JSON.stringify(changes), { withCredentials: true, headers: { "Content-Type": "application/json" } });

        return result
            .toPromise()
            .catch(e => {
                throw e && e.error && e.error.Message;
            });
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule,
        HttpClientModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);