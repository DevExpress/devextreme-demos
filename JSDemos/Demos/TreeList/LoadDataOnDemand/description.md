The TreeList can load a remote dataset dynamically as a user expands nodes. The dataset must have a [plain structure](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure).

This feature requires client- and server-side configuration. To configure the client-side part, do the following:

1. **Implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) property of the dataSource**         
Assign this property a function that sends the expanded node's id.

1. **Delegate filtering to the server**         
Set the **remoteOperations**.[filtering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/#filtering) property to **true**.

3. **Specify the data field that defines whether the node has children**           
Use the [hasItemsExpr](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#hasItemsExpr) property to set this data field.

Server-side implementation is available in the [ASP.NET Core](/Demos/WidgetsGallery/Demo/DataGrid/RemoteReordering/NetCore/Light/) and [ASP.NET MVC](/Demos/WidgetsGallery/Demo/DataGrid/RemoteReordering/Mvc/Light/) versions of this demo under the `TreeListDataController.cs` tab.
