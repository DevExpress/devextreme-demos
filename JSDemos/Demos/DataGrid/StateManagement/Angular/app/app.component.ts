import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

import { DxDataGridModule } from 'devextreme-angular';
import applyChanges from 'devextreme/data/apply_changes';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

var URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    preserveWhitespaces: true
})
export class AppComponent {
    dataSource: any = [];
    changes: any = [];
    editRowKey: any = null;

    constructor(private http: HttpClient) {
        this.sendRequest(URL + "/Orders").then((data: any) => {
            this.dataSource = data;
        });
        this.onSaving = this.onSaving.bind(this);
    }

    onSaving(e: any) {
        e.cancel = true;

        var change = e.changes[0];

        if (change) {
            e.promise = this.sendChange(URL, change).then((data: any) => {
                if (change.type === "insert") {
                    change.data = data;
                }                
                this.dataSource = applyChanges(this.dataSource, [change], { keyExpr: "OrderID" });
                this.changes = [];
                this.editRowKey  = null;
            });
        }
    }

    sendChange(url: string, change: any) {
        switch (change.type) {
            case "insert":
                return this.sendRequest(url + "/InsertOrder", "POST", { values: JSON.stringify(change.data) });
            case "update":
                return this.sendRequest(url + "/UpdateOrder", "PUT", { key: change.key, values: JSON.stringify(change.data) });
            case "remove":
                return this.sendRequest(url + "/DeleteOrder", "DELETE", { key: change.key });
        }
    };

    sendRequest(url: string, method: string = "GET", data: any = {}): any {
        let httpParams = new HttpParams({ fromObject: data });
        let httpOptions = { withCredentials: true, body: httpParams };
        let result;

        switch (method) {
            case "GET":
                result = this.http.get(url, httpOptions);
                break;
            case "PUT":
                result = this.http.put(url, httpParams, httpOptions);
                break;
            case "POST":
                result = this.http.post(url, httpParams, httpOptions);
                break;
            case "DELETE":
                result = this.http.delete(url, httpOptions);
                break;
        }

        return result
            .toPromise()
            .then((data: any) => {
                return method === "GET" ? data.data : data;
            })
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