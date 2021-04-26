A recurring appointment repeats at a specified interval. You can create such an appointment in the UI or programmatically.

To create a recurring appointment programmatically, do the following:

1. Locate or create only a single appointment object in the [dataSource](/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource). 

2. Specify the [recurrenceRule](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceRule) where you should generate a recurrent series according to the iCalendar RFC 2445 specification.

3. Optionally, use the [recurrenceException](/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#recurrenceException) property to specify the start date and time of appointments that should be excluded from the series.

To create a recurring appointment in the UI, users should do the following:

1. Create or open an appointment.

2. Toggle the *"Repeat"* switcher on the appointment details form.

3. Set the recurrence rules in the newly opened fields.

The recurrent appointment's rectangle will have a circular arrow glyph in the top right corner.
