In many cases, you need to process data on the server before displaying it in the chart. The Chart component supports this scenario. 

In this demo, the data source of the Chart component loads weather data for a selected month from an OData service. Each time you select a different month in the drop-down menu, the data source sends a new query to the service. To implement this functionality, assign a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object to the Chart [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource) property. 

In the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), implement an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). 

1. OData Store
enable
postProcess
2. paginate
3. filter