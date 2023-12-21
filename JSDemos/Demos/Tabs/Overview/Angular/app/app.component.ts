import {
  NgModule, Component, enableProdMode, ViewChild,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxTabsModule, DxSelectBoxModule, DxCheckBoxModule, DxTabsComponent,
} from 'devextreme-angular';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';
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

  showNavButtons = false;

  scrollByContent = false;

  rtlEnabled = false;

  orientations = ['horizontal', 'vertical'];

  stylingModes = ['primary', 'secondary'];

  iconPositions = ['top', 'start', 'end', 'bottom'];

  width = 'auto';

  orientation = this.orientations[0];

  stylingMode = this.stylingModes[1];

  iconPosition = this.iconPositions[0];

  widgetWrapperClasses = {
    'widget-wrapper': true,
    'widget-wrapper-horizontal': true,
    'widget-wrapper-vertical': false,
    'strict-width': false,
  };

  constructor(service: Service) {
    this.tabsWithText = service.getTabsWithText();
    this.tabsWithIconAndText = service.getTabsWithIconAndText();
    this.tabsWithIcon = service.getTabsWithIcon();
  }

  onOrientationChanged(e: DxSelectBoxTypes.ValueChangedEvent) {
    if (e.value === 'vertical') {
      this.widgetWrapperClasses['widget-wrapper-vertical'] = true;
      this.widgetWrapperClasses['widget-wrapper-horizontal'] = false;
    } else {
      this.widgetWrapperClasses['widget-wrapper-horizontal'] = true;
      this.widgetWrapperClasses['widget-wrapper-vertical'] = false;
    }
  }

  toggleStrictWidthClass() {
    this.widgetWrapperClasses['strict-width'] = this.scrollByContent || this.showNavButtons;
  }

  onFullWidthChanged(e: DxCheckBoxTypes.ValueChangedEvent) {
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
