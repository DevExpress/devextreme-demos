$(() => {
  const stylingMode = readStylingMode() || 'filled';
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

  const birthDate = $('#birthDate').dxDateBox({
    label: 'Birth Date',
    placeholder: 'Select...',
    value: '6/3/1981',
    inputAttr: { 'aria-label': 'Birth Date' },
  }).dxValidator({
    validationRules: [{
      type: 'required',
    }],
  }).dxDateBox('instance');

  const hireDate = $('#hireDate').dxDateBox({
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

  $('#modeSelector').dxSelectBox({
    items: ['outlined', 'filled', 'underlined'],
    value: stylingMode,
    inputAttr: { 'aria-label': 'Mode' },
    onValueChanged(e) {
      writeStylingMode(e.value);
    },
  });

  $('#labelModeSelector').dxSelectBox({
    items: ['static', 'floating', 'hidden'],
    value: 'static',
    inputAttr: { 'aria-label': 'Label Mode' },
    onValueChanged({ value }) {
      [name, place, birthDate, hireDate, range, state, phone, notes].forEach((editor) => {
        editor.option('labelMode', value);
      });
    },
  });
});

const storageKey = 'editorStylingMode';
function readStylingMode() {
  const mode = localStorage.getItem(storageKey);
  localStorage.removeItem(storageKey);
  return mode;
}

function writeStylingMode(mode) {
  localStorage.setItem(storageKey, mode);
  window.location.reload(true);
}
