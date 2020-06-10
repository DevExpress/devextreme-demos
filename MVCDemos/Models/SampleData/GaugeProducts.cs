using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<GaugeProduct> GaugeProducts = new[] {
            new GaugeProduct {
                Name = "Hummers",
                Count = 41,
                Active = true
            },
            new GaugeProduct {
                Name = "Shovers",
                Count = 32,
                Active = true
            },
            new GaugeProduct {
                Name = "Ladders",
                Count = 13,
                Active = true
            },
            new GaugeProduct {
                Name = "Watering cans",
                Count = 48,
                Active = true
            },
            new GaugeProduct {
                Name = "Screwdrivers",
                Count = 24,
                Active = true
            },
            new GaugeProduct {
                Name = "Nail pullers",
                Count = 8,
                Active = true
            },
            new GaugeProduct {
                Name = "Drills",
                Count = 19,
                Active = true
            }
        };
    }
}
