When the DataGrid adapts its layout to small screen width, it hides columns based on [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority).

The lower is this option's value, the sooner a column is hidden. For example, **DataGrid** hides the column whose **hidingPriority** equals *"0"* first, then the column with the priority *"1"* and so on.

In this demo, the `CustomerStoreCity` column has hiding priority *"0"* and is hidden in both vertical and horizontal orientation modes. The `CustomerStoreState` and `OrderDate` columns have priority *"1"* and *"2"* correspondingly. **DataGrid** hides these columns after the `CustomerStoreCity` column when the screen orientation is vertical.