Our **DataGrid** widget manages row edits internally. However, if your use case requires full control over the editing process, you can disable the built-in edit state management and use the API members below.

**Widget Options**

- [editing]().[editRowKey]()        
DESCRIPTION

- **editing**.[editColumnName]()        
DESCRIPTION

- **editing**.[changes]()       
DESCRIPTION

You can get and set these options at runtime to control the edit state. In this demo, the [onOptionChanged]() function gets the **editRowKey** and **changes** option values and displays them under the **DataGrid**.

**Utility Method**

- [DevExpress.data.applyChanges(data, changes, options)]()      
DESCRIPTION

**Event Handlers**

- [onSaving]() / [onSaved]()        
DESCRIPTION

- [onEditCanceling]() / [onEditCanceled]()      
DESCRIPTION

Use these event handlers to perform actions before and after pending changes are saved or canceled. In this demo, the **onSaving** event handler saves the changes on a server as follows:

1. Disables the built-in edit state management.

1. Sends pending changes to the server which saves them.

1. Calls the **applyChanges** method to save the same changes in a local array.

1. Sets this array as the **DataGrid**'s [dataSource]() and resets the edit state (the **editRowKey** and **changes** options).

