window.onload = function () {
  const viewModel = {
    chartOptions: {
      dataSource,
      rotated: true,
      commonSeriesSettings: {
        argumentField: 'breed',
        type: 'bar',
      },
      series: {
        valueField: 'count',
        name: 'breeds',
        color: '#a3d6d2',
        selectionStyle: {
          color: '#ec2e7a',
          hatching: { direction: 'none' },
        },
      },
      title: {
        text: 'Most Popular US Cat Breeds',
      },
      legend: {
        visible: false,
      },
      export: {
        enabled: true,
      },
      onDone(e) {
        e.component.getSeriesByPos(0).getPointsByArg('Siamese')[0].select();
      },
      onPointClick(e) {
        const point = e.target;
        if (point.isSelected()) {
          point.clearSelection();
        } else {
          point.select();
        }
      },
    },
  };

  ko.applyBindings(viewModel, document.getElementById('chart-demo'));
};
