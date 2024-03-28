import {
  NgModule, Component, Pipe, PipeTransform, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxSparklineModule,
  DxTemplateModule,
} from 'devextreme-angular';
import { Service, WeekData } from './app.service';

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
  dataSource: WeekData[];

  constructor(service: Service) {
    this.dataSource = service.getWeekData();
  }

  abs(value: number) {
    return Math.abs(value);
  }
}

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform({ data, column }) {
    return data[column.caption.toLowerCase()];
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDataGridModule,
    DxTemplateModule,
    DxSparklineModule,
  ],
  declarations: [AppComponent, GridCellDataPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
