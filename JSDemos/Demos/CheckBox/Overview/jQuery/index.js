$(() => {
  $('#checked').dxCheckBox({
    value: true,
  });

  $('#unchecked').dxCheckBox({
    value: false,
  });

  $('#indeterminate').dxCheckBox({
    value: undefined,
  });

  $('#handler').dxCheckBox({
    value: undefined,
    onValueChanged(data) {
      disabledCheckbox.option('value', data.value);
    },
  });

  var disabledCheckbox = $('#disabled').dxCheckBox({
    value: undefined,
    disabled: true,
  }).dxCheckBox('instance');

  $('#withText').dxCheckBox({
    value: true,
    width: 80,
    text: 'Check',
  });

  $('#customSize').dxCheckBox({
    value: undefined,
    iconSize: 50,
    text: 'Centered label',
  });
});
