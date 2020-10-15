If data is stored on a server, the widget can save all changes with a single request. To add this functionality, set **editing**.[mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) to *"batch"* and implement the [onSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onSaving) function. It accepts an `e` object that contains fields necessary for batch update. The following steps describe the function's implementation:

1. **Disable the default saving logic**                  
Set the `e.cancel` field to `true`.

2. **Send pending changes to the server**
Pending changes are contained in the `e.changes` array. Check that it is not empty and send the changes to the server.

3. **Update data in the widget**
Once the changes are saved, call the [refresh(changesOnly)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refreshchangesOnly) method.

4. **Reset the edit state**
Use the [cancelEditData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#cancelEditData) method to clear the pending changes.
