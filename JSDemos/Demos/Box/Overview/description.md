The Box component allows you to arrange various items within it. To display the items, you can use an [items](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/) array, a [dataSource](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#dataSource), or specify dxItems in the markup. 

You can arrange Box items in the different directions. Set the [direction](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#direction) property to `row` to arrange items in a row, or use `col` for the column.

The item size along the main axis can be relative or absolute. To specify relative size, use the [ratio](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#ratio) property. For absolute size, use the [baseSize](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#baseSize) property. If you want to change the size of the Box, specify [width](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#width) and [height](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#height) properties.


In this demo, you can see three layouts that use boxes for arrangement.

The first layout shows how you can use [direction](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#direction) and [ratio](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#ratio) properties. 

The second layout consists of a box with three items, but the second item has a box within it. The component aligns the items in the inner box by center. Specify [align](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#align) and [crossAlign](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#crossAlign) to align items along the horizontal and vertical axes respectively.

The third layout shows how to arrange items on the page. Use a box with the [direction](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#direction) set to `col` and arrange items within it.