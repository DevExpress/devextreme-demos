$(() => {
  const msInDay = 1000 * 60 * 60 * 24;
  const now = new Date();
  const initialValue = [new Date(now.getTime() - msInDay * 3),
    new Date(now.getTime() + msInDay * 3)];

  $('#range-selection').dxDateRangeBox({
    value: initialValue,
    inputAttr: { 'aria-label': 'Default select' },
    onValueChanged: showSelectedDays,
  });

  $('#custom-format').dxDateRangeBox({
    value: initialValue,
    displayFormat: 'EEEE, MMM dd',
    inputAttr: { 'aria-label': 'Custom Date' },
  });

  $('#apply-value').dxDateRangeBox({
    inputAttr: { 'aria-label': 'Apply value' },
    applyValueMode: 'useButtons',
  });

  $('#single-view').dxDateRangeBox({
    inputAttr: { 'aria-label': 'Single view' },
    multiView: false,
  });

  $('#icon-click-only').dxDateRangeBox({
    inputAttr: { 'aria-label': 'Open on icon click' },
    openOnFieldClick: false,
  });

  $('#current-month-only').dxDateRangeBox({
    inputAttr: { 'aria-label': 'Current month only' },
    ...getCurrentMonthRange(),
  });

  $('#clear').dxDateRangeBox({
    showClearButton: true,
    value: initialValue,
    inputAttr: { 'aria-label': 'Clear Date' },
  });

  function getCurrentMonthRange() {
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();

    const min = new Date(now.setDate(1));
    const max = new Date(now.setDate(lastDay));

    return { min, max };
  }

  function showSelectedDays({ value: [startDate, endDate] }) {
    if (!startDate || !endDate) {
      $('#days-selected').text(0);
      return;
    }

    const daysCount = (endDate - startDate) / (24 * 60 * 60 * 1000);
    $('#days-selected').text(daysCount + 1);
  }

  showSelectedDays({ value: initialValue });
});
