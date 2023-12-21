import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxRangeSelectorComponent, DxRangeSelectorModule, DxSelectBoxModule } from 'devextreme-angular';
import { DxRangeSelectorTypes } from 'devextreme-angular/ui/range-selector';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

type SliderMarker = DxRangeSelectorComponent['sliderMarker'];
type ArrowFunction<T> = T extends Function ? (...args: any) => any : never;

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  preserveWhitespaces: true,
})
export class AppComponent {
  pipe = new DatePipe('en-US');

  dataSource = ['onHandleMove', 'onHandleRelease'];

  workingDaysCount = 260;

  startValue = new Date(2011, 0, 1);

  endValue = new Date(2011, 11, 31);

  onValueChanged = (e: DxRangeSelectorTypes.ValueChangedEvent) => {
    const currentDate = new Date(e.value[0]);
    let workingDaysCount = 0;

    while (currentDate <= e.value[1]) {
      if (currentDate.getDay() > 0 && currentDate.getDay() < 6) {
        workingDaysCount++;
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    this.workingDaysCount = workingDaysCount;
  };

  customizeSliderMarker = (data: Parameters<ArrowFunction<SliderMarker['customizeText']>>[0]) => this.pipe.transform(data.value, 'dd EEEE');

  customizeLabel = (data: Parameters<ArrowFunction<SliderMarker['customizeText']>>[0]) => this.pipe.transform(data.value, 'MMM');
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxRangeSelectorModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
