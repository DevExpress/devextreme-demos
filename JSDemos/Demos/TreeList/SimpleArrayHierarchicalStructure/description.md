To bind the TreeList to a hierarchical array, do the following:

1. Assign the array to the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource) property.
2. Set the [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure) property to *"tree"*.
3. Use the [itemsExpr](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#itemsExpr) property to specify the data field that contains nested items.
4. When you load data from a remote source, and your data objects have a field that defines whether a row has nested rows, use the [hasItemsExpr](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#hasItemsExpr) property to specify this field name.
