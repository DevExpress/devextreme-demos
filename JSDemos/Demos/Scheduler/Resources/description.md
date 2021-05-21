A resource adds an appointment field that allows users to assign it to a single or multiple categories. The appointment rectangle will have the color based on the assignment.

The Scheduler can have multiple resources. To add a resource, do the following:

1. **Define a resource object in the [resources](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/') array property.**        
Each object should have at least the following fields:

- [dataSource](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#dataSource')         
    Specifies available categories.          
    Each category object should contain the id, text, and color fields. If your field names differ, specify them in the global [valueExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/valueExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#valueExpr'), [colorExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/colorExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#colorExpr'), and [displayExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/displayExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#displayExpr') properties. For details on how to provide data, see the [Data Binding](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/) help topics.
- [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr')             
    Specifies the name of an appointment data field that assigns a category id.

1. **Preset appointments to specific categories.**           
Include a field specified in the **fieldExpr** property into appointment data objects. The field should be equal to a category id. If you skip this step, users should specify categories in the UI.

The Scheduler uses the color scheme of the last object in the **resources** array. If you need colors of another object, set its [useColorAsDefault](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#useColorAsDefault) property to **true**.

To enable assignment of multiple categories, set the resource object's [allowMultiple](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#allowMultiple) property to **true**.

You can also group appointments by resources as specified in the following article: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/). 
