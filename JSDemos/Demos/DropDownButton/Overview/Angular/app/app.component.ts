import {
  NgModule, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import notify from 'devextreme/ui/notify';
import { DxToolbarModule } from 'devextreme-angular';
import { DxDropDownButtonModule, DxDropDownButtonComponent, DxDropDownButtonTypes } from 'devextreme-angular/ui/drop-down-button';
import { SimpleObject, Service } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

type Color = string;

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [Service],
})
export class AppComponent {
  fontSize: number;

  color: string;

  lineHeight: number;

  alignment: string;

  dropDownButton: DxDropDownButtonComponent['instance'];

  colors: Color[];

  downloads: string[];

  profileSettings: SimpleObject[];

  fontSizes: SimpleObject[];

  lineHeights: SimpleObject[];

  alignments: SimpleObject[];

  constructor(service: Service) {
    this.fontSize = 14;
    this.color = null;
    this.lineHeight = 1.35;
    this.alignment = 'left';

    this.colors = service.getColors();
    this.fontSizes = service.getFontSizes();
    this.downloads = service.getDownloads();
    this.profileSettings = service.getProfileSettings();
    this.alignments = service.getAlignments();
    this.lineHeights = service.getLineHeights();
  }

  onAlignmentChanged = (e: DxDropDownButtonTypes.SelectionChangedEvent) => {
    this.alignment = e.item.value;
  };

  onFontSizeChanged = (e: DxDropDownButtonTypes.SelectionChangedEvent) => {
    this.fontSize = e.item.value;
  };

  onLineHeightChanged = (e: DxDropDownButtonTypes.SelectionChangedEvent) => {
    this.lineHeight = e.item.value;
  };

  onButtonClick(e: DxDropDownButtonTypes.ButtonClickEvent) {
    notify(`Go to ${e.component.option('text')}'s profile`, 'success', 600);
  }

  onItemClick(e: DxDropDownButtonTypes.ItemClickEvent) {
    notify(e.itemData.name || e.itemData, 'success', 600);
  }

  onColorPickerInit = (e: DxDropDownButtonTypes.InitializedEvent) => {
    this.dropDownButton = e.component;
  };

  onColorClick(color: Color) {
    this.color = color;
    this.dropDownButton.element().getElementsByClassName('dx-icon-square')[0].style.color = color;
    this.dropDownButton.close();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    DxDropDownButtonModule,
    DxToolbarModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
