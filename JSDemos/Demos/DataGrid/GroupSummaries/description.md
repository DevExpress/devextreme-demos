A group summary creates a synopsis for records in a group. To configure this feature, populate the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[groupItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) array with summary configuration objects. Each object should specify a [column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column) that supplies data for summary calculation and a [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) &mdash; an aggregate function that should be applied to this data.

### Position a Group Summary

The default position for group summaries are the parentheses after the group caption. You can change the position to one of the following:

DataGrid will use the value from the column property of the summary. 

* Group row's column
To position a summary in the group row, set the [alignByColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#alignByColumn) property to **true**. DataGrid will position the summary in the column specified in the summary's **column** property. If you want to use another column, specify it in the [showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.

* Group footer
To position a summary in the group footer, set the [showInGroupFooter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) property to **true**. DataGrid aligns summaries to the right of the footer. If you want to display a summary in a certain column of the footer, specify it in the [showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.

### Format Summary Values
To set a text for the summary value, specify it in the [displayFormat](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#displayFormat) property.

### Sort Groups by Summary Values
To define a display order for groups, populate the [sortByGroupSummaryInfo](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/) array with objects. Each object must consist of at least the [summaryItem](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem) property that specifies the group summary item by which to sort groups. In this demo, groups are sorted be the number of orders.
