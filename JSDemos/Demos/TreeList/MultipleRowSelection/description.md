This demo enables the *"multiple"* **selection**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#mode). This mode allows users to select multiple rows using checkboxes or keyboard shortcuts.

The checkbox in the leftmost column header selects all rows. If you want to disable it, set the [allowSelectAll](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#allowSelectAll) property to **false**.

Multiple selection mode is non-recursive (when a row is selected, nested rows remain unselected). If users should select rows recursively, set the **selection**.[recursive](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/selection/#recursive) property to **true**. In this demo, you can use the checkbox under the TreeList to toggle this property.

The TreeList includes an API to select multiple rows. For details, refer to the [Selection API](/Documentation/Guide/UI_Components/TreeList/Selection/#API) article.
