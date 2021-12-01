When you add a CheckBox to an application, set its [value](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#value) property. The CheckBox can have the following states: 

- Checked (the **value** property is **true**).
- Unchecked (**value** is **false**).
- Undetermined (**value** is **undefined**).

To handle value change, use two-way binding: bind the value property to a component property. In this demo, the value properties of the "Handle value change" and "Disabled" CheckBoxes are bound to the same component property. Click the first CheckBox to see how it affects the second one. You can also use the [onValueChanged](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#onValueChanged) property to handle value change, for example, if you need to use the previous value.

You can specify custom width and height for the CheckBox. Use the [iconSize](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#iconSize) property for this purpose. You can also add a label to the CheckBox: set the [text](/Documentation/ApiReference/UI_Components/dxCheckBox/Configuration/#text) property.