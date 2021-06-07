A hierarchical array contains items that can nest other items. To bind the TreeView to a local hierarchical array, assign it to the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) property as shown in this demo. If you want to process the array or bind the TreeView to remote data, use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object and specify the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataSource) property instead of **items[]**.

Regardless of the used property, each item object should include the following fields:

* [id](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#id)             
Unique item identifier.

* [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text)         
Text displayed by the item.

* [items](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#items)           
Nested items (optional).

You can respectively use the [keyExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#keyExpr), [displayExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#displayExpr), and [itemsExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#itemsExpr) properties to specify custom names for the above-mentioned fields. Item objects can also include custom fields and properties described in the [items[]](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/) help section. In this demo, specific nodes include custom `price` and `image` fields and the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) property from the **items[]** API.

In this demo, we configured the [onItemClick](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#onItemClick) handler to display a corresponding picture and text when the lowest TreeView items are clicked. Specific nodes use the [expanded](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#expanded) property from the **items[]** API and include the developer-defined `price` and `image` fields.
