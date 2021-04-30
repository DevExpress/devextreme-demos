The initial order of columns mirrors the order of fields in the first object from the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource). You can change that order programmatically and allow users to reorder columns in the TreeList's interface.

Properties to reorder columns programmatically:

* [columns[]](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/)           
Configures columns. Arrange objects and column names as strings in the desired order.

* **columns[]**.[visibleIndex](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visibleIndex)          
Specifies the position of the column regarding other columns. For details, see the [Column Reordering](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Reordering/) article.

To enable column reordering in the UI, set [allowColumnReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering) to **true**. If some column should never be reordered, set its [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowReordering) property to **false**.
