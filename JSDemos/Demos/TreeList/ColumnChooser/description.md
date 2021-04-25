The column chooser allows users to hide and display columns at runtime. To enable it, assign **true** to the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled) property. 

To open the column chooser, users should click the button in the toolbar above the TreeList. Depending on the [mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#mode), the opened popup can do either of the following:

* List headers of the hidden columns              
This corresponds to the default *"dragAndDrop"* **mode**.

* Show a checklist with all columns         
This corresponds to the *"select"* **mode**. To display a column, users have to choose its checkbox.

If the [allowSearch](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#allowSearch) property is set to **true**, users can search through the column chooser values. In this demo, use the checkbox below the TreeList to toggle this feature.

You can also hide specific columns programmatically. For this, set **columns[]**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible) to **false**. If a column should never be hidden, assign **false** to **columns[]**.[allowHiding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHiding). 
