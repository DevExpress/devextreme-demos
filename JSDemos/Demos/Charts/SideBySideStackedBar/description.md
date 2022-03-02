This demo shows the _side-by-side stacked bar_ series that allows you to visualize data as bars stacked in different groups. This series type is useful when you compare an individual series' values with groups' total values.

## Bind to Data

In this demo, series is bound to data directly. See the [Bind Series to Data](/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data) article for information. The "state" field name is assigned to the [argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) property of the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object since the side-by-side stacked bar chart contains series with the same argument field. The side-by-side stacked bar series is grouped based on the [stack](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#stack) property value. 

## Customize Side-By-Side Stacked Bar Chart

### Customize Chart Legend 

Use the [verticalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#verticalAlignment) and [horizontalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#horizontalAlignment) properties of the legend object to specify the legend layout. 

The [customizeLegend](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#customizeItems) function allows you to change the order, text, and visibility of legend items. In this demo, the **array.splice** method is used in the **customizeItems** function to sort the legend items. If you want to customize the legend's border, use properties collected in the [border](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/border) object. 

To distribute all legend items between several columns (in a vertically-oriented legend) or rows (in a horizontally-oriented legend), set the [columnCount](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#columnCount) or [rowCount](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#rowCount) property respectively.

### Configure Tooltips

To configure tooltips in the chart, use the [tooltip](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/) object. To enable the tooltips, assign **true** to the [enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/tooltip/#enabled) property of this object. 

### Export Chart

To allow a user to export your side-by-side stacked bar chart into the PNG, JPEG, PDF, and SVG file or print the chart, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/export/#enabled) property to **true**. In this demo, the exporting is enabled and you can click the "Exporting/Printing" button in the chart. This button invokes a drop-down menu with export and print commands.