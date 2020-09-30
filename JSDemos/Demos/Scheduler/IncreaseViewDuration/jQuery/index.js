$(function(){
    $(".scheduler").dxScheduler({
        dataSource: data,
        views: [
            { name: "3 Days", type: "day", intervalCount: 3, startDate: new Date(2021, 3, 30) },
            { name: "2 Work Weeks", type: "workWeek", intervalCount: 2, startDate: new Date(2021, 3, 30) },
            { name: "2 Months", type: "month", intervalCount: 2 }
        ],
        currentView: "day",
        currentDate: new Date(2021, 4, 1),
        startDayHour: 8,
        endDayHour: 20,
        height: 580
    });
});