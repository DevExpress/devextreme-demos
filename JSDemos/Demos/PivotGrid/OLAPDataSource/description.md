The PivotGrid component supports OLAP services (Microsoft SQL Server Analysis Services). This demo shows how to use a remote OLAP cube as the PivotGrid's data source.

## Configure the Store
To connect your component to an OLAP storage, use [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/). Specify the following properties to configure it:    

- [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url)        
The OLAP server's URL.

- [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog)        
The initial catalog that contains the OLAP cube.

- [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube)       
The name of the OLAP cube to use from the catalog.

Pass the XmlaStore to the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) property of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) component. Assign the component to the PivotGrid's [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource) property.

## Configure PivotGrid Fields       
To display data in the PivotGrid, assign an array to the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) property. Each object in this array configures a single pivot grid field. Assign a field name to the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to populate the pivot grid field with data. You can distribute fields between four different areas: row, column, filter, and data. To specify the area, set the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) property. Fields that do not belong to any area are displayed in the [field chooser](https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/IntegratedFieldChooser/).

Add OLAP measures to the *"data"* area dimensions to the *"column"* and *"row"* areas. You can use OLAP dimensions to group and filter measure values from the *"data"* area. This demo shows how to use the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to access the measures and specify ways to these measures in the OLAP storage. 

You can access the measures that are not displayed in the [Field Chooser](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/).
