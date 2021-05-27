var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    var employeesStore = new DevExpress.data.ArrayStore({
        key: "ID",
        data: employees
    });
        
    $scope.selectedItemKeys = [];
    $scope.disabled = true;
    
    $scope.dataGridOptions = {
        dataSource: employeesStore,
        showBorders: true,
        paging: {
            enabled: false
        },
        editing: {
            mode: "cell",
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        selection: {
            mode: "multiple"
        },
        onSelectionChanged: function(data) {
            $scope.selectedItemKeys = data.selectedRowKeys;
            $scope.disabled = !$scope.selectedItemKeys.length;
        }, 
        columns: [
            {
                dataField: "Prefix",
                caption: "Title",
                width: 55
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170
            }, {
                dataField: "StateID",
                caption: "State",
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            }, {
                dataField: "BirthDate",
                dataType: "date"
            }
        ],
        onToolbarPreparing: function(e) {
            var dataGrid = e.component;
            
            e.toolbarOptions.items[0].showText = 'always';

            e.toolbarOptions.items.push({
                location: "after",
                widget: "dxButton",
                options: {
                    text: "Delete Selected Records",
                    icon: "trash",
                    disabled: true,
                    onClick: function() {
                        dataGrid.getSelectedRowKeys().forEach((key) => {
                            employeesStore.remove(key);
                        });
                        dataGrid.refresh();
                    },
                    bindingOptions: {
                        disabled: "disabled"
                    }
                }
            });
        }
    };
    
});