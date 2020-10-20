$(function () {
    $("#pie").dxPieChart({
        palette: "Vintage",
        dataSource: dataSource,
        commonAnnotationSettings: {
            type: "image",
            image: {
                height: 60,
                width: 90
            },
            color: "transparent",
            border: {
                color: "transparent"
            },
            paddingLeftRight: 0,
            paddingTopBottom: 0,
            tooltipTemplate: tooltipTemplate
        },
        annotations: getAnnotationSources(),
        series: [{
            argumentField: "country",
            valueField: "gold",
            label: {
                visible: true,
                position: "inside",
                radialOffset: 83,
                backgroundColor: "transparent",
                font: {
                    size: 16,
                    weight: 600
                }
            }
        }],
        tooltip: {
            paddingLeftRight: 12,
            paddingTopBottom: 10,
        },
        legend: {
            visible: false
        },
        title: "Ice Hockey World Championship Gold Medal Winners"
    });

    function getAnnotationSources() {
        annotations.forEach(function(a, index, array) {
            array[index].image = "../../../../images/flags/3x2/" + a.argument.replace(/\s/, "") + ".svg";
            array[index].data = $.extend({}, dataSource.filter(function(d) { return d.country === a.argument; })[0]);
            if(a.location === "edge") {
                array[index] = $.extend({}, a, edgeAnnotationSettings)
            }
        });

        return annotations;
    }

    function tooltipTemplate(annotation, container) {
        var data = annotation.data;
        var wrapper = $("<div class='medal-tooltip'>").appendTo(container);
        var countryWrapper = $("<div class='country-name'>").appendTo(wrapper).append($("<span>").text(data.country));

        if(data.oldCountryName){
            countryWrapper.append($("<br/>")).append($("<span>").text(data.oldCountryName));
        }

        var goldMedalsWrapper = $("<div>").appendTo(wrapper);
        var silverMedalsWrapper = $("<div>").appendTo(wrapper);
        var bronzeMedalsWrapper = $("<div>").appendTo(wrapper);

        $("<span class='caption'>Gold: </span>").appendTo(goldMedalsWrapper);
        $("<span>").appendTo(goldMedalsWrapper).text(data.gold);
        $("<span class='caption'>Silver: </span>").appendTo(silverMedalsWrapper);
        $("<span>").appendTo(silverMedalsWrapper).text(data.silver);
        $("<span class='caption'>Bronze: </span>").appendTo(bronzeMedalsWrapper);
        $("<span>").appendTo(bronzeMedalsWrapper).text(data.bronze);
    }
});
