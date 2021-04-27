You can use the batch edit mode to defer saving multiple changes. In this mode, users edit data one cell at a time. The changes are stored in a buffer and can be discarded before the **Save** button is clicked.

To enable the batch edit mode, configure the following properties:

* Set **editing**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) to *"batch"*.
* Assign **true**  to the [editing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) object's [allowUpdating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating), [allowAdding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting) properties.

This demo uses the [onInitNewRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onInitNewRow) handler to populate cells of a new row with default values. This function sets *"Not Started"* as the initial task status and specifies the current date as the initial start and due dates.

If you store data on the server and have a custom backend logic to apply data changes, implement the [onSaving](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onSaving) client-side function to save all changes with a single request as done in the DataGrid's [Batch Update Request](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchUpdateRequest/) demo.
