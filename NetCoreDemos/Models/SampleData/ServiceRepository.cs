using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static partial class SampleData {
        public static string RootPath;

        static readonly object _temperatureItemsLock = new object();
        static IEnumerable<TemperatureItem> _temperatureItems;

        public static IEnumerable<TemperatureItem> GetTemperatureRepository() {
            lock(_temperatureItemsLock) {
                if(_temperatureItems == null) {
                    var xml = XDocument.Load(Path.Combine(RootPath, "SampleData/TemperatureData.xml"));

                    _temperatureItems = xml.Root.Elements("dayItem")
                        .Select(d => new TemperatureItem {
                            Date = DateTime.Parse(d.Element("date").Value, null, DateTimeStyles.RoundtripKind),
                            MinTemp = double.Parse(d.Element("minTemp").Value, CultureInfo.InvariantCulture),
                            MaxTemp = double.Parse(d.Element("maxTemp").Value, CultureInfo.InvariantCulture)
                        })
                        .ToArray();

                }
                return _temperatureItems;
            }
        }

    }
}
