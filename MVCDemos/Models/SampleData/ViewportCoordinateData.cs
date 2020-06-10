using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<ViewportCoordinate> ViewportCoordinateData = new[] {
            new ViewportCoordinate() {
                Continent = "all",
                Coordinates = "null"
            },
            new ViewportCoordinate() {
                Continent = "NorthAmerica",
                Coordinates = new[] { -180, 84.52, -22.11, -1.57 }
            },
            new ViewportCoordinate() {
                Continent = "SouthAmerica",
                Coordinates = new[] { -112.47, 14.26, -27.52, -57.44 }
            },
            new ViewportCoordinate() {
                Continent = "Africa",
                Coordinates = new[] { -29.34, 39.09, 55.60, -39.00 }
            },
            new ViewportCoordinate() {
                Continent = "Europe",
                Coordinates = new[] { -2.35, 70.91, 61.35, 35.84 }
            },
            new ViewportCoordinate() {
                Continent = "Asia",
                Coordinates = new[] { 27.62, 83.11, 180, -19.36 }
            },
            new ViewportCoordinate() {
                Continent = "Australia",
                Coordinates = new[] { 104.87, -6.61, 149.98, -45.87 }
            }
        };
    }
}
