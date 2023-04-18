$(() => {
  $('#employees').dxDataGrid({
    dataSource: employees,
    keyExpr: 'ID',
    headerFilter: {
      visible: true,
    },
    columns: [
      'Full_Name', {
        dataField: 'Title',
        caption: 'Position',
        headerFilter: {
          allowSelectAll: false,
          search: {
            enabled: true,
          },
        },
      },
      {
        dataField: 'City',
        headerFilter: {
          search: {
            enabled: true,
            editorOptions: {
              placeholder: 'Search city or state',
            },
            searchExpr: ['City', 'State'],
          },
        },
      }, 'Mobile_Phone', {
        dataField: 'Hire_Date',
        dataType: 'date',
      },
    ],
    columnAutoWidth: true,
    showRowLines: true,
    showBorders: true,
  });
});
