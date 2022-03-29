The Resizable enables you to resize its content. In this demo you can drag [handles](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#handles) to resize the DataGrid.

Configure four properties to specify the boundaries to which you can drag the handles:

- [minWidth](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#minWidth)    
The lower width boundary.

- [maxWidth](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#maxWidth)    
The upper width boundary.

- [minHeight](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#minHeight)    
The lower height boundary.

- [maxHeight](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#maxHeight)    
The upper height boundary.

You can specify four types of handles: *top*, *bottom*, *left* and *right*. Separate handles by a space in the **handles** property to set multiple handles. Combine nearest handles (for example, bottom and left) to get corner handles.

Set the [keepAspectRatio]() property to **false** to disable resizing the Resizable's content proportionally with corner handles.
