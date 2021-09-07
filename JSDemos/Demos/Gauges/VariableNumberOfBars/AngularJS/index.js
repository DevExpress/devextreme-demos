const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.products = products;

  $scope.productsToValues = function () {
    $scope.activeProducts = [];
    $scope.products.forEach((item) => {
      if (item.active) { $scope.activeProducts.push(item.count); }
    });
  };

  $scope.productsToValues();

  $scope.barGaugeOptions = {
    bindingOptions: {
      values: 'activeProducts',
    },
    startValue: 0,
    endValue: 50,
    label: {
      format: {
        type: 'fixedPoint',
        precision: 0,
      },
    },
  };
});
