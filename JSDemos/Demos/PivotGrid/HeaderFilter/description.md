A [header filter](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/) allows a user to filter field values by including or excluding them from the applied filter. Click a header filter icon in the field chooser or on the field panel to open a popup menu that displays all unique field values.

Use the following properties to configure the header filter:

- [allowFiltering](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowFiltering)        
Allows users to toggle the checkbox in the popup window to filter fields. Set this property to **true** to display the filter icon in the header filter.

- [allowSearch](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/#allowSearch)     
Allows users to search through field values.

- [showRelevantValues](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/#showRelevantValues)       
Specifies whether to show all field values or only those that satisfy the other applied filters.

- [width](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/#width) and [height](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/#height)     
Configures the popup menu size.

In this demo, a filter is applied to the Country field. This filter includes only the United Kingdom. The City field displays only cities in this country because the **showRelevantValues** property is **true**. If you clear the corresponding checkbox under the PivotGrid, the City field displays all cities, regardless of the other applied filters.