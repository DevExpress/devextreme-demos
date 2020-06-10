using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<City> GaugeCitiesData = new[] {
            new City {
                Name = "London",
                ID = 1,
                Data = new ClimateData {
                    Temperature = 10,
                    Humidity = 81,
                    Pressure = 1002.1
                }
            },
            new City {
                Name = "Berlin",
                ID = 2,
                Data = new ClimateData {
                    Temperature = 14,
                    Humidity = 58,
                    Pressure = 1008.5
                }
            },
            new City {
                Name = "New York",
                ID = 3,
                Data = new ClimateData {
                    Temperature = 3,
                    Humidity = 89,
                    Pressure = 1016.2
                }
            },
            new City {
                Name = "Moscow",
                ID = 4,
                Data = new ClimateData {
                    Temperature = 2,
                    Humidity = 51,
                    Pressure = 1016.5
                }
            },
            new City {
                Name = "Bangkok",
                ID = 5,
                Data = new ClimateData {
                    Temperature = 37,
                    Humidity = 39,
                    Pressure = 1007.0
                }
            }
        };
    }
}
