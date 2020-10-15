Our **DataGrid** widget manages the edit state automatically. However, if your use case requires full control over editing, you can use the API members below to manage the state manually. In this demo, we manage the state with a help of the <a href="https://reactjs.org/docs/hooks-reference.html#usereducer" target="_blank">useReducer</a> React hook.

**Widget Options**

...OPTION LIST...

Bind these options to state props and set the props to change the edit state at runtime. In this demo, we bind the **editRowKey** and **changes** options and use the corresponding **on_OptionName_Change** event handlers to set the bound props.

**Utility Method**

...METHOD...

**Event Handlers**

...HANDLER LIST...

...INTRO TO INSTRUCTIONS...

1. **Disable the built-in edit state management**       
Set the `e.cancel` field to **true**.

1. **Send a request to the server**      
Pending changes are stored in the `e.changes` array. It has only one element in all [edit modes](), except batch. Check if this element is not empty and send it to the server (see the `saveChange` action in `actions.js`).

1. **Apply the same changes to the widget's data source and reset the edit state**       
If the server successfully saves the changes, call the **applyChanges** method to save the same changes in the widget's data source Assign **null** to the **editRowKey** and an empty array to the **changes** option. This resets the edit state (see the `SAVING_SUCCESS` handler in `reducer.js`).