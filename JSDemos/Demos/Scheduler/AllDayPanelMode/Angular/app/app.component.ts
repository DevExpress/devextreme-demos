import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxRadioGroupModule } from 'devextreme-angular';
import { DxRadioGroupTypes } from 'devextreme-angular/ui/radio-group';
import { Appointment, Service } from './app.service';

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
  appointmentsData: Appointment[];

  currentDate = new Date(2021, 2, 28);

  views = [
    {
      type: 'day',
      name: '4 Days',
      intervalCount: 4,
    },
    'week',
  ];

  allDayPanelMode = 'allDay';

  allDayPanelModes = ['all', 'allDay', 'hidden'];

  constructor(service: Service) {
    this.appointmentsData = service.getAppointments();
  }

  onChangeAllDayPanelMode(e: DxRadioGroupTypes.ValueChangedEvent) {
    this.allDayPanelMode = e.value;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
    DxRadioGroupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
