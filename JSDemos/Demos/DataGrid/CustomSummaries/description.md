DataGrid can calculate custom summaries on the client or server side. In this demo, we have implemented the client-side logic. The instructions below explain how to do this in your code:

1. If the **remoteOperations**.[summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#summary), **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging), or [remoteOperations](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/) property is used, set it to **false**.

1. Add a summary configuration object to the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[groupItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) or [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[totalItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/) array.

2. Set the summary object's [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*.

3. Specify the custom summary's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name).         
Use this value to identify the summary item when you calculate the resulting value.

1. Calculate the resulting value in the [calculateCustomSummary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary) function.          
Implement the necessary calculation stages as described in the function's documentation.

In this example, the custom summary displays the sum of sale amounts for selected rows only. To rerender the resulting value on each selection change, the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged) handler is implemented.

You should use client-side custom summaries if your data set is small. Otherwise, we recommend that you choose the server-side scenario. For details, refer to the [Server-Side Data Aggregation](/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation) article.
