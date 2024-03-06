import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxGanttModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';

import {
  Service, Task, Dependency, Resource, ResourceAssignment,
} from './app.service';

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

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
    this.sortingMode = 'single';
    this.showSortIndexes = false;
    this.showSortIndexDisabled = true;
  }

  onSortingValueChanged(e) {
    this.showSortIndexDisabled = this.sortingMode !== 'multiple';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxGanttModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
