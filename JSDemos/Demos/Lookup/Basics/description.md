The Lookup allows users to search through its drop-down list and select a single item from it. The drop-down list can be simple or grouped by a single category.

### Use a simple drop-down list
To bind the Lookup to a simple list, use the [items[]](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/items/) property. The data array should include strings only.

### Use a grouped drop-down list
To create a grouped list, do the following:

* Use the [dataSource](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dataSource) property to specify a DataSource object. Set this object's [store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store) property to a data array and the [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) property to a category field.

* Use the [displayExpr](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#displayExpr) property to specify the data field whose values should be displayed.

* Set the [grouped](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped) property to **true**.

You can also use a pregrouped data array. Each object of this array should include the `key` (category) and `items` (drop-down values) fields. In this case, do not specify the DataSource.**group** and **displayExpr** properties.

### Configure the drop-down list
The Popover component represents the drop-down list. To customize it, specify any Popover's properties inside the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#dropDownOptions) property. In this demo, we disabled the [showTitle](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showTitle) property to hide Popover's title and enabled the [closeOnOutsideClick](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#closeOnOutsideClick) property for the Grouped Lookup.

To preselect an item, use the [value](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#displayExpr) property as done in the Simple Lookup.
