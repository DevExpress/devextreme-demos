If the TreeList uses a remote dataset with a a [plain structure](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#dataStructure), it can be loaded dynamically as a user expands nodes. To configure this feature on the client, do the following:

1. Implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) property of the dataSource to send the expanded node's id.

2. Enable filtering on the server&mdash;set the **remoteOperations**.[filtering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/remoteOperations/#filtering) to **true**.

3. Use the [hasItemsExpr](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#hasItemsExpr) property to specify which data field defines whether the node has children.

The server-side implementation is available under the `TreeListDataController.cs` tab in the ASP.NET versions of this demo.
