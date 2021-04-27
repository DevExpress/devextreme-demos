You can use batch edit mode to defer saving multiple changes. In this mode, users edit data one cell at a time. The changes are stored in a buffer and can be discarded before the **Save** button is clicked.

To enable the batch edit mode, configure the following properties:

* Set **editing**.[mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) to *"batch"*.
* Assign **true**  to the [editing](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#mode) object's [allowUpdating](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowUpdating), [allowAdding](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowAdding), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#allowDeleting) properties.

Cells enter the editing state when they are clicked, as specified by the [startEditAction](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#startEditAction) property. This also selects the cells' text because the [selectTextOnEditStart](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/editing/#selectTextOnEditStart) property is set to **true**. You can use the controls below the DataGrid to change these properties at runtime.