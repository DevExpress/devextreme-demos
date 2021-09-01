The Lookup allows users to search through its drop-down list and select a single item from it. The drop-down list can be grouped by category.

### Bind the Lookup to Data
To bind the Lookup to data, use one of these properties:

* [items[]](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#items)                
Accepts a local data array (see the Simple Lookup code below).

* [dataSource](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dataSource)             
Accepts a local data array or a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object. DataSource works with local and remote arrays and allows you to shape data. In this demo, it is used to group a local array of objects (see the Grouped Lookup code below).

Both properties work with arrays of primitives or objects. If you use objects, specify the following Lookup properties:

* [valueExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#valueExpr)          
A data field that contains unique values used to identify items. As an alternative, you can set the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).[store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/).[key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) property.

* [displayExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#displayExpr)          
A data field whose values should be displayed in the drop-down list.

When a user selects an item, the Lookup saves a corresponding value from the **valueExpr** data field in the [value](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#value) property. You can also specify the **value** property in code to preselect an item, as shown in the Simple Lookup use case.

### Group Data
To group a Lookup by category, do either of the following:

* Configure an existent ungrouped array of objects. Use the **DataSource**.[group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify the category field and enable the [grouped](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped) property of Lookup.

* Specify an already grouped array. Each object should include the `key` (category) and `items` (drop-down values) fields. In this case, specify the **displayExpr** and **valueExpr** properties only if the `items` array contains objects.

### Configure the Drop-Down List
The Lookup uses the [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) component as a drop-down list. To customize the Popover, use the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions) property. It accepts an object with [Popover properties](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/). Alternatively, you can display lookup items in a pop-up window. To enable this behavior, set the [usePopover](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#usePopover) property to **false**.
