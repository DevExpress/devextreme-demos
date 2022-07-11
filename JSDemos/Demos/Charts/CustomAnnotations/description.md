Annotations are designed to show additional information about visualized data. You can display images, text blocks, and custom content in annotations. To create custom annotations, specify the following Chart properties.

## annotations[]

The [annotations](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/) array specifies a collection of annotations. This demo uses the data source array to create this collection. Each object has an [argument](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/#argument) to make the component display annotations relative to specific arguments and a [data](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/#data) object that stores data from data source.

You can use the [annotations](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/) array to configure each annotation individually.

## commonAnnotationSettings

Use the [commonAnnotationSettings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAnnotationSettings/) object to specify settings common to all annotations in the chart. In this object, assign `custom` to the [type](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAnnotationSettings/#type) property. To anchor annotations to a series point, specify the [series](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAnnotationSettings/#series) property. Finally, declare the SVG markup in the annotation [template](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/#template).

Note that individual [annotation settings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/annotations/) override the [common annotation settings](/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonAnnotationSettings/). 

## customizeAnnotation

You can also use the [customizeAnnotation](/Documentation/ApiReference/UI_Components/dxChart/Configuration/#customizeAnnotation) function to customize an individual chart annotation.