const DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', ($scope) => {
  $scope.isContextMenuEnabled = true;
  $scope.isResizingAllowed = true;

  $scope.htmlEditorOptions = {
    value: markup,
    height: 350,
    toolbar: {
      items: [
        {
          name: 'header',
          acceptedValues: [false, 1, 2, 3],
        },
        'separator', 'bold', 'color', 'separator',
        'alignLeft', 'alignCenter', 'alignRight', 'separator',
        'insertTable', 'deleteTable',
        'insertRowAbove', 'insertRowBelow', 'deleteRow',
        'insertColumnLeft', 'insertColumnRight', 'deleteColumn',
      ],
    },
    bindingOptions: {
      'tableContextMenu.enabled': 'isContextMenuEnabled',
      'tableResizing.enabled': 'isResizingAllowed',
    },
  };

  $scope.tableResizingSwitcher = {
    text: 'Allow Table Resizing',
    bindingOptions: {
      value: 'isResizingAllowed',
    },
  };

  $scope.tableContextMenuSwitcher = {
    text: 'Enable Table Context Menu',
    bindingOptions: {
      value: 'isContextMenuEnabled',
    },
  };
});
