$(function () {
    const currentDate = new Date(2017, 4, 25);
    const timeZones = DevExpress.ui.dxScheduler.getTimeZones(currentDate);
    const demoLocations = timeZones.filter((timeZone) => {
        return locations.indexOf(timeZone.id) !== -1;
    });

    var scheduler = $("#scheduler").dxScheduler({
        dataSource: data,
        views: ["workWeek"],
        timeZone: demoLocations[0].id,
        currentView: "workWeek",
        currentDate: currentDate,
        startDayHour: 8,
        height: 600,
        editing: {
            allowTimeZoneEditing: true
        },
        onAppointmentFormOpening: (e) => {
            const form = e.form;

            const startDateTimezoneEditor = form.getEditor('startDateTimeZone');
            const endDateTimezoneEditor = form.getEditor('endDateTimeZone');
            const startDatedataSource = startDateTimezoneEditor.option('dataSource');
            const endDateDataSource = endDateTimezoneEditor.option('dataSource');

            startDatedataSource.filter(['id', 'contains', 'Europe']);
            endDateDataSource.filter(['id', 'contains', 'Europe']);
        }
    }).dxScheduler("instance");

    $("#location-switcher").dxSelectBox({
        items: demoLocations,
        displayExpr: "title",
        valueExpr: "id",
        width: 240,
        value: demoLocations[0].id,
        onValueChanged: (data) => {
            scheduler.option("timeZone", data.value);
        }
    });
});
