Annotations are images and text blocks that provide additional information about the visualized data.

To configure individual annotations, assign an array of objects to the [annotations](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/) option. To specify settings for all annotations, use the [commonAnnotationSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/commonAnnotationSettings/) object. Individual settings take precedence over common settings.

Each annotation's [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#type) attribute should be set to *"text"*, *"image"*, or *"custom"*. In this demo, the type of all annotations is *"custom"*.

To create an annotation of this type, declare the SVG markup in the [template](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#template) option. Inside the template, you can access the annotation being customized.

For more information on annotation settings, refer to the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/) documentation section.
