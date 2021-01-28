The [List](/Documentation/ApiReference/UI_Widgets/dxList/) displays a collection of items as a scrollable list. To create a list, pass an array of items to **dataSource**. 

This demo illustrates deletion. The UI consists of the **List** and the "Options" section. 

To allow users delete items, set the [allowItemDeleting](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting) property to *true*. Use the checkbox in the "Options" section to see how it works.

The **List** supports three default and three additional deletion modes. You can see them in action in the "itemDeleteMode" dropdown menu of the "Options" section.

**Default modes**
    
When you select *"static"* mode, click an **X** button next to a list item to delete it. This is the default mode for desktops. To see the default iOS deletion mode, select *"slideItem"*. Slide list items left to show the **delete** button. In this case, the list item is moved off the canvas. To try the deletion mode on Android, select *"swipe"* and swipe items to delete them.

**Additional modes**

- *"slideButton"*    
Users can swipe right to show the **delete** button next to the list item. The content stays in its place.    

- *"Toggle"*    
Click a **minus** icon next to a list item to display the **delete** button. 

- *"context"*    
Right-click or touch and hold the list item to call a context menu that contains the **delete** option.    

Use the [itemDeleteMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode) property to set the deletion mode.

When users delete a list item, it is removed from the "Selected tasks" section. This is done by a function that handles the [onItemDeleted](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemDeleted) event.
