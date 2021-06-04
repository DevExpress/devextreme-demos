To bind the TreeView to a local hierarchical array, assign this array to the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) property as shown in this demo. If you want to process the local array or bind the TreeView to remote data, you need to use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object and specify the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource) property instead of **items[]**.

No matter which property is used, each hierarchical node should include the following mandatory fields:

* [id](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id)             
Unique node id.

* [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text)         
Text displayed by the node.

* [items](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#items)           
Nested items if present.

You can respectively use the [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr), [displayExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr), and [itemsExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemsExpr) properties to specify custom names for the mandatory fields. Nodes can also include developer-defined fields and properties from the **items[]** API.

In this demo, we configured the [onItemClick](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onItemClick) handler to display a corresponding picture when a leaf node is clicked. Specific nodes use the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) property from the **items[]** API and include developer-defined `price` and `image` fields.
