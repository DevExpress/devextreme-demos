window.onload = function () {
  const workingDaysCount = ko.observable(260);
  const callValueChanged = ko.observable('onMoving');

  const viewModel = {
    workingDaysCount,
    rangeSelectorOptions: {
      behavior: {
        callValueChanged,
      },
      margin: {
        top: 50,
      },
      scale: {
        startValue: new Date(2011, 0, 1),
        endValue: new Date(2011, 11, 31),
        minorTickInterval: 'day',
        tickInterval: 'month',
        minorTick: {
          visible: false,
        },
        marker: { visible: false },
        label: {
          format: 'MMM',
        },
      },
      sliderMarker: {
        format: 'dd EEEE',
      },
      title: 'Calculate the Working Days Count in a Date Period',
      onValueChanged(e) {
        const currentDate = new Date(e.value[0]);
        let workingDays = 0;

        while (currentDate <= e.value[1]) {
          if (currentDate.getDay() > 0 && currentDate.getDay() < 6) {
            workingDays++;
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
        workingDaysCount(workingDays.toFixed());
      },
    },
    selectBoxOptions: {
      value: callValueChanged,
      dataSource: ['onMoving', 'onMovingComplete'],
      width: 210,
    },
  };

  ko.applyBindings(viewModel, $('#range-selector-demo').get(0));
};
