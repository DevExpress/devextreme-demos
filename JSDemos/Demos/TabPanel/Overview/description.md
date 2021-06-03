The [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component consists of the [Tabs](/Documentation/ApiReference/UI_Components/dxTabs/) and [MultiView](/Documentation/ApiReference/UI_Components/dxMultiView/) components. TabPanel automatically synchronizes the selected tab with the currently displayed view and vice versa.

### Bind the TabPanel to Data       

The [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource) property binds the TabPanel to data. To specify a custom template for all the TabPanel views, use the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate). To do the same for the tabs, use [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate).

### Switch Between the Tabs     

You can configure navigation between tabs. Specify the [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled) to define whether to switch between views with the swipe gesture. You can also [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop) views and use the [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled) property to specify whether to animate the change of the selected view.

To switch between tabs programmatically, use the [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#selectedIndex) property. It accepts the index of a tab in the **dataSource** or **items[]** array. The [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged) function allows you perform desired actions when the selected tab changes.

You can switch the checkboxes below the TabPanel to change the **loop**, **animationEnabled**, and **swipeEnabled** property values.
