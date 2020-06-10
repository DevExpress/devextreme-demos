using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.ViewModels {
    public class VerifyAgeAttribute : ValidationAttribute, IClientValidatable {

        public VerifyAgeAttribute(int age) {
            Age = age;
        }

        public int Age { get; private set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext) {
            if((DateTime?)value <= DateTime.Now.AddYears(-Age)) {
                return ValidationResult.Success;
            }
            return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
        }

        IEnumerable<ModelClientValidationRule> IClientValidatable.GetClientValidationRules(ModelMetadata metadata, ControllerContext context) {
            var rule = new ModelClientValidationRule();
            rule.ErrorMessage = FormatErrorMessage(metadata.GetDisplayName());
            rule.ValidationParameters.Add(
                "validationcallback",
                $@"function(options) {{
                    var now = new Date();
                    return options.value && options.value <= now.setFullYear(now.getFullYear() - {Age});
                }}");
            rule.ValidationType = "custom";
            yield return rule;
        }

        public override string FormatErrorMessage(string name) {
            return string.Format(ErrorMessageString, name, Age);
        }
    }
}
