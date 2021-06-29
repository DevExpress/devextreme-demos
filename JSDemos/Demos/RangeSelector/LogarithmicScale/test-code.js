testUtils.importAnd(() => ['devextreme/viz/chart', 'devextreme/viz/range_selector'], () => [DevExpress.viz.dxChart, DevExpress.viz.dxRangeSelector], function (dxChart, dxRangeSelector) {
    var ds = [{ "arg": 1, "val": 1.1051892442628741 }, { "arg": 1.2589254117941673, "val": -0.8686258890666068 }, { "arg": 1.5848931924611136, "val": -1.153483919950764 }, { "arg": 1.9952623149688797, "val": 3.664404466515407 }, { "arg": 2.51188643150958, "val": -0.5118211850535133 }, { "arg": 3.1622776601683795, "val": 12.459107773537497 }, { "arg": 3.981071705534973, "val": 9.692262724124618 }, { "arg": 5.011872336272724, "val": 12.945122372941114 }, { "arg": 6.309573444801933, "val": 4.332969592063911 }, { "arg": 7.943282347242816, "val": 2.5314839144226147 }, { "arg": 10, "val": 6.760801737858175 }, { "arg": 12.589254117941675, "val": 7.519290003386075 }, { "arg": 15.848931924611142, "val": 4.386259159913916 }, { "arg": 19.952623149688797, "val": 6.254336989567407 }, { "arg": 25.11886431509581, "val": 7.991543465638095 }, { "arg": 31.622776601683793, "val": 5.088182694686111 }, { "arg": 39.810717055349734, "val": 6.24799842158233 }, { "arg": 50.11872336272725, "val": 4.195561865817876 }, { "arg": 63.09573444801933, "val": 5.052980282658157 }, { "arg": 79.43282347242817, "val": 4.038734026671199 }, { "arg": 100, "val": 5.174967307173853 }, { "arg": 125.89254117941675, "val": 5.343576030493483 }, { "arg": 158.48931924611142, "val": 5.511657919350271 }, { "arg": 199.52623149688807, "val": 7.236288547907705 }, { "arg": 251.18864315095823, "val": 6.702706962262837 }, { "arg": 316.2277660168379, "val": 6.708293455060771 }, { "arg": 398.1071705534973, "val": 6.499612584359296 }, { "arg": 501.18723362727246, "val": 4.344593202245745 }, { "arg": 630.9573444801937, "val": 6.4388156344952625 }, { "arg": 794.3282347242822, "val": 5.360903466774954 }, { "arg": 1000, "val": 5.776712491392275 }, { "arg": 1258.9254117941675, "val": 4.552057633991353 }, { "arg": 1584.893192461114, "val": 4.911332575662766 }, { "arg": 1995.262314968881, "val": 5.0214151582385815 }, { "arg": 2511.886431509582, "val": 5.056060517740705 }, { "arg": 3162.2776601683795, "val": 5.290402092486947 }, { "arg": 3981.0717055349733, "val": 5.911645618630457 }, { "arg": 5011.872336272725, "val": 5.898353250864438 }, { "arg": 6309.573444801937, "val": 5.25833059691807 }, { "arg": 7943.282347242822, "val": 4.788032135296425 }, { "arg": 10000, "val": 3.6183349592576537 }, { "arg": 12589.254117941688, "val": 4.627913592181463 }, { "arg": 15848.93192461114, "val": 5.70518252105188 }, { "arg": 19952.62314968879, "val": 5.534608434277187 }, { "arg": 25118.864315095823, "val": 5.442257818751694 }, { "arg": 31622.776601683792, "val": 3.721069728591427 }, { "arg": 39810.71705534977, "val": 4.046298412724827 }, { "arg": 50118.72336272725, "val": 4.969766863897192 }, { "arg": 63095.73444801943, "val": 5.11910622172932 }, { "arg": 79432.82347242822, "val": 3.443050299210099 }, { "arg": 100000, "val": 4.311205186446377 }, { "arg": 125892.54117941688, "val": 3.8157330202823347 }, { "arg": 158489.3192461114, "val": 4.740162287692755 }, { "arg": 199526.2314968883, "val": 4.992756843336796 }, { "arg": 251188.6431509582, "val": 3.7169096767901575 }, { "arg": 316227.7660168379, "val": 4.6861799227434915 }, { "arg": 398107.17055349774, "val": 4.97768805344252 }, { "arg": 501187.2336272725, "val": 4.055726036772941 }, { "arg": 630957.3444801943, "val": 4.302409726100333 }, { "arg": 794328.2347242822, "val": 4.22399012119155 }, { "arg": 1000000, "val": 4.748546911884766 }, { "arg": 1258925.4117941689, "val": 4.744579835439308 }, { "arg": 1584893.1924611141, "val": 3.775221479259919 }, { "arg": 1995262.3149688828, "val": 4.541704956776812 }, { "arg": 2511886.4315095823, "val": 4.330595428003655 }, { "arg": 3162277.660168379, "val": 4.109390577924267 }, { "arg": 3981071.7055349774, "val": 4.675669544336255 }, { "arg": 5011872.336272725, "val": 3.791055959137805 }, { "arg": 6309573.444801942, "val": 4.321099852850168 }, { "arg": 7943282.347242822, "val": 4.2888810425748005 }, { "arg": 10000000, "val": 4.228694311031797 }, { "arg": 12589254.117941687, "val": 4.156674394301052 }, { "arg": 15848931.924611142, "val": 4.1506319458264285 }, { "arg": 19952623.14968883, "val": 3.136485868584802 }, { "arg": 25118864.315095823, "val": 3.8078097060648677 }, { "arg": 31622776.60168379, "val": 3.3746198535681504 }, { "arg": 39810717.055349775, "val": 4.337030528494504 }, { "arg": 50118723.36272725, "val": 4.153247099235149 }, { "arg": 63095734.44801943, "val": 4.222386290073375 }, { "arg": 79432823.47242822, "val": 3.8852356731764033 }, { "arg": 100000000, "val": 3.396487956134405 }, { "arg": 125892541.17941661, "val": 3.502177797288506 }, { "arg": 158489319.24611175, "val": 4.202712879604057 }, { "arg": 199526231.49688828, "val": 4.08420769579574 }, { "arg": 251188643.1509582, "val": 3.133568085704953 }, { "arg": 316227766.01683795, "val": 3.916963748276668 }, { "arg": 398107170.5534969, "val": 3.9868655122553767 }, { "arg": 501187233.6272735, "val": 3.2117481489866684 }, { "arg": 630957344.4801943, "val": 4.020040684553096 }, { "arg": 794328234.7242821, "val": 3.604103571721078 }, { "arg": 1000000000, "val": 3.0968182984414314 }, { "arg": 1258925411.794166, "val": 3.9403799090880947 }, { "arg": 1584893192.4611173, "val": 3.549435782400237 }, { "arg": 1995262314.9688828, "val": 3.558267645339514 }, { "arg": 2511886431.509582, "val": 3.7105985188360604 }, { "arg": 3162277660.1683793, "val": 3.6145440506650894 }, { "arg": 3981071705.5349855, "val": 3.081899184542852 }, { "arg": 5011872336.272736, "val": 3.02251993380487 }, { "arg": 6309573444.801943, "val": 3.724813259847493 }, { "arg": 7943282347.242822, "val": 3.510569333003458 }];

    var chart = dxChart.getInstance(document.getElementById("zoomed-chart")),
        rangeSelector = dxRangeSelector.getInstance(document.getElementById("range-selector"))

    chart.option("autoHidePointMarkers", false);
    chart.option("dataSource", ds);
    rangeSelector.option("dataSource", ds);
    chart.option = function(){};
    rangeSelector.option = function(){};
});
