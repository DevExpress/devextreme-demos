A total summary creates a synopsis for all data of a certain column. To configure this feature, add the [summary](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/) object, instatiate the **summary**.[totalItems](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/) array and add summary objects. Each object must consist of at least the [column](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#column) and [summaryType](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#summaryType) properties. The former specifies the column that supplies data, the latter sets the aggregate function that applies to this data.

This demo has summaries that do the following:

1. Count the number of orders (summaryType of *"count"*)

2. Determine the date of the first order (summaryType of *"min"*)
   
3. Calculate the total revenue (summaryType of *"sum"*).

The second and the third summaries use the [customizeText](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#customizeText) and [valueFormat](/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/totalItems/#valueFormat) properties to customize the displayed text and set the display format, respectively.
