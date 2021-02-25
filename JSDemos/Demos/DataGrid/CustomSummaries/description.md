DataGrid can apply custom functions to calculate total and group summaries. These functions can be server-side and client-side. If the dataset is small, you should choose the latter.

This demo uses a client-side custom summary: it calculates the sum of sale amounts for all selected rows. To achieve this behavior, we have done the following:

1. Set the summary object's [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*

1. Specify the custom summary's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name)

1. Add the [calculateCustomSummary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary) function

1. Implemented the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged) handler to reload the data and repaint the DataGrid on each selection change.

If the dataset is large, you should implement a server-side function because its performance is higher (the client does not have to download the data). For details, refer to the [Server-Side Data Aggregation](/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation) article.