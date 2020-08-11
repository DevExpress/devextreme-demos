[Command columns](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/Command_Columns/) contain buttons that allow users to edit, select, drag, and perform other actions on rows. This demo shows how to customize the edit command column. This column contains predefined editing buttons and optional custom buttons.

**Predefined buttons**
The predefined buttons are edit and delete. You can enable them for all rows. For this, set the **editing**.[allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowUpdating) and **editing**.[allowDeleting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#allowDeleting) options to **true**. If you need to hide any of them for certain rows, implement a function with custom logic and assign it to the desired option. In this demo, such a function is assigned to the **allowDeleting** option.

The predefined editing buttons are displayed as textual links by default. To use icons instead, set **editing**.[useIcons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#useIcons) to **true**.

**Custom buttons**
If the edit column should contain custom buttons, add its configuration to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. DataGrid will display it according to its position in this array. Specify the column's [type](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#type) as *"buttons"* and declare the [buttons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/buttons/) array. It should contain your custom buttons and values for the predefined buttons.

In this demo, the edit column contains one custom button (Clone) and two predefined buttons (Edit and Delete).
