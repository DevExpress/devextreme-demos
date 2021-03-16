The Form component represents fields of a data object as a collection of label-editor pairs. To create a data entry UI, assign an object to the [formData](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#formData) property. The Form creates a simple item (a label-editor pair) for each field in the **formData** object.

You can use the editors on the right to modify the following properties:     
- [labelLocation](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#labelLocation)
Specifies whether to display item labels above the editor or to the left of it.
- [colCount](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount)
Specifies the number of columns. Assign a number to this property to make the amount of columns fixed. Assign *"auto"* to make it adapt to the screen width.
- [minColWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#minColWidth)
Specifies the minimum column width. Use this property when the **colCount** property's value is *"auto"*.
- [width](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#width)
Specifies the Form component's width.
- [readOnly](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#readOnly)
Makes the Form editors read-only.
- [showColonAfterLabel](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showColonAfterLabel)
Specifies whether or not the Form displays a colon after a label. 
