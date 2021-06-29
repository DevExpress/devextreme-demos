testUtils.importAnd(() => 'devextreme/ui/date_box', () => DevExpress.ui.dxDateBox, function (dxDateBox) {
    testUtils.findElements('.dx-datebox').forEach(x=>{
        dxDateBox.getInstance(x).option('value', new Date('2019/04/22'));
    });
});
