To add a search bar to the TreeView and customize the search functionality, do the following:

- Set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to **true**.

- Use the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify whether items should contain (default), start with, or match the search string. In this example, you can change the **searchMode** in the drop-down menu.

- Configure the [searchExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify custom search data fields. The default search field is [text](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/items/#text). 

The TreeView uses the TextBox component as the search bar. To customize it, use the [searchEditorOptions](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEditorOptions) property and include specific properties from the [TextBox configuration](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/).

Note that only loaded nodes appear in the search results. Do not enable search if the TreeView uses the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function or [virtual mode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled) since the search will produce partial results.
