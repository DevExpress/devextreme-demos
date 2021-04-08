To enable the row editing mode, set the **editing**.[mode](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#mode) property to *"row"*.

All edit operations are deactivated in the default configuration. To activate them, set the [allowAdding](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowAdding), [allowUpdating](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowUpdating), and [allowDeleting](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/editing/#allowDeleting) properties of the **editing** object to **true**.

To customize the edit column, assign *"buttons"* to the **column**.[type](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#type) property and specify the button names as shown in this demo. See the following help topic for more details on the edit column customization: [Customize the Edit Column](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Types/Command_Columns/#Customize_the_Edit_Column).

Each edit operation raises events. The [onInitNewRow](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onInitNewRow) handler populates an added row with data. In this demo, this handler assigns the CEO's `ID` to the `Head` field of a newly created row. Use the [onEditorPreparing](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#onEditorPreparing) handler to customize a cell's editor. In this demo, we use this handler to disable an editor for the `Head` field when users edit the row with the CEO.

Refer to the following help topic to see the full list of the events raised by editing: [Editing Events](/Documentation/Guide/UI_Components/TreeList/Editing/#Events).
