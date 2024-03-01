import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxActionSheetModule, DxListModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Contact, Service } from './app.service';

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
  contacts: Contact[];

  commands: any[] = [
    { text: 'Call' },
    { text: 'Send message' },
    { text: 'Edit' },
    { text: 'Delete' },
  ];

  actionSheetVisible = false;

  actionSheetTarget: any = '';

  constructor(service: Service) {
    this.contacts = service.getContacts();
  }

  itemClick(e) {
    this.actionSheetTarget = e.itemElement;
    this.actionSheetVisible = true;
  }

  showNotify(value) {
    notify(`The "${value}" button is clicked.`);
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxActionSheetModule,
    DxListModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
