var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    function clearEvents() {
        $scope.events = [];
    }
    
    function logEvent(eventName) {
        $scope.events.unshift(eventName);
    }
    
    $scope.events = [];
    
    $scope.dataGridOptions = {
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
        paging: {
            enabled: false
        },
        editing: {
            mode: "row",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        }, 
        columns: [
            {
                dataField: "Prefix",
                caption: "Title"
            }, 
            "FirstName",
            "LastName",
            {
                dataField: "Position",
                width: 130
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
                dataType: "date",
                width: 125
            },     
        ],
        onEditingStart: function(e) {
            logEvent("EditingStart");
        },
        onInitNewRow: function(e) {
            logEvent("InitNewRow");
        },
        onRowInserting: function(e) {
            logEvent("RowInserting");
        },
        onRowInserted: function(e) {
            logEvent("RowInserted");
        },
        onRowUpdating: function(e) {
            logEvent("RowUpdating");
        },
        onRowUpdated: function(e) {
            logEvent("RowUpdated");
        },
        onRowRemoving: function(e) {
            logEvent("RowRemoving");
        },
        onRowRemoved: function(e) {
            logEvent("RowRemoved");
        },
        onSaving: function(e) {
            logEvent("Saving");
        },
        onSaved: function(e) {
            logEvent("Saved");
        },
        onEditCanceling: function(e) {
            logEvent("EditCanceling");
        },
        onEditCanceled: function(e) {
            logEvent("EditCanceled");
        }
    };
    $scope.buttonOptions = {
        text: "Clear",
        onClick: function() {
            clearEvents();
        }
    };
    
});