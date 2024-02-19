import { NgModule, Component, enableProdMode } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxRangeSliderModule, DxNumberBoxModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  start = 10;

  end = 90;

  format = (value: unknown) => `${value}%`;

  label = {
    visible: true,
    format: (value: unknown) => this.format(value),
    position: 'top',
  };

  tooltip = {
    enabled: true,
    format: (value: unknown) => this.format(value),
    showMode: 'always',
    position: 'bottom',
  };

  tooltipEnabled = {
    enabled: true,
  };
}

@NgModule({
  imports: [
    DxHttpModule,
    BrowserModule,
    BrowserTransferStateModule,
    DxRangeSliderModule,
    DxNumberBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
