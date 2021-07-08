import { NgModule, Component, enableProdMode, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Appointment, Resource, Service } from './app.service';
import { DxContextMenuModule } from 'devextreme-angular';
import { DxSchedulerModule, DxSchedulerComponent } from 'devextreme-angular';
import { AppointmentContextMenuEvent, CellContextMenuEvent } from 'devextreme/ui/scheduler';
import { dxContextMenuItem } from 'devextreme/ui/context_menu';
import { ItemInfo } from 'devextreme/events';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

type ContextMenuItem = dxContextMenuItem & { onItemClick?: (e: ItemInfo) => void; }
const appointmentClassName = ".dx-scheduler-appointment";
const cellClassName = ".dx-scheduler-date-table-cell";

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

    contextMenuItems: ContextMenuItem[] = [];
    disabled: boolean = true;
    target: string = appointmentClassName;
    constructor(service: Service) {
        this.resourcesData = service.getResources();
        this.appointmentsData = service.getAppointments();
    }
    onAppointmentContextMenu({ appointmentData, targetedAppointmentData }: AppointmentContextMenuEvent) {
        const scheduler = this.scheduler.instance;
        const resourceItems: ContextMenuItem[] = this.resourcesData
            .map((item) => ({
                ...item,
                onItemClick: ({ itemData }) =>
                    scheduler.updateAppointment(appointmentData, {
                        ...appointmentData,
                        ...{ roomId: [itemData.id] },
                    }),
            }));
        this.target = appointmentClassName;
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
    onCellContextMenu({ cellData }: CellContextMenuEvent) {
        const scheduler = this.scheduler.instance;
        this.target = cellClassName;
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

    onContextMenuItemClick(e: ItemInfo) {
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