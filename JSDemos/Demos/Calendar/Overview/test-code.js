testUtils.importAnd(()=>'devextreme/ui/calendar', ()=>DevExpress.ui.dxCalendar, function (dxCalendar) {
    var instance = dxCalendar.getInstance(document.querySelector(".dx-calendar"));
    instance.option("value", new Date("Mon Oct 10 2014 14:18:19"));
});
