The filter row allows users to enter a query for each column and filter rows by that value. To enable this behavior, set **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible) to **true**. This feature can be combined with the [header filter](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UsingHeaderFilter).

Column's [data type](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType) defines the editor type of the filter row cell:

* text box (*"string"*, *"number"*, *"object"*)

* drop-down list (*"boolean"*)

* date picker (*"date"*)

* date and time picker (*"datetime"*).

Users can click a magnifying glass icon in the filter row cell to open a drop-down list with available filters. These filters and their initial setting are also defined by the column's data type. You can use the [selectedFilterOperation](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#selectedFilterOperation) property to specify a custom initial filter operation.

The default behavior is to display the matched rows and their ancestors. The [Filter Modes](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterModes) demo shows how to use other display modes.
