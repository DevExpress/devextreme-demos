The **DataGrid** supports data grouping by a column or multiple columns. 

To group data by a single **column**, apply the [groupIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) property to it. This property accepts a zero-based index number that controls column ordering. In this example, the data is grouped by the *State* column.

Groups are displayed on the [groupPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/groupPanel/) above the grid. To show the **groupPanel**, set its **visible** property to *"true"*. 

It is possible additionaly set user interaction-related grouping parameters. To do so, use the [grouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/) object that accepts properties like. This demo illustrates the use of [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) parameter that specifies whether the groups appear expanded.

Users can drag and drop columns within the **groupPanel** to reorder them. To enable this functionality, set the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering) property to *"true"*. 