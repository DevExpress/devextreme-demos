$(() => {
  const dataGrid = $('#gridContainer').dxDataGridNext({
    dataSource: generateData(100000),
    keyExpr: 'id',
    showBorders: true,
    columns: [
      // { dataField: 'id', width: 70 },
      'id',
      'firstName',
      'lastName',
      'gender',
      'birthDate',
    ],
    scrolling: {
      rowRenderingMode: 'virtual',
    },
    paging: {
      pageSize: 10,
    },
    pager: {
      visible: true,
      allowedPageSizes: [5, 10, 'all'],
      showPageSizeSelector: true,
      showInfo: true,
      showNavigationButtons: true,
    },
  }).dxDataGridNext('instance');

  $('#displayMode').dxSelectBox({
    items: [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }],
    displayExpr: 'text',
    valueExpr: 'value',
    value: 'full',
    onValueChanged(data) {
      dataGrid.option('pager.displayMode', data.value);
      pageInfo.option('disabled', data.value === 'compact');
      navButtons.option('disabled', data.value === 'compact');
    },
  });
  $('#showPageSizes').dxCheckBox({
    text: 'Show Page Size Selector',
    value: true,
    onValueChanged(data) {
      dataGrid.option('pager.showPageSizeSelector', data.value);
    },
  });
  const pageInfo = $('#showInfo').dxCheckBox({
    text: 'Show Info Text',
    value: true,
    onValueChanged(data) {
      dataGrid.option('pager.showInfo', data.value);
    },
  }).dxCheckBox('instance');
  const navButtons = $('#showNavButtons').dxCheckBox({
    text: 'Show Navigation Buttons',
    value: true,
    onValueChanged(data) {
      dataGrid.option('pager.showNavigationButtons', data.value);
    },
  }).dxCheckBox('instance');
});
