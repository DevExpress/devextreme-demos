var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.selectedItemsText = "Nobody has been selected";
    $scope.recursiveSelectionEnabled = false;
    $scope.selectedRowKeys = [];

    $scope.$watch("recursiveSelectionEnabled", function(value) {
        $scope.selectedRowKeys = [];
    });

    $scope.treeListOptions = {
        dataSource: employees,
        keyExpr: "ID",
        parentIdExpr: "Head_ID",
        showRowLines: true,
        showBorders: true,
        columnAutoWidth: true,
        selection: {
            mode: "multiple"
        },
        bindingOptions: {
            "selectedRowKeys": "selectedRowKeys",
            "selection.recursive": "recursiveSelectionEnabled"
        },
        columns: [{ 
                dataField: "Full_Name"
            }, {
                dataField: "Title",
                caption: "Position"
            }, "City", "State",
            {
                dataField: "Hire_Date",
                dataType: "date",
                width: 120
            }
        ],
        expandedRowKeys: [1, 2, 10],
        onSelectionChanged: function(e) {
            var data = e.component.getSelectedRowsData("all");
    
            if(data.length > 0)
                $scope.selectedItemsText = $.map(data, function(value) {
                    return value.Full_Name;
                }).join(", ");
            else 
                $scope.selectedItemsText = "Nobody has been selected";
        }
    };

    $scope.recursiveOptions = {
        text: "Recursive Selection",
        bindingOptions: {
            value: "recursiveSelectionEnabled"
        }
    };
});