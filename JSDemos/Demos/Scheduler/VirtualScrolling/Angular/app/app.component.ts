import { NgModule, Component, enableProdMode } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Resource, Appointment, Service} from './app.service';
import {DxSchedulerModule} from 'devextreme-angular';

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
    resources: Resource[];
    appointments: Appointment[];
    currentDate: Date = new Date(2021, 1, 2);

    constructor(service: Service) {
        this.appointments = service.generateAppointments(new Date(2021, 1, 1), new Date(2021, 1, 28), 8, 20);

        this.resources = service.resources;
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxSchedulerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
