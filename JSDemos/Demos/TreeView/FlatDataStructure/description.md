A plain (one-dimensional) array contains items each of which references its parent item. To bind the TreeView to a local plain array, assign it to the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) property and set [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) to *"plain"* as shown in this demo. If you want to process the array or bind the TreeView to remote data, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object and specify the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource) property instead of **items[]**.

Regardless of the used property, each item object should include the following fields:

* [id](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id)             
Unique item identifier.

* [parentId](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#parentId)           
Identifier of the parent item. If the TreeView has a single item on the highest level, this field should be omitted for the corresponding object as done in this demo. In case of numerous items, this field should be equal to **0**, **undefined** or a custom value specified in the [rootValue](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#rootValue) property.

* [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text)         
Text displayed by the item.

You can respectively use the [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr), [parentIdExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#parentIdExpr), and [displayExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr) properties to specify custom names for the above-mentioned fields as done in this demo. Item objects can also include custom fields and properties described in the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) help section. In this demo, specific nodes include the custom `price` field and the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) and [icon](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#icon) properties from the **items[]** API.
