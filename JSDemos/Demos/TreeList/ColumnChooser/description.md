The column chooser allows users to hide and display columns at runtime. To enable it, assign **true** to the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled) property. 

To open the column chooser, users should click the button in the toolbar above the TreeList. The way users show and hide columns depends on the **columnChooser**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#mode):

* *"dragAndDrop"*              
Users drag and drop column headers to and from the column chooser.

* *"select"*         
Users select and unselect checkboxes with column names.

If the [allowSearch](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#allowSearch) property is set to **true**, users can search through column names. In this demo, use the checkbox below the TreeList to toggle this feature.

You can also hide specific columns programmatically. For this, set the **columns[]**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible) property to **false**. If a column should never be hidden, assign **false** to the **columns[]**.[allowHiding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHiding) property. 
