$(() => {
  $('#html-editor').dxHtmlEditor({
    value: markup,
    height: 750,
    tableContextMenu: { enabled: true },
    tableResizing: { enabled: true },
    toolbar: {
      items: [
        {
          name: 'header',
          acceptedValues: [false, 1, 2, 3],
        },
        'separator', 'bold', 'color', 'separator',
        'alignLeft', 'alignCenter', 'alignRight', 'separator',
        'insertTable', 'deleteTable',
        'tableProperties', 'cellProperties',
        'insertRowAbove', 'insertRowBelow', 'deleteRow',
        'insertColumnLeft', 'insertColumnRight', 'deleteColumn',
      ],
    },
  });

  $('#resizing').dxCheckBox({
    text: 'Allow table resizing',
    value: true,
    onValueChanged(e) {
      editor.option('tableResizing.enabled', e.value);
    },
  });
  
  $('#contextMenu').dxCheckBox({
    text: 'Allow table context menu',
    value: true,
    onValueChanged(e) {
      editor.option('tableContextMenu.enabled', e.value);
    },
  });
});
