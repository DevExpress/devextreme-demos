using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class MenuData {
        public static readonly IEnumerable<MenuItem> Products = new[] {
            new MenuItem {
                text = "Video Players",
                items = new[] {
                    new MenuItem {
                        text = "HD Video Player",
                        price = 220,
                        icon = "../../images/ProductsLarge/1.png"
                    },
                    new MenuItem {
                        text = "SuperHD Video Player",
                        price = 270,
                        icon = "../../images/ProductsLarge/2.png"
                    }
                }
            },
            new MenuItem {
                text = "Televisions",
                items = new[] {
                    new MenuItem {
                        text = "SuperLCD 42",
                        price = 1200,
                        icon = "../../images/ProductsLarge/7.png"
                    },
                    new MenuItem {
                        text = "SuperLED 42",
                        price = 1450,
                        icon = "../../images/ProductsLarge/5.png"
                    },
                    new MenuItem {
                        text = "SuperLED 50",
                        price = 1600,
                        icon = "../../images/ProductsLarge/4.png"
                    },
                    new MenuItem {
                        text = "SuperLCD 55 (Not available)",
                        price = 1350,
                        icon = "../../images/ProductsLarge/6.png",
                        disabled = true
                    },
                    new MenuItem {
                        text = "SuperLCD 70",
                        price = 4000,
                        icon = "../../images/ProductsLarge/9.png"
                    }
                }
            },
            new MenuItem {
                text = "Monitors",
                items = new[] {
                    new MenuItem {
                        text = "19\"",
                        items = new[] {
                            new MenuItem {
                                text = "DesktopLCD 19",
                                price = 160,
                                icon = "../../images/ProductsLarge/10.png"
                            }
                        }
                    },
                    new MenuItem {
                        text = "21\"",
                        items = new[] {
                            new MenuItem {
                                text = "DesktopLCD 21",
                                price = 170,
                                icon = "../../images/ProductsLarge/12.png"
                            },
                            new MenuItem {
                                text = "DesktopLED 21",
                                price = 175,
                                icon = "../../images/ProductsLarge/13.png"
                            }
                        }
                    }
                }
            },
            new MenuItem {
                text = "Projectors",
                items = new[] {
                    new MenuItem {
                        text = "Projector Plus",
                        price = 550,
                        icon = "../../images/ProductsLarge/14.png"
                    },
                    new MenuItem {
                        text = "Projector PlusHD",
                        price = 750,
                        icon = "../../images/ProductsLarge/15.png"
                    }
                }
            }
        };
    }
}
