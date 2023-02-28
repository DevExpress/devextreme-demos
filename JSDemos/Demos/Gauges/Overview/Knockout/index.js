window.onload = function () {
  const speedValue = ko.observable(40);
  const gaugeValue = ko.computed(() => (speedValue() / 2));

  const viewModel = {
    speedValue,
    speedOptions: {
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
      centerTemplate(gauge, container) {
        const content = $(`<svg>
        <circle cx="100" cy="100" r="55" stroke-width="2" stroke="#f05b41" fill="transparent"></circle>
        <text text-anchor="middle" y="120" x="100" font-size="50" font-weight="lighter" fill="#f05b41">${gauge.value()}</text>
        </svg>`);

        container.appendChild(content.get(0));
      },
      valueIndicator: {
        indentFromCenter: 55,
        color: '#f05b41',
        spindleSize: 0,
        spindleGapSize: 0,
      },
      value: speedValue,
      size: {
        width: 260,
      },
    },
    coolantOptions: {
      geometry: {
        startAngle: 180,
        endAngle: 90,
      },
      scale: {
        startValue: 0,
        endValue: 100,
        tickInterval: 10,
      },
      valueIndicator: {
        color: '#f05b41',
      },
      value: gaugeValue,
      size: {
        width: 90,
        height: 90,
      },
    },
    psiOptions: {
      scale: {
        startValue: 100,
        endValue: 0,
        tickInterval: 10,
      },
      geometry: {
        startAngle: 90,
        endAngle: 0,
      },
      valueIndicator: {
        color: '#f05b41',
      },
      value: gaugeValue,
      size: {
        width: 90,
        height: 90,
      },
    },
    rpmOptions: {
      scale: {
        startValue: 100,
        endValue: 0,
        tickInterval: 10,
      },
      geometry: {
        startAngle: -90,
        endAngle: -180,
      },
      valueIndicator: {
        color: '#f05b41',
      },
      value: gaugeValue,
      size: {
        width: 90,
        height: 90,
      },
    },
    instantFuelOptions: {
      scale: {
        startValue: 0,
        endValue: 100,
        tickInterval: 10,
      },
      geometry: {
        startAngle: 0,
        endAngle: -90,
      },
      valueIndicator: {
        color: '#f05b41',
      },
      value: gaugeValue,
      size: {
        width: 90,
        height: 90,
      },
    },
    fuelOptions: {
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
      value: ko.computed(() => (50 - speedValue() * 0.24)),
      size: {
        width: 90,
        height: 20,
      },
    },
    sliderOptions: {
      min: 0,
      max: 200,
      value: speedValue,
      width: 155,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('gauge-demo'));
};
