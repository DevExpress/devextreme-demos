import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Service, Employee } from './app.service';
import { MarkWeekEndPipe, MarkTrainingPipe } from './pipes';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
})
export class AppComponent {
  dataSource: any;

  currentDate: Date = new Date(2021, 5, 2, 11, 30);

  resourcesDataSource: Employee[];

  constructor(service: Service) {
    this.dataSource = new DataSource({
      store: service.getData(),
    });
    this.resourcesDataSource = service.getEmployees();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSchedulerModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent, MarkWeekEndPipe, MarkTrainingPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
