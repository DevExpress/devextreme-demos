The [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component consists of the [Tabs](/Documentation/ApiReference/UI_Components/dxTabs/) and [MultiView](/Documentation/ApiReference/UI_Components/dxMultiView/) components. TabPanel automatically synchronizes the selected tab with the currently displayed view and vice versa.

### Bind the TabPanel to Data       

The [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource) property binds the TabPanel to data. You can use the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) API to shape, group, and otherwise modify data. You can also assign an array of TabPanel items to the [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) property instead of **dataSource** as shown in this demo. Specify tab and view settings in this array.  

To specify a custom template for a tab or a view, use the [tabTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#tabTemplate) or [template](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template) properties for an element in the **items[]** array.  To specify a custom template for all the TabPanel views, use the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate). To do the same for the tabs, use [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate).

### Switch Between the Tabs     

To switch between tabs programmatically, use the [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#selectedIndex) property. It accepts the index of a tab in the **dataSource** or **items[]** array. The [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged) function allows you perform desired actions when the selected tab changes.

Use the following properties to configure navigation between tabs:       
- [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)      
Defines whether to switch between views with the swipe gesture.
- [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop)      
Specifies whether to loop views.
- [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled)      
Specifies whether to animate the change of the selected view.

You can switch the checkboxes below the TabPanel to change the **loop**, **animationEnabled**, and **swipeEnabled** property values.
