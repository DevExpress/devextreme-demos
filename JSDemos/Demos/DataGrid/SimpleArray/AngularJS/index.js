var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.dataGridOptions = {
        dataSource: customers,
        keyExpr: "ID",
        columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        showBorders: true
    };
});