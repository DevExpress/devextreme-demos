A plain (one-dimensional) array contains items each of which references its parent item. To bind the TreeView to such a local array, assign it to the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) property and set [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) to *"plain"* as shown in this demo. If you want to process the array or bind the TreeView to remote data, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object and specify the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource) property instead of **items[]**.

No matter which property is used, each item object should include the following mandatory fields:

* [id](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id)             
Unique item id.

* [parentId](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#parentId)           
Id of the parent item. A root value should be equal to **0**, **undefined** or a custom value specified in the [rootValue](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#rootValue) property.

* [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text)         
Text displayed by the item.

You can respectively use the [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr), [parentIdExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#parentIdExpr), and [displayExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr) properties to specify custom names for the mandatory fields as done in this demo. Array items can also include properties from the **items[]** API and developer-defined fields.

In this demo, we configured the [onItemClick](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onItemClick) handler to display corresponding picture and text when the lowest TreeView items are clicked. Specific nodes use the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) and [icon](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#icon) properties from the **items[]** API and include the developer-defined `price` field.