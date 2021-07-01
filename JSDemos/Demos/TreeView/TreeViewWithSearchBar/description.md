To add a search bar to the TreeView, set the [searchEnabled](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchEnabled) property to **true**. 

If you need to configure the search functionality, do the following: 

- Use the [searchMode](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify whether items should contain (default), start with, or match the search string. In this example, you can change the **searchMode** in the drop-down menu.

- Configure the [searchExpr](/Documentation/ApiReference/UI_Components/dxList/Configuration/#searchMode) property to specify search data fields other than the default text field. 

- Specify the [searchEditorOptions](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#searchEditorOptions) property to customize the search bar. To display it, the TreeView uses the TextBox component so you can include any properties from the [TextBox configuration](/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/).

Note that only loaded nodes appear in the search results. Do not enable search if the TreeView uses the [createChildren](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#createChildren) function or [virtual mode](/Documentation/ApiReference/UI_Components/dxTreeView/Configuration/#virtualModeEnabled) since the search will produce partial results.
