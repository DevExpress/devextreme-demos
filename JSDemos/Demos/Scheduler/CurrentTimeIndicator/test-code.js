testUtils.importAnd(() => 'devextreme/ui/scheduler', () => DevExpress.ui.dxScheduler, function (dxScheduler) {
    return testUtils.postponeUntilFound('.dx-scheduler').then(x => {
        var instance = dxScheduler.getInstance(document.querySelector('.dx-scheduler'));

        var today = new Date();
        today.setHours(11, 35, 0, 0);
        
        const indicatorTime = new Date(today.setDate(today.getDate() - today.getDay() + 3));
        instance.option('indicatorTime', indicatorTime);
    }).then(testUtils.postpone(1000)).then(()=>{
        instance.scrollTo(indicatorTime);
    }).then(testUtils.postpone(1000));
});
