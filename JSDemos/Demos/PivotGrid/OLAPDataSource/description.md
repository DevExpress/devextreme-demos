The PivotGrid component supports OLAP services (Microsoft SQL Server Analysis Services). This demo shows how to use a remote OLAP cube as the PivotGrid's data source.

**Configure Store**
To connect your component to an OLAP storage, use [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/). Specify the following properties to configure it:    

- [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url)        
The OLAP server's URL.

- [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog)        
The initial catalog that contains the OLAP cube.

- [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube)       
The name of the OLAP cube to use from the catalog.

Pass the XmlaStore to the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) property of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) component. Assign the component to the PivotGrid's [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource) property.
## Configure PivotGrid Fields
Assign an array of objects to the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) property. Each object in this array configures a single field. Fields can belong to different [areas](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area). Add OLAP measures to the *"data"* area dimensions to the *"column"* and *"row"* areas. You can use OLAP dimensions to group and filter measure values from the *"data"* area. This demo shows how to use the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to access the measures and specify ways to these measures in the OLAP storage. 

You can access the measures that are not displayed in the [Field Chooser](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/).
