The Popover component shows notifications within a box with an arrow pointing to a specified UI element. In this demo, the Popover appears when you hover the cursor over the *details* label or click the *more* link. 

## Bind and Arrange the Popover

Use the [target](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#target) property to bind the Popover to an element. To arrange the Popover at a certain side of the target element, specify the [position](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#position) property.

## Show and Hide the Popover

To show and hide the Popover in response to certain events, specify the [showEvent](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/showEvent/) and [hideEvent](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/hideEvent/) properties. These properties can accept multiple events at once as well as an object with the following parameters: [name](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/showEvent/#name) and [delay](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/showEvent/#delay).

## Customize Content

You can specify the Popover's content in the HTML markup. Alternatively, use the [contentTemplate](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#contentTemplate) property to customize the content.

Enable the [showTitle](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#showTitle) property to display the Popover's title. To specify the title text, use the [title](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#title) property.

##  Animate the Popover

If you want to animate the Popover, specify the [animation](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/animation/) property. In the object of this property, configure the [show](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/animation/#show) and [hide](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/animation/#hide) fields.

## Shade Background

In some cases, you may need to shade the Popover's background. To do this, enable the [shading](/Documentation/ApiReference/UI_Components/dxPopover/Configuration/#shading) property. Use the [shadingColor]() property to specify the desired color. 

