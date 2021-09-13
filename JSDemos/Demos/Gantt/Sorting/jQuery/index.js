$(function() {
    $("#gantt").dxGantt({
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
            enabled: false
        },
        columns: [{
            dataField: "title",
            caption: "Subject",
            width: 300,
            sortOrder: 'asc'
            
        }, {
            dataField: "start",
            caption: "Start Date"
        }, {
            dataField: "end",
            caption: "End Date"
        }],
        scaleType: "weeks",
        taskListWidth: 500,
        sorting: {
            mode: 'multiple',
            showSortIndexes: true
        },
    });
});
