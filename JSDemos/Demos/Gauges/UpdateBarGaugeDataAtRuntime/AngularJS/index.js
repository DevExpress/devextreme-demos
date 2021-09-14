const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.basicColors = [];
  $scope.currentColor = '';

  function getBasicColors(value) {
    const code = Number(`0x${value.slice(1)}`);

    $scope.currentColor = value;
    $scope.basicColors = [
      (code >> 16) & 0xff,
      (code >> 8) & 0xff,
      code & 0xff,
    ];
  }

  $scope.barGaugeOptions = {
    bindingOptions: {
      values: 'basicColors',
    },
    startValue: 0,
    endValue: 255,
    palette: ['#ff0000', '#00ff00', '#0000ff'],
    label: {
      visible: false,
    },
    onInitialized() {
      getBasicColors(colors[0].code);
    },
  };

  $scope.selectBoxOptions = {
    width: 150,
    dataSource: colors,
    displayExpr: 'name',
    value: colors[0],
    onValueChanged(e) {
      getBasicColors(e.value.code);
    },
  };
});
