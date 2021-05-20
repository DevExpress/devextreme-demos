The [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component consists of the [Tabs](/Documentation/ApiReference/UI_Components/dxTabs/) and [MultiView](/Documentation/ApiReference/UI_Components/dxMultiView/) components. TabPanel automatically synchronizes the selected tab with the currently displayed view and vice versa. This demo demonstrates the following TabPanel features:      

### Bind the TabPanel to Data       

The [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource) property binds the TabPanel to data. To specify a custom template for all the TabPanel items, use the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate). To do the same for the item titles, use [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate).

### Switch Between the Tabs     

You can configure navigation between tabs. Specify the [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled) to define whether to swipe items. You can also [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop) tabs and use the [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled) property to specify whether to animate the change of the selected item.

To change item selection programmatically, use the [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled) property that is the index of the currently selected item in the [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource) or [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) array. The [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged) allows you to specify a function that is executed when the selected item changes. 

You can switch the checkboxes below the TabPanel to change the **loop**, **animationEnabled**, and **swipeEnabled** property values.