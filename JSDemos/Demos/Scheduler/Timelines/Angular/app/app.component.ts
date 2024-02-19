import { NgModule, Component, enableProdMode } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule } from 'devextreme-angular';
import {
  Priority, Resource, Appointment, Service,
} from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  providers: [Service],
})
export class AppComponent {
  appointmentsData: Appointment[];

  resourcesData: Resource[];

  prioritiesData: Priority[];

  currentDate: Date = new Date(2021, 1, 2);

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
    this.resourcesData = service.getResources();
    this.prioritiesData = service.getPriorities();
  }
}

@NgModule({
  imports: [
    DxHttpModule,
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
