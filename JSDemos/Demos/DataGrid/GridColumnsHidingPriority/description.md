When the **DataGrid** adapts its layout to small screen width, it hides columns based on [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority). Columns with lower values are hidden first. 

In this demo, the `CustomerStoreCity` column is hidden in both vertical and horizontal orientation modes because its **hidingPriority** is 0. The `CustomerStoreState` and `OrderDate` columns have priorities 1 and 2. The **DataGrid** hides these columns after the `CustomerStoreCity` column, only when the screen orientation is vertical.
