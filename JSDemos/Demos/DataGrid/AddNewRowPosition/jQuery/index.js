$(() => {
  const newRowPositionOptions = ['first', 'last', 'pageBottom', 'pageTop', 'viewportBottom', 'viewportTop'];
  const scrollingModeOptions = ['standard', 'virtual'];

  const dataGrid = $('#gridContainer').dxDataGrid({
    dataSource: generateData(100000),
    showBorders: true,
    columnAutoWidth: true,
    editing: {
      allowAdding: true,
      allowDeleting: true,
      allowUpdating: true,
      mode: 'cell',
      confirmDelete: false,
      useIcons: true,
      newRowPosition: 'viewportTop',
    },
    columns: ['id', 'firstName', 'lastName', 'gender', 'birthDate', {
      type: 'buttons',
      buttons: [{
        icon: 'add',
        onClick(e) {
          const changes = dataGrid.option('editing.changes');
          const key = new DevExpress.data.Guid().toString();
          changes.push({
            key,
            type: 'insert',
            insertAfterKey: e.row.key,
          });
          dataGrid.option('editing.changes', changes);
          dataGrid.option('editing', {
            editColumnName: 'id',
            editRowKey: key,
          });
        },
        visible({ row }) {
          return !row.isEditing;
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
