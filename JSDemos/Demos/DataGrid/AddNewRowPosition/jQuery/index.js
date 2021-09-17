$(() => {
  const newRowPositionOptions = ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'];
  const scrollingModeOptions = ['infinite', 'standard', 'virtual'];

  const dataGrid = $('#gridContainer').dxDataGrid({
    dataSource: generateData(100000),
    showBorders: true,
    editing: {
      allowAdding: true,
      allowDeleting: true,
      useIcons: true,
      newRowPosition: 'viewportTop',
    },
    columnAutoWidth: true,
    columns: ['id', 'firstName', 'lastName', 'gender', 'birthDate', {
      type: 'buttons',
      buttons: [{
        icon: 'add',
        onClick(e) {
          const changes = dataGrid.option('editing.changes');
          changes.push({
            type: 'insert',
            insertAfterKey: e.row.key,
          });
          dataGrid.option('editing.changes', changes);
        },
      }, 'delete'],
    }],
    toolbar: {
      items: [{
        name: 'addRowButton',
        showText: 'always',
      }],
    },
  }).dxDataGrid('instance');

  $('#newRowPositionSelectBox').dxSelectBox({
    value: 'viewportTop',
    items: newRowPositionOptions,
    onValueChanged(e) {
      dataGrid.option('editing.newRowPosition', e.value);
    },
  }).dxSelectBox('instance');

  $('#scrollingModeSelectBox').dxSelectBox({
    value: 'standard',
    items: scrollingModeOptions,
    onValueChanged(e) {
      dataGrid.option('scrolling.mode', e.value);
    },
  }).dxSelectBox('instance');
});
