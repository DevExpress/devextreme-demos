testUtils.importAnd(() => 'devextreme/ui/scheduler', () => DevExpress.ui.dxScheduler, function (dxScheduler) {
    var instance = dxScheduler.getInstance(document.querySelector('.dx-scheduler'));

    var today = new Date();
    today.setHours(11, 35, 0, 0);
    
    const indicatorTime = new Date(today.setDate(today.getDate() - today.getDay() + 3));
    instance.option('indicatorTime', indicatorTime);

    return new Promise(function(resolve) {
        setTimeout(function() {
            instance.scrollTo(indicatorTime);
            resolve();
        }, 1000);
    });
});
