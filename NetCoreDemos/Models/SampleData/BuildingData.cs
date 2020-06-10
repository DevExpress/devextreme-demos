using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<object> BuildingData = new[] {
            new {
                type = "FeatureCollection",
                features = new[] {
                    new {
                        type = "Feature",
                        geometry = new {
                            type = "Polygon",
                            coordinates = new[] {
                                new[] {
                                    new[] { 10, -80 },
                                    new[] { -80, -80 },
                                    new[] { -80, 80 },
                                    new[] { 40, 80 },
                                    new[] { 40, -20 },
                                    new[] { 100, -20 },
                                    new[] { 100, -80 },
                                    new[] { 30, -80 },
                                    new[] { 30, -74 },
                                    new[] { 34, -74 },
                                    new[] { 34, -68 },
                                    new[] { 40, -68 },
                                    new[] { 40, -74 },
                                    new[] { 94, -74 },
                                    new[] { 94, -26 },
                                    new[] { 40, -26 },
                                    new[] { 40, -60 },
                                    new[] { 34, -60 },
                                    new[] { 34, 74 },
                                    new[] { -74, 74 },
                                    new[] { -74, 30 },
                                    new[] { 10, 30 },
                                    new[] { 10, 24 },
                                    new[] { -74, 24 },
                                    new[] { -74, -24 },
                                    new[] { 10, -24 },
                                    new[] { 10, -30 },
                                    new[] { -74, -30 },
                                    new[] { -74, -74 },
                                    new[] { 10, -74 },
                                }
                            }
                        }
                    }
                }
            }
        };
    }
}
