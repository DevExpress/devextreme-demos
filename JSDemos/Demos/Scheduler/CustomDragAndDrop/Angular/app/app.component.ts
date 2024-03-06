import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSchedulerModule, DxDraggableModule, DxScrollViewModule } from 'devextreme-angular';
import { Appointment, Task, Service } from './app.service';

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
  draggingGroupName = 'appointmentsGroup';

  tasks: Task[];

  appointments: Appointment[];

  currentDate: Date = new Date(2021, 3, 26);

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.appointments = service.getAppointments();
    this.onAppointmentRemove = this.onAppointmentRemove.bind(this);
    this.onAppointmentAdd = this.onAppointmentAdd.bind(this);
  }

  onAppointmentRemove(e) {
    const index = this.appointments.indexOf(e.itemData);

    if (index >= 0) {
      this.appointments.splice(index, 1);
      this.tasks.push(e.itemData);
    }
  }

  onAppointmentAdd(e) {
    const index = this.tasks.indexOf(e.fromData);

    if (index >= 0) {
      this.tasks.splice(index, 1);
      this.appointments.push(e.itemData);
    }
  }

  onListDragStart(e) {
    e.cancel = true;
  }

  onItemDragStart(e) {
    e.itemData = e.fromData;
  }

  onItemDragEnd(e) {
    if (e.toData) {
      e.cancel = true;
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
    DxDraggableModule,
    DxScrollViewModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
