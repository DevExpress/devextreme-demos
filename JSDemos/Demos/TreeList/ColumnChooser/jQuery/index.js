$(() => {
  const columnChooserModes = [{
    key: 'dragAndDrop',
    name: 'Drag and drop',
  }, {
    key: 'select',
    name: 'Select',
  }];

  const treeList = $('#employees').dxTreeList({
    dataSource: employees,
    keyExpr: 'ID',
    parentIdExpr: 'Head_ID',
    columns: [{
      dataField: 'Title',
      caption: 'Position',
    }, {
      dataField: 'Full_Name',
      allowHiding: false,
    }, 'City', 'State', {
      caption: 'Contacts',
      columns: [{
        dataField: 'Mobile_Phone',
        allowHiding: false,
      }, 'Email', {
        dataField: 'Skype',
        visible: false,
      }],
    }, {
      dataField: 'Hire_Date',
      dataType: 'date',
    }],
    columnAutoWidth: true,
    showRowLines: true,
    showBorders: true,
    columnChooser: {
      mode: columnChooserModes[1].key,
      enabled: true,
      search: {
        enabled: true,
        editorOptions: { placeholder: 'Search column' },
      },
      selection: {
        selectByClick: true,
        allowSelectAll: true,
        recursive: true,
      },
    },
    expandedRowKeys: [1, 5],
  }).dxTreeList('instance');

  $('#columnChooserMode').dxSelectBox({
    items: columnChooserModes,
    value: columnChooserModes[1].key,
    valueExpr: 'key',
    displayExpr: 'name',
    onValueChanged(data) {
      treeList.option('columnChooser.mode', data.value);
    },
  });

  $('#searchEnabled').dxCheckBox({
    text: 'Search enabled',
    value: true,
    onValueChanged(data) {
      treeList.option('columnChooser.search.enabled', data.value);
    },
  });

  $('#allowSelectAll').dxCheckBox({
    text: 'Allow select all',
    value: true,
    onValueChanged(data) {
      treeList.option('columnChooser.selection.allowSelectAll', data.value);
    },
  });

  $('#selectByClick').dxCheckBox({
    text: 'Select by click',
    value: true,
    onValueChanged(data) {
      treeList.option('columnChooser.selection.selectByClick', data.value);
    },
  });

  $('#recursive').dxCheckBox({
    text: 'Recursive',
    value: true,
    onValueChanged(data) {
      treeList.option('columnChooser.selection.recursive', data.value);
    },
  });
});
