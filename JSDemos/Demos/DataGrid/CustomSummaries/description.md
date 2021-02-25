DataGrid can apply custom server-side and client-side functions to calculate total and group summaries. If the dataset is small, you should choose the client-side implementation.

This demo shows how to add such a summary: it calculates the sum of sale amounts for all selected rows. To achieve this behavior, we have done the following:

1. Set the summary object's [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*

2. Specify the custom summary's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name)

3. Add the [calculateCustomSummary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary) function

4. Implemented the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged) handler to reload the DataGrid on each selection change.

If the dataset is large, you should implement a server-side function instead because its performance is higher (the client does not have to download the data). For details, refer to the [Server-Side Data Aggregation](/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation) article.