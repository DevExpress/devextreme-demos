The [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component consists of the [Tabs](/Documentation/ApiReference/UI_Components/dxTabs/) and [MultiView](/Documentation/ApiReference/UI_Components/dxMultiView/) components. TabPanel automatically synchronizes the selected tab with the currently displayed view and vice versa.

### Bind the TabPanel to Data       

You can assign an array of TabPanel items to the [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) property as shown in this demo. Each item in this array configures an individual tab and an associated view. When these items are objects, use fields of these objects to specify tab and view properties listed in the **items[]** section. Each item of the *"String"* type in this array creates a tab and a view with this string.

You can assign the same array to the [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource) propertyinstead of **items[]**. The [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) API allows you to shape, group, and otherwise modify data. 

If the default properties do not suit your needs, you can specify a custom template for a separate tab or a view. Assign this template to an item's [tabTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#tabTemplate) or [template](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/#template) field correspondingly. 

If you need to specify a single template for all the TabPanel views, use the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate). To do the same for the tabs, use [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate).

### Switch Between the Tabs     

To switch between tabs programmatically, use the [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#selectedIndex) property. It accepts the index of a tab in the **dataSource** or **items[]** array. The [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged) function allows you perform desired actions when the selected tab changes.

Use the following properties to configure user navigation between tabs:

- [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)      
Defines whether to switch between views with the swipe gesture.

- [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop)      
Specifies whether to loop views.

- [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled)      
Specifies whether to animate the change of the selected view.

You can switch the checkboxes below the TabPanel to change the **loop**, **animationEnabled**, and **swipeEnabled** property values.
