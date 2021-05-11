// This code is used for backwards compatibility with the older jsPDF variable name
// Read more: https://github.com/MrRio/jsPDF/releases/tag/v2.0.0
window.jsPDF = window.jspdf.jsPDF;
applyPlugin(window.jsPDF);

$(function() {
    var ganttInstance = $("#gantt").dxGantt({
        rootValue: -1,
        tasks: {
            dataSource: tasks
        },
        dependencies: {
            dataSource: dependencies
        },
        resources: {
            dataSource: resources
        },
        resourceAssignments: {
            dataSource: resourceAssignments
        },
        editing: {
            enabled: true
        },
        columns: [{
            dataField: "title",
            caption: "Subject",
            width: 300
        }, {
            dataField: "start",
            caption: "Start Date"
        }, {
            dataField: "end",
            caption: "End Date"
        }],
        scaleType: "weeks",
        taskListWidth: 500,
        toolbar: {
            items: [
                "undo",
                "redo",
                "separator",
                "zoomIn",
                "zoomOut",
                "separator",
                {
                    widget: "dxButton",
                    options: {
                        icon: 'exportpdf',
                        hint: "Export to PDF",
                        stylingMode: "text",
                        onClick: function () {
                            exportGantt();
                        }
                    }
                }
            ]
        },
    }).dxGantt('instance');

    const formats = ["A0", "A1", "A2", "A3", "A4"];
    const exportModes = [ "All", "Chart", "Tree List" ];
    const dataRanges = [ "All", "Visible", "Custom" ];

    $("#formatSelector").dxDropDownBox({
        value: formats[0],
        dataSource: formats,
        contentTemplate: function(e) {
                const $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                        e.component.close();
                    } 
                });
                return $list;
        }
    });
    $("#landscapeCheckBoxContainer").dxCheckBox({
        value: true
    });
    $("#exportModeSelector").dxDropDownBox({
        value: exportModes[0],
        dataSource: exportModes,
        contentTemplate: function(e) {
            const $list = $("<div>").dxList({
                dataSource: e.component.option("dataSource"),
                selectionMode: "single",
                onSelectionChanged: function(arg) {
                    e.component.option("value", arg.addedItems[0]);
                    e.component.close();
                } 
            });
            return $list;
        }        
    });
    

    $("#dataRangeSelector").dxDropDownBox({
        value: dataRanges[1],
        dataSource: dataRanges,
        contentTemplate: function(e) {
            const $list = $("<div>").dxList({
                dataSource: e.component.option("dataSource"),
                selectionMode: "single",
                onSelectionChanged: function(arg) {
                    e.component.option("value", arg.addedItems[0]);
                    e.component.close();
                } 
            });
            return $list;
        }        
    });
    $("#startIndexContainer").dxNumberBox({
        value: 0,
        showSpinButtons: true,
    });
    $("#endIndexContainer").dxNumberBox({
        value: 3,
        showSpinButtons: true,
    });
        
    $("#startDateContainer").dxDateBox({
        type: "date",
        value:  tasks[0].start,
                    
    });
    
    $("#endDateContainer").dxDateBox({
        type: "date",
        value: tasks[0].end
    });


    function exportGantt() {
        const format = $("#formatSelector").dxDropDownBox("option", "value").toLowerCase();
        const isLandscape = $("#landscapeCheckBoxContainer").dxCheckBox("option", "value");
        let exportMode = $("#exportModeSelector").dxDropDownBox("option", "value");
        exportMode = exportMode === "Tree List" ? "treeList" : exportMode.toLowerCase();
        const dataRangeMode = $("#dataRangeSelector").dxDropDownBox("option", "value").toLowerCase();
        let dataRange;
        if(dataRangeMode === 'custom') {
            dataRange = { 
                    startIndex: $("#startIndexContainer").dxNumberBox("option", "value"), 
                    endIndex: $("#endIndexContainer").dxNumberBox("option", "value"),
                    startDate:  $("#startDateContainer").dxDateBox("option", "value"),
                    endDate: $("#endDateContainer").dxDateBox("option", "value")
            }
        }
        else {
            dataRange = dataRangeMode
        }
        ganttInstance.exportToPdf( 
            { 
                format: format, 
                landscape: isLandscape,
                exportMode: exportMode, 
                dateRange: dataRange
            }
        ).then(doc => {
            doc.save('gantt.pdf');
        });
    }
});
