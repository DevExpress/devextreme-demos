testUtils.importAnd(() => 'devextreme/ui/date_box', () => DevExpress.ui.dxDateBox, function (dxDateBox) {
    testUtils.findElements(".dx-datebox:not(:last)").forEach(function (item) {
        var instance = dxDateBox.getInstance(item);
        instance.option("value", new Date("2014/08/25 16:35:10"));
    });
});
