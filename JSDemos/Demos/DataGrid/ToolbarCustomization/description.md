The toolbar contains predefined and custom controls that execute various commands.

The **DataGrid** uses the DevExtreme [Toolbar](/Demos/WidgetsGallery/Demo/Toolbar/Overview/) component as the toolbar. To customize the toolbar, implement the [onToolbarPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onToolbarPreparing) function. Its parameter contains the [Toolbar's configuration](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/) in the **toolbarOptions** field. You can access toolbar items via the **toolbarOptions**.[items](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/) array. Modify this array to add or remove toolbar items.

This demo illustrates how to add the following elements to the toolbar:

- **DevExtreme widgets**        
Specify the [widget](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#widget) that you want to add and its [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#options). In this demo, we added the [Button](/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/) and [SelectBox](/Demos/WidgetsGallery/Demo/SelectBox/Overview/) widgets.

- **Custom elements**     
Specify a [template](/Documentation/ApiReference/UI_Widgets/dxToolbar/Configuration/items/#template) for your custom element. In this demo, the custom element displays the total group count.

Toolbar items in this demo also include the Column Chooser button. This is a predefined button that the **DataGrid** added because the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/) is enabled.
