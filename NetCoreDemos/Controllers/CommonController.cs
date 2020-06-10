using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevExtreme.AspNet.Mvc;
using Newtonsoft.Json;
using DevExtreme.AspNet.Data;
using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using DevExtreme.NETCore.Demos.ViewModels;
using DevExtreme.NETCore.Demos.Models.DataGrid;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DevExtreme.NETCore.Demos.Controllers {
    public class CommonController : Controller {

        #region EditorsRightToLeftSupport
        public ActionResult EditorsRightToLeftSupport() {

            var rtl = Request.Cookies.ContainsKey("direction") && Request.Cookies["direction"] == "rtl";

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
        public object GetEuropeanUnionData(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.EuropeanUnion, loadOptions);
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

            var rtl = Request.Cookies.ContainsKey("direction") && Request.Cookies["direction"] == "rtl";

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
        public object GetContinentsData(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Continents, loadOptions);
        }

        [HttpGet]
        public object GetEuropeanCountriesData(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.EuropeanCountries.Take(4), loadOptions);
        }

        #endregion

        #region NavigationOverview
        public ActionResult NavigationOverview() {
            return View(SampleData.ContinentsInfo.FirstOrDefault().Items.First());
        }

        public object GetContinentsInfo(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.ContinentsInfo, loadOptions);
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
        public ActionResult StylingMode() {
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
