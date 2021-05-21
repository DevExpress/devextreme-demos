Users can categorize appointments by resources. To understand what resources are, consider the following example: in an educational center lectures are held in several rooms. In Scheduler terms, room is a resource kind, individual rooms are resource instances, and lectures are appointments assigned to the resource instances.

The Scheduler can have multiple resources. To add a resource, do the following:

### Define Resources

1. **Add a resource object to the [resources](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/') array property.**        
Each object should have at least the following fields:

- [dataSource](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#dataSource')         
    Specifies available resource instances.          
    Each resource instance object should contain the id, text, and color fields. If your field names differ, specify them in the global [valueExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#valueExpr), [colorExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#colorExpr), and [displayExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#displayExpr) properties. For details on how to provide data of resource instances, see the [Data Binding](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/) help topics.
- [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr')             
    Specifies the name of an appointment data field that sets a resource instance id.

1. **Preset appointments to specific resource instances.**           
Include a field specified in the **fieldExpr** property into appointment data objects. The field should be equal to a resource instance id. If you skip this step, users should specify resource instances in the UI.

### Use Color Scheme of a Custom Resouce Kind
The Scheduler uses the color scheme of the last resource kind object in the **resources** array. If you need colors of another object, set its [useColorAsDefault](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#useColorAsDefault) property to **true**.

### Enable Assignment of Multiple Resource Instances
To enable assignment of multiple resource instances, set the resource object's [allowMultiple](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#allowMultiple) property to **true**.

You can also group appointments by resources as specified in the following article: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/). 
