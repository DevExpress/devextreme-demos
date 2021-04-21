The column chooser allows users to hide and unhide columns at runtime. To enable it, assign **true** to the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled) property. 

To open the column chooser, click the button in the toolbar above the TreeList component. The opened popup panel lists the headers of hidden columns. In this demo, you can specify the way users interact with this panel to hide/unhide columns. For this, use the drop-down list below the TreeList component to set the [mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#mode) property to one of the following values:

* **"dragAndDrop"**
Users have to drag and drop column headers to and from the column chooser panel.

* **"select"**
Users have to choose checkboxes to select visible columns.

If the [allowSearch](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#allowSearch) is set to **true**, you can search through the column chooser values. In this demo, use the checkbox below the TreeList to toggle this feature.

You can also hide certain columns programmatically. For this, set **columns[]**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible) to **false**. If a column should never be hidden, assign **false** to **columns[]**.[allowHiding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHiding). 
