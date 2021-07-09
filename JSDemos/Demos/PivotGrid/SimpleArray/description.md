You can use the PivotGrid component to display data from an array of objects. Use the [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource) property to bind the PivotGrid to data. This property uses the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) component under the hood to process data. Assign your array to the **dataSource**.[store](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/store/) property.

Use the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) property to configure pivot grid cells. This property accepts an array of objects whose fields contain cell settings. 

The cells can belong to different [areas](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area). Most cell types require that you also use the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to specify which data source field provides data for a cell.

In this demo, the `Region` and `City` fields are in the same *"row"* area. We use the [selector](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector) function to group these field values. 

For more information on the fields and areas, refer to the following article: [Fields and Areas](/Documentation/Guide/UI_Components/PivotGrid/Fields_and_Areas/).