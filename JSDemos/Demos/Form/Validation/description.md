This demo shows how to validate the Form editors in simple items. To apply validation rules to an item, specify them in the [validationRules[]](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/) array. Specify [type](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/#type) and other properties for each rule. 

To submit a Form, add a [Button Item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/) and set its [useSubmitBehavior](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior) property to **true**. When users click the button, the Form validates all editors that belong to the same group. In this demo, all editors are wrapped into the `customerData` [validationGroup](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#validationGroup). The Form can be submitted to a server only if input validation is successful. Set the [showValidationSummary](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showValidationSummary) property to **true** to display all validation errors at the bottom of the Form. 

The **useSubmitBehavior** property requires that you wrap the dxForm in the HTML `<form>` element. You should also set the [preventDefault](/Documentation/ApiReference/Common/Object_Structures/dxEvent/Methods/#preventDefault) property to **true** to override the HTML form submit event. 

The following validation rules are shown in this demo:  
- [RequiredRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/) Demands that a validated editor has a value.

- [CompareRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/) Compares an editor value with a specified expression.

- [PatternRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/PatternRule/) Checks whether an editor value matches a specified pattern.

- [RangeRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/) Checks whether an editor value is in a specified range.

- [StringLengthRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/) Demands that an editor value length is in a specified range.

- [EmailRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/) Demands that an editor value matches the Email pattern.

- [AsyncRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/) Allows you to specify any conditions to be checked on the server. This rule is checked last after all other rules pass validation checks. In this demo, it checks whether user input is equal to the `test@dx-email.com` string.
