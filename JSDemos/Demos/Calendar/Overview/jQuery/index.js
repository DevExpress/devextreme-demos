$(() => {
  const msInDay = 1000 * 60 * 60 * 24;
  const zoomLevels = ['month', 'year', 'decade', 'century'];
  const selectionMode = ['single', 'multiple', 'range'];
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
  let zoomLevel;

  const calendar = $('#calendar').dxCalendar({
    disabled: false,
    firstDayOfWeek: 0,
    showWeekNumbers: false,
    weekNumberRule: 'auto',
    zoomLevel: zoomLevels[0],
    onOptionChanged(data) {
      if (data.name === 'zoomLevel') {
        zoomLevel.option('value', data.value);
      }
    },
  }).dxCalendar('instance');

  $('#accordion').dxAccordion({
    collapsible: true,
    activeStateEnabled: false,
    hoverStateEnabled: false,
    focusStateEnabled: false,
    items: [
      {
        title: 'Common options',
        template: getCommonOptionsTemplate,
      },
      {
        title: 'Week numeration',
        template: getWeekNumerationTemplate,
      },
      {
        title: 'Dates availability',
        template: getDatesAvailabilityTemplate,
      },
    ],
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

  function getCommonOptionsTemplate() {
    const $zoomLevel = $('<div>').dxSelectBox({
      dataSource: zoomLevels,
      value: zoomLevels[0],
      inputAttr: { 'aria-label': 'Zoom Level' },
      onValueChanged(data) {
        calendar.option('zoomLevel', data.value);
      },
    });
    zoomLevel = $zoomLevel.dxSelectBox('instance');

    const $selectionMode = $('<div>').dxSelectBox({
      dataSource: selectionMode,
      value: selectionMode[0],
      inputAttr: { 'aria-label': 'Selection Mode' },
      onValueChanged(data) {
        calendar.option('selectionMode', data.value);
      },
    });

    const $cellTemplate = $('<div>').dxCheckBox({
      text: 'Use custom cell template',
      onValueChanged(data) {
        calendar.option('cellTemplate', data.value ? getCellTemplate : 'cell');
      },
    });

    const $disableCalendar = $('<div>').dxCheckBox({
      text: 'Disable the calendar',
      onValueChanged(data) {
        calendar.option('disabled', data.value);
      },
    });

    return $('<div>').append(
      $('<div class="option">').append(
        $('<span>Zoom level</span>'),
        $zoomLevel,
      ),
      $('<div class="option">').append(
        $('<span>Selection mode</span>'),
        $selectionMode,
      ),
      $('<div class="option">').append($cellTemplate),
      $('<div class="option">').append($disableCalendar),
    );
  }

  function getWeekNumerationTemplate() {
    const $showWeekNumbers = $('<div>').dxCheckBox({
      text: 'Show week numbers',
      onValueChanged(data) {
        calendar.option('showWeekNumbers', data.value);
      },
    });

    const $firstDayOfWeek = $('<div>').dxSelectBox({
      dataSource: weekDays,
      value: 0,
      valueExpr: 'id',
      inputAttr: { 'aria-label': 'First Day of Week' },
      displayExpr: 'text',
      onValueChanged(data) {
        calendar.option('firstDayOfWeek', data.value);
      },
    });

    const $weekNumberRule = $('<div>').dxSelectBox({
      dataSource: weekNumberRules,
      value: weekNumberRules[0],
      inputAttr: { 'aria-label': 'Week Number Rule' },
      onValueChanged(data) {
        calendar.option('weekNumberRule', data.value);
      },
    });

    return $('<div>').append(
      $('<div class="option">').append(
        $showWeekNumbers,
      ),
      $('<div class="option">').append(
        $('<span>First day of week</span>'),
        $firstDayOfWeek,
      ),
      $('<div class="option">').append(
        $('<span>Week number rule</span>'),
        $weekNumberRule,
      ),
    );
  }

  function getDatesAvailabilityTemplate() {
    const $minDate = $('<div>').dxCheckBox({
      text: 'Set minimum date',
      onValueChanged(data) {
        const minDate = new Date(date - msInDay * 3);

        calendar.option('min', data.value ? minDate : null);
      },
    });

    const $maxDate = $('<div>').dxCheckBox({
      text: 'Set maximum date',
      onValueChanged(data) {
        const maxDate = new Date(date + msInDay * 3);

        calendar.option('max', data.value ? maxDate : null);
      },
    });

    const $disableWeekends = $('<div>').dxCheckBox({
      text: 'Disable weekends',
      onValueChanged(data) {
        if (data.value) {
          calendar.option('disabledDates', (d) => d.view === 'month' && isWeekend(d.date));
        } else {
          calendar.option('disabledDates', null);
        }
      },
    });

    return $('<div>').append(
      $('<div class="option">').append($minDate),
      $('<div class="option">').append($maxDate),
      $('<div class="option">').append($disableWeekends),
    );
  }
});
