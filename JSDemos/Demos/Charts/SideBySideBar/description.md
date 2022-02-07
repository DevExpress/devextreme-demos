This demo shows the standard _bar_ series type that displays rectangular bars side by side. The side by side bar series help you compare values across different categories.

You can specify each series in the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/series) property that accepts an array of series objects.

To configure settings for all series in the chart (for example, the series type, selection mode, and hover mode), use the [commonSeriesSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings) object.  

You can also add [legend](Documentation/Guide/UI_Components/Chart/Legend/Overview) and [point labels](/Documentation/Guide/UI_Components/Chart/Point_Labels/Overview/) elements to make the bar chart more informative.

Use the [pointClick](/Documentation/ApiReference/UI_Components/dxChart/Events/#pointClick) event to implement a series point selection. 

To allow a user to export your bar chart into the PNG, JPEG, and SVG file or print the chart, set the [export](Documentation/ApiReference/UI_Components/dxChart/Configuration/export/).enabled property to **true**. In this demo, the exporting is enabled, and you can click the "Exporting/Printing" button in the bar chart. This button invokes a drop-down menu with exporting and printing commands.
