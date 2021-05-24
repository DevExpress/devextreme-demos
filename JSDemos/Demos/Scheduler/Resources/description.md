Users can categorize appointments by resources. To understand what resources are, consider the following example: in an educational center lectures are held in several rooms. In Scheduler terms, room is a resource kind, individual rooms are resource instances, and lectures are appointments that use these resource instances.


### Define Resources

1. **Add a resource object to the [resources](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/') array property.**        
Each object should have at least the following fields:

- [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#dataSource)         
    Resource instances of this resource kind. Each instance should contain the `id`, `text`, and `color` fields. If your field names differ, specify them in the [valueExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#valueExpr), [displayExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#displayExpr), and [colorExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#colorExpr) properties, respectively.

- [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr')             
    Specifies the name of an appointment data field that sets a resource instance id.

1. **Preset appointments to specific resource instances.**           
Include a field specified in the **fieldExpr** property into appointment data objects. The field should be equal to a resource instance id. If you skip this step, users should specify resource instances in the UI.

### Color Appointments Based on Resource Kind

To use the color scheme of a specific resource kind, enable the kind's [useColorAsDefault](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#useColorAsDefault) property. Otherwise, appointments use the color scheme of the last resource kind declared in the **resources** array.

This demo enables you to change the **useColorAsDefault** property at runtime. Click the radio buttons under the Scheduler to switch between different color schemes.

### Assign Multiple Instances of a Resource Kind

Each resource kind object can contain the [allowMultiple](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#allowMultiple) property. When it is **true**, users can assign multiple instances of this kind to a single appointment. In this demo, the Owner resource kind allows multiple instances.

You can also group appointments by resources as shown in the following demo: [Group Orientation](/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/). 
