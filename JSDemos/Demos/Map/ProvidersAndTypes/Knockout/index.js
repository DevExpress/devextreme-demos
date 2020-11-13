window.onload = function() {
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
    
    var type = ko.observable(mapTypes[0].key);
    
    var viewModel = {   
        mapOptions: {
            center: "Brooklyn Bridge,New York,NY",
            zoom: 14,
            height: 400,
            width: "100%",
            provider: "bing",
            apiKey: {
                // Specify your API keys for each map provider:
                //bing: "YOUR_BING_MAPS_API_KEY",
                //google: "YOUR_GOOGLE_MAPS_API_KEY",
                //googleStatic: "YOUR_GOOGLE_STATIC_MAPS_API_KEY"
            },
            type: type
        },
        chooseTypeOptions: {
            dataSource: mapTypes,
            displayExpr: "name",
            valueExpr: "key",
            value: type
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("map-demo"));
};