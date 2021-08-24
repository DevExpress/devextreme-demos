The Lookup allows users to search through its drop-down list and select a single item from it. The drop-down list can be simple or grouped by a single category.

### Bind the Lookup to Data
To bind the Lookup to data, use either of the these properties:

* [items[]](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#items)                
Specifies a local data array.

* [dataSource](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dataSource)             
Allows to specify a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/)-like object that works with local and remote arrays and provides an API for data-shaping. To bind the data in this demo, we used the **DataSource**.[store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) property.

The **items[]** and **dataSource** properties work with an array of strings or objects. If you specify an array of objects, you can additionally use predefined [items[]](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#items) fields and should specify the following Lookup properties:

* [displayExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#displayExpr)          
Specifies the data field whose values should be displayed in the drop-down list.

* [valueExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#valueExpr)          
Specifies which data field provides unique values for the selected item. As an alternative, **DataSource**.**key** can be set.

Additionally, you can use the [value](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#value) property to preselect an item.

### Group Data
To group a Lookup by category, do either of the following:

* Configure an existent ungrouped array of objects. Use the **DataSource**.[group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to specify the category field and enable the [grouped](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped) property of Lookup.

* Specify an already grouped array. Each object should include the `key` (category) and `items` (drop-down values) fields. In this case, specify the **displayExpr** and **valueExpr** properties only if the `items` array contains objects.

### Configure the Drop-Down List
The [Popover](/Documentation/ApiReference/UI_Components/dxPopover/) component represents the drop-down list. To customize it, use the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions) property to specify any Popover's properties. In this demo, we disabled the [showTitle](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showTitle) property to hide Popover's title and enabled the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#closeOnOutsideClick) property for the Grouped Lookup. As an alternative for Popover, you can disable the [usePopover](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#usePopover) property to use the [Popup](/Documentation/ApiReference/UI_Components/dxPopup/).
