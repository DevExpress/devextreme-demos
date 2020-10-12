var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.pivotGridOptions = {
        allowSortingBySummary: true,
        allowSorting: true,
        allowFiltering: true,
        allowExpandAll: true,
        showColumnTotals: false,
        showTotalsPrior: "rows",
        showBorders: true,
        fieldChooser: {
            enabled: false
        },
        onCellPrepared: function(e) {
            if(e.area === "data" && e.cell.dataIndex === 2) {
                e.cellElement[0].style.color = e.cell.value < 0
                    ? "red"
                    : "green";
            }
        },
        dataSource: {
            fields: [{
                caption: "Region",
                width: 120,
                dataField: "region",
                area: "row"
            }, {
                caption: "City",
                dataField: "city",
                width: 150,
                area: "row"
            }, {
                dataField: "date",
                dataType: "date",
                groupInterval: "year",
                area: "column",
                expanded: true
            }, {
                area: "column",
                expanded: true,
                selector: function(item) {
                    var currDate = new Date(item.date);
                    var currMonth = currDate.getMonth();
                    return currMonth <= 5
                        ? "H1"
                        : "H2";
                }
            }, {
                caption: "Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data"
            }, {
                caption: "Running Total",
                dataField: "amount",
                dataType: "number",
                summaryType: "sum",
                format: "currency",
                area: "data",
                runningTotal: "row",
                allowCrossGroupCalculation: true
            }, {
                caption: "Profit/Loss",
                dataType: "number",
                format: "currency",
                area: "data",
                calculateSummaryValue: function(summaryCell) {
                    var prevCell = summaryCell.prev('column', true);
                    if(prevCell) {
                        var prevVal = prevCell.value("Total");
                        var currVal = summaryCell.value("Total");
                        return currVal - prevVal;
                    }
                    return null;
                }
            }],
            store: sales
        }
    };
    
    $scope.checkBoxOptions = {
        value: true,
        text: "Allow cross-group running totals accumulation",
        onValueChanged: function(e) {
            var pivotGrid = $("#sales").dxPivotGrid("instance"),
                pivotGridDataSource = pivotGrid.getDataSource();
    
            pivotGridDataSource.field(6, {allowCrossGroupCalculation: e.value});
            pivotGridDataSource.load();
        }
    };
    
});