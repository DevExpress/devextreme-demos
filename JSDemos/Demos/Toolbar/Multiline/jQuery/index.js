const toolbarDataDefault = [
  {
    locateInMenu: 'never',
    location: 'before',
    widget: 'dxButton',
    options: {
      icon: 'undo',
      onClick() {
        DevExpress.ui.notify('Undo button has been clicked!');
      },
    },
  },
  {
    locateInMenu: 'never',
    location: 'before',
    widget: 'dxButton',
    options: {
      icon: 'redo',
      onClick() {
        DevExpress.ui.notify('Redo button has been clicked!');
      },
    },
  },
  {
    cssClass: 'menu-separator-container',
    locateInMenu: 'auto',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $(element).addClass('menu-separator');
    },
  },
  {
    location: 'before',
    locateInMenu: 'auto',
    widget: 'dxDropDownButton',
    options: {
      displayExpr: 'text',
      keyExpr: 'size',
      useSelectMode: true,
      items: fontSizes,
      selectedItemKey: 14,
      itemTemplate(itemData) {
        return $('<div>')
          .text(itemData.text)
          .css('font-size', `${itemData.size}px`);
      },
    },
  },
  {
    location: 'before',
    locateInMenu: 'auto',
    widget: 'dxDropDownButton',
    options: {
      icon: 'indent',
      displayExpr: 'text',
      keyExpr: 'lineHeight',
      useSelectMode: true,
      items: lineHeights,
      selectedItemKey: 1.35,
      onSelectionChanged(e) {
        $('#text').css('line-height', e.item.lineHeight);
      },
    },
  },
  {
    cssClass: 'menu-separator-container',
    locateInMenu: 'auto',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $(element).addClass('menu-separator');
    },
  },
  {
    locateInMenu: 'auto',
    location: 'before',
    widget: 'dxSelectBox',
    options: {
      placeholder: 'Font',
      displayExpr: 'text',
      dataSource: [
        { text: 'Arial' },
        { text: 'Courier New' },
        { text: 'Georgia' },
        { text: 'Impact' },
        { text: 'Lucida Console' },
        { text: 'Tahoma' },
        { text: 'Times New Roman' },
      ],
    },
  },
  {
    cssClass: 'menu-separator-container',
    locateInMenu: 'auto',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $(element).addClass('menu-separator');
    },
  },
  {
    locateInMenu: 'never',
    location: 'before',
    widget: 'dxButtonGroup',
    options: {
      displayExpr: 'text',
      items: [
        {
          icon: 'bold',
          style: 'bold',
          hint: 'Bold',
        },
        {
          icon: 'italic',
          style: 'italic',
          hint: 'Italic',
        },
        {
          icon: 'underline',
          style: 'underline',
          hint: 'Underlined',
        },
        {
          icon: 'strike',
          style: 'strike',
          hint: 'Strikethrough',
        },
      ],
      keyExpr: 'style',
      stylingMode: 'outlined',
      selectionMode: 'multiple',
      onItemClick(e) {
        DevExpress.ui.notify(`The "${e.itemData.hint}" button was clicked`);
      },
    },
  },
  {
    locateInMenu: 'never',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
  },
  {
    locateInMenu: 'auto',
    location: 'before',
    widget: 'dxButtonGroup',
    template(itemData, itemIndex, element) {
      const $buttonGroup = $('<div>').dxButtonGroup({
        items: [
          {
            icon: 'alignleft',
            alignment: 'left',
            hint: 'Align left',
          },
          {
            icon: 'aligncenter',
            alignment: 'center',
            hint: 'Center',
          },
          {
            icon: 'alignright',
            alignment: 'right',
            hint: 'Align right',
          },
          {
            icon: 'alignjustify',
            alignment: 'justify',
            hint: 'Justify',
          },
        ],
        keyExpr: 'alignment',
        stylingMode: 'outlined',
        selectedItemKeys: ['left'],
        onItemClick(e) {
          DevExpress.ui.notify(`The "${e.itemData.hint}" button was clicked`);
        },
      });

      $buttonGroup.appendTo(element);
    },
    menuItemTemplate(itemData, itemIndex, element) {
      const $buttonGroup = $('<div>').dxButtonGroup({
        displayExpr: 'text',
        items: [
          {
            icon: 'alignleft',
            alignment: 'left',
            hint: 'Align left',
            text: 'Align left',
          },
          {
            icon: 'aligncenter',
            alignment: 'center',
            hint: 'Center',
            text: 'Center',
          },
          {
            icon: 'alignright',
            alignment: 'right',
            hint: 'Align right',
            text: 'Align right',
          },
          {
            icon: 'alignjustify',
            alignment: 'justify',
            hint: 'Justify',
            text: 'Justify',
          },
        ],
        keyExpr: 'alignment',
        stylingMode: 'outlined',
        selectedItemKeys: ['left'],
        onItemClick(e) {
          DevExpress.ui.notify(`The "${e.itemData.hint}" button was clicked`);
        },
      });

      $buttonGroup.appendTo(element);
    },
  },
  {
    locateInMenu: 'never',
    location: 'before',
    widget: 'dxButtonGroup',
    displayExpr: 'text',
    options: {
      items: [
        {
          icon: 'orderedlist',
          alignment: 'orderedlist',
          hint: 'Ordered',
        },
        {
          icon: 'bulletlist',
          alignment: 'bulletlist',
          hint: 'Bullet',
        },
      ],
      keyExpr: 'alignment',
      stylingMode: 'outlined',
      onItemClick(e) {
        DevExpress.ui.notify(`The "${e.itemData.hint}" button was clicked`);
      },
    },
  },
  {
    cssClass: 'menu-separator-container',
    locateInMenu: 'auto',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $(element).addClass('menu-separator');
    },
  },
  {
    locateInMenu: 'auto',
    location: 'before',
    widget: 'dxDateBox',
    options: {
      width: 200,
      type: 'date',
      value: new Date(2022, 9, 7),
    },
  },
  {
    cssClass: 'menu-separator-container',
    locateInMenu: 'auto',
    location: 'before',
    template(itemData, itemIndex, element) {
      $(element).addClass('separator');
    },
    menuItemTemplate(itemData, itemIndex, element) {
      $(element).addClass('menu-separator');
    },
  },
  {
    locateInMenu: 'auto',
    location: 'before',
    widget: 'dxCheckBox',
    options: {
      value: false,
      text: 'Checkbox text',
      onOptionChanged() {
        DevExpress.ui.notify('Checkbox option has been changed!');
      },
    },
  },
  {
    locateInMenu: 'never',
    location: 'after',
    widget: 'dxButton',
    showText: 'inMenu',
    options: {
      icon: 'attach',
      text: 'Attach',
      onClick() {
        DevExpress.ui.notify('Attach button has been clicked!');
      },
    },
  },
  {
    locateInMenu: 'auto',
    location: 'after',
    widget: 'dxButton',
    showText: 'inMenu',
    options: {
      icon: 'add',
      text: 'Add',
      onClick() {
        DevExpress.ui.notify('Add button has been clicked!');
      },
    },
  },
  {
    locateInMenu: 'auto',
    location: 'after',
    widget: 'dxButton',
    showText: 'inMenu',
    options: {
      icon: 'trash',
      text: 'Remove',
      onClick() {
        DevExpress.ui.notify('Remove button has been clicked!');
      },
    },
  },
  {
    locateInMenu: 'always',
    widget: 'dxButton',
    showText: 'inMenu',
    options: {
      icon: 'help',
      text: 'About',
      onClick() {
        DevExpress.ui.notify('About button has been clicked!');
      },
    },
  },
];

$(() => {
  $('#resizable-container').dxResizable({
    minWidth: 500,
    minHeight: 150,
    maxHeight: 370,
    handles: 'right',
  });

  const toolbar = $('#toolbar').dxToolbar({
    dataSource: toolbarDataDefault,
    multiline: true,
  }).dxToolbar('instance');

  const toolbarLineModes = ['Multiline mode', 'Singleline mode'];

  $('#toolbarModeRadioGroup').dxRadioGroup({
    items: toolbarLineModes,
    value: toolbarLineModes[0],
    layout: 'horizontal',
    onValueChanged(e) {
      const { value } = e;

      toolbar.option('multiline', value === toolbarLineModes[0]);
    },
  });
});
