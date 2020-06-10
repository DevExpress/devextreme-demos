using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly object RoomData = new[] {
            new {
                type = "FeatureCollection",
                features = new[] {
                    new {
                        type = "Feature",
                        properties = new {
                            name = "Room 1",
                            square = 576
                        },
                        geometry = new {
                            type = "Polygon",
                            coordinates = new[] {
                                new[] {
                                    new[] { -74, -30 },
                                    new[] { 34, -30 },
                                    new[] { 34, -74 },
                                    new[] { -74, -74 }
                                }
                            }
                        }
                    },
                    new {
                        type = "Feature",
                        properties = new {
                            name = "Room 2",
                            square = 600
                        },
                        geometry = new {
                            type = "Polygon",
                            coordinates = new[] {
                                new[] {
                                    new[] { -74, 24 },
                                    new[] { 34, 24 },
                                    new[] { 34, -24 },
                                    new[] { -74, -24 }
                                }
                            }
                        }
                    },
                    new {
                        type = "Feature",
                        properties = new {
                            name = "Room 3",
                            square = 540
                        },
                        geometry = new {
                            type = "Polygon",
                            coordinates = new[] {
                                new[] {
                                    new[] { -74, 74 },
                                    new[] { 34, 74 },
                                    new[] { 34, 30 },
                                    new[] { -74, 30 }
                                }
                            }
                        }
                    },
                    new {
                        type = "Feature",
                        properties = new {
                            name = "Room 4",
                            square = 288
                        },
                        geometry = new {
                            type = "Polygon",
                            coordinates = new[] {
                                new[] {
                                    new[] { 40, -26 },
                                    new[] { 94, -26 },
                                    new[] { 94, -74 },
                                    new[] { 40, -74 }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
}
