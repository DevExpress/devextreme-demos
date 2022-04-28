The DevExtreme Toast components support stacking. Use the [notify(message, stack)](/Documentation/ApiReference/Common/Utils/ui/#notifymessage_stack) or [notify(options, stack)](/Documentation/ApiReference/Common/Utils/ui/#notifyoptions_stack) method to enable this feature.

These methods use a **stack** object that has the following structure: *{position, direction}*.

## Specify Position

You can set the `position` field to a string (see *'alias'* tab in the demo) or an object (see *'coordinates'* tab in the demo). Note that if you use coordinates for the `position` field, you need to specify one vertical and one horizontal coordinate only. For example, if you specify *'top'*, you do not need to specify *' bottom'*.

## Specify Direction

The `direction` field values can be regular and reverse. For example, *'up'* and *'up-reverse'*.

- *'up'*   
Subsequent toasts push the previous toast upwards.

- *'up-reverse'*    
Toasts stack on top of each other. 

This behavior applies to other directions.

## Hide Toasts

To hide all toast messages, use the [hideToasts](/Documentation/ApiReference/Common/Utils/ui/Methods/#hideToasts) method.