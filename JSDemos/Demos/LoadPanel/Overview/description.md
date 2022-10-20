The LoadPanel is an overlay component used to notify users that a process is in progress. In this demo, you can see how to initialize and configure the component.

## Apply Indicator and Pane

LoadPanel allows you to display a load indicator and a pane behind the indicator. For this, enable the [showIndicator](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#showIndicator) and [showPane](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#showPane) properties. Uncheck the *With indicator* and *With pane* checkboxes to disable the indicator and pane.

## Shade Background

If you want to apply a background shade, enable the [shading](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#shading) property. You can also specify a color of shade and the container to display it. For this, assign the needed color to the [shadingColor](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#shadingColor) property and set the [position.of](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#position) property to a CSS selector of the container. Uncheck the *With overlay* checkbox to disable the background shade. 

## Show and Hide LoadPanel

You can manage the LoadPanel appearance initially and at runtime. Use the [onShown](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#onShown) and [onHidden](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#onHidden) properties to handle the show and hide events at runtime. Enable the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#hideOnOutsideClick) property to hide the component, when the user clicks outside of ti. To show and hide LoadPanel initially, use the [visible](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible) property.

In this demo, the LoadPanel appears when the user clicks the **Load Data** button and hides after 3 seconds or when the user clicks outside of the component.

