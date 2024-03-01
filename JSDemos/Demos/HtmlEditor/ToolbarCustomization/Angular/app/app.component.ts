import {
  NgModule, ViewChild, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxHtmlEditorComponent,
  DxHtmlEditorModule,
  DxPopupComponent,
  DxPopupModule,
} from 'devextreme-angular';

import { Service } from './app.service';

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
  editorValue: string;

  popupVisible: boolean;

  toolbarButtonOptions :any = {
    text: 'Show markup',
    stylingMode: 'text',
    onClick: () => this.popupVisible = true,
  };

  constructor(service: Service) {
    this.editorValue = service.getMarkup();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxHtmlEditorModule,
    DxPopupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
