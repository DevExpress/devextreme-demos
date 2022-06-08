In this demo, the [range area](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/RangeArea/) Chart loads data as you pan it. Once the component loads a data block, data stays in memory to reduce requests to the server. To implement this functionality, do the following:

1. Specify a starting data source.

    - Assign a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) with an empty [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) to the [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource) Chart property.

    - Set the DataSource [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) property to `date` (the argument).

    - Disable the DataSource [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) property to prevent data from partitioning.

2. Specify Chart properties to support the data loading in parts.

    - Set the [visualRangeUpdateMode](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode property to the `keep` mode.

    - Add a [loadingIndicator](/Documentation/ApiReference/UI_Components/dxChart/Configuration/loadingIndicator/).

    - Specify the starting [visualRange](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/).
    
    - Implement function that computes the Chart current [visualRange](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/visualRange/). In this function, call the method that checks whether a user changed the visual range.

3. Implement functions that load the data.

    - The Chart argument data is days. If users pan the Chart left or right more than half a day, the data starts to load. The `onVisualRangeChanged` method checks this condition, and if the condition is true, the method calls the uploading function.

    - The `getDataFrame` Ajax request gets the new data frame from the server.

    - The `uploadDataByVisualRange` function takes two arguments: current visual range and the component's instance. This function gets the starting and ending points of the visual range and the bounds of already loaded data and calls the `getDataFrame` function. Then, the `uploadDataByVisualRange` function reloads the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) and updates the visual range.

    