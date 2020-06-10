using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FormController : Controller {
        #region Overview
        public ActionResult Overview() {
            return View(SampleData.Companies.First());
        }

        [HttpGet]
        public object GetCompanies(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Companies, loadOptions);
        }
        #endregion

        #region Validation
        [HttpGet]
        public ActionResult Validation() {
            return View(new EditorsViewModel() {
                Name = "Peter"
            });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Validation(EditorsViewModel userInfo) {
            if(ModelState.IsValid) {
                return View("SuccessValidation");
            }

            return View(userInfo);
        }
        #endregion

        public ActionResult CustomizeItem() {
            return View(new FormViewModel {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Phone = "360-684-1334",
                Position = "CEO",
                BirthDate = DateTime.Parse("1964/03/16"),
                HireDate = DateTime.Parse("1995/01/15"),
                Notes = "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
                Address = "351 S Hill St., Los Angeles, CA",
                Email = "jheart@dx-email.com"
            });
        }

        public ActionResult GroupedFields() {
            return View(new FormViewModel {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Position = "CEO",
                OfficeNo = "901",
                BirthDate = new DateTime(1964, 3, 16),
                HireDate = new DateTime(1995, 1, 15),
                Address = "351 S Hill St.",
                City = "Los Angeles",
                State = "CA",
                Zipcode = "90013",
                Phone = "+1(213) 555-9392",
                Email = "jheart@dx-email.com",
                Skype = "jheart_DX_skype"
            });
        }
        public ActionResult ColumnsAdaptability() {
            return View(new FormViewModel {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                CompanyName = "Super Mart of the West",
                Position = "CEO",
                OfficeNo = "901",
                BirthDate = new DateTime(1964, 3, 16),
                HireDate = new DateTime(1995, 1, 15),
                Address = "351 S Hill St.",
                City = "Los Angeles",
                State = "CA",
                Zipcode = "90013",
                Phone = "+1(213) 555-9392",
                Email = "jheart@dx-email.com",
                Skype = "jheart_DX_skype"
            });
        }
        public ActionResult UpdateItemsDynamically() {
            return View(new DynamicFormViewModel {
                FirstName = "John",
                LastName = "Heart",
                Address = "351 S Hill St., Los Angeles, CA",
                City = "Atlanta",
                Phones = new List<string> { "8005552797", "8005953232" }
            });
        }
    }
}
