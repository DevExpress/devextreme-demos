The **DropDownBox** component is an editor that consists of a text field and drop-down content. In this demo, the content is the **TreeView** and the **DataGrid** widgets in the single selection mode. 

The following instructions show how to synchronize the **DropDownBox** component with any other embedded DevExtreme component:

1. **Specify data sources**    
The **DropDownBox**'s and embedded component's data sources can be the same or different. If they are different, the component's key field should be present in the **DropDownBox**'s data source.        

2. **Specify which data field provides the DropDownBox's values and the embedded component's keys**       
Assign the field's name to the **DropDownBox**'s [valueExpr](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr) option and to the [key](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) option of the embedded component's store.

3. **Synchronize the DropDownBox's value and the embedded component's selection**

    1.  Select data items according to the **DropDownBox**'s initial value. To do this, assign the value to the embedded component's **selectedRowKeys**/**selectedItemKeys** option (see the example with the **DataGrid** below). If the component does not have such options, implement the **onContentReady** handler (the example with the **TreeView**).
    2.  Implement the **DropDownBox**'s [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#onValueChanged) handler to update the selection when the value changes.
    3.  Implement the embedded component's **onSelectionChanged** handler to update the **DropDownBox**'s value when the selection changes.
