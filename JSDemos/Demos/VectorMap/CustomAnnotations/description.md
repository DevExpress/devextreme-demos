Annotations are images and text blocks that display additional information about the visualized data.

To add annotations to a chart, assign an array of objects to the [annotations](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/) option. To specify settings for all annotations, use the [commonAnnotationSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/commonAnnotationSettings/) object. Individual settings take precedence over common settings.

Each annotation's [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#type) attribute should be set to *"text"*, *"image"*, or *"custom"*. In this demo, the type of all annotations is *"custom"*.

Custom annotations require that you specify your own display [template](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/#template) in SVG format. As you can see in demo code, you can access annotation data within the template markup.

For more information on annotation settings, refer to the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/annotations/) help topic.
