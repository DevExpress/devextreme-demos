$(() => {
  $('#checked').dxCheckBox({
    value: true,
  });

  $('#unchecked').dxCheckBox({
    value: false,
  });

  $('#indeterminate').dxCheckBox({
    value: null,
  });

  $('#handler').dxCheckBox({
    value: null,
    onValueChanged(data) {
      disabledCheckbox.option('value', data.value);
    },
  });

  var disabledCheckbox = $('#disabled').dxCheckBox({
    value: null,
    disabled: true,
  }).dxCheckBox('instance');

  $('#customSize').dxCheckBox({
    value: null,
    iconSize: 30,
  });

  $('#withText').dxCheckBox({
    value: true,
    text: 'Label',
  });
});
