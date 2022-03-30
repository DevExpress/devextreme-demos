The Resizable enables you to resize its content. In this demo you can drag [handles](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#handles) to resize the DataGrid.

Configure the following properties to specify the boundaries to which you can drag the handles:

- [minWidth](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#minWidth)    
The lower width boundary.

- [maxWidth](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#maxWidth)    
The upper width boundary.

- [minHeight](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#minHeight)    
The lower height boundary.

- [maxHeight](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#maxHeight)    
The upper height boundary.

You can specify four types of handles: *top*, *bottom*, *left* and *right*. Separate handles by a space in the [handles](/Documentation/ApiReference/UI_Components/dxResizable/Configuration/#handles) property to specify the handles that you want to show to users. Combine nearest handles (for example, "bottom left") to get corner handles.

The [keepAspectRatio]() property specifies whether to resize the Resizable's content proportionally with corner handles. If you need to disable propotional resize, set this property to **false**.
