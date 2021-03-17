This demo shows how to validate Form editors. To apply validation rules to an editor, declare them in the [validationRules[]](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/) array. Specify [type](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/#type) and other properties for each rule. 

To submit form data, do the following:

1. Wrap the Form component in the HTML `<form>` element.

1. Use the [Button Form Item](/Documentation/ApiReference/UI_Components/dxForm/Item_Types/ButtonItem/) to add a button to the form. This button will submit the form data.

1. Enable the button's [useSubmitBehavior](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior) property.

When users click the button, the Form validates editors that belong to the same [validationGroup](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#validationGroup). In this demo, all editors belong to the `customerData` group. Form data can be submitted to a server only if input validation is successful. Enable the [showValidationSummary](/Documentation/ApiReference/UI_Components/dxForm/Configuration/#showValidationSummary) property to display all validation errors at the bottom of the Form.


The following validation rules are shown in this demo:  
- [RequiredRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/)  
Demands that a validated editor has a value.

- [CompareRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/)    
Compares an editor value with a specified expression.

- [PatternRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/PatternRule/)    
Checks whether an editor value matches a specified pattern.

- [RangeRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/)    
Checks whether an editor value is in a specified range.

- [StringLengthRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/)  
Demands that an editor value length is in a specified range.

- [EmailRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/)    
Demands that an editor value matches the Email pattern.

- [AsyncRule](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/)    
Allows you to specify any conditions to be checked on the server. This check is performed last, after all other rules pass validation checks. In this demo, it checks whether user input is equal to the `test@dx-email.com` string.
