TreeList automatically sets equal widths for all columns. You can change this default behavior programmatically and allow users to resize columns.

**Properties to resize column widths programmatically:**

* [columnAutoWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnAutoWidth)          
Specifies whether columns should adjust their widths to the content

* [columnWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnWidth)          
Specifies the width for all data columns.

* **columns[]**.[width](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#width)           
Specifies an individual column's width. Overrides the **columnWidth** value.

**Properties that allow users to resize columns:**

* [allowColumnResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnResizing)             
Specifies whether users can resize columns. To prevent an individial column's resize, set **columns[]**.[allowResizing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowResizing) to **false**. You can also set [columnMinWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnMinWidth) and **columns[]**.[minWidth](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#minWidth) to specify minimum width for all and individual columns.

* [columnResizingMode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnResizingMode)           
In the default *"nextColumn"* mode, when a user resizes a column, the width of the next column changes. You can set this property to *"widget"* to change the width of the whole UI component instead. Applies only if **allowColumnResizing** is enabled. Use the drop-down list below the TreeList to switch between these two modes.
