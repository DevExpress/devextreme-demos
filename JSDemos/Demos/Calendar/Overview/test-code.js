testUtils.importAnd(()=>'devextreme/ui/calendar', ()=>DevExpress.ui.dxCalendar, function (dxCalendar) {
    return testUtils.postponeUntilFound('.dx-calendar', 100, 10000)
        .then(x=>x.forEach(host=>{
            var instance = dxCalendar.getInstance(host);
            instance.option("value", new Date("Mon Oct 10 2014 14:18:19"));
        })).then(testUtils.postpone(2000));
});
