$(() => {
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
    }, 'City', 'State', 'Mobile_Phone', {
      dataField: 'Email',
      visible: false,
    }, {
      dataField: 'Hire_Date',
      dataType: 'date',
    }, {
      dataField: 'Skype',
      visible: false,
    }],
    columnAutoWidth: true,
    showRowLines: true,
    showBorders: true,
    columnChooser: {
      enabled: true,
      search: {
        enabled: true,
        editorOptions: { placeholder: 'Search column' },
      },
      selection: {
        selectByClick: true,
        allowSelectAll: true,
      },
    },
    expandedRowKeys: [1, 5],
  }).dxTreeList('instance');

  const columnChooserModes = [{
    key: 'dragAndDrop',
    name: 'Drag and drop',
  }, {
    key: 'select',
    name: 'Select',
  }];

  $('#columnChooserMode').dxSelectBox({
    items: columnChooserModes,
    value: columnChooserModes[0].key,
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
});
