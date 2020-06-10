using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class VerifyAgeAttribute : ValidationAttribute, IClientModelValidator {

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

        void IClientModelValidator.AddValidation(ClientModelValidationContext context) {
            context.Attributes.Add("data-val-custom-verifyage", FormatErrorMessage(context.ModelMetadata.GetDisplayName()));
            context.Attributes.Add(
                "data-val-custom-verifyage-validationcallback",
                $@"function(options) {{
                    var now = new Date();
                    return options.value && options.value <= now.setFullYear(now.getFullYear() - {Age});
                }}");
        }

        public override string FormatErrorMessage(string name) {
            return string.Format(ErrorMessageString, name, Age);
        }
    }
}
