This demo illustrates how to customize the PieChart component  labels.

The [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/).[label](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/) object allows you to specify the following settings:

- [visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#visible)    
Specifies the visibility of point labels.

- [position](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#position)    
Specifies a label position relative to the PieChart.

    - `outside`   
    The labels are outside the component.

    - `columns`    
    The labels are outside the component and are rearranged in columns. You can see the implementation in this demo.

    - `inside`    
    The labels are inside the points.

- [customizeText](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#customizeText)    
A function that returns the text to be displayed by point labels.

- [font](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/font/)    
Specifies font properties for the label text. Includes multiple settings. This demo uses the [size](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/font/#size) option to change the font size.

- [connector](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/)    
Specifies connector properties for labels. Includes multiple settings. In this demo, the [visible](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/#visible) property is enabled, and the connector [width](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/connector/#width) is set to 0.5.

You can also [format](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#format) label texts and change [word wrap](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#wordWrap) mode, specify [background color](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#backgroundColor) and [borders](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/border/), [rotate](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#rotationAngle) and [shift](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/label/#radialOffset) the labels.