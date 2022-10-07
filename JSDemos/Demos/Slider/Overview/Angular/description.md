The Slider component allows users to set a numeric value on a continuous range of possible values. This demo shows how you can create and configure a Slider.

## Create a Slider

To create a Slider, declare it in markup and use the [min](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#max) properties to limit the range of accepted values.

You can also specify the [value](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#value) property to change the initial value.

You can see the resulting Slider in the **Default mode** section of this demo.

## Customize Slider Appearance

The Slider can display labels for the [min](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#max) values. To configure the labels, use the [label](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/label/) object. In this object, enable the [visible](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/label/#visible) property to display the labels. You can also specify the [position](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/label/#position) and [format](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/label/#format) properties.

The Slider can also display a tooltip for a handle. To display a tooltip, you need to configure the [tooltip](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/) object:

- Set the [enabled](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/#enabled) property to `true` to display a tooltip. 

- Specify the tooltip [position](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/#position), over or under a Slider.

- Specify the [format](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/#format) property.

- Assign *'onHover'* or *'always'* to the [showMode](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/#showMode) property to change how the component shows a tooltip.

Use the [showRange](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#showRange) property to specify if the selected range should be highlighted. You can also use the [step](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#step) property to specify the value change step for the Slider.

If you want to disable the Slider, set the [disabled](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#disabled) property to `true`.

## Handle the Value Change Event

To handle value changes, use two-way binding to bind the [value](/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#value) property of the [NumberBox](/Documentation/ApiReference/UI_Components/dxNumberBox/) component to the [value](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#value) property of the RangeSlider.

The [callValueChange](/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#callValueChange) property allows you to choose when to change the Slider value and supports the `onMoving` and `onMovingComplete` modes. You can see the property's effect in the **Process Value Changes** section. The first Slider changes its value every time a user slides the handle. The second Slider changes its value only when the handle is released.