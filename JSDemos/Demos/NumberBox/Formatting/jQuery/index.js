$(() => {
  $('#integer').dxNumberBox({
    format: '#',
    value: 14500,
    inputAttr: { 'aria-label': 'Integer' },
  });

  $('#currency').dxNumberBox({
    format: '$ #,##0.##',
    value: 14500.55,
    inputAttr: { 'aria-label': 'Currency' },
  });

  $('#accounting').dxNumberBox({
    format: '$ #,##0.##;($ #,##0.##)',
    value: -2314.12,
    inputAttr: { 'aria-label': 'Accounting' },
  });

  $('#percent').dxNumberBox({
    format: '#0%',
    value: 0.15,
    step: 0.01,
    inputAttr: { 'aria-label': 'Percent' },
  });

  $('#fixedPoint').dxNumberBox({
    format: '#,##0.00',
    value: 13415.24,
    inputAttr: { 'aria-label': 'Fixed Point' },
  });

  $('#weight').dxNumberBox({
    format: '#0.## kg',
    value: 3.14,
    inputAttr: { 'aria-label': 'Weight' },
  });
});
