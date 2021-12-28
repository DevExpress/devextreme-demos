The NumberBox is a component that displays a number and allows users to modify it by typing in a value. Users can also increment or decrement the number using the keyboard arrows or mouse wheel.

Use the value property to set the number displayed in the NumberBox. If the value property is not specified, the default number shown in the NumberBox is 0. You can also specify the min and max properties to set the value range.

Set the onValueChanged function to handle the value change. In this demo,  the value of the "Stock" NumberBox depends on the "This month sales" NumberBox. Change the value in the "This month sales" NumberBox to see how it affects the other one.

If users should not interact with a NumberBox, set its disabled or readOnly property to true. The main difference between these properties is that when used in an HTML form a disabled NumberBox will not be submitted, while a read-only NumberBox will.

