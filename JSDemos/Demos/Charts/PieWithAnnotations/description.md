Annotations are containers for images, text blocks, and custom content that provide additional information about the visualized data.

To configure individual annotations, assign an array of objects to the [annotations](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/annotations/) option. To specify settings for all annotations, use the [commonAnnotationSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/commonAnnotationSettings/) object. Individual settings take precedence over common settings.

Each annotation's [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/annotations/#type) attribute should be set to *"text"*, *"image"*, or *"custom"*. In this demo, the type of all annotations is *"image"*.

Annotations can deliver more information if you add tooltips to them. A [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/) appears when users hover the mouse pointer over an annotation. This demo shows how to implement a tooltip with custom content via the [tooltipTemplate](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/annotations/#tooltipTemplate) option. 

For more information on annotation settings, refer to the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/annotations/) documentation section.
