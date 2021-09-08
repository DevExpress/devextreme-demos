The DataGrid includes an integrated toolbar that displays predefined and custom items. Declare the DataGrid's `dxo-toolbar` element, add an `dxi-item` element within and configure it to display one of the following:

* **Predefined Control**            
Specify the [name](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/toolbar/items/#name) and [properties](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/toolbar/items/) if you want to customize the item. Ensure that `dxo-toolbar` contains items for all features that you enabled in your DataGrid. In this demo, we enable the [columnChooser](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnChooser/) and add the *"columnChooserButton"* `dxi-item` to the toolbar.

* **DevExtreme Component**           
Nest and configure the desired DevExtreme component within the `dxi-item` element. In this demo, we extended the toolbar's item collection with a [Button](/Demos/WidgetsGallery/Demo/Button/PredefinedTypes/) and a [SelectBox](/Demos/WidgetsGallery/Demo/SelectBox/Overview/).

* **Custom Element**             
Specify your custom html markup within the `dxi-item` element. In this demo, the custom element displays the total group count.
