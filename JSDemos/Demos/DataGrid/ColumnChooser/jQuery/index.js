const columnChooserModes = [{
  key: 'dragAndDrop',
  name: 'Drag and drop',
}, {
  key: 'select',
  name: 'Select',
}];

$(() => {
  const dataGrid = $('#employees').dxDataGrid({
    dataSource: employees,
    keyExpr: 'ID',
    columns: [{
      dataField: 'Title',
      caption: 'Position',
    }, {
      dataField: 'Full_Name',
      allowHiding: false,
    }, 'City', 'State', {
      caption: 'Contact information',
      columns: [
        {
          dataField: 'Mobile_Phone',
          allowHiding: false,
        }, {
          dataField: 'Email',
          visible: false,
        }, {
          dataField: 'Skype',
          visible: false,
        },
      ],
    }, {
      dataField: 'Hire_Date',
      dataType: 'date',
    }],
    columnAutoWidth: true,
    showRowLines: true,
    showBorders: true,
    columnChooser: {
      enabled: true,
      mode: columnChooserModes[1].key,
      search: {
        enabled: true,
        editorOptions: { placeholder: 'Search column' },
      },
      selection: {
        recursive: true,
        selectByClick: true,
        allowSelectAll: true,
      },
    },
    expandedRowKeys: [1],
  }).dxDataGrid('instance');

  $('#columnChooserMode').dxSelectBox({
    items: columnChooserModes,
    value: columnChooserModes[1].key,
    valueExpr: 'key',
    displayExpr: 'name',
    onValueChanged(data) {
      dataGrid.option('columnChooser.mode', data.value);
    },
  });

  $('#searchEnabled').dxCheckBox({
    text: 'Search enabled',
    value: true,
    onValueChanged(data) {
      dataGrid.option('columnChooser.search.enabled', data.value);
    },
  });

  $('#allowSelectAll').dxCheckBox({
    text: 'Allow select all',
    value: true,
    onValueChanged(data) {
      dataGrid.option('columnChooser.selection.allowSelectAll', data.value);
    },
  });

  $('#selectByClick').dxCheckBox({
    text: 'Select by click',
    value: true,
    onValueChanged(data) {
      dataGrid.option('columnChooser.selection.selectByClick', data.value);
    },
  });

  $('#recursive').dxCheckBox({
    text: 'Recursive',
    value: true,
    onValueChanged(data) {
      dataGrid.option('columnChooser.selection.recursive', data.value);
    },
  });
});
