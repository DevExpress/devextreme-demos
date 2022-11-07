$(() => {
  const maxDate = new Date();

  maxDate.setFullYear(maxDate.getFullYear() - 21);

  const sendRequest = function (value) {
    const invalidEmail = 'test@dx-email.com';
    const d = $.Deferred();
    setTimeout(() => {
      d.resolve(value !== invalidEmail);
    }, 1000);
    return d.promise();
  };

  $('#summary').dxValidationSummary({ });

  $('#email-validation').dxTextBox({})
    .dxValidator({
      validationRules: [{
        type: 'required',
        message: 'Email is required',
      }, {
        type: 'email',
        message: 'Email is invalid',
      }, {
        type: 'async',
        message: 'Email is already registered',
        validationCallback(params) {
          return sendRequest(params.value);
        },
      }],
    });

  $('#password-validation').dxTextBox({
    mode: 'password',
  }).dxValidator({
    validationRules: [{
      type: 'required',
      message: 'Password is required',
    }],
  });

  $('#confirm-password-validation').dxTextBox({
    mode: 'password',
  }).dxValidator({
    validationRules: [{
      type: 'compare',
      comparisonTarget() {
        const password = $('#password-validation').dxTextBox('instance');
        if (password) {
          return password.option('value');
        }
        return null;
      },
      message: "'Password' and 'Confirm Password' do not match.",
    },
    {
      type: 'required',
      message: 'Confirm Password is required',
    }],
  });

  $('#name-validation').dxTextBox({
    value: 'Peter',
  }).dxValidator({
    validationRules: [{
      type: 'required',
      message: 'Name is required',
    }, {
      type: 'pattern',
      pattern: /^[^0-9]+$/,
      message: 'Do not use digits in the Name.',
    }, {
      type: 'stringLength',
      min: 2,
      message: 'Name must have at least 2 symbols',
    }],
  });

  $('#date-validation').dxDateBox({
    invalidDateMessage: 'The date must have the following format: MM/dd/yyyy',
  }).dxValidator({
    validationRules: [{
      type: 'required',
      message: 'Date of birth is required',
    }, {
      type: 'range',
      max: maxDate,
      message: 'You must be at least 21 years old',
    }],
  });

  $('#country-validation').dxSelectBox({
    dataSource: countries,
    validationMessagePosition: 'left',
  }).dxValidator({
    validationRules: [{
      type: 'required',
      message: 'Country is required',
    }],
  });

  $('#city-validation').dxTextBox({
    validationMessagePosition: 'left',
  })
    .dxValidator({
      validationRules: [{
        type: 'required',
        message: 'City is required',
      }, {
        type: 'pattern',
        pattern: '^[^0-9]+$',
        message: 'Do not use digits in the City name.',
      }, {
        type: 'stringLength',
        min: 2,
        message: 'City must have at least 2 symbols',
      }],
    });

  $('#address-validation').dxTextBox({
    validationMessagePosition: 'left',
  })
    .dxValidator({
      validationRules: [{
        type: 'required',
        message: 'Address is required',
      }],
    });

  $('#phone-validation').dxTextBox({
    mask: '+1 (X00) 000-0000',
    maskRules: {
      X: /[02-9]/,
    },
    maskInvalidMessage: 'The phone must have a correct USA phone format',
    validationMessagePosition: 'left',
  }).dxValidator({
    validationRules: [{
      type: 'pattern',
      pattern: /^[02-9]\d{9}$/,
      message: 'The phone must have a correct USA phone format',
    }],
  });

  $('#check').dxCheckBox({
    value: false,
    text: 'I agree to the Terms and Conditions',
  }).dxValidator({
    validationRules: [{
      type: 'compare',
      comparisonTarget() { return true; },
      message: 'You must agree to the Terms and Conditions',
    }],
  });

  $('#form').on('submit', (e) => {
    DevExpress.ui.notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();
  });

  $('#button').dxButton({
    width: '100%',
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true,
  });
});
