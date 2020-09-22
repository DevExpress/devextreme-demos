var DemoApp = angular.module('DemoApp', ['dx']);

var URL = "https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi";

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.dataSource = [];
    $scope.editRowKey = null;
    $scope.changes = [];

    $scope.dataGridOptions = {
        bindingOptions: {
            "dataSource": "dataSource",
            "editing.editRowKey": "editRowKey",
            "editing.changes": "changes"
        },
        keyExpr: "OrderID",
        showBorders: true,
        editing: {
            mode: "row",
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true
        },
        repaintChangesOnly: true,
        onSaving: function (e) {
            var change = e.changes[0];

            e.cancel = true;

            if (change) {
                e.promise = sendChange(URL, change).done((data) => {
                    var orders = $scope.dataSource;

                    if(change.type === "insert") {
                        change.data = data;
                    }

                    orders = DevExpress.data.applyChanges(orders, [change], { keyExpr: "OrderID" });

                    $scope.dataSource = orders;
                    $scope.editRowKey = null;
                    $scope.changes = [];
                    $scope.$apply();
                });
            }
        },
        columns: [{
            dataField: "OrderID",
            allowEditing: false
        }, {
            dataField: "ShipName"
        }, {
            dataField: "ShipCountry"
        }, {
            dataField: "ShipCity"
        }, {
            dataField: "ShipAddress"
        }, {
            dataField: "OrderDate",
            dataType: "date"
        }, {
            dataField: "Freight"
        }]
    };

    sendRequest(URL + "/Orders").done((data) => {
        $scope.dataSource = data;
        $scope.$apply();
    });

    function sendChange(url, change) {
        switch (change.type) {
            case "insert":
                return sendRequest(url + "/InsertOrder", "POST", { values: JSON.stringify(change.data) });
            case "update":
                return sendRequest(url + "/UpdateOrder", "PUT", { key: change.key, values: JSON.stringify(change.data) });
            case "remove":
                return sendRequest(url + "/DeleteOrder", "DELETE", { key: change.key });
        }
    }

    function sendRequest(url, method, data) {
        var d = $.Deferred();

        method = method || "GET";

        $.ajax(url, {
            method: method,
            data: data,
            cache: false,
            xhrFields: { withCredentials: true }
        }).done(function (result) {
            d.resolve(method === "GET" ? result.data : result);
        }).fail(function (xhr) {
            d.reject(xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText);
        });

        return d.promise();
    }
});