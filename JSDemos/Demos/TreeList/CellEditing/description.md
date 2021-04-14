Users can modify TreeList data cell by cell. In this mode, only one cell can be in the edit state at a time. TreeList saves changes immediately after the focus leaves cell.

To enable the cell mode, do the following:
- Set the **editing**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) to *"cell*".
- Assign **true** to the [editing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/) object's [allowUpdating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating), [allowAdding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting) properties.

When a user presses the button to add a new row, the [onInitNewRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onInitNewRow) handler populates cells of a new row with default values. In this demo, this function sets *Not Started* as `Status` and current date as `Start Date` and `Due Date`.
