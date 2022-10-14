The ActionSheet component is a pop-up sheet that contains a set of buttons. These buttons allow users to perform custom actions related to a single task (call, send a message, delete, or edit a selected contact). This demo shows how to create a simple ActionSheet and handle button clicks.

## Specify Controls and Title

ActionSheet can contain multiple buttons. Use either the [dataSource](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#dataSource) or [items](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/) properties to add buttons and configure them. For each button you can specify a [text](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#text), [type](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#type), [icon](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#icon), [template](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/items/#template) and other properties. In this demo, the ActionSheet buttons are configured in a simple array assigned to the **dataSource** property. Each button includes the **text** property only.

If you want to display a title, assign the needed text to the [title](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#title) property.

## Handle the Item Clicks

The component can perform a custom action when the user clicks the button. Use the [onItemClick](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#onItemClick) property to handle a custom item click.

You can also handle the click on the default **Cancel** button. For this, assign a custom handler to the [onCancelClick](/Documentation/ApiReference/UI_Components/dxActionSheet/Configuration/#onCancelClick) property. 

In this demo, the ActionSheet component displays notification with a button name, when you click the button. 


