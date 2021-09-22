PivotGrid allows you to integrate the [Chart](/Documentation/ApiReference/UI_Components/dxChart/) component to visualize data. Do the following to configure components integration:

## Bind the Chart to the PivotGrid
To bind these two components, create a Chart and pass its instance as the first agument to the [bindChart(chart, integrationOptions)](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) method. You can call the **bindChart(chart, integrationOptions)** method at any point of your application. In this demo, we call this method in the main function and use [instances](/Documentation/ApiReference/UI_Components/dxChart/Methods/#instance) to bind the components.

If you use only the first argument and omit **integrationOtpionss**, PivotGrid passes all field data to the Chart. Row field values form chart [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), and column field values form [arguments](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/). The Chart displays values of each data field on a separate [value axis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/). If you need to customize the resulting chart, use  the second argument of the **bindChart(chart, integrationOptions)**.  

## Convert PivotGrid Fields to Chart Series
The second argument of the **bindChart(chart, integrationOptions)** method allows you to customize the Chart. Use the fields of the **integrationOptions** object to configure chart's content, behavior, and appearance. The following fields allow you to customize the behavior:
- **alternateDataFields**       
Specifies whether to to group data field values in the chart's legend.

- **dataFieldsDisplayMode**     
Specifies whether to display data on a single value axis, multiple axes, or on separate panes.

- **inverted**      
Specifies whether row field values form chart [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), and column field values form [arguments](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/) (if **true**) or vice versa.

- **putDataFieldsInto**     
Specifies whether data fields go to the chart arguments or series.

This demo sets the **alternateDataFields** field to **false** and **dataFieldsDisplayMode** to *"splitPanes"*.

## Advanced Customization
The fields listed below allow you to configure the Chart's content, behavior, and appearance. Use these functions to additionally customize the Chart:

- **processCell**       
Processes a cell's data before the Chart displays it. You can access raw cell data and the **chartDataItem** object that contains already processed data.

- **customizeChart**        
Allows you to customize the Chart's appearance. Accepts fields listed in the Chart's [configuration](/Documentation/ApiReference/UI_Components/dxChart/Configuration/), except [dataSource](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#dataSource).

- **customizeSeries**       
Allows you to customize the Chart's series. Accepts [series properties](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), except [seriesTemplate](Documentation/ApiReference/UI_Components/dxChart/Configuration/seriesTemplate/).

Refer to the **bindChart(chart, integrationOptions)** method's [description](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) to see the structure of arguments these functions accept. 
