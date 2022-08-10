The Tooltip component displays a tooltip near an element on the page. To bind the Tooltip to an element, use the [target](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#target) property. 

## Show and Hide the Tooltip

Specify [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing) in the target element markup that need to be triggered to change the Tooltip visibility. Bind the [visible](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#visible) property of the Tooltip to a variable and use event handlers to toggle this variable.

To hide the Tooltip when a user clicks outside its borders, use the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#hideOnOutsideClick) property.

## Customize and Animate the Tooltip

Assign the Tooltip's content in the HTML markup. Alternatively, you can use the [content template](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#contentTemplate) to customize the Tooltip's content.

If you need to position the Tooltip against a certain side of the target element, specify the [position](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/#position) property.

To animate the Tooltip, declare the [animation](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/) object. In this object, specify the [show](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/#show) and [hide](/Documentation/ApiReference/UI_Components/dxTooltip/Configuration/animation/#hide) fields.

