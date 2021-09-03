window.onload = function() {
    var viewModel = {
        gridOptions: {
            dataSource: employees,
            showBorders: true,
            selection: {
                mode: "multiple"
            },
            export: {
                enabled: true,
                fileName: "Employees",
                allowExportSelectedData: true
            },
            groupPanel: {
                visible: true
            },
            columns: [
                {
                    dataField: "Prefix",
                    caption: "Title",
                    width: 60
                }, "FirstName",
                "LastName", 
                "City",
                "State", {
                    dataField: "Position",
                    width: 130
                }, {
                    dataField: "BirthDate",
                    dataType: "date",
                    width: 100
                }, {
                    dataField: "HireDate",
                    dataType: "date",
                    width: 100
                }
            ]
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("grid"));
};