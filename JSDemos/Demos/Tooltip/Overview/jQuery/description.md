The Tooltip component displays a tooltip near an element on the page. To bind the Tooltip to the element, use the [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) property. 

## Show and Hide the Tooltip

To show and hide the Tooltip when certain events are triggered, set the [showEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/showEvent/) and [hideEvent](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/hideEvent/) properties. These properties can accept several events at once as well as an object.

To hide the Tooltip when a user clicks outside it, use the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#hideOnOutsideClick) property.

## Customize and Animate the Tooltip

Assign Tooltip's content in the HTML markup. You can also use [contentTemplate](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentTemplate) to customize the Tooltip's content.

If you need to position the Tooltip against a certain side of the target element, specify the [position](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#position) property.

To animate the Tooltip, declare the [animation](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/) object. In this object, specify [show](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/#show) and [hide](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/#hide) fields.