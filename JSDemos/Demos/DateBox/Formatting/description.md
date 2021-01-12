To customize the **DateBox** format, use the [displayFormat](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat) property. This demo illustrates the following use cases of this property:

- **Locale-dependent format**     
The DateBox formats its value according to the user's locale. This is the default behavior. Refer to the following help topic for more information: [Localize Dates, Numbers, and Currencies](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies)

- **Built-in predefined format**    
DevExtreme supports [predefined formats](/Documentation/ApiReference/Common/Object_Structures/format/#type). Set the **displayFormat** property to the respective format.    

- **LDML pattern**    
An LDML pattern consists of wildcard characters and characters displayed as is. Set the **displayFormat** property to a string that specifies an LDML pattern. Refer to the following help topic for information about supported format characters: [Custom Format String](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String)    

- **Format with literal characters**    
The **displayFormat** property can contain literal characters combined with **LDML** characters. Wrap the literal characters in quotation marks.

To get more information about value formatting, refer to the [Value Formatting](/Documentation/Guide/Common/Value_Formatting/) article.
