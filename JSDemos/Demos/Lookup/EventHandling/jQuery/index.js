$(() => {
  const lookup = $('#lookup').dxLookup({
    items: employees,
    displayExpr(item) {
      if (!item) {
        return '';
      }

      return `${item.FirstName} ${item.LastName}`;
    },
    applyValueMode: 'instantly',
    dropDownOptions: {
      showTitle: false,
    },
    placeholder: 'Select employee',
    onValueChanged(e) {
      $('.selected').show();
      $('#selected-employee-img').attr('src', e.value.Picture);
      $('#selected-employee-notes').text(e.value.Notes);
    },
  }).dxLookup('instance');
  
  $('#applyValueMode').dxSelectBox({
    items: ['instantly', 'useButtons'],
    value: applyValueMode,
    onValueChanged(e) {
      lookup.option('applyValueMode', e.value);
    }
  })
});