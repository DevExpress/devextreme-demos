window.onload = function () {
  const viewModel = {
    treeListOptions: {
      dataSource: employees,
      keyExpr: 'ID',
      parentIdExpr: 'Head_ID',
      headerFilter: {
        visible: true,
      },
      selection: {
        mode: 'single',
      },
      columns: [
        'Full_Name', {
          dataField: 'Title',
          caption: 'Position',
        }, 'City', 'State', 'Mobile_Phone', {
          dataField: 'Hire_Date',
          dataType: 'date',
        }],
      columnAutoWidth: true,
      showRowLines: true,
      showBorders: true,
      expandedRowKeys: [1],
    },
  };

  ko.applyBindings(viewModel, document.getElementById('treelist'));
};
