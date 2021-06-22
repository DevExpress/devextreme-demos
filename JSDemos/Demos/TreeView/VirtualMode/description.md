With virtual mode, the TreeView loads a node’s children when the node is expanded for the first time. This enhances performance on large datasets.

To enable this feature, set the [virtualModeEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled) property to **true**. Note that this mode is only available when the TreeView's [dataStructure](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#dataStructure) is plain.

When the data source is remote, the TreeView requests data even for those nodes that do not nest others. To prevent this, set the [hasItems](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#hasItems) field to **false** for the corresponding data objects. This example also uses the [hasItemsExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#hasItemsExpr) property to specify a custom name for this field.

As an alternative to virtual mode, you can use the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function to gain full control over data load. To see this approach in action, refer to the [Load Data on Demand](/Demos/WidgetsGallery/Demo/TreeView/LoadDataOnDemand) demo.
