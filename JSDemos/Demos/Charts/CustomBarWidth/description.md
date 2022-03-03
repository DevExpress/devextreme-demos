This demo illustrates how to use the [barPadding](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barPadding) property to customize bar width.

## Bind to Data

In this demo, series is bound to data directly. See the [Bind Series to Data](/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data) article for information. The "state" field name is assigned to the [argumentField](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/#argumentField) property of the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object since the  bar chart contains series with the same argument field. 

## Specify Common Series Settings

To configure settings for all series in the chart, use the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/) object. Specify the [barPadding](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#barPadding) property to control the padding and the width of all bars in a series. In this demo, the **barPadding** is set to 0.5. This property value means that 50% of the available space is left empty giving the rest to the bar.

## Customize Chart Legend 

Use the [verticalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#verticalAlignment) and [horizontalAlignment](/Documentation/ApiReference/UI_Components/dxChart/Configuration/legend/#horizontalAlignment) properties of the legend object to specify the legend layout. 

## Export Chart

To allow a user to export your bar chart into the PNG, JPEG, PDF, and SVG file or print the chart, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxChart/Configuration/export/#enabled) property to **true**. In this demo, exporting is enabled and you can click the "Exporting/Printing" button in the chart. This button invokes a drop-down menu with export and print commands.