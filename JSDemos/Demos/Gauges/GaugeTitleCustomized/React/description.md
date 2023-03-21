This demo shows how to specify the CircularGauge title and display custom labels in the component's center. 

The CircularGauge title usually contain general explanation about the data represented by the gauge. You can configure it with the properties of the [title](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/title/) configuration object:

- **Location**    
Use the [horizontalAlignment](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/title/#horizontalAlignment) and [verticalAlignment](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/title/#verticalAlignment) properties to place a title on any side of your gauge.

- **Font Settings**    
To customize a text appearance, define the font properties within the [font](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/title/font/) configuration object.

You can specify a custom label in the CircularGauge's center with the [centerComponent](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/#centerComponent) or [centerRender](/Documentation/ApiReference/UI_Components/dxCircularGauge/Configuration/#centerRender) properties. Render a template content as [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) element.