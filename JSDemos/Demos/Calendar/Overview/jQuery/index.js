$(() => {
  const zoomLevels = ['month', 'year', 'decade', 'century'];
  const weekDays = [
    { id: 0, text: 'Sunday' },
    { id: 1, text: 'Monday' },
    { id: 2, text: 'Tuesday' },
    { id: 3, text: 'Wednesday' },
    { id: 4, text: 'Thursday' },
    { id: 5, text: 'Friday' },
    { id: 6, text: 'Saturday' },
  ];
  const weekNumberRules = ['auto', 'firstDay', 'firstFourDays', 'fullWeek'];
  const date = new Date().getTime();

  const calendar = $('#calendar').dxCalendar({
    value: new Date(),
    disabled: false,
    firstDayOfWeek: 0,
    showWeekNumbers: false,
    weekNumberRule: 'auto',
    zoomLevel: zoomLevels[0],
    onValueChanged(data) {
      selectedDate.option('value', data.value);
    },
    onOptionChanged(data) {
      if (data.name === 'zoomLevel') {
        zoomLevel.option('value', data.value);
      }
    },
  }).dxCalendar('instance');

  $('#min-date').dxCheckBox({
    text: 'Specified min value',
    onValueChanged(data) {
      if (data.value) {
        calendar.option('min', new Date(date - 1000 * 60 * 60 * 24 * 3));
      } else {
        calendar.option('min', null);
      }
    },
  });

  $('#max-date').dxCheckBox({
    text: 'Specified max value',
    onValueChanged(data) {
      if (data.value) {
        calendar.option('max', new Date(date + 1000 * 60 * 60 * 24 * 3));
      } else {
        calendar.option('max', null);
      }
    },
  });

  $('#disable-dates').dxCheckBox({
    text: 'Disable weekend',
    onValueChanged(data) {
      if (data.value) {
        calendar.option('disabledDates', (d) => d.view === 'month' && isWeekend(d.date));
      } else {
        calendar.option('disabledDates', null);
      }
    },
  });

  $('#week-numbers').dxCheckBox({
    text: 'Show week numbers',
    onValueChanged(data) {
      calendar.option('showWeekNumbers', data.value);
    },
  });

  $('#disabled').dxCheckBox({
    text: 'Disabled',
    onValueChanged(data) {
      calendar.option('disabled', data.value);
    },
  });

  $('#custom-cell').dxCheckBox({
    text: 'Use the Custom Cell Template',
    value: false,
    onValueChanged(data) {
      calendar.option('cellTemplate', data.value ? getCellTemplate : 'cell');
    },
  });

  const zoomLevel = $('#zoom-level').dxSelectBox({
    dataSource: zoomLevels,
    value: zoomLevels[0],
    onValueChanged(data) {
      calendar.option('zoomLevel', data.value);
    },
  }).dxSelectBox('instance');

  const selectedDate = $('#selected-date').dxDateBox({
    value: new Date(),
    width: '100%',
    onValueChanged(data) {
      calendar.option('value', data.value);
    },
  }).dxDateBox('instance');

  $('#first-day-of-week').dxSelectBox({
    dataSource: weekDays,
    value: 0,
    valueExpr: 'id',
    displayExpr: 'text',
    onValueChanged(data) {
      calendar.option('firstDayOfWeek', data.value);
    },
  });

  $('#week-number-rule').dxSelectBox({
    dataSource: weekNumberRules,
    value: weekNumberRules[0],
    onValueChanged(data) {
      calendar.option('weekNumberRule', data.value);
    },
  });

  const holidays = [[1, 0], [4, 6], [25, 11]];

  function isWeekend(d) {
    const day = d.getDay();

    return day === 0 || day === 6;
  }

  function getCellTemplate(data) {
    let cssClass = '';

    if (data.view === 'month') {
      if (!data.date) {
        cssClass = 'week-number';
      } else {
        if (isWeekend(data.date)) { cssClass = 'weekend'; }

        $.each(holidays, (_, item) => {
          if (data.date.getDate() === item[0] && data.date.getMonth() === item[1]) {
            cssClass = 'holiday';
            return false;
          }
          return true;
        });
      }
    }

    return `<span class='${cssClass}'>${data.text}</span>`;
  }
});
