$(function() {
    $("#vector-map").dxVectorMap({
        bounds: [-118, 55, -80, 23],
        commonAnnotationSettings: {
            type: 'custom',
            template: annotationTemplate,
        },
        annotations: statesData,
        layers: [{
            dataSource: DevExpress.viz.map.sources.usa
        }]
    });
});

var formatNumber = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format;

function annotationTemplate(annotation, container) {
    var data = annotation.data;

    var svg = createElementNS("svg").attr("class", "annotation").appendTo(container);

    createElementNS("image").attr({
        href: "../../../../images/flags/" + data.name.replace(/\s/, "").toLowerCase() + ".svg",
        width: "60",
        height: "40"
    }).appendTo(svg);

    createElementNS("rect").attr({
        class: "border",
        x: "0",
        y: "0"
    }).appendTo(svg);

    createElementNS("text").attr({
        x: "70",
        y: "25",
        class: "state"
    }).appendTo(svg).text(data.name);

    var infoText = createElementNS("text").attr({
        x: "0",
        y: "60"
    }).appendTo(svg);

    createElementNS("tspan").attr({ class: "caption" }).appendTo(infoText).text("Capital:");

    createElementNS("tspan").attr({ dx: "5" }).appendTo(infoText).text(data.capital);

    createElementNS("tspan").attr({
        dy: "14",
        x: "0",
        class: "caption"
    }).appendTo(infoText).text("Population:");

    createElementNS("tspan").attr({ dx: "5" }).appendTo(infoText).text(formatNumber(data.population));

    createElementNS("tspan").attr({
        dy: "14",
        x: "0",
        class: "caption"
    }).appendTo(infoText).text("Area:");

    createElementNS("tspan").attr({ dx: "5" }).appendTo(infoText).text(formatNumber(data.area));

    createElementNS("tspan").attr({ dx: "5" }).appendTo(infoText).text("km");

    createElementNS("tspan").attr({
        dy: "-2",
        class: "sup"
    }).appendTo(infoText).text("2");
}

function createElementNS(tagName){
    return $(document.createElementNS("http://www.w3.org/2000/svg", tagName));
}