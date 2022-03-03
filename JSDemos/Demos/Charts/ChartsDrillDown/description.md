This demo shows the drill-down chart that visualizes data on two hierarchical views. The main view displays a population breakdown by continents. When you click a bar, the detailed view reveals the most populated countries on the selected continent.

## Bind to Data

The drill-down chart is bound to an array of plain objects. To visualize hierarchical data in the drill-down chart, the data source is filtered by the **parentID** for different drill-down views in the **filterData** function.


## Implement View Navigation

To navigate from the main view to the detailed view, filter the data source by a different **parentID** in the [onPointClick](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick) event handler. To navigate back, click the **Back** button. This action resets the data source filter. The **isFirstLevel** flag is used to distinguish between views. 


## Customize the Appearance

Use the [customizePoint](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#customizePoint) function to change the individual point properties. This function returns an object with properties that should be changed for a certain point. In this demo, the [color](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#color) and [hoverStyle](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/hoverStyle/) properties are changed in this function. 
