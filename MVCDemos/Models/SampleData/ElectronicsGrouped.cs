using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<ElectronicsCategory> ElectronicsGrouped = new[] {
            new ElectronicsCategory {
                Name = "Video Players",
                Products = new[] {
                    new ElectronicsGroupedItem {
                        ID = 1,
                        Name = "HD Video Player",
                        Price = 330,
                        CurrentInventory = 225,
                        Backorder = 0,
                        Manufacturing = 10,
                        ImageSrc = "../../Content/images/products/1-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    },
                    new ElectronicsGroupedItem  {
                        ID = 2,
                        Name = "SuperHD Player",
                        Price = 400,
                        CurrentInventory = 150,
                        Backorder = 0,
                        Manufacturing = 25,
                        ImageSrc = "../../Content/images/products/2-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    }
                }
            },
            new ElectronicsCategory {
                Name = "Televisions",
                Products = new[] {
                    new ElectronicsGroupedItem {
                        ID = 3,
                        Name = "SuperPlasma 50",
                        Price = 2400,
                        CurrentInventory = 0,
                        Backorder = 0,
                        Manufacturing = 0,
                        ImageSrc = "../../Content/images/products/3-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 4,
                        Name = "SuperLED 50",
                        Price = 1600,
                        CurrentInventory = 77,
                        Backorder = 0,
                        Manufacturing = 55,
                        ImageSrc = "../../Content/images/products/4-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 5,
                        Name = "SuperLED 42",
                        Price = 1450,
                        CurrentInventory = 445,
                        Backorder = 0,
                        Manufacturing = 0,
                        ImageSrc = "../../Content/images/products/5-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 6,
                        Name = "SuperLED 55",
                        Price = 1350,
                        CurrentInventory = 345,
                        Backorder = 0,
                        Manufacturing = 5,
                        ImageSrc = "../../Content/images/products/6-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 7,
                        Name = "SuperLCD 42",
                        Price = 1200,
                        CurrentInventory = 210,
                        Backorder = 0,
                        Manufacturing = 20,
                        ImageSrc = "../../Content/images/products/7-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 8,
                        Name = "SuperPlasma 65",
                        Price = 3500,
                        CurrentInventory = 0,
                        Backorder = 0,
                        Manufacturing = 0,
                        ImageSrc = "../../Content/images/products/8-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 9,
                        Name = "SuperLCD 70",
                        Price = 4000,
                        CurrentInventory = 95,
                        Backorder = 0,
                        Manufacturing = 5,
                        ImageSrc = "../../Content/images/products/9-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    }
                }
            },
            new ElectronicsCategory {
                Name = "Monitors",
                Products = new[] {
                    new ElectronicsGroupedItem {
                        ID = 10,
                        Name = "DesktopLED 21",
                        Price = 175,
                        CurrentInventory = 0,
                        Backorder = 425,
                        Manufacturing = 75,
                        ImageSrc = "../../Content/images/products/10-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 11,
                        Name = "DesktopLED 19",
                        Price = 165,
                        CurrentInventory = 425,
                        Backorder = 0,
                        Manufacturing = 110,
                        ImageSrc = "../../Content/images/products/11-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 12,
                        Name = "DesktopLCD 21",
                        Price = 170,
                        CurrentInventory = 210,
                        Backorder = 0,
                        Manufacturing = 60,
                        ImageSrc = "../../Content/images/products/12-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 13,
                        Name = "DesktopLCD 19",
                        Price = 160,
                        CurrentInventory = 150,
                        Backorder = 0,
                        Manufacturing = 210,
                        ImageSrc = "../../Content/images/products/13-small.png",
                        IconSrc = "../../Content/images/icons/tv.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 14,
                        Name = "Projector Plus",
                        Price = 550,
                        CurrentInventory = 0,
                        Backorder = 55,
                        Manufacturing = 10,
                        ImageSrc = "../../Content/images/products/14-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    }
                }
            },
            new ElectronicsCategory {
                Name = "Projectors",
                Products = new[] {
                    new ElectronicsGroupedItem {
                        ID = 15,
                        Name = "Projector PlusHD",
                        Price = 750,
                        CurrentInventory = 110,
                        Backorder = 0,
                        Manufacturing = 90,
                        ImageSrc = "../../Content/images/products/15-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 16,
                        Name = "Projector PlusHT",
                        Price = 1050,
                        CurrentInventory = 0,
                        Backorder = 75,
                        Manufacturing = 57,
                        ImageSrc = "../../Content/images/products/16-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    }
                }
            },
            new ElectronicsCategory {
                Name = "Automation",
                Products = new[] {
                    new ElectronicsGroupedItem {
                        ID = 17,
                        Name = "ExcelRemote IR",
                        Price = 150,
                        CurrentInventory = 650,
                        Backorder = 0,
                        Manufacturing = 190,
                        ImageSrc = "../../Content/images/products/17-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 18,
                        Name = "ExcelRemote BT",
                        Price = 180,
                        CurrentInventory = 310,
                        Backorder = 0,
                        Manufacturing = 0,
                        ImageSrc = "../../Content/images/products/18-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    },
                    new ElectronicsGroupedItem {
                        ID = 19,
                        Name = "ExcelRemote IP",
                        Price = 200,
                        CurrentInventory = 0,
                        Backorder = 325,
                        Manufacturing = 225,
                        ImageSrc = "../../Content/images/products/19-small.png",
                        IconSrc = "../../Content/images/icons/video-player.svg"
                    }
                }
            }
        };
    }
}
