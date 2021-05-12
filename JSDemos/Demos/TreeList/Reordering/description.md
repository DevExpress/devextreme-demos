The initial order of columns mirrors the order of fields in the first object from the [dataSource](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataSource). You can change that order programmatically and allow users to reorder columns in the UI.

### Reorder columns programmatically
To reorder columns in code, arrange objects and column names as strings in the desired order inside the [columns[]](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/) array. Additionally, you can use the **columns[]**.[visibleIndex](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visibleIndex) property to specify  the position of the column regarding other columns. For details, see the [Column Reordering](/Documentation/Guide/UI_Components/TreeList/Columns/Column_Reordering/) article.

### Allow users to reorder columns in the UI
To enable column reorder in the UI, set [allowColumnReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering) to **true**. If some column should never be reordered, set its [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowReordering) property to **false**.
