To handle the Lookup's value change, specify the [onValueChanged](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#onValueChanged) handler. This demo uses it to display the picture and text for the selected item.

If you want to change event handler at runtime or attach several handlers to the 
[valueChanged](/Documentation/ApiReference/UI_Components/dxLookup/Events/#valueChanged) event, use the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Components/dxLookup/Methods/#oneventName_eventHandler) method to subscribe to this event. This approach is more typical of jQuery. For Angular and Vue, you can use two-way data bindings. To do this in React, create a state variable.

The Lookup applies the selection instantly. If you want users to click the Apply button instead, set the [applyValueMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#applyValueMode) property to *"useButtons"*.

To specify the DOM events after which search results should be updated, use the 
[valueChangeEvent](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#valueChangeEvent) property. The default events are input, change, and keyup.