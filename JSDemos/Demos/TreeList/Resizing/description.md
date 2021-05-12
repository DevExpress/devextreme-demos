TreeList automatically sets equal widths for all columns. You can make column widths adjust to the content, set custom widths, and allow users to resize columns.

### Make column widths adjust to the content
In this demo, columns adjust their widths to the content. To enable this feature, set the [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth) property to **true**.

### Set custom widths
You can set custom width for all and individual columns. To do this, use the following properties:

* [columnWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnWidth)          
Specifies the width for all data columns.

* **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width)           
Specifies an individual column's width. Overrides the **columnWidth** value.

### Allow users to resize columns
Users can resize columns if the [allowColumnResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing) property is enabled. When a user resizes a column, the TreeList's behavior depends on the [columnResizingMode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnResizingMode) property value:

* *"nextColumn"*: the TreeList resizes the adjacent column; total component width stays the same.

* *"widget"*: the total component width increases or decreases; all other columns maintain their widths.

Use the drop-down list below the TreeList to try both values.

If you need to prevent an individial column's resize, set **columns[]**.[allowResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowResizing) to **false**. Сonfigure the [columnMinWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnMinWidth) property to specify the minimal width for all columns as done in this demo. Use the **columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#minWidth) to do this for an individual column.
