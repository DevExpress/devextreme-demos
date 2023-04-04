window.onload = function () {
  const viewModel = {
    polarChartOptions: {
      dataSource,
      series: [{ type: 'line' }],
      legend: {
        visible: false,
      },
      argumentAxis: {
        inverted: true,
        startAngle: 90,
        tickInterval: 30,
      },
      export: {
        enabled: true,
      },
      title: 'Rose in Polar Coordinates',
    },
  };

  ko.applyBindings(viewModel, document.getElementById('chart-demo'));
};
