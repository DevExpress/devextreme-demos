This demo shows how to validate the Form editors in simple items. To apply validation rules to an item, specify them in the [validationRules[]](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/) array. Specify [type](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/#type) and other properties for each rule. 

To submit a Form, add a [Button Item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/) and set its [useSubmitBehavior](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior) property to **true**. When users click the button, the Form validates all editors that belong to the same group. In this demo, all editors are wrapped into the `customerData` [validationGroup](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#validationGroup). The Form can be submitted to a server only if input validation is successful. Set the [showValidationSummary](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showValidationSummary) property to **true** to display all validation errors at the bottom of the Form. 

The **useSubmitBehavior** property requires that you wrap the dxForm in the HTML <form> element. You should also set the [preventDefault](/Documentation/ApiReference/Common/Object_Structures/dxEvent/Methods/#preventDefault) property to **true** to override the HTML form submit event. 

The following validation rules are shown in this demo:  
- [RequiredRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/)
- [CompareRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/)
- [PatternRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/PatternRule/)
- [RangeRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/)
- [StringLengthRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/)
- [EmailRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/)
- [AsyncRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/)

Note that **AsyncRule** checks whether user input is equal to the `test@dx-email.com` string. This rule is asynchronous and is checked last.