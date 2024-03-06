import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCircularGaugeModule, DxNumberBoxModule, DxButtonModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  moduleId: __moduleName,
})
export class AppComponent {
  mainGenerator = 34;

  additionalGenerator: number[] = [12, 23];

  gaugeValue = 34;

  gaugeSubvalues: number[] = [12, 23];

  customizeText(arg: any) {
    return `${arg.valueText} kV`;
  }

  updateValues() {
    this.gaugeValue = this.mainGenerator;
    this.gaugeSubvalues = this.additionalGenerator.slice();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxCircularGaugeModule,
    DxNumberBoxModule,
    DxButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
