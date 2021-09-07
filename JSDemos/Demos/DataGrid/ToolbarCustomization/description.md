When you enable a DataGrid feature, the component adds the corresponding control to the toolbar. You can use the [toolbar](Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/).[items[]](Documentation/21_2/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) array to customize these predefined controls and add DevExtreme components and custom elements to the toolbar. Declare the array elements in the order you want to display them in the UI:

* **Predefined Controls**            
Create an object and specify the [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) that you want to customize. If a control does not need customization, simply include its **name** in the **items[]** array. In this demo, we configured the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/) and added its string to the **items[]** array.

* **DevExtreme Components**           
Specify a [widget](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#widget) that you want to add and its [options](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#options). In this demo, we extended the toolbar's item collection with a [Button](/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/) and a [SelectBox](/Demos/WidgetsGallery/Demo/SelectBox/Overview/).

* **Custom Elements**             
Specify a [template](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/#template) for your custom element. In this demo, the custom element displays the total group count.
