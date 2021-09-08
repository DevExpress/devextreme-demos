const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.direction = 'horizontal';

  $scope.tileViewOptions = {
    items: homes,
    height: 390,
    baseItemHeight: 120,
    baseItemWidth: 185,
    width: '100%',
    itemMargin: 10,
    itemTemplate(itemData, itemIndex, itemElement) {
      itemElement.append(`<div class="image" style="background-image: url(${itemData.ImageSrc})"></div>`);
    },
    bindingOptions: {
      direction: 'direction',
    },
  };

  $scope.directionOptions = {
    items: ['horizontal', 'vertical'],
    value: $scope.direction,
    onValueChanged(e) {
      $scope.direction = e.value;
    },
  };
});
