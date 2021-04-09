Users can modify TreeList data cell by cell. In this mode, only one cell can be in the edit state at a time. TreeList saves changes immediately after the focus leaves cell.

To enable the cell mode, do the following:
- Set the **editing**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) to *"cell*".
- Assign **true** to the [editing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/) object's [allowUpdating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating), [allowAdding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting) properties.

When a user presses the button to add a new row, the [onInitNewRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onInitNewRow) handler populates the new row editor with data. In this demo, this function preselects *Not Started* in the `Status` drop-down field and presets the current date for the `Start Date` and `Due Date` fields.
