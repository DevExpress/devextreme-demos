The Form component can use different layouts depending on the screen width. Click one of the buttons on the right from the demo title to switch between horizontal and vertical orientations. The number of columns in the layout can be specified in one of the following manners:

**Calculate the Number of Columns Automatically**         

In this case, the Form calculates the number of columns based on the screen width. To configure this behavior, follow these steps:

1. Assign *"auto"* to the [colCount](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCount) property to make the number of columns adapt to any screen size. 

1. Use the [minColWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#minColWidth) property to specify the minimum column width.

In this demo, the number of columns is calculated automatically when the check box under the Form is clear.

**Predefine the Number of Columns for Each Screen Size**       

In this case, screen sizes are classified into one of the following categories called "size qualifiers": extra small, small, medium, or large. You specify the number of columns for each size qualifier. Follow the steps below to configure this behavior:

1. Use the [screenByWidth](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#screenByWidth) function to map screen widths to size qualifiers. In this demo, screens narrower than 720 pixels are classified as small; other screens are considered medium.

1. Specify the [colCountByScreen](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#colCountByScreen) property to define how many columns a Form should contain depending on the available screen qualifiers. 

In this demo, select the check box under the Form to enable this configuration.
