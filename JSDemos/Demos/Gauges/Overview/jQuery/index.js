$(() => {
  const gaugeOptions = {
    scale: {
      startValue: 0,
      endValue: 100,
      tickInterval: 50,
    },
    valueIndicator: {
      color: '#f05b41',
    },
    value: 20,
    size: {
      width: 90,
      height: 90,
    },
  };

  const speedGauge = $('#speed-gauge').dxCircularGauge({
    geometry: {
      startAngle: 225,
      endAngle: 315,
    },
    scale: {
      startValue: 20,
      endValue: 200,
      tickInterval: 20,
      minorTickInterval: 10,
    },
    valueIndicator: {
      indentFromCenter: 55,
      color: '#f05b41',
      spindleSize: 0,
      spindleGapSize: 0,
    },
    centerTemplate: (gauge, container) => {
      const content = $(`<svg>
      <circle cx="100" cy="100" r="55" stroke-width="2" stroke="#f05b41" fill="transparent"></circle>
      <text text-anchor="middle" y="120" x="100" font-size="50" font-weight="lighter" fill="#f05b41">${gauge.value()}</text>
      </svg>`);

      container.appendChild(content.get(0));
    },
    value: 40,
    size: {
      width: 260,
    },
  }).dxCircularGauge('instance');

  $('#coolant-gauge').dxCircularGauge($.extend(true, {}, gaugeOptions, {
    geometry: { startAngle: 180, endAngle: 90 },
  }));

  $('#psi-gauge').dxCircularGauge($.extend(true, {}, gaugeOptions, {
    scale: { startValue: 100, endValue: 0 },
    geometry: { startAngle: 90, endAngle: 0 },
  }));

  $('#rpm-gauge').dxCircularGauge($.extend(true, {}, gaugeOptions, {
    scale: { startValue: 100, endValue: 0 },
    geometry: { startAngle: -90, endAngle: -180 },
  }));

  $('#instant-fuel-gauge').dxCircularGauge($.extend(true, {}, gaugeOptions, {
    geometry: { startAngle: 0, endAngle: -90 },
  }));

  const fuelGauge = $('#fuel-gauge').dxLinearGauge({
    scale: {
      startValue: 0,
      endValue: 50,
      tickInterval: 25,
      minorTickInterval: 12.5,
      minorTick: {
        visible: true,
      },
      label: {
        visible: false,
      },
    },
    valueIndicator: {
      color: '#f05b41',
      size: 8,
      offset: 7,
    },
    value: 40.4,
    size: {
      width: 90,
      height: 20,
    },
  }).dxLinearGauge('instance');

  $('#slider').dxSlider({
    min: 0,
    max: 200,
    value: 40,
    width: 155,
    onValueChanged(e) {
      const gauges = ['coolant', 'psi', 'rpm', 'instant-fuel'];

      speedGauge.value(e.value);
      gauges.forEach((gaugeName) => {
        $(`#${gaugeName}-gauge`).dxCircularGauge('instance').value(e.value / 2);
      });

      fuelGauge.value(50 - e.value * 0.24);
    },
  });
});
