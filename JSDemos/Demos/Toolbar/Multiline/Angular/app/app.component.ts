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
  DxRadioGroupModule,
} from 'devextreme-angular';

import DataSource from 'devextreme/data/data_source';
import notify from 'devextreme/ui/notify';
import {
  Font,
  FontSize,
  FontStyle,
  LineHeight,
  ListType,
  Service,
  TextAlign,
  TextAlignExtended,
} from './app.service';

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
  toolbarLineModes = [
    {
      text: 'Multiline mode',
      value: true,
    },
    {
      text: 'Singleline mode',
      value: false,
    },
  ];

  multiline: boolean;

  lineHeight: number[];

  fontSizes: FontSize[];

  lineHeights: LineHeight[];

  fonts: Font[];

  fontStyles: FontStyle[];

  textAlignItems: TextAlign[];

  textAlignItemsExtended: TextAlignExtended[];

  selectedTextAlign: string[];

  listTypes: ListType[];

  undoButtonOptions: any;

  redoButtonOptions: any;

  fontSizeOptions: any;

  lineHeightOptions: any;

  fontFamilyOptions: any;

  fontStyleOptions: any;

  listOptions: any;

  dateBoxOptions: any;

  checkBoxOptions: any;

  attachButtonOptions: any;

  addButtonOptions: any;

  removeButtonOptions: any;

  aboutButtonOptions: any;

  constructor(service: Service) {
    this.multiline = true;
    this.fontSizes = service.getFontSizes();
    this.lineHeights = service.getLineHeights();
    this.lineHeight = [this.lineHeights[1].lineHeight];
    this.fonts = service.getFonts();
    this.fontStyles = service.getFontStyles();
    this.textAlignItemsExtended = service.getTextAligns();
    this.textAlignItems = this.textAlignItemsExtended.map(
      ({ icon, alignment, hint }) => ({ icon, alignment, hint }),
    );
    this.selectedTextAlign = [this.textAlignItems[0].alignment];
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

    this.fontSizeOptions = {
      width: '100%',
      displayExpr: 'text',
      keyExpr: 'size',
      useSelectMode: true,
      items: this.fontSizes,
      selectedItemKey: this.fontSizes[2].size,
      itemTemplate: 'fontSizeTemplate',
      onSelectionChanged: (): void => {
        notify('Font size value has been changed!');
      },
    };

    this.lineHeightOptions = {
      width: '100%',
      icon: 'indent',
      displayExpr: 'text',
      keyExpr: 'lineHeight',
      useSelectMode: true,
      items: this.lineHeights,
      selectedItemKey: this.lineHeight,
      onSelectionChanged: (): void => {
        notify('Line height value has been changed!');
      },
    };

    this.fontFamilyOptions = {
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
      onItemClick: this.onItemClick,
    };

    this.listOptions = {
      items: this.listTypes,
      keyExpr: 'alignment',
      stylingMode: 'outlined',
      onItemClick: this.onItemClick,
    };

    this.dateBoxOptions = {
      width: 200,
      type: 'date',
      value: new Date(2022, 9, 7),
    };

    this.checkBoxOptions = {
      value: false,
      text: 'Checkbox text',
      onOptionChanged: (): void => {
        notify('Checkbox value has been changed!');
      },
    };

    this.attachButtonOptions = {
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

  onItemClick(e: { itemData: { hint: string } }): void {
    notify(`The "${e.itemData.hint}" button was clicked`);
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
    DxRadioGroupModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
