...INTRO...

**Widget Options**

...OPTION LIST...

Use these options to control the edit state. Two-way bind them to component properties so that you can get and set the options at runtime. In this demo, we bind the **editRowKey** and **changes** options to display their values under the **DataGrid**.

**Utility Method**

...METHOD...

**Event Handlers**

...HANDLER LIST...

...INTRO TO INSTRUCTIONS...

1. **Disable the built-in edit state management**       
Set the `e.cancel` field to **true**.

1. **Send a request to the server**      
Pending changes are stored in the `e.changes` array. It has only one element in all [edit modes](), except batch. Check if this element is not empty and send it to the server (see the `processSaving` method in `app.component.ts` and the `saveChange` method in `app.service.ts`).

1. **Apply the same changes to the widget's data source**       
If the server successfully saves the changes, call the **applyChanges** method to save the same changes in the widget's data source (see the `updateOrders` method in `app.service.ts`).

1. **Reset the edit state**
Assign **null** to the **editRowKey** and an empty array to the **changes** option (see the `processSaving` method in `app.component.ts`).

