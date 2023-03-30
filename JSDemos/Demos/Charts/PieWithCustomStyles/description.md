This demo shows how to implement custom patterns and gradients in the PieChart component points.

## Gradient

Call the [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to obtain a gradient id. Specify method arguments:

- `type`    
This method supports two gradient types: *'linear'* and *'radial'*.

- `options`    
An object with gradient options.

    - `colors`    
    An array of gradient colors. Each color is an object that includes `color` and `offset` fields. The `offset` field specifies a starting point for each color.

    - `rotationAngle` (linear gradients only)
    You can use this option to rotate linear gradients.

## Pattern

To acquire a pattern id, implement the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) method. Specify method arguments:

- `options`    
An object with pattern options.

    - `height`    
    Individual pattern height.

    - `width`    
    Individual pattern width.

    - `template`    
    An SVG-based pattern template.

## Fill the PieChart

If you want to fill all pies with your pattern or gradient, assign the obtained id to the `fillId` field of the [series](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/).[color](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/series/#color) property. If you want to customize each pie individually, implement the [customizePoint](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#customizePoint) function as shown in this demo.

The custom patterns and gradients fill is not exclusive to PieChart only. The following components support this functionality as well:

- [Chart](/Documentation/Guide/UI_Components/Chart/Series/Customize_Appearance/)

- [PolarChart](/Documentation/Guide/UI_Components/PolarChart/Customize_Appearance/)

- [CircularGauge](/Documentation/Guide/UI_Components/CircularGauge/Customize_Appearance/)

- [LinearGauge](/Documentation/Guide/UI_Components/LinearGauge/Customize_Appearance/)
