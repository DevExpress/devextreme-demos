**DataGrid** has the following API that you can use to filter data:     

- [filter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filter) / [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr)       
Gets the filter expression applied to the grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). If you specify the `filterExpr` parameter, this method applies the filter expression to the grid's **dataSource**.

- [filterValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterValue)       
Specifies a filter expression. Includes filters from the following UI elements: [filter row](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row), [header filter](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter), and [filter builder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder).

- [getCombinedFilter()](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter) / [getCombinedFilter(returnDataField)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilterreturnDataField)       
Gets the total filter that includes filters from the UI elements and **filter(filterExpr)** method. If you specify the `returnDataField` parameter, the return value will contain data fields instead of [getters](/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters).

- [clearFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter) / [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilterfilterName)       
Discards all filters applied to the widget. If you specify the `filterName` parameter, this method discards all filters of a specific type.

In this demo, the grid's **dataSource** filter settings are synchronized with the [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) value. Select an option in a drop-down list to call **filter(filterExpr)** or **clearFilter()** methods depending on the selection.