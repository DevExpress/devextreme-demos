You can use custom summaries if you want to implement your own logic. To add them on the client side, do the following:

1. Add a summary configuration object to the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[groupItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) or [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[totalItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/) array

2. Set the summary object's [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*

3. Specify the custom summary's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name)         
Use this value to identify the summary item inside the **calculateCustomSummary** function.

1. Specify a custom aggregate logic in the [calculateCustomSummary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary) function          
Implement the necessary calculation stages to change the resulting summary's value (the parameter's totalValue field).

In this demo, the custom summary displays the sum of sale amounts for selected rows only. To reload the DataGrid on each selection change, the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged) handler is implemented.

If your data set is large or you want to configure custom summaries on the server, refer to the [Server-Side Data Aggregation](/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation) article.
