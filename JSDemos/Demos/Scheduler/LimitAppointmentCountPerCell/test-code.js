(function(factory) {
    if (window.Promise && window.System) {
        Promise.all([
            System.import("devextreme/ui/scheduler")
        ]).then(function (args) {
            factory(args[0]);
        });
    } else {
        factory(DevExpress.ui.dxScheduler);
    }
})(function(Scheduler) {
    var instance = Scheduler.getInstance(document.getElementById("scheduler"));
    instance.option("stripLines[2].start", new Date(2000, 3, 1, 0, 0, 0, 0));
});
