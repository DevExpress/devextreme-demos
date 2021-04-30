The filter row allows users to enter a query for each column and filter rows by that value. To display the filter row, set the **filterRow**.[visible](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/filterRow/#visible) property to **true**.

Depending on a column's [dataType](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#dataType), its filter row cell offers users different editors to enter a filter value:

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

Users can click a magnifying glass icon in the filter row cell to open a drop-down list with available filters. These filters and their initial setting are also defined by the column's data type. You can use the [selectedFilterOperation](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#selectedFilterOperation) property to specify a custom initial filter operation.
