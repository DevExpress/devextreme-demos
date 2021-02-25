A group summary creates a synopsis for a column data in a group. Adding this feature is similar to that of total summaries, except that you should use the **summary**.[groupItems[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) instead of **summary**.[totalItems[]](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/). Each array object should consist of the [column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#column) and [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#summaryType) properties.

This demo groups the sales data by the *"Employee"* column. Each group displays the following summaries:

- Number of orders         
The summary is displayed in the parentheses after the group caption (the default position).

- Maximum sale amount           
The summary is displayed in the *"Sale Amount"* column of the group row. To align summaries by the corresponding columns within the group row, use the [alignByColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#alignByColumn) property.

- Maximum total amount           
The summary is displayed in the *"Total Amount"* column of the group row.

- Sum of total amounts              
The summary is displayed in the group footer. To display summaries there, set the [showInGroupFooter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) property to **true**. You can also display summaries in a certain column within the footer. For this, enable showInGroupFooter and specify the column in the 
[showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.

Groups can be sorted by the summary values. To configure this feature, add the [sortByGroupSummaryInfo](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/) object and specify the compulsory [summaryItem](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem) property. In this demo, we have sorted the groups by the summary that displays the number of orders. 
