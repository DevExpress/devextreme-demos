import {
  NgModule, Component, enableProdMode, ViewChild,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxTabsModule, DxSelectBoxModule, DxCheckBoxModule, DxTabsComponent,
} from 'devextreme-angular';

import { Tab, Service } from './app.service';

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
  @ViewChild('withText') withText: DxTabsComponent;

  @ViewChild('withIconAndText') withIconAndText: DxTabsComponent;

  @ViewChild('withIcon') withIcon: DxTabsComponent;

  tabsWithText: Tab[];

  tabsWithIconAndText: Tab[];

  tabsWithIcon: Tab[];

  orientations: string[] = ['horizontal', 'vertical'];

  stylingModes: string[] = ['primary', 'secondary'];

  iconPositions: string[] = ['top', 'start', 'end', 'bottom'];

  width = 'auto';

  orientation: string;

  stylingMode: string;

  iconPosition: string;

  showNavButtons = false;

  scrollByContent = false;

  rtlEnabled = false;

  widgetWrapperClasses = 'widget-wrapper widget-wrapper-horizontal';

  constructor(service: Service) {
    this.tabsWithText = service.getTabsWithText();
    this.tabsWithIconAndText = service.getTabsWithIconAndText();
    this.tabsWithIcon = service.getTabsWithIcon();
    this.orientation = this.orientations[0];
    this.stylingMode = this.stylingModes[1];
    this.iconPosition = this.iconPositions[0];
  }

  getWrapperClasses(orientation: string, showNavButtons: boolean) {
    return [
      'widget-wrapper',
      `widget-wrapper-${orientation}`,
      showNavButtons ? 'widget-wrapper-shown-nav-buttons' : '',
    ].join(' ');
  }

  onOrientationChanged(e) {
    this.widgetWrapperClasses = this.getWrapperClasses(e.value, this.showNavButtons);
    this.orientation = e.value;
  }

  onShowNavButtonsChanged(e) {
    this.widgetWrapperClasses = this.getWrapperClasses(this.orientation, e.value);
    this.showNavButtons = e.value;
  }

  onFullWidthChanged(e) {
    this.width = e.value ? '100%' : 'auto';
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTabsModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
