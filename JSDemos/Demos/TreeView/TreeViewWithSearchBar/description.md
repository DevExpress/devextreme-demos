To add a search bar to the TreeView, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEnabled) property to **true**.

### Configure search properties
* Search mode         
To appear in the search results, a node's text should contain the search string. Use the [searchMode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchMode) property to specify whether the text should start with or be equal to the search string instead. In this demo, you can use the drop-down list to switch between these modes.

* Search fields             
The TreeView searches through the [text](/Documentation/ApiReference/UI_Components/dxTreeView/Node/#text) node fields. To specify different field(s), use the [searchExpr](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchExpr) property.

Note that only loaded nodes appear in the search results. Do not enable search if the TreeView uses the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function or [virtual mode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled) since the search will produce partial results.

### Configure the search bar
TreeView uses the TextBox component as the search bar.  To customize it, use the [searchEditorOptions](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEditorOptions) property and include specific properties from the [TextBox configuration](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/).
