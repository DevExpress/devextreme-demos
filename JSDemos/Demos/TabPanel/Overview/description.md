The [TabPanel](/Documentation/ApiReference/UI_Components/dxTabPanel/) UI component consists of the [Tabs](/Documentation/ApiReference/UI_Components/dxTabs/) and [MultiView](/Documentation/ApiReference/UI_Components/dxMultiView/) components. TabPanel automatically synchronizes the selected tab with the currently displayed view and vice versa. This demo demonstrates the use of the following TabPanel properties:      
- [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)     
The index of the currently selected item in the [items[]](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/items/) array or [dataSource](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#dataSource).

- [loop](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#loop)      
Specifies whether to loop items.

- [animationEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#animationEnabled)      
Specifies whether to animate the change of the selected item.

- [swipeEnabled](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#swipeEnabled)      
Configures swiping. This property's default value is **true** on touch devices and **false** on others.

- [itemTitleTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTitleTemplate)     
Specifies a custom template for titles of all TabPanel items.

- [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#itemTemplate)      
Specifies a custom template for content of all items. 

- [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxTabPanel/Configuration/#onSelectionChanged)        
A function to execute when users select an item or cancel the selection. 

You can switch the checkboxes below the TabPanel to change the **loop**, **animationEnabled**, and **swipeEnabled** property values.