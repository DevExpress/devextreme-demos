The PieChart displays data as a circle divided into portions (slices) to illustrate data proportions. In this demo, you can see how to initialize and configure the component with the *doughnut* series type.

## Bind to Data

You can bind the component to one of the following data sources: 

* [Simple Array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)
* [JSON Data](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
* [OData Service](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
* [Custom Sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

In this demo, the PieChart is populated with data taken from a simple JavaScript array.

The PieChart allows you to specify the [type](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type) of the pie chart series. In this demo you can see the component with the *doughnut* series type.

You can use the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) property to configure one or several series or apply the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/) object to configure all series in the PieChart.

If you want to bind a series to data directly, set an appropriate field name to the [argumentField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField) and [valueField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#valueField) properties.  Alternatively, you can [use a series template](/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/#Using_a_Series_Template) to bind series to data if a data source field contains names for series. 

## Display Point Labels

PieChart allows you to display and configure labels for series. Use the [label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/) property to make the labels [visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible), specify [format](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#format) and show [connectors](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/).

## Enable Tooltips

For each series you can add a [tooltip](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/), specify its [format](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#format) and apply a [custom template](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#customizeTooltip). In this demo, you can see the tooltip when you hover a series or its label.

## Export Chart to Image

To allow a user to export PieChart into the PNG, JPEG, and SVG file or print the chart, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/export/#enabled) property to true. In this demo, the exporting is enabled and you can click the "Exporting/Printing" button in the chart. This button invokes a drop-down menu with export and print commands.

