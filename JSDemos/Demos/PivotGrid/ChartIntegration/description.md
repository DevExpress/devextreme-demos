PivotGrid allows you to integrate the [Chart](/Documentation/ApiReference/UI_Components/dxChart/) component to visualize data. The Chart is synchronized with the PivotGrid and visualizes currently displayed total summary values. Expand a row or column header in the PivotGrid below to see how it works.

## Bind the Chart to the PivotGrid
To bind these two components, create a Chart and pass its instance as the first agument to the [bindChart(chart, integrationOptions)](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) method. You can call this method at any point of your application. In this demo, we call this method in the main function and use [instances](/Documentation/ApiReference/UI_Components/dxChart/Methods/#instance) to bind the components.

If you use only the first argument and omit **integrationOptions**, default settings are used: row field values form chart [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), and column field values form [arguments](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/). The Chart displays values of each data field on a separate [value axis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/). If you need to customize the resulting chart, specify the **integrationOptions** argument.  

## Convert PivotGrid Fields to Chart Series
You can use the following **integrationOptions** to specify how PivotGrid fields should be converted to chart series:

- **alternateDataFields**: Boolean       
Specifies whether to alternate data fields in the resulting chart.

- **dataFieldsDisplayMode**: *"singleAxis"* | *"splitAxes"* | *"splitPanes"*     
Specifies whether to display data on a single value axis, multiple axes, or on separate panes.

- **inverted**: Boolean      
Specifies whether row field values form chart [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/), and column field values form [arguments](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/) (if **true**) or vice versa.

- **putDataFieldsInto**: *"series"* | *"args"*     
Specifies whether data fields go to the chart arguments or series.

This demo sets the **alternateDataFields** field to **false** and **dataFieldsDisplayMode** to *"splitPanes"*.

## Advanced Customization
The **integrationOptions** object also can contain the following functions that allow you to process PivotGrid data before visualization and customize the Chart and its series:

- **processCell**       
Processes a PivotGrid cell's data before the Chart displays it.

- **customizeChart**        
Allows you to customize the Chart's appearance.

- **customizeSeries**       
Allows you to customize the Chart's series.

Refer to the **bindChart(chart, integrationOptions)** method's [description](/Documentation/ApiReference/UI_Components/dxPivotGrid/Methods/#bindChartchart_integrationOptions) for more information on these functions. 
