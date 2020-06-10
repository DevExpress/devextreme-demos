var floorPlanProjection = DevExpress.viz.map.projection({
    to: function(coordinates) {
        return [coordinates[0]/100, coordinates[1]/100];
    },
    from: function(coordinates) {
        return [coordinates[0]*100, coordinates[1]*100];
    }
});