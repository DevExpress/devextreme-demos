The [PivotGrid](/Documentation/Guide/UI_Components/PivotGrid) component supports OLAP services (MS SQL Server Analysis Services). This demo shows how to use a remote OLAP cube as the PivotGrid's data source.

**Configure Store**
To connect your component to an OLAP storage, use [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) as an underlying store of the PivotGrid's [dataSource](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource). The **dataSource** property uses the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) component to process data under the hood. Specify the following properties to configure the **XmlaStore**:    

- [url](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url)
The OLAP server's URL.

- [catalog](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog)
The initial catalog that contains the OLAP cube.

- [cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog)
The name of the OLAP cube to use from the catalog.

**Configure PivotGrid Fields**
Specify the displayed cell settings in the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array. Then you need to access OLAP measures to use them as cell values. This demo shows how to use the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) property to access the measures and specify ways to these measures in the OLAP storage. You can access the measures that are not displayed in the [Field Chooser](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/).

Cells in the *"data"* [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) display the measure values. Cells in the *"column"* and *"row"* areas use OLAP dimensions to group and filter measure values from the *"data"* area.