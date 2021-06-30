testUtils.importAnd(() => 'devextreme/viz/chart', () => DevExpress.viz.dxChart, function (dxChart) {
    var dataSource = [{ "argument": 2.5, "value": 0.25, "originalValue": 0.24 }, { "argument": 2.6, "value": 0.22, "originalValue": 0.2 }, { "argument": 2.7, "value": 0.13, "originalValue": 0.16 }, { "argument": 2.8, "value": 0.08, "originalValue": 0.12 }, { "argument": 2.9, "value": 0.11, "originalValue": 0.08 }, { "argument": 3, "value": 0, "originalValue": 0.05 }, { "argument": 3.1, "value": 0.01, "originalValue": 0.01 }, { "argument": 3.2, "value": -0.06, "originalValue": -0.02 }, { "argument": 3.3, "value": -0.08, "originalValue": -0.05 }, { "argument": 3.4, "value": -0.07, "originalValue": -0.08 }, { "argument": 3.5, "value": -0.1, "originalValue": -0.1 }, { "argument": 3.6, "value": -0.15, "originalValue": -0.12 }, { "argument": 3.7, "value": -0.11, "originalValue": -0.14 }, { "argument": 3.8, "value": -0.15, "originalValue": -0.16 }, { "argument": 3.9, "value": -0.18, "originalValue": -0.18 }, { "argument": 4, "value": -0.15, "originalValue": -0.19 }, { "argument": 4.1, "value": -0.19, "originalValue": -0.2 }, { "argument": 4.2, "value": -0.19, "originalValue": -0.21 }, { "argument": 4.3, "value": -0.24, "originalValue": -0.21 }, { "argument": 4.4, "value": -0.2, "originalValue": -0.22 }, { "argument": 4.5, "value": -0.24, "originalValue": -0.22 }, { "argument": 4.6, "value": -0.22, "originalValue": -0.22 }, { "argument": 4.7, "value": -0.23, "originalValue": -0.21 }, { "argument": 4.8, "value": -0.2, "originalValue": -0.21 }, { "argument": 4.9, "value": -0.18, "originalValue": -0.2 }, { "argument": 5, "value": -0.18, "originalValue": -0.19 }, { "argument": 5.1, "value": -0.19, "originalValue": -0.18 }, { "argument": 5.2, "value": -0.13, "originalValue": -0.17 }, { "argument": 5.3, "value": -0.15, "originalValue": -0.16 }, { "argument": 5.4, "value": -0.19, "originalValue": -0.14 }, { "argument": 5.5, "value": -0.11, "originalValue": -0.13 }, { "argument": 5.6, "value": -0.15, "originalValue": -0.11 }, { "argument": 5.7, "value": -0.14, "originalValue": -0.1 }, { "argument": 5.8, "value": -0.11, "originalValue": -0.08 }, { "argument": 5.9, "value": -0.05, "originalValue": -0.06 }, { "argument": 6, "value": -0.08, "originalValue": -0.05 }, { "argument": 6.1, "value": -0.03, "originalValue": -0.03 }, { "argument": 6.2, "value": 0, "originalValue": -0.01 }, { "argument": 6.3, "value": 0, "originalValue": 0 }, { "argument": 6.4, "value": 0, "originalValue": 0.02 }, { "argument": 6.5, "value": -0.01, "originalValue": 0.03 }, { "argument": 6.6, "value": 0.07, "originalValue": 0.05 }, { "argument": 6.7, "value": 0.08, "originalValue": 0.06 }, { "argument": 6.8, "value": 0.08, "originalValue": 0.07 }, { "argument": 6.9, "value": 0.13, "originalValue": 0.08 }, { "argument": 7, "value": 0.1, "originalValue": 0.09 }, { "argument": 7.1, "value": 0.08, "originalValue": 0.1 }, { "argument": 7.2, "value": 0.12, "originalValue": 0.11 }, { "argument": 7.3, "value": 0.09, "originalValue": 0.12 }, { "argument": 7.4, "value": 0.11, "originalValue": 0.12 }, { "argument": 7.5, "value": 0.11, "originalValue": 0.13 }, { "argument": 7.6, "value": 0.17, "originalValue": 0.13 }, { "argument": 7.7, "value": 0.16, "originalValue": 0.13 }, { "argument": 7.8, "value": 0.16, "originalValue": 0.13 }, { "argument": 7.9, "value": 0.1, "originalValue": 0.13 }, { "argument": 8, "value": 0.08, "originalValue": 0.12 }, { "argument": 8.1, "value": 0.17, "originalValue": 0.12 }, { "argument": 8.2, "value": 0.08, "originalValue": 0.11 }, { "argument": 8.3, "value": 0.08, "originalValue": 0.11 }, { "argument": 8.4, "value": 0.12, "originalValue": 0.1 }, { "argument": 8.5, "value": 0.09, "originalValue": 0.09 }, { "argument": 8.6, "value": 0.12, "originalValue": 0.09 }, { "argument": 8.7, "value": 0.03, "originalValue": 0.08 }, { "argument": 8.8, "value": 0.03, "originalValue": 0.07 }, { "argument": 8.9, "value": 0.05, "originalValue": 0.06 }, { "argument": 9, "value": 0.09, "originalValue": 0.05 }, { "argument": 9.1, "value": 0.07, "originalValue": 0.04 }, { "argument": 9.2, "value": 0.04, "originalValue": 0.02 }, { "argument": 9.3, "value": -0.03, "originalValue": 0.01 }, { "argument": 9.4, "value": 0.05, "originalValue": 0 }, { "argument": 9.5, "value": 0, "originalValue": -0.01 }, { "argument": 9.6, "value": 0, "originalValue": -0.02 }, { "argument": 9.7, "value": -0.08, "originalValue": -0.03 }, { "argument": 9.8, "value": -0.01, "originalValue": -0.04 }, { "argument": 9.9, "value": 0, "originalValue": -0.05 }, { "argument": 10, "value": -0.09, "originalValue": -0.05 }, { "argument": 10.1, "value": -0.11, "originalValue": -0.06 }, { "argument": 10.2, "value": -0.06, "originalValue": -0.07 }, { "argument": 10.3, "value": -0.11, "originalValue": -0.07 }, { "argument": 10.4, "value": -0.09, "originalValue": -0.08 }, { "argument": 10.5, "value": -0.13, "originalValue": -0.08 }, { "argument": 10.6, "value": -0.09, "originalValue": -0.09 }, { "argument": 10.7, "value": -0.11, "originalValue": -0.09 }, { "argument": 10.8, "value": -0.12, "originalValue": -0.09 }, { "argument": 10.9, "value": -0.09, "originalValue": -0.09 }, { "argument": 11, "value": -0.11, "originalValue": -0.09 }, { "argument": 11.1, "value": -0.06, "originalValue": -0.09 }, { "argument": 11.2, "value": -0.08, "originalValue": -0.09 }, { "argument": 11.3, "value": -0.09, "originalValue": -0.08 }, { "argument": 11.4, "value": -0.06, "originalValue": -0.08 }, { "argument": 11.5, "value": -0.11, "originalValue": -0.08 }, { "argument": 11.6, "value": -0.05, "originalValue": -0.07 }, { "argument": 11.7, "value": -0.02, "originalValue": -0.07 }, { "argument": 11.8, "value": -0.06, "originalValue": -0.06 }, { "argument": 11.9, "value": -0.03, "originalValue": -0.05 }, { "argument": 12, "value": 0, "originalValue": -0.04 }];
    // MVC data
    dataSource.forEach(item=>{
        item.Argument = item.argument;
        item.Value = item.value;
        item.OriginalValue = item.originalValue;
    });

    return testUtils.postponeUntilFound('#chart', 100, 10000)
    .then(x=>x.forEach(host=>{
      var instance = dxChart.getInstance(host);
      instance.option("dataSource", dataSource);
      instance.option = function() { };
    })).then(testUtils.postpone(2000));
});
