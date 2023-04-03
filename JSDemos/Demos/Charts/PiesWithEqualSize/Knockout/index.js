window.onload = function () {
  const legendSettings = {
    verticalAlignment: 'bottom',
    horizontalAlignment: 'center',
    itemTextPosition: 'right',
    rowCount: 2,
  };
  const seriesOptions = [{
    argumentField: 'name',
    valueField: 'area',
    label: {
      visible: true,
      format: 'percent',
    },
  }];
  const sizeGroupName = 'piesGroup';
  const viewModel = {
    countriesAreaChartOptions: {
      dataSource: countries,
      sizeGroup: sizeGroupName,
      title: 'Area of Countries',
      palette: 'Soft',
      legend: legendSettings,
      series: seriesOptions,
    },
    landWaterRationChartOptions: {
      sizeGroup: sizeGroupName,
      title: 'Water/Land Ratio',
      palette: 'Soft Pastel',
      legend: legendSettings,
      dataSource: waterLandRatio,
      series: seriesOptions,
    },
  };

  ko.applyBindings(viewModel, document.getElementById('chart-demo'));
};
