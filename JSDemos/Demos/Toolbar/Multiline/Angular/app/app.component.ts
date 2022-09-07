import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {
  DxToolbarModule,
  DxSelectBoxModule,
  DxTemplateModule,
  DxResizableModule,
  DxDropDownButtonModule,
  DxButtonGroupModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';

import {
  Service,
  FontSize,
  LineHeight,
  Font,
  FontStyle,
  TextAlign,
  ListType,
} from './app.service';

// if (!/localhost/.test(document.location.host)) {
//   enableProdMode();
// }

// @Component({
//   selector: 'demo-app',
//   templateUrl: 'app/app.component.html',
//   styleUrls: ['app/app.component.css'],
//   providers: [Service],
// })

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
})
export class AppComponent {
  multiline: boolean;

  colorPicker: any;

  color: string;

  lineHeight: number;

  colors: string[];

  fontSizes: FontSize[];

  lineHeights: LineHeight[];

  fonts: Font[];

  fontStyles: FontStyle[];

  textAligns: TextAlign[];

  listTypes: ListType[];

  undoButtonOptions: any;

  redoButtonOptions: any;

  colorPickerOptions: any;

  fontSizeOptions: any;

  lineHeightOptions: any;

  fontSelectorOptions: any;

  fontStyleOptions: any;

  listOptions: any;

  dateBoxOptions: any;

  checkBoxOptions: any;

  attachOptions: any;

  addButtonOptions: any;

  removeButtonOptions: any;

  aboutButtonOptions: any;

  constructor(service: Service) {
    this.multiline = true;
    this.colors = service.getColors();
    this.fontSizes = service.getFontSizes();
    this.lineHeights = service.getLineHeights();
    this.fonts = service.getFonts();
    this.fontStyles = service.getFontStyles();
    this.textAligns = service.getTextAligns();
    this.listTypes = service.getListType();

    this.undoButtonOptions = {
      icon: 'undo',
      onClick: () => {
        notify('Undo button has been clicked!');
      },
    };

    this.redoButtonOptions = {
      icon: 'redo',
      onClick: () => {
        notify('Redo button has been clicked!');
      },
    };

    this.colorPickerOptions = {
      items: this.colors,
      icon: 'square',
      dropDownOptions: { width: 'auto' },
      dropDownContentTemplate: 'colorpicker',
      onInitialized: ({ component }): void => {
        this.colorPicker = component;
      },
    };

    this.fontSizeOptions = {
      displayExpr: 'text',
      keyExpr: 'size',
      useSelectMode: true,
      items: this.fontSizes,
      selectedItemKey: this.fontSizes[2].size,
      itemTemplate: 'fontSizeTemplate',
    };

    this.lineHeightOptions = {
      icon: 'indent',
      displayExpr: 'text',
      keyExpr: 'lineHeight',
      useSelectMode: true,
      items: this.lineHeights,
      selectedItemKey: this.lineHeight,
      onSelectionChanged: (e: { item: { lineHeight: number } }): void => {
        this.lineHeight = e.item.lineHeight;
      },
    };

    this.fontSelectorOptions = {
      placeholder: 'Font',
      displayExpr: 'text',
      dataSource: new DataSource(this.fonts),
    };

    this.fontStyleOptions = {
      displayExpr: 'text',
      items: this.fontStyles,
      keyExpr: 'style',
      stylingMode: 'outlined',
      selectionMode: 'multiple',
      onItemClick: (e: { itemData: { hint: string } }): void => {
        notify(`The "${e.itemData.hint}" button was clicked`);
      },
    };

    this.listOptions = {
      items: this.listTypes,
      keyExpr: 'alignment',
      stylingMode: 'outlined',
      onItemClick: (e: { itemData: { hint: string } }): void => {
        notify(`The "${e.itemData.hint}" button was clicked`);
      },
    };

    this.dateBoxOptions = {
      width: 200,
      type: 'date',
      value: new Date(),
    };

    this.checkBoxOptions = {
      value: false,
      text: 'Private',
      onOptionChanged: (): void => {
        notify('Private option has been changed!');
      },
    };

    this.attachOptions = {
      icon: 'attach',
      text: 'Attach',
      onClick: (): void => {
        notify('Attach button has been clicked!');
      },
    };

    this.addButtonOptions = {
      icon: 'add',
      text: 'Add',
      onClick: (): void => {
        notify('Add button has been clicked!');
      },
    };

    this.removeButtonOptions = {
      icon: 'trash',
      text: 'Remove',
      onClick: (): void => {
        notify('Remove button has been clicked!');
      },
    };

    this.aboutButtonOptions = {
      icon: 'help',
      text: 'About',
      onClick: (): void => {
        notify('About button has been clicked!');
      },
    };
  }

  onColorClick(color) {
    this.colorPicker
      .element()
      .getElementsByClassName('dx-icon-square')[0].style.color = color;
    this.colorPicker.close();
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxToolbarModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxResizableModule,
    DxDropDownButtonModule,
    DxButtonGroupModule,
    DxCheckBoxModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
