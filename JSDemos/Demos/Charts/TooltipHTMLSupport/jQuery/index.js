$(function() {
    $("#pie-chart").dxPieChart({
        palette: "bright",
        dataSource: states,
        title: "Top 10 Most Populated States in US",
        series: {
            argumentField: "name",
            valueField: "population"
        },
        "export": {
            enabled: true
        },
        tooltip: {
            enabled: true,
            contentTemplate: function(info, container) {
                var rootWrapper = $("<div>").attr({ class: "state-tooltip" }).appendTo(container);

                $("<img src='../../../../images/flags/" +
                    info.point.data.name.replace(/\s/, "") + ".svg' />").appendTo(rootWrapper);
                $("<h4>").appendTo(rootWrapper).text(info.argument);

                var capitalWrapper = $("<div>").appendTo(rootWrapper);
                capitalWrapper.append($("<span class='caption'>Capital</span>"));

                $("<span>").appendTo(capitalWrapper).text(": " + info.point.data.capital)

                var populationWrapper = $("<div>").appendTo(rootWrapper);
                populationWrapper.append($("<span class='caption'>Population</span>"));
                $("<span>").appendTo(populationWrapper).text(": " + formatNumber(info.value) + " people")

                var areaWrapper = $("<div>").appendTo(rootWrapper);
                areaWrapper.append($("<span class='caption'>Area</span>"));
                $("<span>").appendTo(areaWrapper).text(": " + formatNumber(info.point.data.area) + " km")
                $("<sup>").appendTo(areaWrapper).text("2");
                $("<span>").appendTo(areaWrapper).text(" (" + formatNumber(0.3861 * info.point.data.area) + " mi")
                $("<sup>2</sup>").appendTo(areaWrapper)
                $("<span>").appendTo(areaWrapper).text(")");
            }
        }
    });
});

var formatNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format;