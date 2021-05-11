Scheduler allows users to add, edit, resize, drag, and delete appointments. The [editing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/) object consists of properties to configure these operations:

* [allowAdding](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowAdding)
* [allowDeleting](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDeleting)
* [allowDragging](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDragging)
* [allowResizing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowResizing)
* [allowTimeZoneEditing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing)
* [allowUpdating](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowUpdating)

You can use the checkboxes below this demo's Scheduler to toggle these properties.

Edit operations raise events that you can handle with the following functions:

* [onAppointmentAdding](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding) / [onAppointmentAdded](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdded)

* [onAppointmentDeleting](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentDeleting) / [onAppointmentDeleted](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentDeleted)

* [onAppointmentUpdating](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating) / [onAppointmentUpdated](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdated)

In this demo, we have configured the handlers to display a toast message after a user performs an edit operation.

For details on the **allowTimeZoneEditing** property, see the [Time Zone Support](/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/) demo.
