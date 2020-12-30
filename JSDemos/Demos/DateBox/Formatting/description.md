There are several ways to format the value of **DateBox**, including [Intl](/Documentation/Guide/Common/Localization/#Localize_Dates_Numbers_and_Currencies/Using_Intl). This demo illustrates the following formatting cases:
- **Locale-dependent format**     
Set [type](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#type) property of the **DateBox** to the relevant value.    

- **Built-in predefined format**    
In addition to defining the **type** property as specified above, the value of [displayFormat](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#displayFormat) property must be configured to correspond with the respective **type** property of [format](https://js.devexpress.com/Documentation/ApiReference/Common/Object_Structures/format/#type) object structure.    

- **LDML pattern**    
Pass a custom format string that specifies the format to **displayFormat** property using [LDML](/Documentation/Guide/Common/Value_Formatting/#Format_Widget_Values/Custom_Format_String) patterns.    

- **Format with literal characters**    
Define the **type** property. Specify the **displayFormat** using a string combined with an element of the Date object.