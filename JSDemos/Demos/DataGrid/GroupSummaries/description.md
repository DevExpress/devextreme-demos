A group summary  creates a synopsis for a column data in a group. Adding this feature is similar to that of total summaries, except that you should use the **summary**.[groupItems[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) instead of **summary**.[totalItems[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/). Each array object must consist of at least the [column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#column) and [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#summaryType) properties.

This demo groups the sales data by the *"Employee"* column. Each group has summaries that do the following:

1. Count the number of orders         
The quantity is displayed in the parantheses after the group caption (the default position).

1. Determine the maximum sale amount           
The value is shown in the *"Sale Amount"* column of the group row.

1. Determine the maximum total amount           
The value is shown in the *"Total Amount"* column of the group row.

1. Calculate the sum of the *"Total Amount"* column values              
The sum is displayed in the group footer.

To display a summary in the group footer or the specified **column** within the group row, we have set the [showInGroupFooter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) or [alignByColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#alignByColumn) properties to **true**, respectively. You can also display summaries in a certain column within the footer. For this, specify the column in the 
[showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.
