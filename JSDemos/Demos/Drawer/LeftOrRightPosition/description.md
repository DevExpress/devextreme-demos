Drawer is a dismissible or permanently visible panel that users can use for navigation in applications. 

In this demo, when users click on a toolbar item, it opens the Drawer component. The component can interact with the view in the following modes (see [openedStateMode](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#openedStateMode)): 

- "*push*"    
The Drawer partially displaces the view.

- "*shrink*"    
The view's width decreases to accommodate the Drawer.

- "*overlap*"    
The Drawer overlaps the view.

In this demo, you can use radio buttons under the Drawer to configure this property. You can also change Drawer's [position](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#position) and [revealMode](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#revealMode) properties.

Use a [template](/Documentation/ApiReference/UI_Components/dxDrawer/Configuration/#template) to define the Drawer's content. The view's content (an HTML string in this demo) is part of the Drawer's markup. Note that the Drawer component does not interact with the toolbar. The code of the demo does not define the toolbar in the Drawer's markup.

To get started with the DevExtreme Drawer component, refer to the following step-by-step tutorial: [Getting Started with Navigation Drawer](/Documentation/Guide/UI_Components/Drawer/Getting_Started_with_Navigation_Drawer/).