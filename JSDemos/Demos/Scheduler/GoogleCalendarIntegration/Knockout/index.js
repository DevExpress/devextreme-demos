window.onload = function() {
    var PUBLIC_KEY = "AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k",
        CALENDAR_ID = "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com";
    
    var viewModel = {
        options: {
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    load: function() {
                        var result = $.Deferred();
                        $.ajax({
                            data: {showDeleted: false},
                            dataType: "json",
                            url: [
                                "https://www.googleapis.com/calendar/v3/calendars/",
                                CALENDAR_ID,
                                "/events?key=",
                                PUBLIC_KEY
                            ].join("")
                        }).done(function(response) {
                            result.resolve(response.items);
                        });
                            return result.promise();
                    }
                })
            }),
            startDateExpr: "start.dateTime",
            endDateExpr: "end.dateTime",
            textExpr: "summary",
            startDayHour: 7,
            timeZone: "America/Los_Angeles",
            showAllDayPanel: false,
            currentDate: new Date(2017, 4, 25),
            views: ['day', 'workWeek', 'month'],
            currentView: 'workWeek',
            editing: false,
            height: 500
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("scheduler-demo"));
};