var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    var mapTypes = [{ 
            key: "roadmap",
            name: "Road Map"
        }, { 
            key: "satellite",
            name: "Satellite (Photographic) Map"
        }, { 
            key: "hybrid",
            name: "Hybrid Map"
        }];
    $scope.type = mapTypes[0].key;
    $scope.mapOptions = {
        apiKey: {
            // NOTE: Specify your map API keys for every used provider
            //bing: "YOUR_BING_MAPS_API_KEY",
            //google: "YOUR_GOOGLE_MAPS_API_KEY",
            //googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
        },
        center: "Brooklyn Bridge,New York,NY",
        zoom: 14,
        height: 400,
        width: "100%",
        provider: "bing",
        bindingOptions: {
            type: "type"
        }
    };
    $scope.chooseTypeOptions = {
        dataSource: mapTypes,
        displayExpr: "name",
        valueExpr: "key",
        bindingOptions: {
            value: "type"
        }
    };
});