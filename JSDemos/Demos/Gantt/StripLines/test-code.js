(function(factory) {
    if (window.Promise && window.System) {
        Promise.all([
            System.import("devextreme/ui/gantt")
        ]).then(function (args) {
            factory(args[0]);
        });
    } else {
        factory(DevExpress.ui.dxGantt);
    }
})(function(Gantt) {
    var instance = Gantt.getInstance(document.getElementById("gantt"));
    instance.option("stripLines[2].start", new Date(2000, 3, 1, 0, 0, 0, 0));
});
