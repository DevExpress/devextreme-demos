A resource (resource kind) adds an appointment field that allows users to assign the appointment to a single or multiple categories. The appointment rectangle will have the color based on the selected category. Scheduler can have multiple resources, but it derives the color scheme from the last resource kind object. You can use a color scheme of another object if you set its [useColorAsDefault](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#useColorAsDefault) property to **true**.

To add a resource, do the following:

### Add Resource Instances
Resource instances are objects that define the available categories. Each resource instance object must contain the id, text, and color fields. Create an array of such objects. If your field names differ, specify them in the global [valueExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/valueExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#valueExpr'), [colorExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/colorExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#colorExpr'), and [displayExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/displayExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#displayExpr') properties.

### Define a Resource Kind Object in the [resources](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/') Property
The resource property is an array that stores resource kind objects. Each object should have at least the following fields:

- [dataSource](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/dataSource.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#dataSource')         
    Maps a resource kind to resource instances. For details on how to provide data, see the [Data Binding](/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/) help topics.
- [fieldExpr](/api-reference/10%20UI%20Components/dxScheduler/1%20Configuration/resources/fieldExpr.md '/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#fieldExpr')             
    Specifies the name of an appointment data field that assigns the appointment to a specific category id.

To enable multiple category selection, set the object's [allowMultiple](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/resources/#allowMultiple) property to **true**. 

By now, users should be able to select categories for the newly created appointment.

### Preset Appointments to Specific Categories
To associate a specific appointment with the resource, include a field specified in the **fieldExpr** property into the appointment's data object. The field should be equal to an id of a resource instance. This step is optional.

You can also group appointments by resources as specified in the following article: [Group Appointments by Resources](/Documentation/Guide/UI_Components/Scheduler/Resources/Group_Appointments_by_Resources/). 
