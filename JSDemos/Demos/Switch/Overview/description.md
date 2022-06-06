The Switch component can be in two states: **ON** (when the [value](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value) is **true**) and **OFF** (when the [value](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value) is **false**). If you want to change the Switch text, specify the [switchedOnText](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#switchedOnText) and the [switchedOffText](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#switchedOffText) properties. If the changed text does not fit in the component, use the [width](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#width) property.

To process a new Switch [value](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#value), you need to handle the value change event. Assign the handling function to the [onValueChanged](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#onValueChanged) property.

Set the [disabled](/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#disabled) property to **true** to disable the component.

