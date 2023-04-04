window.onload = function () {
  const viewModel = {
    gaugeOptions: {
      scale: {
        startValue: 0,
        endValue: 20,
        tickInterval: 5,
      },
      value: 12,
      subvalues: [8, 18],
      tooltip: {
        enabled: true,
        customizeTooltip(arg) {
          return {
            text: `${arg.valueText} ohm`,
          };
        },
        font: {
          color: '#DCD0FF',
          size: 40,
        },
      },
      export: {
        enabled: true,
      },
      title: {
        text: 'Rheostat Resistance',
        font: { size: 28 },
      },
    },
  };

  ko.applyBindings(viewModel, document.getElementById('gauge-demo'));
};
