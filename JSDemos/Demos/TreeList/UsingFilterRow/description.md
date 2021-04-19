The filter row allows a user to filter data by a certain column: if a column's value matches the filter, the TreeList will display the corresponding record with its ancestors. To enable this feature, set **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible) to **true**.

Each cell in the filter row contains a magnifying glass icon that opens a drop-down list with filters available for the column. These filters and their initial setting are defined be the the column's [data type](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType). You can use the [selectedFilterOperation](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#selectedFilterOperation) property to specify the default filter operation.

For available display modes of parent/child nodes, see the [Filter Modes](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterModes) demo.
