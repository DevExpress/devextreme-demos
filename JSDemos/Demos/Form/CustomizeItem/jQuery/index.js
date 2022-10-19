$(() => {
  $('#form').dxForm({
    formData: employee,
    items: [{
      itemType: 'group',
      caption: 'Employee Details',
      colCount: 2,
      items: [{
        dataField: 'FirstName',
        editorOptions: {
          disabled: true,
        },
      }, {
        dataField: 'Position',
        editorType: 'dxSelectBox',
        editorOptions: {
          items: positions,
          searchEnabled: true,
          value: '',
        },
        validationRules: [{
          type: 'required',
          message: 'Position is required',
        }],
      }, {
        dataField: 'LastName',
        editorOptions: {
          disabled: true,
        },
      }, {
        dataField: 'HireDate',
        editorType: 'dxDateBox',
        editorOptions: {
          value: null,
          width: '100%',
        },
        validationRules: [{
          type: 'required',
          message: 'Hire date is required',
        }],
      }, {
        dataField: 'BirthDate',
        editorType: 'dxDateBox',
        editorOptions: {
          disabled: true,
          width: '100%',
        },
      }, 'Address', {
        colSpan: 2,
        dataField: 'Notes',
        editorType: 'dxTextArea',
        editorOptions: {
          height: 90,
          maxLength: 200,
        },
      }, {
        dataField: 'Phone',
        editorOptions: {
          mask: '+1 (X00) 000-0000',
          maskRules: { X: /[02-9]/ },
        },
      }, 'EmailRule'],
    }],
  });

  $('#form').dxForm('instance').validate();
});
