const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.vectorMapOptions = {
    tooltip: {
      enabled: true,
      customizeTooltip(arg) {
        if (arg.layer.type === 'marker') {
          return { text: arg.attribute('name') };
        }
        return null;
      },
    },
    onClick(e) {
      if (e.target && e.target.layer.type === 'marker') {
        e.component.center(e.target.coordinates()).zoomFactor(10);
      }
    },
    bounds: [-180, 85, 180, -60],
    layers: [{
      dataSource: DevExpress.viz.map.sources.world,
      hoverEnabled: false,
    }, {
      dataSource: markers,
    }],
  };

  $scope.buttonOptions = {
    text: 'Reset',
    onClick() {
      $('#vector-map').dxVectorMap('instance').center(null)
        .zoomFactor(null);
    },
  };
});
