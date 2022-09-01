This demo shows how to implement a [default validation group](/Documentation/Guide/UI_Components/Common/UI_Widgets/Data_Validation/#Validate_Several_Editor_Values/Group_the_Editors) - a group of editors on the page with enabled data validation. In this demo, the editors are collected in an HTML form.

To enable editor's data validation, you need to declare the [Validator](/Documentation/ApiReference/UI_Components/dxValidator/) component and implement the [validation rules](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/). You can attach several validation rules to one component. Each validation rule contains a rule type that must be one of the following:

- [required](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/)    
A validation rule that demands that a validated field has a value.

- [email](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/EmailRule/)    
A validation rule that demands that the validated field match the Email pattern.

- [async](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/)    
A custom validation rule used for server-side validation. Implement the [validationCallback](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/#validationCallback) function to validate the target value.

- [compare](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/)    
A validation rule that demands that a validated editor has a value that is equal to a specified expression. For this rule type, implement the [comparisonTarget](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CompareRule/#comparisonTarget) function to specify the value that component compares with a validated value.

- [pattern](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/PatternRule/)    
A validation rule that demands that the validated field matches a specified [pattern](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/PatternRule/#pattern). 

- [stringLength](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/)   
A validation rule that demands the target value length be within the range of specified [minimum](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/#min) and [maximum](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/StringLengthRule/#max). This property accepts only string values.

- [range](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/)  
A validation rule that demands the target value length be within the range of specified [minimum](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/#min) and [maximum](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RangeRule/#max). This property accepts only date-time or numeric values.  

- [numeric](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/NumericRule/)    
A validation rule that demands that the validated field has a numeric value.

- [custom](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/CustomRule/)    
A rule with custom validation logic. Implement the [validationCallback](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/#validationCallback) function to validate the target value.

No matter the type, all validation rules allow you to specify an error [message](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/RequiredRule/#message) for a component. If your application implements a validation group, you can use the [ValidationSummary](/Documentation/ApiReference/UI_Components/dxValidationSummary/) to display all validation errors in one place. In this demo, click the **Register** button to see a validation summary.

The **Register** button's [useSubmitBehavior](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#useSubmitBehavior) property is enabled. This setting tells the button to validate and submit the HTML form. In your application, you can also implement the button's [onClick](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick) event handler and use the [validate()](/Documentation/ApiReference/UI_Components/dxValidationGroup/Methods/#validate) or [validateGroup()](/Documentation/ApiReference/Common/Utils/validationEngine/#validateGroup) methods to validate a group of editors.