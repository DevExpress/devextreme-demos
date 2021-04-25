TreeList automatically adapts its layout to screens with different sizes. In this demo, you can switch between horizontal and vertical screen orientations. If columns do not fit the selected orientation, TreeList hides them one by one, starting with the rightmost column. Information from the hidden columns is still available in adaptive detail rows.

To enable this feature, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#columnHidingEnabled) property to **true**.

You can also use the **columns[]**.[hidingPriority](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#hidingPriority) property to specify custom hiding priorities for those columns that you want to hide. Other columns will never be hidden. The values are zero-based; columns with lower values are hidden first. 
