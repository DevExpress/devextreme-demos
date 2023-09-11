import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxTabPanelModule, DxCheckBoxModule, DxSelectBoxModule, DxTemplateModule,
} from 'devextreme-angular';

import { TabPanelItem, Service, AriaLabelAttr } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
  preserveWhitespaces: true,
})

export class AppComponent {
  dataSource: TabPanelItem[];

  tabsPositionsSelectBoxLabel: AriaLabelAttr;

  tabsPositions: string[];

  tabsPosition: string;

  stylingModesSelectBoxLabel: AriaLabelAttr;

  stylingModes: string[];

  stylingMode: string;

  iconPositionsSelectBoxLabel: AriaLabelAttr;

  iconPositions: string[];

  iconPosition: string;

  navButtonsCheckBoxLabel: AriaLabelAttr;

  selectedIndex: number;

  showNavButtons: boolean;

  constructor(service: Service) {
    this.dataSource = service.getItems();

    this.selectedIndex = 0;

    this.tabsPositionsSelectBoxLabel = { 'aria-label': 'Tabs positions' };

    this.tabsPositions = [
      'left',
      'top',
      'right',
      'bottom',
    ];

    this.tabsPosition = this.tabsPositions[0];

    this.stylingModesSelectBoxLabel = { 'aria-label': 'Tabs positions' };

    this.stylingModes = [
      'secondary',
      'primary',
    ];

    this.stylingMode = this.stylingModes[0];

    this.iconPositionsSelectBoxLabel = { 'aria-label': 'Icon positions' };

    this.iconPositions = [
      'top',
      'start',
      'end',
      'bottom',
    ];

    this.iconPosition = this.iconPositions[0];

    this.navButtonsCheckBoxLabel = { 'aria-label': 'Show navigation buttons' };

    this.showNavButtons = true;
  }

  onTabsPositionChanged({ value }: { value: string }) {
    this.tabsPosition = value;
  }

  onStylingModeChanged({ value }: { value: string }) {
    this.stylingMode = value;
  }

  onIconPositionChanged({ value }: { value: string }) {
    this.iconPosition = value;
  }

  onShowNavButtonsChanged({ value }: { value: boolean }) {
    this.showNavButtons = value;
  }

  getTaskClassName(priority: string) {
    return `task-item task-item-priority-${priority}`;
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxTemplateModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
