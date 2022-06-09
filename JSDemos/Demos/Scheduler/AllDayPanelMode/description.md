The **All day** Scheduler panel displays appointments that last all day or have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true**. To change the **All day** panel display mode, assign one of the following values to the [allDayPanelMode](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayPanelMode) property:

- *'all'*    
Displays all appointments that have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true** and the ones that have the length equal to or more than 24 hours. The Scheduler does not show these appointments on the view.

- *'allDay'* (default)   
Displays only appointments that have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true**. The Scheduler shows other appointments on the view.

- *'hidden'*    
Hides the **All day** panel. The Scheduler shows all appointments on the view.