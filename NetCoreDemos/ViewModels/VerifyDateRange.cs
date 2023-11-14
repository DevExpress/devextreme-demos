using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web.Mvc;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class VerifyDateRange : ValidationAttribute, IClientModelValidator {

        public VerifyDateRange(int daysRange) {
            DaysRange = daysRange;
        }

        public int DaysRange { get; private set; }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext) {
            var startDate = ((DateTime?[])value)[0];
            var endDate = ((DateTime?[])value)[1];
            if(startDate == null || endDate == null) {
                return ValidationResult.Success;
            }
            if(((TimeSpan)(endDate - startDate)).TotalDays < DaysRange) {
                return ValidationResult.Success;
            }
            return new ValidationResult(FormatErrorMessage(validationContext.DisplayName));
        }

        void IClientModelValidator.AddValidation(ClientModelValidationContext context) {
            context.Attributes.Add("data-val-custom-verifydatarange", FormatErrorMessage(context.ModelMetadata.GetDisplayName()));
            context.Attributes.Add(
                "data-val-custom-verifydatarange-validationcallback",
                $@"function ({{ value }}) {{
                    const [startDate, endDate] = value;

                    if (startDate === null || endDate === null) {{
                        return true;
                    }}

                    const millisecondsPerDay = 24 * 60 * 60 * 1000;
                    const daysDifference = Math.abs((endDate - startDate) / millisecondsPerDay);

                    return daysDifference < {DaysRange};
                }}");
            rule.ValidationType = "custom";
            yield return rule;
        }

        public override string FormatErrorMessage(string name) {
            return string.Format(ErrorMessageString, name, DaysRange);
        }
    }
}
