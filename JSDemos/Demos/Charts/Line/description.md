Line chart series types help visualize data and display them as lines with points placed over specified intervals. In this demo, you can see how to initialize and configure line chart of the *line*, *stacked line* and *full-stacked line* series types. 

*Stacked line* series allow you to visualize multiple series and compare the manner in which each series contributes to the total aggregate value for specific arguments. *Full-stacked line* series help compare the percentage value of multiple line series for each argument.

## Bind to Data

You can bind the Line chart to one of the following data sources: 

* [Local Array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)
* [JSON Data](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
* [OData Service](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
* [Custom Data Source](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

In this demo, the chart is populated with data taken from a local JavaScript array.

## Configure Series

Series define the look of chart. In this demo, the component includes Line, Stacked line and Full-stacked line series types. To display them, set the [type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#type) property to one of these types. 

You also need to bind the series to data. Set the [argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#valueField) properties to data fields that contain arguments and values for your series. You can specify these properties in an object in the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/) array or include it in the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object. In this demo, the **argumentField** and **type** properties are specified for all series in the **commonSeriesSettings** object.

## Configure Axes

Line chart allows you to configure the horizontal and vertical axes. To specify settings individually, you can use the [argumentAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/argumentAxis/) and [valueAxis](/Documentation/ApiReference/UI_Components/dxChart/Configuration/valueAxis/) objects. You can also specify common settings for all axes in a chart, use the [commonAxisSettings](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAxisSettings/) object. Axis-specific settings override common settings.

## Enable Tooltips

When you hover the mouse pointer over a series point, you can see a tooltip with information about the series point. It shows information stored in the point value. To display tooltips, you need to enable the [tooltip.enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#enabled) object. 


## Export Chart to Image

To allow a user to print the chart or export it to a PNG, JPEG, or SVG file, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/export/#enabled) property to *true*. This setting adds a button that opens a drop-down menu with export and print commands. In this demo, you can find this button in the upper-right corner.