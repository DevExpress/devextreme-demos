window.onload = function () {
  const viewModel = {
    vectorMapOptions: {
      layers: [{
        dataSource: DevExpress.viz.map.sources.world,
        hoverEnabled: false,
      }, {
        name: 'pies',
        dataSource: markers,
        elementType: 'pie',
        dataField: 'values',
      }],
      tooltip: {
        enabled: true,
        customizeTooltip(arg) {
          if (arg.layer.type === 'marker') {
            return { text: arg.attribute('tooltip') };
          }
        },
      },
      legends: [{
        source: { layer: 'pies', grouping: 'color' },
        customizeText(arg) {
          return names[arg.index];
        },
      }],
      bounds: [-180, 85, 180, -60],
    },
  };

  ko.applyBindings(viewModel, $('#vector-map-demo').get(0));
};
