This demo shows the _side-by-side full-stacked bar_ series that visualizes data as bars stacked by groups. These bars are normalized to fill the plot area's height. This series type is useful when you compare point values as a part of the total group value.

## Bind to Data

In this demo, series is bound to data directly. See the [Bind Series to Data](/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data) article for information. The "state" field name is assigned to the [argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) property of the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object since the side-by-side full stacked bar chart contains series with the same argument field. The series is grouped based on the [stack](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#stack) property value.  

## Customize Side-By-Side Full Stacked Bar Chart

### Customize Chart Legend 

Use the [verticalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#verticalAlignment) and [horizontalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#horizontalAlignment) properties of the legend object to specify the legend layout. 

### Configure Tooltips

To configure tooltips in the chart, use the [tooltip](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/) object. To enable the tooltips, assign **true** to the [enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#enabled) property of this object. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#customizeTooltip) property. In this demo, the function returns the tooltip's text that shows the point's percent value and absolute value.

### Export Chart

To allow a user to export your side-by-side full stacked bar chart into the PNG, JPEG, PDF, and SVG file or print the chart, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/export/#enabled) property to **true**. In this demo, exporting is enabled and you can click the "Exporting/Printing" button in the chart. This button invokes a drop-down menu with export and print commands.