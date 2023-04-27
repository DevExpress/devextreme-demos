import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSchedulerModule, DxTemplateModule } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { Service, Employee } from './app.service';
import { ApplyPipe } from './pipes';

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

  markWeekEnd = (cellData) => {
    function isWeekEnd(date) {
      const day = date.getDay();
      return day === 0 || day === 6;
    }

    return {
      [`employee-${cellData.groups.employeeID}`]: true,
      [`employee-weekend-${cellData.groups.employeeID}`]: isWeekEnd(cellData.startDate),
    };
  };

  markTraining = (cellData) => {
    const classObject = {
      'day-cell': true,
    };

    classObject[AppComponent.getCurrentTraining(cellData.startDate.getDate(), cellData.groups.employeeID)] = true;
    return classObject;
  };

  static getCurrentTraining(date, employeeID) {
    const result = (date + employeeID) % 3;
    const currentTraining = `training-background-${result}`;

    return currentTraining;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxSchedulerModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent, ApplyPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
