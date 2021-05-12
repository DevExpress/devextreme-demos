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
In this demo, users can resize columns. To enable this, set the [allowColumnResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing) property to **true**. If you need to prevent an individial column's resize, set **columns[]**.[allowResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowResizing) to **false**. Сonfigure the [columnMinWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnMinWidth) property to specify the minimal width for all columns as done in this demo. Use the **columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#minWidth) to do the same for an individual column.

In the default *"nextColumn"* resize mode, TreeList changes the width of the next column. You can set the [columnResizingMode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnResizingMode) property to *"widget"* to change the width of the whole UI component instead. Applies only if **allowColumnResizing** is enabled. Use the drop-down list below this demo's TreeList to switch between these two modes.
