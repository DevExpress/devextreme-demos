The [List](/Documentation/ApiReference/UI_Components/dxList/) displays a collection of items as a scrollable list. To create a list, pass an array of items to the [dataSource](/Documentation/ApiReference/UI_Components/dxList/Configuration/#dataSource) property. 

To allow users to delete items, set the [allowItemDeleting](/Documentation/ApiReference/UI_Components/dxList/Configuration/#allowItemDeleting) property to **true**. Use the "Allow deletion" checkbox under the List to see how this property works.

The "Deletion UI type" drop-down menu under the List allows you to switch between the different deletion behaviors described below. Menu items correspond to [itemDeleteMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#itemDeleteMode) property values. 
    
- *"static"* (default for desktops)    
Click an X button next to a list item to delete it. 

- *"toggle"*    
Click a **minus** icon next to a list item to display the Delete button. 

- *"slideButton"*    
Swipe left or right to show the Delete button next to the list item. The content stays in place.  

- *"slideItem"* (default for iOS)    
Slide list items left. Item content shifts and the Delete button appears. 

- *"swipe"* (default for Android)    
 Swipe items to delete them.

- *"context"*    
Right-click or touch and hold the list item to call a context menu that contains the Delete option.    
