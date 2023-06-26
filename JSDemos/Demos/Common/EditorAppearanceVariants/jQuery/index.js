$(() => {
  const stylingMode = 'filled';
  const labelModeWidgets = [];
  DevExpress.config({
    editorStylingMode: stylingMode,
  });

  const name = $('#name').dxTextBox({
    value: 'Olivia Peyton',
    placeholder: 'Type...',
    inputAttr: { 'aria-label': 'Name' },
    label: 'Name',
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxTextBox('instance');

  const place = $('#address').dxTextBox({
    placeholder: 'Type...',
    inputAttr: { 'aria-label': 'Address' },
    label: 'Address',
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxTextBox('instance');

  const birthDate = $('#birth-date').dxDateBox({
    label: 'Birth Date',
    placeholder: 'Select...',
    value: '6/3/1981',
    inputAttr: { 'aria-label': 'Birth Date' },
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxDateBox('instance');

  const hireDate = $('#hire-date').dxDateBox({
    label: 'Hire Date',
    placeholder: 'Select...',
    inputAttr: { 'aria-label': 'Hire Date' },
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxDateBox('instance');

  const range = $('#vacation-dates').dxDateRangeBox({
    startDate: '6/3/2023',
    startDateLabel: 'Start Vacation Date',
    endDate: '12/3/2023',
    endDateLabel: 'End Vacation Date',
  }).dxDateRangeBox('instance');

  const state = $('#state').dxSelectBox({
    items: states,
    inputAttr: { 'aria-label': 'State' },
    placeholder: 'Select...',
    label: 'State',
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxSelectBox('instance');

  const phone = $('#phone').dxTextBox({
    label: 'Phone',
    mask: '+1 (000) 000-0000',
    inputAttr: { 'aria-label': 'Phone' },
    maskRules: {
      X: /[02-9]/,
    },
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxTextBox('instance');

  const notes = $('#notes').dxTextArea({
    value: 'Olivia loves to sell. She has been selling DevAV products since 2012.',
    placeholder: 'Type...',
    label: 'Notes',
    inputAttr: { 'aria-label': 'Notes' },
  }).dxTextArea('instance');

  $('#validate').dxButton({
    text: 'Save',
    icon: 'save',
    type: 'default',
    onClick({ validationGroup }) {
      const result = validationGroup.validate();
      if (result.isValid) {
        DevExpress.ui.notify('The task was saved successfully.', 'success');
      } else {
        DevExpress.ui.notify('The task was not saved. Please check if all fields are valid.', 'error');
      }
    },
  });

  labelModeWidgets.push(name, place, birthDate, hireDate, range, state, phone, notes);

  const stylingModeSelectBox = $('#styling-mode-selector').dxSelectBox({
    items: ['outlined', 'filled', 'underlined'],
    value: stylingMode,
    inputAttr: { 'aria-label': 'Mode' },
    onValueChanged({ value }) {
      [stylingModeSelectBox, labelModeSelectBox].concat(labelModeWidgets).forEach((editor) => {
        editor.option('stylingMode', value);
      });
    },
  }).dxSelectBox('instance');

  const labelModeSelectBox = $('#label-mode-selector').dxSelectBox({
    items: ['static', 'floating', 'hidden'],
    value: 'static',
    inputAttr: { 'aria-label': 'Label Mode' },
    onValueChanged({ value }) {
      labelModeWidgets.forEach((editor) => {
        editor.option('labelMode', value);
      });
    },
  }).dxSelectBox('instance');
});
