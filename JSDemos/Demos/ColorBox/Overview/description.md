The ColorBox allows users to enter a color or pick it out from the drop-down editor. When you create a ColorBox, specify its [value]() property to set an initial color. Users can change the value instantly after they picked a shade, or after they click the **OK** button. To control this behavior, specify the [applyValueMode]() property. 

You can hide the editor's drop-down button to allow users to only type in a color code. To do this, disable the [showDropDownButton]() property. Users can also edit the transparency of the picked shade if the [editAlphaChannel]() property is set to **true**.

## Configure the ColorBox

Use the following properties to control the component interactivity:

- [readOnly]()    
Specifies whether the ColorBox is read-only.

- [disabled]()    
Specifies whether the ColorBox responds to user interaction.

You can specify the following properties to add custom buttons into the input field, or configure the drop-down editor's buttons:

- [buttons[]]()    
Allows you to add custom buttons to the input text field.

- [showClearButton]()    
Specifies whether to display the Clear button in the ColorBox.

- [applyButtonText]()    
Specifies the text for the button that applies changes and closes the drop-down editor.

- [cancelButtonText]()    
Specifies the text for the button that cancels changes and closes the drop-down editor.

## Handle Value Change

Implement the [onValueChanged]() function to handle the value change when users pick a color out of the drop-down editor. To handle the input value change, use the [onInput]() function.