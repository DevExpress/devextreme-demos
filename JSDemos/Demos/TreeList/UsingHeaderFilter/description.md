A header filter allows users to select column values from a predefined set and use the selected values to filter rows. To enable this behavior, set **headerFilter**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/headerFilter/#visible) to **true**. This feature can be combined with the [filter row](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/UsingFilterRow).

When you enable the header filter, a funnel icon appears in each column's header. Users can click this icon to open the drop-down list and choose a value to filter by. You can use the **columns[]**.[headerFilter](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/headerFilter/) property to configure individual header filters. Set **columns[]**.[allowHeaderFiltering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowHeaderFiltering) to **false** to disable a header filter.

The default behavior is to display the matched rows and their ancestors. The [Filter Modes](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/FilterModes) demo shows how to use other display modes.

For details on header filters, see the [Header Filter](/Documentation/Guide/UI_Components/TreeList/Filtering_and_Searching/#Header_Filter) article.
