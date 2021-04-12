$(function () {
    var appointments = generateAppointments();

    $('#scheduler').dxScheduler({
        height: 600,
        currentDate: new Date(2021, 1, 2),
        dataSource: appointments,
        views: [    
            {
                type: 'day',
                name: '3 days',
                intervalCount: 3,
                groupOrientation: 'horizontal'
            },
            {
                type: 'workWeek',
                groupOrientation: 'vertical'
            },
            {
                type: 'timelineWorkWeek',
                groupOrientation: 'vertical'
            },
            {
                type: 'month',
                groupOrientation: 'horizontal'
            }
        ],
        currentView: "day",
        firstDayOfWeek: 0,
        startDayHour: 8,
        endDayHour: 20,
        cellDuration: 60,
        scrolling: {
            mode: 'virtual'
        },
        showAllDayPanel: false,
        groups: ["humanId"],
        resources: [{
            fieldExpr: "humanId",
            allowMultiple: false,
            dataSource: resources
        }]
    });
});
