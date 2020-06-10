using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<CoordLines> GetCoordLinesData() {
            var features = new List<object>();

            //add meridians
            for(int longitude = -180; longitude <= 180; longitude += 30) {
                var lineCoords = new List<object>();
                for(var latitude = -90; latitude <= 90; latitude += 5) {
                    lineCoords.Add(new[] {
                        longitude,
                        latitude
                    });
                }

                features.Add(new {
                    geometry = new {
                        type = "LineString",
                        coordinates = lineCoords
                    }
                });
            }

            //add parallels
            for(int latitude = -90; latitude <= 90; latitude += 30) {
                features.Add(new {
                    geometry = new {
                        type = "LineString",
                        coordinates = new[] {
                            new[] { -180, latitude },
                            new[] { 180, latitude }
                        }
                    }
                });
            }

            return new[] {
                new CoordLines() {
                    type = "FeatureCollection",
                    features = features
                }
            };
        }
    }
}
