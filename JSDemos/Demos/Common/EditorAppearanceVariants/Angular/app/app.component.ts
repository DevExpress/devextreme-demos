import { Component, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxSelectBoxModule,
  DxTextAreaModule,
  DxTagBoxModule,
  DxDateBoxModule,
  DxButtonModule,
  DxValidatorModule,
  DxDateRangeBoxModule,
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { DxTextBoxModule, DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
import { LabelMode } from 'devextreme-angular/common';
import { Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  preserveWhitespaces: true,
})

export class AppComponent {
  stylingMode: DxTextBoxTypes.Properties['stylingMode'] = 'outlined';

  labelMode: LabelMode = 'static';

  birthDate = new Date(1981, 5, 3);

  states: string[];

  phoneRules = {
    X: /[02-9]/,
  };

  validateClick({ validationGroup }) {
    const result = validationGroup.validate();
    if (result.isValid) {
      notify('The task was saved successfully.', 'success');
    } else {
      notify('The task was not saved. Please check if all fields are valid.', 'error');
    }
  }

  constructor(service: Service) {
    this.states = service.getStates();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxTagBoxModule,
    DxDateBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxDateRangeBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
