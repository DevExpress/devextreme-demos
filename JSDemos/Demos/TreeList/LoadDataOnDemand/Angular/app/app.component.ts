import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { DxTreeListModule } from 'devextreme-angular';

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
  dataSource: any;

  constructor(http: HttpClient) {
    this.dataSource = {
      load(loadOptions) {
        let params = new HttpParams();
        if (loadOptions.parentIds) {
          loadOptions.parentIds.forEach((id) => {
            params = params.append('parentIds', id);
          });
        }
        return lastValueFrom(
          http.get('https://js.devexpress.com/Demos/Mvc/api/treeListData', { params }),
        );
      },
    };
  }

  customizeSizeText(e) {
    if (e.value !== null) {
      return `${Math.ceil(e.value / 1024)} KB`;
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeListModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
