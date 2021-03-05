DataGrid can calculate custom summaries on the client or server side. In this demo, we have implemented the client-side logic. The instructions below explain how to do this in your code:

1. Make sure that the **remoteOperations**.[summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#summary), **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/#groupPaging), or [remoteOperations](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/) property is not set or set to **false**.

1. Add a summary configuration object to the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[groupItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/groupItems/) or [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/).[totalItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/) array.

1. Set the summary object's [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) to *"custom"*.

1. Specify the summary's [name](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#name). It will be used to identify the summary item within the **calculateCustomSummary** function in the next step.

1. Calculate the resulting value in the [calculateCustomSummary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/#calculateCustomSummary) function. Implement the necessary calculation stages as described in the function's description.

In this example, the custom summary displays the sum of sale amounts for selected rows only. To recalculate the resulting value on each selection change, the [refresh()](/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#refresh) method is called within the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onSelectionChanged) handler.

Client-side custom summaries are suitable if your dataset is small. For large datasets, we recommend that you use [Server-Side Data Aggregation](/Documentation/Guide/UI_Components/DataGrid/Summaries/Custom_Aggregate_Function/#Server-Side_Data_Aggregation).
