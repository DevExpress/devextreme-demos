If you want users to change column visibility at runtime, enable the Column Chooser. Set the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#enabled) property to **true**.  Note that you can make sure that certain columns always stay visible. To do so, set the **columns[]**.[allowHiding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHiding) property to **false**. 

To open the column chooser, users should click the button in the toolbar above the TreeList. The way users show and hide columns depends on the **columnChooser**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/#mode):

* *"dragAndDrop"*              
Users drag and drop column headers to and from the column chooser.

* *"select"*         
Users select and deselect checkboxes with column names.

The column chooser selection is non-recursive. When a user selects a parent item, nested items remain unselected. To select items recursively, set the **selection**.[recursive](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/selection/#recursive) property to **true**. In this demo, you can use the checkbox under the TreeList component to toggle this property.

If the **search**.[enabled](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columnChooser/search/#enabled) property is set to **true**, users can search through column names.  In this demo, use the checkbox below the TreeList to toggle this feature.

To hide a column in code, set the **columns[]**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible) property to **false**. 
