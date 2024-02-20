import { Component, NgModule, enableProdMode } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DxHttpModule } from 'DxHttpModule';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPopupModule, DxScrollViewModule, DxTemplateModule } from 'devextreme-angular';
import { DxButtonModule, DxButtonTypes } from 'devextreme-angular/ui/button';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  popupVisible = false;

  popupWithScrollViewVisible = false;

  bookButtonOptions: DxButtonTypes.Properties = {
    width: 300,
    text: 'Book',
    type: 'default',
    stylingMode: 'contained',
    onClick: () => {
      this.popupVisible = false;
      this.popupWithScrollViewVisible = false;
    },
  };

  showPopup() {
    this.popupVisible = true;
  }

  showPopupWithScrollView() {
    this.popupWithScrollViewVisible = true;
  }
}

@NgModule({
  imports: [
    DxHttpModule,
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
