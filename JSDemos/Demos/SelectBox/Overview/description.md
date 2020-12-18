The [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) UI component allows users to select an item from a drop-down list. This demo illustrates the following  **SelectBox** options:

- [items](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#items)    
Specifies an array of items displayed in the **SelectBox**.
- [placeholder](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#placeholder)       
Specifies the text that is displayed when no items are selected.
- [readOnly](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#readOnly)     
Prevents users from changing the editor's value via the UI.
- [disabled](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#disabled)        
Specifies whether the UI component responds to user interaction.
- [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource)        
Binds the UI component to data. Unlike the **items** option, **dataSource** accepts the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object that allows users to sort, filter, group, and shape data.
- [fieldTemplate](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#fieldTemplate) and [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#itemTemplate)       
Allow you to customize the text field and drop-down list items.
- [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onValueChanged) event handler      
Use this function to perform an action when a user chooses a new value. In this demo, this function is used to display the selected value.