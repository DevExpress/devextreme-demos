import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxSankeyModule } from 'devextreme-angular';
import { DxSankeyTypes } from 'devextreme-angular/ui/sankey';
import { Service, DataItem } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  data: DataItem[];

  constructor(service: Service) {
    this.data = service.getData();
  }

  customizeLinkTooltip = ({ source, target, weight }: Parameters<DxSankeyTypes.Tooltip['customizeLinkTooltip']>[0]) => (
    {
      html: `<b>From:</b> ${source}<br/><b>To:</b> ${target}<br/><b>Weight:</b> ${weight}`,
    }
  );
}
@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSankeyModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
