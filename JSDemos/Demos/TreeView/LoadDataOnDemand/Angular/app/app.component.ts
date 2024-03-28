import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { DxTreeViewComponent, DxTreeViewModule } from 'devextreme-angular';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
declare var __moduleName: string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app.component.html',
  moduleId: __moduleName,
  providers: [],
})
export class AppComponent {
  createChildren: DxTreeViewComponent['createChildren'];

  constructor(http: HttpClient) {
    this.createChildren = (parent: Record<string, { id: unknown }>) => {
      const parentId = parent ? parent.itemData.id : '';

      return lastValueFrom(
        http.get(`https://js.devexpress.com/Demos/Mvc/api/TreeViewData?parentId=${parentId}`),
      );
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTreeViewModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
