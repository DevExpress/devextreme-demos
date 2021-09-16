import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxGanttModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import { Service, Task, Dependency, Resource, ResourceAssignment } from './app.service';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [Service],
    preserveWhitespaces: true,
})
export class AppComponent {
    tasks: Task[];
    dependencies: Dependency[];
    resources: Resource[];
    resourceAssignments: ResourceAssignment[];
    sortingMode: 'single' | 'multiple' | 'none';
    showSortIndexes: boolean;
    showSortIndexDisabled: boolean;
    sorting: any;

    constructor(service: Service) {
        this.tasks = service.getTasks();
        this.dependencies = service.getDependencies();
        this.resources = service.getResources();
        this.resourceAssignments = service.getResourceAssignments();
        this.sortingMode = 'single';
        this.showSortIndexes = false;
        this.showSortIndexDisabled = true;
        this.sorting = {mode: this.sortingMode, showSortIndexes: this.showSortIndexes};
    }

    onSortingValueChanged(e) {
        this.sorting = {mode: this.sortingMode, showSortIndexes: this.showSortIndexes}
        this.showSortIndexDisabled = this.sortingMode !== 'multiple'
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxGanttModule,
        DxSelectBoxModule,
        DxCheckBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);