The filter row allows users to enter a query for each column and filter rows by that value. To display the filter row, set the **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible) property to **true**. If you need to deactivate this feature for a certain column, set its [allowFiltering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowFiltering) property to **false**.

Depending on a column's [dataType](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType), its filter row cell represents different editors:

<table class="dx-table">
    <tr>
        <th>dataType</th>
        <th>Editor</th>
    </tr>
    <tr>
        <td>*"string"*, *"number"*, *"object"*</td>
        <td>text box</td>
    </tr>
    <tr>
        <td>*"boolean"*</td>
        <td>drop-down list</td>
    </tr> 
    <tr>
        <td>*"date"*</td>
        <td>date picker</td>
    </tr> 
    <tr>
        <td>*"datetime"*</td>
        <td>date and time picker</td>
    </tr> 
</table>

Users can click a magnifying glass icon in the filter row cell to select a different filter type. These filters and their initial settings are also defined by the column's data type. If you need to restrict the available filters, specify them in the **columns[]**.[filterOperations](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterOperations) array. You can also use the [selectedFilterOperation](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#selectedFilterOperation) property to specify a custom initial filter operation.

To set a filter value in code, use the **columns[]**.[filterValue](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#filterValue) property as done in the [Filter Panel](/Demos/WidgetsGallery/Demo/TreeList/FilterPanel/) demo.
