A recurring appointment repeats at a specified interval. You can create such an appointment in the UI or programmatically.

To create a recurring appointment programmatically, do the following:

1. Locate or create an appointment object in the [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource). 

2. Specify the [recurrenceRule](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule) property to configure the appointment frequency. Set this property according to the <a href="http://tools.ietf.org/html/rfc2445#section-4.3.10" target="_blank">iCalendar RFC 2445</a> specification. Note that an appointment series corresponds to a single object in the data source.

1. Optionally, use the [recurrenceException](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceException) property to specify the start date and time of appointments to exclude from the series.

To create a recurring appointment in the UI, users should do the following:

1. Create or open an appointment.

2. Toggle the *"Repeat"* switcher on the appointment details form.

3. Use the form's fields to set the recurrence rules.

The recurrent appointment's rectangle will have a circular arrow glyph in the top right corner.
