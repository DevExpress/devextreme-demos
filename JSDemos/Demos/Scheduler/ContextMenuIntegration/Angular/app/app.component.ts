import { NgModule, Component, enableProdMode, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Appointment, Resource, ResourceMenuItem, Service } from './app.service';
import { DxContextMenuModule, DxContextMenuComponent } from 'devextreme-angular';
import { DxSchedulerModule, DxSchedulerComponent } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service]
})

export class AppComponent {
    @ViewChild(DxSchedulerComponent, { static: false }) scheduler!: DxSchedulerComponent;
    appointmentsData!: Appointment[];
    currentDate: Date = new Date(2020, 10, 25);
    resourcesData: Resource[];
    groups: any;
    crossScrollingEnabled: boolean = false;

    contextMenuItems: any[] = [];
    disabled: boolean = true;
    target: any;
    constructor(service: Service) {
        this.resourcesData = service.getResources();
        this.appointmentsData = service.getAppointments();
    }
    onAppointmentContextMenu({ appointmentData, targetedAppointmentData }) {
        const scheduler = this.scheduler.instance;
        const resourceItems = this.resourcesData.map((item) => ({
            ...item,
            onItemClick: ({ itemData }) =>
                scheduler.updateAppointment(appointmentData, {
                    ...appointmentData,
                    ...{ roomId: [itemData.id] },
                }),
        }));
        this.target = '.dx-scheduler-appointment';
        this.disabled = false;
        this.contextMenuItems = [
            {
                text: 'Open',
                onItemClick: () => scheduler.showAppointmentPopup(appointmentData),
            },
            {
                text: 'Delete',
                onItemClick: () => scheduler.deleteAppointment(appointmentData),
            },
            {
                text: 'Repeat Weekly',
                beginGroup: true,
                onItemClick: () =>
                    scheduler.updateAppointment(appointmentData, {
                        startDate: targetedAppointmentData.startDate,
                        recurrenceRule: 'FREQ=WEEKLY',
                    }),
            },
            { text: 'Set Room', beginGroup: true, disabled: true },
            ...resourceItems,
        ];
    }
    onCellContextMenu({ cellData }) {
        const scheduler = this.scheduler.instance;
        this.target = '.dx-scheduler-date-table-cell';
        this.disabled = false;
        this.contextMenuItems = [
            {
                text: 'New Appointment',
                onItemClick: () =>
                    scheduler.showAppointmentPopup(
                        { startDate: cellData.startDate },
                        true
                    ),
            },
            {
                text: 'New Recurring Appointment',
                onItemClick: () =>
                    scheduler.showAppointmentPopup(
                        {
                            startDate: cellData.startDate,
                            recurrenceRule: 'FREQ=DAILY',
                        },
                        true
                    ),
            },
            {
                text: 'Group by Room/Ungroup',
                beginGroup: true,
                onItemClick: () => {
                    if (this.groups) {
                        this.crossScrollingEnabled = false;
                        this.groups = null;
                    } else {
                        this.crossScrollingEnabled = true;
                        this.groups = ['roomId'];
                    }
                },
            },
            {
                text: 'Go to Today',
                onItemClick: () => {
                    this.currentDate = new Date();
                },
            },
        ];
    }

    onContextMenuItemClick(e) {
        e.itemData.onItemClick(e);
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxSchedulerModule,
        DxContextMenuModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);