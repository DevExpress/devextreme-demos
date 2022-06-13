The **All day** Scheduler panel displays appointments that last over 24 hours or have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true** (don't have specific start/end times). To change the **All day** panel display mode, assign one of the following values to the [allDayPanelMode](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayPanelMode) property:

- *'all'*    
Displays all appointments that have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true** and the ones that last 24 hours or longer. The Scheduler does not display these appointments in the view.

- *'allDay'* (default)   
Displays only appointments that have the [allDay](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay) property set to **true**. The Scheduler shows other appointments on the view.

- *'hidden'*    
Hides the **All day** panel. The Scheduler shows all appointments on the view.