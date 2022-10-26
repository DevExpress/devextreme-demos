$(() => {
  const exampleTextArea = $('#example-textarea').dxTextArea({
    value: longText,
    height: 90,
  }).dxTextArea('instance');

  $('#set-max-length').dxCheckBox({
    value: false,
    onValueChanged(data) {
      if (data.value) {
        exampleTextArea.option('value', (exampleTextArea.option('value')).substring(0, 100));
        exampleTextArea.option('maxLength', 100);
      } else {
        exampleTextArea.option('maxLength', null);
        exampleTextArea.option('value', longText);
      }
    },
    text: 'Limit text length',
  });

  $('#set-resize').dxCheckBox({
    value: false,
    onValueChanged(e) {
      if (e.value) {
        exampleTextArea.option('autoResizeEnabled', true);
        exampleTextArea.option('height', undefined);
      } else {
        exampleTextArea.option('autoResizeEnabled', false);
        exampleTextArea.option('height', 90);
      }
    },
    text: 'Enable auto resize',
  });

  const valueChangeEvents = [{
    title: 'On Blur',
    name: 'change',
  }, {
    title: 'On Key Up',
    name: 'keyup',
  }];

  $('#change-event').dxSelectBox({
    items: valueChangeEvents,
    value: valueChangeEvents[0].name,
    valueExpr: 'name',
    displayExpr: 'title',
    onValueChanged(data) {
      editingTextArea.option('valueChangeEvent', data.value);
    },
  });

  const editingTextArea = $('#editing-textarea').dxTextArea({
    value: longText,
    height: 90,
    valueChangeEvent: 'change',
    onValueChanged(data) {
      disabledTextArea.option('value', data.value);
    },
  }).dxTextArea('instance');

  const disabledTextArea = $('#disabled-textarea').dxTextArea({
    value: longText,
    height: 90,
    readOnly: true,
  }).dxTextArea('instance');
});
