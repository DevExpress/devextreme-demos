A plain (one-dimensional) array contains items each of which references its parent item. To bind the TreeView to such a local array, assign it to the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) property and set [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) to *"plain"* as shown in this demo. If you want to process the array or bind the TreeView to remote data, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object and specify the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource) property instead of **items[]**.

No matter which property is used, each node object should include the following mandatory fields:

* [id](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id)             
Unique node id.

* [parentId](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#parentId)           
Id of the parent node. Should be **0** or **undefined** for a root item.

* [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text)         
Text displayed by the node.

You can respectively use the [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr), [parentIdExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#parentIdExpr), and [displayExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr) properties to specify custom names for the mandatory fields as done in this demo. Array items can also include properties from the **items[]** API and developer-defined fields. If you need to use a custom value for the root item, specify the [rootValue](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#rootValue) property.

In this demo, we configured the [onItemClick](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onItemClick) handler to display corresponding picture and text when a leaf node is clicked. Specific nodes use the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) and [icon](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#icon) properties from the **items[]** API and include the developer-defined `price` field.