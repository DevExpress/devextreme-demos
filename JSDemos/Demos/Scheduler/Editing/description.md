Scheduler allows users to add, edit, resize, drag, and delete appointments. The editing object consists of properties to configure these operations:

<table class="dx-table">
    <tr>
        <th>Property</th>
        <th>Default value</th>
    </tr>
    <tr>
        <td>[allowAdding](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowAdding)</td>
        <td>**true**</td>
    </tr>
    <tr>
        <td>[allowDeleting](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDeleting)</td>
        <td>**true**</td>
    </tr>
    <tr>
        <td>[allowDragging](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowDragging)</td>
        <td>**true**, **false** (Android, iOS)</td>
    </tr>
    <tr>
        <td>[allowResizing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowResizing)</td>
        <td>**true**, **false** (Android, iOS)</td>
    </tr>
    <tr>
        <td>[allowTimeZoneEditing](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowTimeZoneEditing)</td>
        <td>**false**</td>
    </tr>
    <tr>
        <td>[allowUpdating](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/editing/#allowUpdating)</td>
        <td>**true**</td>
    </tr>
</table>

You can use the checkboxes below this demo's Scheduler to toggle these properties.

Edit operations raise events that you can handle with the following functions:

* [onAppointmentAdding](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdding) / [onAppointmentAdded](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentAdded)

* [onAppointmentDeleting](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentDeleting) / [onAppointmentDeleted](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentDeleted)

* [onAppointmentUpdating](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdating) / [onAppointmentUpdated](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#onAppointmentUpdated)

In this demo, we have configured the **onAppointment...ed** functions to display a toast message after a user performes an edit operation.

For details on the **allowTimeZoneEditing** property, see the [Time Zone Support](/Demos/WidgetsGallery/Demo/Scheduler/TimeZonesSupport/) demo.
