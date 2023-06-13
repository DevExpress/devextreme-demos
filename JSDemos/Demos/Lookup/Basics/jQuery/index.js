$(() => {
  $('#lookup').dxLookup({
    dropDownOptions: {
      showTitle: false,
    },
    items: employeesList,
    value: employeesList[0],
    inputAttr: {
      'aria-lebel': 'Simple lookup',
    },
  });

  $('#lookup-grouped').dxLookup({
    dataSource: new DevExpress.data.DataSource({
      store: employeesTasks,
      key: 'ID',
      group: 'Assigned',
    }),
    dropDownOptions: {
      hideOnOutsideClick: true,
      showTitle: false,
    },
    grouped: true,
    displayExpr: 'Subject',
    inputAttr: {
      'aria-lebel': 'Grouped lookup',
    },
  });
});
