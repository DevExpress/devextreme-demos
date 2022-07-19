using System;
using System.Linq;
using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.TreeView;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewHierarchicalData {
        public static readonly Product SuperMartOfTheWest = new Product {
            Text = "Super Mart of the West",
            Expanded = true,
            Items = new[] {
                new Product {
                    Text = "Video Players",
                    Items = new[] {
                        new Product {
                            Text = "HD Video Player",
                            Price = 220,
                            Image = "../../images/ProductsLarge/1.png"
                        },
                        new Product {
                            Text = "SuperHD Video Player",
                            Price = 270,
                            Image = "../../images/ProductsLarge/2.png"
                        }
                    }
                },
                new Product {
                    Text = "Televisions",
                    Expanded = true,
                    Items = new[] {
                        new Product {
                            Text = "SuperLCD 42",
                            Price = 1200,
                            Image = "../../images/ProductsLarge/7.png"
                        },
                        new Product {
                            Text = "SuperLED 42",
                            Price = 1450,
                            Image = "../../images/ProductsLarge/5.png"
                        },
                        new Product {
                            Text = "SuperLED 50",
                            Price = 1600,
                            Image = "../../images/ProductsLarge/4.png"
                        },
                        new Product {
                            Text = "SuperLCD 55",
                            Price = 1350,
                            Image = "../../images/ProductsLarge/6.png"
                        },
                        new Product {
                            Text = "SuperLCD 70",
                            Price = 4000,
                            Image = "../../images/ProductsLarge/9.png"
                        }
                    }
                },
                new Product {
                    Text = "Monitors",
                    Expanded = true,
                    Items = new[] {
                        new Product {
                            Text = "19\"",
                            Expanded = true,
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 19",
                                    Price = 160,
                                    Image = "../../images/ProductsLarge/10.png"
                                }
                            }
                        },
                        new Product {
                            Text = "21\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 21",
                                    Price = 170,
                                    Image = "../../images/ProductsLarge/12.png"
                                },
                                new Product {
                                    Text = "DesktopLED 21",
                                    Price = 175,
                                    Image = "../../images/ProductsLarge/13.png"
                                }
                            }
                        }
                    }
                },
                new Product {
                    Text = "Projectors",
                    Items = new[] {
                        new Product {
                            Text = "Projector Plus",
                            Price = 550,
                            Image = "../../images/ProductsLarge/14.png"
                        },
                        new Product {
                            Text = "Projector PlusHD",
                            Price = 750,
                            Image = "../../images/ProductsLarge/15.png"
                        }
                    }
                }
            }
        };

        public static readonly Product Braeburn = new Product {
            Text = "Braeburn",
            Items = new[] {
                new Product {
                    Text = "Video Players",
                    Items = new[] {
                        new Product {
                            Text = "HD Video Player",
                            Price = 240,
                            Image = "../../images/ProductsLarge/1.png"
                        },
                        new Product {
                            Text = "SuperHD Video Player",
                            Price = 300,
                            Image = "../../images/ProductsLarge/2.png"
                        }
                    }
                },
                new Product {
                    Text = "Televisions",
                    Items = new[] {
                        new Product {
                            Text = "SuperPlasma 50",
                            Price = 1800,
                            Image = "../../images/ProductsLarge/3.png"
                        },
                        new Product {
                            Text = "SuperPlasma 65",
                            Price = 3500,
                            Image = "../../images/ProductsLarge/8.png"
                        }
                    }
                },
                new Product {
                    Text = "Monitors",
                    Items = new[] {
                        new Product {
                            Text = "19\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 19",
                                    Price = 170,
                                    Image = "../../images/ProductsLarge/10.png"
                                }
                            }
                        },
                        new Product {
                            Text = "21\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 21",
                                    Price = 180,
                                    Image = "../../images/ProductsLarge/12.png"
                                },
                                new Product {
                                    Text = "DesktopLED 21",
                                    Price = 190,
                                    Image = "../../images/ProductsLarge/13.png"
                                }
                            }
                        }
                    }
                }
            }
        };

        public static readonly Product EMart = new Product {
            Text = "E-Mart",
            Items = new[] {
                new Product {
                    Text = "Video Players",
                    Items = new[] {
                        new Product {
                            Text = "HD Video Player",
                            Price = 220,
                            Image = "../../images/ProductsLarge/1.png"
                        },
                        new Product {
                            Text = "SuperHD Video Player",
                            Price = 275,
                            Image = "../../images/ProductsLarge/2.png"
                        }
                    }
                },
                new Product {
                    Text = "Monitors",
                    Items = new[] {
                        new Product {
                            Text = "19\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 19",
                                    Price = 165,
                                    Image = "../../images/ProductsLarge/10.png"
                                }
                            }
                        },
                        new Product {
                            Text = "21\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 21",
                                    Price = 175,
                                    Image = "../../images/ProductsLarge/12.png"
                                }
                            }
                        }
                    }
                }
            }
        };

        public static readonly Product Walters = new Product {
            Text = "Walters",
            Items = new[] {
                new Product {
                    Text = "Video Players",
                    Items = new[] {
                        new Product {
                            Text = "HD Video Player",
                            Price = 210,
                            Image = "../../images/ProductsLarge/1.png"
                        },
                        new Product {
                            Text = "SuperHD Video Player",
                            Price = 250,
                            Image = "../../images/ProductsLarge/2.png"
                        }
                    }
                },
                new Product {
                    Text = "Televisions",
                    Items = new[] {
                        new Product {
                            Text = "SuperLCD 42",
                            Price = 1100,
                            Image = "../../images/ProductsLarge/7.png"
                        },
                        new Product {
                            Text = "SuperLED 42",
                            Price = 1400,
                            Image = "../../images/ProductsLarge/5.png"
                        },
                        new Product {
                            Text = "SuperLED 50",
                            Price = 1500,
                            Image = "../../images/ProductsLarge/4.png"
                        },
                        new Product {
                            Text = "SuperLCD 55",
                            Price = 1300,
                            Image = "../../images/ProductsLarge/6.png"
                        },
                        new Product {
                            Text = "SuperLCD 70",
                            Price = 4000,
                            Image = "../../images/ProductsLarge/9.png"
                        },
                        new Product {
                            Text = "SuperPlasma 50",
                            Price = 1700,
                            Image = "../../images/ProductsLarge/3.png"
                        }
                    }
                },
                new Product {
                    Text = "Monitors",
                    Items = new[] {
                        new Product {
                            Text = "19\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 19",
                                    Price = 160,
                                    Image = "../../images/ProductsLarge/10.png"
                                }
                            }
                        },
                        new Product {
                            Text = "21\"",
                            Items = new[] {
                                new Product {
                                    Text = "DesktopLCD 21",
                                    Price = 170,
                                    Image = "../../images/ProductsLarge/12.png"
                                },
                                new Product {
                                    Text = "DesktopLED 21",
                                    Price = 180,
                                    Image = "../../images/ProductsLarge/13.png"
                                }
                            }
                        }
                    }
                },
                new Product {
                    Text = "Projectors",
                    Items = new[] {
                        new Product {
                            Text = "Projector Plus",
                            Price = 550,
                            Image = "../../images/ProductsLarge/14.png"
                        },
                        new Product {
                            Text = "Projector PlusHD",
                            Price = 750,
                            Image = "../../images/ProductsLarge/15.png"
                        }
                    }
                }
            }
        };

        public static readonly IEnumerable<Product> Products = new[] {
            new Product {
                Text = "Stores",
                Expanded = true,
                Items = new[] {
                    SuperMartOfTheWest,
                    Braeburn,
                    EMart,
                    Walters
                }
            }
        };
    }
}
