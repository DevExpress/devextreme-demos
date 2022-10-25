import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTextAreaModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';

import { Service } from './app.service';

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
  valueChangeEvents: any[];

  eventValue: string;

  maxLength = null;

  value: string;

  valueForEditableTextArea: string;

  height = 90;

  autoResizeEnabled: boolean;

  constructor(private service: Service) {
    this.valueForEditableTextArea = this.service.getContent();
    this.value = this.service.getContent();
    this.valueChangeEvents = [{
      title: 'On Blur',
      name: 'change',
    }, {
      title: 'On Key Up',
      name: 'keyup',
    }];
    this.eventValue = this.valueChangeEvents[0].name;
    this.autoResizeEnabled = false;
  }

  onCheckboxValueChanged(e) {
    if (e.value) {
      this.value = this.service.getContent().substring(0, 100);
      this.maxLength = 100;
    } else {
      this.value = this.service.getContent();
      this.maxLength = null;
    }
  }

  onAutoResizeChanged(e) {
    if (e.value) {
      this.autoResizeEnabled = true;
      this.height = undefined;
    } else {
      this.autoResizeEnabled = false;
      this.height = 90;
    }
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxTextAreaModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
