<!-- jQuery -->
The [List](/Documentation/ApiReference/UI_Widgets/dxList/) displays a collection of items as a scrollable list. To create a list, pass an array of items to **dataSource**. 

This demo illustrates selection and deletion, and its UI can be divided into three sections: the **List**, "Selected Tasks" section, and "Options". 

<!-- selection -->
In this example, users can check the checkbox next to a list item to select it. This is possible because the [showSelectionControls](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#showSelectionControls) property is set to **true**. Set the property to **false** to disable checkboxes. In this case, users can click on items they want to select. Selected items will be grayed out. 

The number of items users can select at a time is defined by the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectionMode) property. Set its value to *"all"* to add a "Select all" checkbox at the top of the list. This value only works when **showSelectionControls** is set to **true**

In this example, selected list items are displayed in the "Selected tasks" section. This done by a function that handles the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onSelectionChanged) event.

<!-- deletion -->
To allow users delete selected items, set the [allowItemDeleting](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemDeleting) property to *true*. Use the checkbox in the "Options" section to see how it works.

The **List** supports six deletion modes. You can see them in action in the "Deleting type" dropdown menu of the "Options" section. Use the [itemDeleteMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#itemDeleteMode) property to set the deletion mode.

When users delete a list item, it is removed from the "Selected tasks" section. This is done by a function that handles the [onItemDeleted](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemDeleted) event.
