**DataGrid** has the following API that you can use to filter data:

- [filterSyncEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterSyncEnabled)     
Specifies whether to synchronize [filterRow](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterRow/), [headerFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/), and [filterBuilder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder).

- [filterValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterValue)       
Specifies a filter expression. It consists of the option values from the previous point. 

- [filterPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterPanel/)       
Displays the filter expression.

- [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr)        
Applies the filter expression to the grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource).

- [filter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filter)      
Gets the filter expression applied to the grid's **dataSource**.

- [clearFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter) / [clearFilter(filterName)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilterfilterName)       
Discards all filters applied to the widget. If you specify the `filterName` parameter, this method discards all filters of a specific type.

- [getCombinedFilter()](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter) / [getCombinedFilter(returnDataField)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilterreturnDataField)       
Gets the total filter that includes filters from the UI elements and **filter(filterExpr)** method. If you specify the `returnDataField` parameter, the return value will contain data fields instead of [getters](/Documentation/Guide/Data_Binding/Data_Layer/#Getters_And_Setters).

In this demo, the grid's **dataSource** filter settings are synchronized with the [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) value. Select an option in a drop-down list to call **filter(filterExpr)** or **clearFilter()** methods depending on the selection.