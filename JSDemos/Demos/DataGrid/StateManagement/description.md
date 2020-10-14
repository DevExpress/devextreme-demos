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

Use these event handlers to perform actions before and after pending changes are saved or canceled. In this demo, the **onSaving** event handler sends the changes to a server. The handler's parameter `e` contains fields useful for this functionality. To implement it in your application, follow these steps:

1. **Disable the built-in edit state management**       
Set the `e.cancel` field to **true**.

1. **Send a request to the server**      
Pending changes are stored in the `e.changes` array. It has only one element in all [edit modes](), except batch. Check if this element is not empty and send it to the server.

1. **Apply the same changes to a local array**       
If the server successfully saves the changes, call the **applyChanges** method to save the same changes in a local array.

1. **Update the widget's data source and reset the edit state**
Assign the local array to the [dataSource](), **null** to the **editRowKey**, and an empty array to the **editing**.**changes** option.

