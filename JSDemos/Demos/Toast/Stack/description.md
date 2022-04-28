The DevExtreme Toast components support stacking. Use the [notify(message, stack)]() or [notify(options, stack)]() method to enable this feature.

These methods use a **stack** object that have the following structure: *{position, direction}*.

## Specify Position

You can set the `position` field to a string (see *'alias'* tab in the demo) or an object (see *'coordinates'* tab in the demo). Note that if you use an object for `position` field, you can only specify one field in that object for vertical coordinate and one field for horizontal coordinate (for example, if you specify *'top'*, you do not need to specify *'bottom'*).

## Specify Direction

You can also specify the `direction` field in the **stack** object. You can choose between regular options or options with a 'reverse' postfix. The difference between these options: when, for example, you set the `direction` to *'up'*, the second and subsequent toasts push the first toast upwards. When you set the `direction` to *'up-reverse'*, toasts stack on top of each other. This behavior applies to other directions.

## Hide Toasts

To hide all toast messages, use the [hideToasts]() method.