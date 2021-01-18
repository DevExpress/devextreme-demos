To change how a **DateBox** displays dates, use the [displayFormat](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat) property. This demo illustrates the following examples:

- **Locale-dependent format**     
The DateBox formats its value according to the user's locale. This is the default behavior. You don't need to define the **displayFormat** property. Refer to the following help topic for more information: [Localize Dates, Numbers, and Currencies](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies)

- **Built-in predefined formats**    
DevExtreme supports a number of [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). Those are simple strings or shortcuts that define commonly used date formats so that you don't need to spell out a complex expression. Review the linked document for the list of values you can assign to **displayFormat**.  This demo uses the "shortdate" format. 

- **LDML pattern**    
Use an LDML pattern to construct a custom date-time format string. This demo sets **displayFormat** property to "EEEE, d of MMM, yyyy HH:mm" - a combination of day of the week, day number, month, year, hour, and minute. You can see the formatted value in the editor. Refer to the following help topic for information about supported format characters: [Custom Format String](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)    

- **Format with literal characters**    
Specify the **displayFormat** property as a string that contains literal characters. This string can also contain LDML format characters. Wrap any characters that are not a part of the LDML pattern in quotation marks. Otherwise they may be interpreted as wildcards. In this example, if you remove quotation marks from the word "Year", the letter "a" will be interpreted as "AM/PM" placeholder.

Note that the **DateBox** supports input masks. Use them to ensure that the input value format is consistent with **displayFormat**. To enable this behavior, set the [useMaskBehavior](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#useMaskBehavior) value to *"true"*.

To get more information about value formatting, refer to the [Value Formatting](/Documentation/Guide/Common/Value_Formatting/) article.
