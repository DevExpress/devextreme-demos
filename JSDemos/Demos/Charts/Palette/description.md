The PieChart, like other DevExtreme Data Visualization components, allows you to apply several predefined palettes. In this demo, you can use two drop-down menus under the PieChart to choose a palette and change the way how the palette is extended when it has an insufficient number of colors.

## Configure Palette

A palette is a set of colors that mix well with each other. To apply the needed color scheme you can assign it to a [palette](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#palette) property. It accepts either the name of a [predefined palette](/Documentation/Guide/Themes_and_Styles/SVG-Based_Components_Customization/#Palettes) or an array of colors. In this demo, you can use the "Palette" selector to apply a new set of colors.

When the number of palette colors is less than the number of points in a series, you can use the [paletteExtensionMode](/Documentation/ApiReference/UI_Components/dxPieChart/Configuration/#paletteExtensionMode) property to specify what to do with colors in the palette. This property can accept one of the following values:

- "blend"
Create a blend of two neighboring colors and insert it between these colors in the palette.

- "alternate"
Repeat the full set of palette colors, alternating their normal, lightened, and darkened shades in that order.

- "extrapolate"
Repeat the full set of palette colors, changing their shade gradually from dark to light.

In this demo, you can use the "Palette Extension Mode" selector to apply one of these modes.

