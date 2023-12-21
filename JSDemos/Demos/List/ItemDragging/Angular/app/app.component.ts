import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxListComponent, DxListModule } from 'devextreme-angular';
import { Task, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

type ListItemDragging = DxListComponent['itemDragging'];
type FirstArgument<T> = T extends (...args: any) => any ? Parameters<T>[0] : never;

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  doingTasks: Task[];

  plannedTasks: Task[];

  constructor(service: Service) {
    this.doingTasks = service.getDoingTasks();
    this.plannedTasks = service.getPlannedTasks();
  }

  onDragStart(e: FirstArgument<ListItemDragging['onDragStart']>) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onAdd = (e: FirstArgument<ListItemDragging['onAdd']>) => {
    e.toData.splice(e.toIndex, 0, e.itemData);
  };

  onRemove = (e: FirstArgument<ListItemDragging['onRemove']>) => {
    e.fromData.splice(e.fromIndex, 1);
  };

  onReorder = (e: FirstArgument<ListItemDragging['onReorder']>) => {
    this.onRemove(e as FirstArgument<ListItemDragging['onRemove']>);
    this.onAdd(e as FirstArgument<ListItemDragging['onAdd']>);
  };
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxListModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
