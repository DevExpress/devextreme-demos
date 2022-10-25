The PieChart displays data as a circle divided into portions (slices) to illustrate data proportions. In this demo, you can see how to initialize and configure the component with the *doughnut* series type.

## Bind to Data

You can bind the component to one of the following data sources: 

* [Simple Array](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/)
* [JSON Data](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Read-Only_Data_in_JSON_Format/)
* [OData Service](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/OData/)
* [Custom Sources](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/)

In this demo, the PieChart is populated with data taken from a simple JavaScript array.

## Specify the Series Type and Palette

The PieChart allows you to specify the [type](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#type) of the pie chart series and the [palette](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#palette) to be applied to colorize series and their elements. In this demo you can see the component with the *doughnut* series type and the 'Soft Pastel' palette. 

## Configure Series

You can assign one or several series to the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/) property and specify the following settings:

- Set the [argumentField](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#argumentField) property to an appropriate field name, if you want to bind a series to data directly. Alternatively, you can [use a series template](/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/#Using_a_Series_Template) to bind series to data if a data source field contains names for series. 

- Use the [label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/) property to make the labels [visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible), specify [format](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#format) and display [connectors](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/).

You can also use the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/commonSeriesSettings/) object to configure all series in the PieChart.

## Specify Title and Tooltips

If you need to show a title, assign the needed text to the [title](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/title/) property. Besides, for each series you can display a [tooltip](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/), specify its [format](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#format) and apply a [custom template](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/tooltip/#customizeTooltip). In this demo, you can see the tooltip when you hover a series or its label.

## Configure Legend

The PieChart component can include a legend, that helps you distinguish and identify the points of the displayed series. Each point is presented by an item on the legend. An item marker identifies the point's (slice's) color. An item label displays a value of the  corresponding point. Use the [legend](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/legend/) property to set up PieChart legend properties to the required values. To learn more about the legend and its properties, refer to the [Legend](/Documentation/Guide/UI_Components/PieChart/Legend/Overview/) topic.

## Export Doughnut PieChart

To allow a user to export Doughnut PieChart into the PNG, JPEG, and SVG file or print the chart, set the [export.enabled](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/export/#enabled) property to true. In this demo, the exporting is enabled and you can click the "Exporting/Printing" button in the chart. This button invokes a drop-down menu with export and print commands.

