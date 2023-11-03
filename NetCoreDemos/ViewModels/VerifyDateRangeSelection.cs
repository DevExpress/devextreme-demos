using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class VerifyDateRangeSelection : ValidationAttribute, IClientValidatable {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext) {
            var startDate = ((DateTime[])value)[0];
            var endDate = ((DateTime[])value)[1];
            if(startDate == null && endDate == null) {
                return ValidationResult.Success;
            }
            if(startDate != null && endDate != null) {
                return ValidationResult.Success;
            }
            return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
        }

        IEnumerable<ModelClientValidationRule> IClientValidatable.GetClientValidationRules(ModelMetadata metadata, ControllerContext context) {
            var rule = new ModelClientValidationRule();
            rule.ErrorMessage = FormatErrorMessage(metadata.GetDisplayName());
            rule.ValidationParameters.Add(
                "validationcallback",
                $@"function ({{ value }}) {{
                    const [startDate, endDate] = value;

                    if (startDate === null && endDate === null) {{
                        return true;
                    }}

                    if (startDate !== null && endDate !== null) {{
                        return true;
                    }}

                    return false;
                }}");
            rule.ValidationType = "custom";
            yield return rule;
        }

        public override string FormatErrorMessage(string name) {
            return string.Format(ErrorMessageString, name);
        }
    }
}
