The LoadPanel is an overlay component used to notify customers that a process is in progress. In this demo, you can see how to initialize and configure the component.

## Show and Hide the Indicator and Pane 

LoadPanel allows you to show and hide a load indicator and a pane behind the indicator, that are initially displayed. For this, use the [showIndicator](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#showIndicator) and [showPane](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#showPane) properties. In this demo, you can uncheck the *With indicator* and *With pane* checkboxes to hide the indicator and pane.

To specify a text to be displayed in the LoadPanel, assign it to the [message](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#message) property.

## Configure Background Shade

When the component is displayed, you can see the background shade. To hide this shade, disable the [shading](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#shading) property. You can also specify a color of shade and the container to display it. For this, assign the needed color to the [shadingColor](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#shadingColor) property and set the [position.of](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#position) property to a CSS selector of the container. In this demo, you can uncheck the *With overlay* checkbox to disable the background shade. 

## Show and Hide LoadPanel

You can show and hide LoadPanel initially and at runtime. To hide LoadPanel initially, disable the [visible](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#visible) property. Use the [show()](/Documentation/ApiReference/UI_Components/dxLoadPanel/Methods/#show) and [hide()](/Documentation/ApiReference/UI_Components/dxLoadPanel/Methods/#hide) methods to show and hide the component at runtime, or perform these operations with the [toggle(showing)](/Documentation/ApiReference/UI_Components/dxLoadPanel/Methods/#toggleshowing) method.

If you want to hide LoadPanel when the user clicks outside the component, enable the [hideOnOutsideClick](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#hideOnOutsideClick) property.

In this demo, the LoadPanel appears when the user clicks the **Load Data** button and hides after 3 seconds. It also hides when the user clicks outside of the component. You can uncheck the *Hide on outside click* checkbox to disable this functionality.

## Handle Events

LoadPanel also allows you to handle the show and hide events. Use the [onShown](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#onShown) and [onHidden](/Documentation/ApiReference/UI_Components/dxLoadPanel/Configuration/#onHidden) properties to handle the events after they have been raised.

Besides, there are also the [onShowing]() and [onHiding]() event handlers. They allow you to cancel the show or hide events based on a condition.



