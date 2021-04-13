The Form component can use different layouts depending on the screen width. Click one of the buttons on the right from the demo title to switch between horizontal and vertical orientations. To enable this feature, configure the Form as follows:

**Automatically Adjust the Number of Columns**  
1. Assign *"auto"* to the [colCount](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount) property to make the number of columns adapt to any screen size. 
1. Use the [minColWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#minColWidth) property to specify the minimum column width.

**Fix the Number of Columns for Predefined Screen Sizes**       
1. Use the [screenByWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth) function to specify the available screen qualifications depending on the screen width. In this demo, this function returns two values. `'sm'` stands for screens narrower than 720 pixels and `'md'` for others.
1. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCountByScreen) property to define how many columns a Form has depending on the available screen qualifications. This property has a higher priority than the **colCount** and **minColWidth** properties.   
1. Toggle the [CheckBox](/Documentation/ApiReference/UI_Components/dxCheckBox/) at the bottom that modifies the **colCountByScreen** property value to see how the Form adapts to different screens. In this demo, you can see the difference on the vertical screen.