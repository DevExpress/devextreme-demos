import { ViewEncapsulation } from '@angular/compiler/src/core';
import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxGanttModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
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
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    tasks: Task[];
    dependencies: Dependency[];
    resources: Resource[];
    resourceAssignments: ResourceAssignment[];
    scaleType: string;
    titlePosition: string;
    showResources: boolean;
    showCustomTaskTooltip: boolean;

    constructor(service: Service) {
        this.tasks = service.getTasks();
        this.dependencies = service.getDependencies();
        this.resources = service.getResources();
        this.resourceAssignments = service.getResourceAssignments();
        this.scaleType = "months";
        this.titlePosition = "outside";
        this.showResources = true;
        this.showCustomTaskTooltip = true;
    }

    getTimeEstimate(task) {
        return  Math.abs(task.start - task.end) / 36e5;
    }

    getTimeLeft(task) {
        const timeEstimate = Math.abs(task.start - task.end) / 36e5;
        return Math.floor((100 - task.progress) / 100 * timeEstimate);
    }

    setCustomTooltipStyles() {
        const parentElement = document.getElementsByClassName('dx-gantt-task-edit-tooltip')[0];
        parentElement.className = this.showCustomTaskTooltip ? 'dx-gantt-task-edit-tooltip custom-task-edit-tooltip' : 'dx-gantt-task-edit-tooltip';
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxGanttModule,
        DxCheckBoxModule,
        DxSelectBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);