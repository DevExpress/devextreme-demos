The [List](/Documentation/ApiReference/UI_Widgets/dxList/) displays a collection of items as a scrollable list. To create a list, pass an array of items to the [dataSource](/Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource) property. 

This demo illustrates item deletion. To allow users delete items, set the [allowItemDeleting](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting) property to **true**. Click the Allow deleting checkbox under the List to see how this property works.

The **List** supports several deletion modes listed below. Use the [itemDeleteMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode) property to set one of the modes. In this demo, you can select a deletion mode from the itemDeleteMode drop-down menu under the List.
    
- *"static"* (default for desktops)    
Click an X button next to a list item to delete it. 

- *"slideItem"* (default for iOS)    
Slide list items left to show the Delete button. In this case, the list item is moved off the canvas. 

- *"swipe"* (default for Android)    
 Swipe items to delete them.

- *"slideButton"*    
Swipe left or right to show the Delete button next to the list item. The content stays in its place.    

- *"toggle"*    
Click a **minus** icon next to a list item to display the Delete button. 

- *"context"*    
Right-click or touch and hold the list item to call a context menu that contains the Delete option.    
