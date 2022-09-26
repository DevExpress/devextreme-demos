When you add a Calendar to an application, you need to specify its [value](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#value) in one of the following formats: 

- Date objects

- The number of milliseconds since 00:00:00 on January 1, 1970

- Strings that match the following patterns: 
    - 'yyyy-MM-dd'
    - 'yyyy-MM-ddTHH:mm:ss'
    - 'yyyy-MM-ddTHH:mm:ssZ'
    - 'yyyy-MM-ddTHH:mm:ssx' 

This demo shows how to use the component's properties to customize its appearance and behavior. You can toggle the checkboxes on the right to change the Calendar configuration in real time.

## Disable Dates

To specify the range of available dates, use the [min](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#max) properties. In the demo, these properties limit the range to three days before and after the current date. Check the "Specified min value" and "Specified max value" checkboxes to display the range of available dates.

If you need to disable specific dates, use the [disabledDates](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#disabledDates) property. Toggle the "Disable weekend" checkbox to see how this setting affects the component's behavior. You can specify either an array of predefined dates or a function that determines whether a date is available.

## Specify First Day of Week and Week Numbers

To specify the first day of the week, set the [firstDayOfWeek](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#firstDayOfWeek) property to its index (0 - for Sunday, 1 - for Monday, and so on). You can also display a column of the week numbers. For this, enable the [showWeekNumbers](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#showWeekNumbers) property.

## Handle Value Change 

Use the [onValueChanged](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#onValueChanged) property to handle the [value](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#value) change. In the demo, the [DateBox](/Documentation/Guide/UI_Components/DateBox/Getting_Started_with_DateBox/) and the Calendar both use the **onValueChanged** property to pass values between each other. Try one of these components to change the date. See how it affects the other.

## Customize Cell Appearance

To customize cell appearance, you can use the [cellTemplate](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#cellTemplate) property. In this demo, when you toggle the "Use the Custom Cell Template" checkbox, all the weekends on the Calendar become blue, and all the holidays become red. You can implement a custom function that changes the class of the span element that contains cell text.

## Other Customizations

Set the [disabled](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#disabled) property to `true` to disable the Calendar.

To specify the initial Calendar view (month, year, decade, or century), use the [zoomLevel](/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#zoomLevel) property.