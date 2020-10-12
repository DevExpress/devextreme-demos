Annotations are images and text blocks that provide additional information about the visualized data.

To configure annotations, assign an array of objects to the [annotations](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/) option. To specify settings for all annotations, use the [commonAnnotationSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAnnotationSettings/) object. Individual settings take precedence over common settings.

Each annotation's [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#type) attribute should be set to *"text"* or *"image"*. In this demo, all annotations have the *"text"* type.

Annotations can be added at specific coordinates or anchored to a **PolarChart** element. This demo illustrates annotation placement:  

- [Angle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#angle) and [radius](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#radius) options specify the position of annotations with seasons names.
- Annotations with temperatures are anchored to series, and the [offsetX](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#offsetX), [paddingTopBottom](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#paddingTopBottom), and [paddingLeftRight](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/#paddingLeftRight) options specify their position.

For more information on annotation settings, refer to the [annotations[]](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/annotations/) documentation section.