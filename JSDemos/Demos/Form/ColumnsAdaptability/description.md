The Form component can use different layouts depending on the screen width. To enable this feature, configure the following properties:     
- Assign *"auto"* to the [colCount](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount) property to make the number of columns adapt to any screen size.
- Specify the minimum column width in the [minColWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#minColWidth) property.

You can also specify a limited number of screen types and how many columns the Form should have on each screen. Configure the following properties for this purpose:    
- Specify the available screen sizes in the [screenByWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth) function. In this demo, this function returns two values. `'sm'` stands for screens narrower than 720 pixels and `'md'` for others.
- Specify the [colCountByScreen](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCountByScreen) property to define how many columns a Form has depending on the screen width. This property has a higher priority than the **colCount** and **minColWidth** properties. 

Click one of the buttons on the right from the demo title to switch between horizontal and vertical orientations. Toggle the [CheckBox](/Documentation/ApiReference/UI_Components/dxCheckBox/) at the bottom to modify the **colCountByScreen** property value to see how the Form adapts to different screens. In this demo, you can see the difference on the vertical screen.