import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import applyChanges from 'devextreme/data/apply_changes';

export class Order {
    OrderID: number;
    ShipName: string;
    ShipCountry: string;
    ShipCity: string;
    ShipAddress: string;
    OrderDate: string;
    Freight: number;
}

@Injectable()
export class Service {
    private orders$: any = new BehaviorSubject<Order[]>([]);
    private url = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

    constructor(private http: HttpClient) { }

    updateOrders(change: any, data: any) {
        change.data = data;
        const orders = applyChanges(this.orders$.getValue(), [change], { keyExpr: "OrderID" });
        this.orders$.next(orders);
    }

    getOrders() {
        this.http.get(`${this.url}/Orders?skip=700`, { withCredentials: true }).subscribe((data) => {
            this.orders$.next(data["data"]);
        });

        return this.orders$.asObservable();
    }

    async insert(change: any) {
        const httpParams = new HttpParams({ fromObject: { values: JSON.stringify(change.data) } });
        const httpOptions = { withCredentials: true, body: httpParams };
        const data = await this.http.post(`${this.url}/InsertOrder`, httpParams, httpOptions).toPromise();

        this.updateOrders(change, data);

        return data;
    }

    async update(change: any) {
        const httpParams = new HttpParams({ fromObject: { key: change.key, values: JSON.stringify(change.data) } });
        const httpOptions = { withCredentials: true, body: httpParams };
        const data = await this.http.put(`${this.url}/UpdateOrder`, httpParams, httpOptions).toPromise();

        this.updateOrders(change, data);

        return data;
    }

    async remove(change: any) {
        const httpParams = new HttpParams({ fromObject: { key: change.key } });
        const httpOptions = { withCredentials: true, body: httpParams };
        const data = await this.http.delete(`${this.url}/DeleteOrder`, httpOptions).toPromise();

        this.updateOrders(change, data);
        
        return data;
    }

    async saveChange(change: any): Promise<any> {
        switch (change.type) {
            case "insert":
                return this.insert(change);
            case "update":
                return this.update(change);
            case "remove":
                return this.remove(change);
        }
    }
};