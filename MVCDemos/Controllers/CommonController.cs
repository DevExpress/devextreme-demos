using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.MVC.Demos.Models;
using DevExtreme.MVC.Demos.Models.SampleData;
using DevExtreme.MVC.Demos.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.DataGrid;

namespace DevExtreme.MVC.Demos.Controllers {
    public class CommonController : Controller {
        #region EditorsRightToLeftSupport
        public ActionResult EditorsRightToLeftSupport() {

            var directionCookie = Request.Cookies["direction"];
            var rtl = directionCookie != null && directionCookie.Value == "rtl";

            return View(new RtlViewModel {
                LanguageItems = new[] {
                    "Arabic: Right-to-Left direction",
                    "English: Left-to-Right direction"
                },
                Text = rtl ? "نص" : "text",
                DisplayExpr = rtl ? "NameAr" : "NameEn",
                RtlEnabled = rtl
            });
        }

        [HttpGet]
        public ActionResult GetEuropeanUnionData(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.EuropeanUnion, loadOptions)), "application/json");
        }

        #endregion

        #region EditorsOverview

        public ActionResult EditorsOverview() {
            return View();
        }

        #endregion

        #region FormsAndMultiPurposeOverview

        public ActionResult FormsAndMultiPurposeOverview() {
            return View(new FormViewModel {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Position = "CEO",
                BirthDate = DateTime.Parse("1964 /03/16"),
                HireDate = DateTime.Parse("1995 /01/15"),
                Notes = "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
                Address = "351 S Hill St.",
                City = "Los Angeles",
                State = "CA",
                Zipcode = "90013",
                Phone = "555-684-1335",
                Email = "jheart@dx-email.com",
                Skype = "jheart_DX_skype",
            });
        }

        #endregion

        #region NavigationRightToLeftSupport
        public ActionResult NavigationRightToLeftSupport() {

            var directionCookie = Request.Cookies["direction"];
            var rtl = directionCookie != null && directionCookie.Value == "rtl";

            return View(new RtlViewModel {
                LanguageItems = new[] {
                    "Arabic: Right-to-Left direction",
                    "English: Left-to-Right direction"
                },
                DisplayExpr = rtl ? "NameAr" : "NameEn",
                RtlEnabled = rtl
            });
        }

        [HttpGet]
        public ActionResult GetContinentsData(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.Continents, loadOptions)), "application/json");
        }

        [HttpGet]
        public ActionResult GetEuropeanCountriesData(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.EuropeanCountries.Take(4), loadOptions)), "application/json");
        }

        #endregion

        #region NavigationOverview
        public ActionResult NavigationOverview() {
            return View(SampleData.ContinentsInfo.FirstOrDefault().Items.First());
        }

        public ActionResult GetContinentsInfo(DataSourceLoadOptions loadOptions) {
            return Content(JsonConvert.SerializeObject(DataSourceLoader.Load(SampleData.ContinentsInfo, loadOptions)), "application/json");
        }

        #endregion

        #region ActionAndListsOverview
        public ActionResult ActionAndListsOverview() {
            return View();
        }
        #endregion

        public ActionResult DialogsAndNotificationsOverview() {
            var i = 0;

            return View(SampleData.GalleryItems.Select(a => new GalleryItem {
                ID = a.ID,
                Address = a.Address,
                City = a.City,
                State = a.State,
                Price = a.Price,
                Features = a.Features,
                Image = a.Image,
                Agent = SampleData.DataGridEmployees.Skip(i++ % 4).FirstOrDefault()

            }));
        }

        #region StylingMode
        public ActionResult Stylingmode() {
            return View();
        }
        #endregion

        #region CustomTextEditorButtons
        public ActionResult CustomTextEditorButtons() {
            return View();
        }
        #endregion

    }
}
