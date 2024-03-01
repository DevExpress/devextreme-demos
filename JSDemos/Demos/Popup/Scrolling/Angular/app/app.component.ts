import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxPopupModule, DxButtonModule, DxScrollViewModule, DxTemplateModule,
} from 'devextreme-angular';

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
  popupVisible = false;

  popupWithScrollViewVisible = false;

  bookButtonOptions: any;

  showPopup() {
    this.popupVisible = true;
  }

  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }

  constructor() {
    this.bookButtonOptions = {
      width: 300,
      text: 'Book',
      type: 'default',
      stylingMode: 'contained',
      onClick: () => {
        this.popupVisible = false;
        this.popupWithScrollViewVisible = false;
      },
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxPopupModule,
    DxButtonModule,
    DxScrollViewModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
