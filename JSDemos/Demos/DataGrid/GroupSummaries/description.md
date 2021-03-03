A group summary creates a synopsis for records in a group. To configure this feature, populate the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[groupItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) array with summary configuration objects. Each object should specify a [column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column) that supplies data for summary calculation and a [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType)&mdash;an aggregate function that should be applied to this data.

### Position a Group Summary

The default position for group summaries are the parentheses after the group caption. You can change the position to one of the following:


* Group row's column
You can align a summary with the column by which it was calculated (see the Sale Amount and Total Amount columns). To do this, enable the [alignByColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#alignByColumn) property. If you want to align a summary with a column of your choice, specify it in the [showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.

* Group footer
To position a summary in the group footer, enable the [showInGroupFooter](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) property. The summary will be aligned with the column by which it was calculated (see the Total Amount column). If you want to use another column, specify it in the [showInColumn](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#showInColumn) property.

### Format Summary Values
To set a text for the summary value, specify it in the [displayFormat](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/#displayFormat) property.

### Sort Groups by Summary Values
The DataGrid sorts groups by their captions. To sort them by summary values, populate the [sortByGroupSummaryInfo](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/) array with objects. Each object should include the [summaryItem](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/sortByGroupSummaryInfo/#summaryItem) property that specifies a group summary item by which to sort groups. In this demo, the **sortByGroupSummaryInfo** array contains a single object that sorts groups by the number of orders.
