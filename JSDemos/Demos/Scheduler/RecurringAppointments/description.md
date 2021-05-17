A recurring appointment repeats at a specified interval. In the view, recurring appointments are indicated by a circular arrow glyph.

To create a recurring appointment, do the following:

1. Locate or create an appointment object in the [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource). 

2. Specify the [recurrenceRule](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule) property to configure the appointment frequency. Set this property according to the <a href="http://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification. A single data object with **recurrenceRule** creates an appointment series.

1. Optionally, use the [recurrenceException](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceException) property to specify the start date and time of appointments to exclude from the series.

If your appointment data objects contain different fields that perform the functions of **recurrenceRule** and **recurrenceException**, specify their names in the Scheduler's [recurrenceRuleExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceRuleExpr) and [recurrenceExceptionExpr](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#recurrenceExceptionExpr) properties.

Users also can create recurrent appointments. The appointment details form contains a Repeat switcher. When it is on, the form displays an additional set of fields that allow users to specify recurrence rules. Double-click an appointment and select Edit Series to view the appointment details form with the recurrence fields.

The recurrent appointment's rectangle will have a circular arrow glyph in the top right corner.
