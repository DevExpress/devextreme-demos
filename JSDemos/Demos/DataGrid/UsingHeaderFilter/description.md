A header filter allows users to filter rows by values selected in a pop-up menu. To display this menu, users can click header filter icons in column headers.

### Display Header Filter Icons

Assign **true** to the **headerFilter**.[visible](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/#visible) property to display header filter icons for all columns. To hide the icon for a specific column, set the column's [allowHeaderFiltering](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowHeaderFiltering) property to **false**.

### Enable Search Within Header Filters

Users can search values within a header filter. To configure the search panel, define the [search](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/search/) property in the global [headerFilter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/headerFilter/) object or in a **columns**.[headerFilter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/) object. 

You can compare the search string against specific fields in your data objects. For this purpose, apply the **search**.[searchExpr](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/search/#searchExpr) property. In this example, the search string is compared against the "City" and "State" fields.

To apply a comparison operation used to search header filter values, specify the **search**.[mode](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/headerFilter/search/#mode) property.
