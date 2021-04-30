The search panel allows users to filter data by all columns. To enable this feature, set **searchPanel**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#visible) to **true**. If the TreeList should not search through a specific column, set its [allowSearch](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowSearch) property to **false**.

Search is case-insensitive. The default configuration is to search by [visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visible) and invisible columns. If you want to search by visible columns only, set the **searchPanel**.[searchVisibleColumnsOnly](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#searchVisibleColumnsOnly) property to **true**.

Column's [data type](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType) determines the condition under which the TreeList includes a row into search results:

* *"number"*, *"boolean"*, and *"data"* column values should be strictly equal to the search query

* *"string"* column values should contain the search query.

You can populate search panel with an initial query. To do this, specify the **searchPanel**.[text](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/searchPanel/#text) property. You can also call the [searchByText(text)](/Documentation/ApiReference/UI_Components/dxTreeList/Methods/#searchByTexttext) method to specify query at runtime. 

The TreeList displays matched rows with their ancestors. For other display modes, see the [Filter Modes](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterModes) demo.
