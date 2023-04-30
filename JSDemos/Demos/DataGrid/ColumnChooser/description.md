If you want to allow users to change column visibility at runtime, set the **columnChooser**.[enabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#enabled) property to **true**. To make sure that certain columns always stay visible, set the **columns[]**.[allowHiding](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowHiding) property to **false**. 

To display the column chooser, click the button in the toolbar above the DataGrid. You can specify a column chooser's position with the **columnChooser**.[position](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#position) property. The way users show and hide columns depends on the **columnChooser**.[mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/#mode):

* *"dragAndDrop"*              
Users drag and drop column headers to and from the column chooser.

* *"select"*         
Users select and deselect checkboxes with column names.

The column chooser selection is non-recursive. When a parent element is selected, nested elements remain unselected. If you want to select elements recursively, enable the **selection**.[recursive](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/select/#recursive) property.

You can allow users to search through column names. For this, assign **true** to the **search**.[enabled](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columnChooser/search/#enabled) property. 

In this demo, use checkboxes below the DataGrid to toggle the search and selection features.

To hide a column in code, set the **columns[]**.[visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible) property to **false**. 
