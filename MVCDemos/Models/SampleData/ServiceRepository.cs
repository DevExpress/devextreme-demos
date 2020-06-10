
using System.Collections.Generic;
using System.Web;
using System.Xml.Linq;
using System.Linq;
using System.Globalization;
using System;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public class ServiceRepository {
            public static readonly ServiceRepository Instance = new ServiceRepository();

            public readonly IEnumerable<TemperatureItem> TemperatureItems;

            private ServiceRepository() {
                CultureInfo ci = (CultureInfo)CultureInfo.CurrentCulture.Clone();
                ci.NumberFormat.CurrencyDecimalSeparator = ".";

                XDocument tempDoc = XDocument.Load(HttpContext.Current.Server.MapPath("~/Content/SampleData/TemperatureData.xml"));

                TemperatureItems = (from d in tempDoc.Root.Elements("dayItem")
                                    select new TemperatureItem {
                                        Date = DateTime.Parse(d.Element("date").Value, null, DateTimeStyles.RoundtripKind),
                                        MinTemp = float.Parse(d.Element("minTemp").Value, NumberStyles.Any, ci),
                                        MaxTemp = float.Parse(d.Element("maxTemp").Value, NumberStyles.Any, ci)
                                    }).ToArray();
            }
        }

    }
}
