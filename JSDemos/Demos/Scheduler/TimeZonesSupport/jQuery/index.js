$(function () {
    const currentDate = new Date(2021, 3, 27);

    const getLocations = function(date) {
        const timeZones = DevExpress.utils.getTimeZones(date);
        return timeZones.filter(function(timeZone) {
            return locations.indexOf(timeZone.id) !== -1;
        });
    };

    const demoLocations = getLocations(currentDate);

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
        onOptionChanged: function(e) {
            if(e.name === 'currentDate') {                        
                locationSwitcher.option('items', getLocations(e.value));
            }
        },
        onAppointmentFormOpening: function(e) {
            const form = e.form;

            const startDateTimezoneEditor = form.getEditor('startDateTimeZone');
            const endDateTimezoneEditor = form.getEditor('endDateTimeZone');
            const startDateDataSource = startDateTimezoneEditor.option('dataSource');
            const endDateDataSource = endDateTimezoneEditor.option('dataSource');

            startDateDataSource.filter(['id', 'contains', 'Europe']);
            endDateDataSource.filter(['id', 'contains', 'Europe']);

            startDateDataSource.load();
            endDateDataSource.load();
        }
    }).dxScheduler("instance");

    const locationSwitcher = $("#location-switcher").dxSelectBox({
        items: demoLocations,
        displayExpr: "title",
        valueExpr: "id",
        width: 240,
        value: demoLocations[0].id,
        onValueChanged: function(data) {
            scheduler.option("timeZone", data.value);
        }
    }).dxSelectBox('instance');
});
