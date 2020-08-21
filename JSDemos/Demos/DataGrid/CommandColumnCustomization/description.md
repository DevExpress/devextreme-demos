[Command columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/) contain buttons that allow users to edit, select, drag, and perform other actions on rows. This demo shows how to customize the edit command column. This column contains predefined editing buttons and optional custom buttons.

**Predefined buttons**      
The editing.mode defines which predefined commands can be displayed in the command column. To show the Edit and Delete commands, add the editing object, set its mode to *"row"* and enable the allowUpdating and allowDeleting options. When a user starts to edit a row, the command column automatically displays the Save and Cancel commands only.

The predefined editing buttons are displayed as textual links by default. To use buttons instead, set editing.useIcons to true.

If you need to hide the Edit or Delete buttons for certain rows, implement a custom logic function and assign it to either allowUpdating or allowDeleting options. In this demo, such a function is assigned to the **allowDeleting** option.

**Custom buttons**      
If the edit column should contain custom buttons, add its configuration to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. **DataGrid** will display it according to its position in this array. Specify the column's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#type) as *"buttons"* and declare the [buttons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/) array. It should contain your custom buttons and values for the predefined buttons.

In this demo, the edit column contains one custom button (Clone) and two predefined buttons (Edit and Delete).
