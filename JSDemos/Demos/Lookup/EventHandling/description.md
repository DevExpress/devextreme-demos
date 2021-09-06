To handle the Lookup's value change, specify the [onValueChanged](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#onValueChanged) function. This demo uses it to display the picture and text for the selected item.


The Lookup applies the selection instantly. If you want users to click the Apply button instead, set the [applyValueMode](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#applyValueMode) property to *"useButtons"*.

To specify the DOM events after which search results should be updated, use the 
[valueChangeEvent](/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#valueChangeEvent) property. The default events are input, change, and keyup.