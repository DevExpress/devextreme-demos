You can use the **DataGrid** filter API to specify filters in code. 

In this example, the **DataGrid** filter options depend on the [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) value. To implement the same behavior in your application, do the following:

1. Specify the [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) option of the **SelectBox**. The values should correspond to one of the **DataGrid**'s data fields.

2. Implement the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#onValueChanged) handler for the **SelectBox** to track the selection change.

3. Use the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method to apply the **SelectBox** value as the filter expression for the grid's [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource).

4. Use the [clearFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearFilter) method to discard all the applied filters. 