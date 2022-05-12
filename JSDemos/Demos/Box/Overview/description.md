The Box component allows you to arrange various elements within it. In this demo, you can see three layouts that use boxes for arrangement.

The first layout consists of a box with three items. To display items, you can use an [items](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/) array, a [dataSource](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#dataSource), or specify dxItems in the markup. The [direction](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#direction) property in the first box is set to `row`, and the component arranges items in a row. You can also specify [width](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#width) and [height](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#height) of the box.

The item size along the main axis can be relative or absolute. To specify relative size, use the [ratio](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#ratio) property. For absolute size, use [baseSize](/Documentation/ApiReference/UI_Components/dxBox/Configuration/items/#baseSize) property.

The second layout consists of a box with three items, but the second item has a box within it. The items in the inner box are aligned by center horizontally and vertically. Specify [align](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#align) and [crossAlign](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#crossAlign) respectively to set the item alignment within the box.

The third layout shows how to arrange items on the page. Use a box with the [direction](/Documentation/ApiReference/UI_Components/dxBox/Configuration/#direction) set to `col` and arrange items within it.



