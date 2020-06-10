using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<GeoInfo> Continents = new[] {
            new GeoInfo {
                ID = "1",
                NameEn = "Africa",
                NameAr = "أفريقيا",
                Items = new[] {
                    new GeoInfo {
                        ID = "1_2",
                        NameEn = "Ethiopia",
                        NameAr = "أثيوبيا",
                        Items = new[] {
                            new GeoInfo {
                                ID = "1_2_1",
                                NameEn = "Addis Ababa",
                                NameAr = "أديس أبابا"
                            },
                            new GeoInfo {
                                ID = "1_2_2",
                                NameEn = "Dire Dawa",
                                NameAr = "دير داوا"
                            }
                        }
                    },
                    new GeoInfo {
                        ID = "1_1",
                        NameEn = "Nigeria",
                        NameAr = "نيجيريا",
                        Items = new[] {
                            new GeoInfo {
                                ID = "1_1_1",
                                NameEn = "Lagos",
                                NameAr = "لاغوس"
                            },
                            new GeoInfo {
                                ID = "1_1_2",
                                NameEn = "Kano",
                                NameAr = "كانو"
                            }
                        }
                    }
                }

            },
            new GeoInfo {
                ID = "2",
                NameEn = "Asia",
                NameAr = "آسيا",
                Items = new[] {
                    new GeoInfo {
                        ID = "2_1",
                        NameEn = "China",
                        NameAr = "الصين",
                        Items = new[] {
                            new GeoInfo {
                                ID = "2_1_1",
                                NameEn = "Beijing",
                                NameAr = "بكين"
                            },
                            new GeoInfo {
                                ID = "2_1_2",
                                NameEn = "Shanghai",
                                NameAr = "شنغهاي"
                            }
                        }
                    },
                    new GeoInfo {
                        ID = "2_2",
                        NameEn = "India",
                        NameAr = "الهند",
                        Items = new[] {
                            new GeoInfo {
                                ID = "2_2_1",
                                NameEn = "Indianapolis",
                                NameAr = "انديانابوليس"
                            },
                            new GeoInfo {
                                ID = "2_2_2",
                                NameEn = "New Delhi",
                                NameAr = "نيودلهي"
                            }
                        }
                    }
                }
            },
            new GeoInfo {
                ID = "3",
                NameEn = "Australia",
                NameAr = "أستراليا",
                Items = new[] {
                    new GeoInfo {
                        ID = "3_1",
                        NameEn = "Australia",
                        NameAr = "أستراليا",
                        Items = new[] {
                            new GeoInfo {
                                ID = "3_1_1",
                                NameEn = "Canberra",
                                NameAr = "كانبيرا"
                            },
                            new GeoInfo {
                                ID = "3_1_2",
                                NameEn = "Melbourne",
                                NameAr = "ملبورن"
                            },
                            new GeoInfo {
                                ID = "3_1_3",
                                NameEn = "Sydney",
                                NameAr = "سيدني"
                            }
                        }
                    }
                }

            },
            new GeoInfo {
                ID = "4",
                NameEn = "Europe",
                NameAr = "أوروبا",
                Items = new[] {
                    new GeoInfo {
                        ID = "4_1",
                        NameEn = "Germany",
                        NameAr = "ألمانيا",
                        Items = new[] {
                            new GeoInfo {
                                ID = "4_1_1",
                                NameEn = "Berlin",
                                NameAr = "البرلينية"
                            },
                            new GeoInfo {
                                ID = "4_1_2",
                                NameEn = "Hamburg",
                                NameAr = "هامبورغ"
                            }
                        }
                    },
                    new GeoInfo {
                        ID = "4_2",
                        NameEn = "Russia",
                        NameAr = "روسيا",
                        Items = new[] {
                            new GeoInfo {
                                ID = "4_2_1",
                                NameEn = "Moscow",
                                NameAr = "موسكو"
                            },
                            new GeoInfo {
                                ID = "4_2_2",
                                NameEn = "Saint Petersburg",
                                NameAr = "سانت بطرسبرغ"
                            }
                        }
                    }
                }
            },
            new GeoInfo {
                ID = "5",
                NameEn = "North America",
                NameAr = "أمريكا الشمالية",
                Items = new[] {
                    new GeoInfo {
                        ID = "5_2",
                        NameEn = "Mexico",
                        NameAr = "المكسيك",
                        Items = new[] {
                            new GeoInfo {
                                ID = "5_2_1",
                                NameEn = "Mexico City",
                                NameAr = "مكسيكو سيتي"
                            },
                            new GeoInfo {
                                ID = "5_2_2",
                                NameEn = "Guadalajara",
                                NameAr = "غوادالاخارا"
                            }
                        }
                    },
                    new GeoInfo {
                        ID = "5_1",
                        NameEn = "United States",
                        NameAr = "الولايات المتحدة الأمريكية",
                        Items = new[] {
                            new GeoInfo {
                                ID = "5_1_1",
                                NameEn = "New York",
                                NameAr = "نيويورك"
                            },
                            new GeoInfo {
                                ID = "5_1_2",
                                NameEn = "Washington",
                                NameAr = "واشنطن"
                            }
                        }
                    }
                }
            },
            new GeoInfo {
                ID = "6",
                NameEn = "South America",
                NameAr = "أمريكا الجنوبية",
                Items = new[] {
                    new GeoInfo {
                        ID = "6_1",
                        NameEn = "Brazil",
                        NameAr = "البرازيل",
                        Items = new[] {
                            new GeoInfo {
                                ID = "6_1_1",
                                NameEn = "Brasilia",
                                NameAr = "برازيليا"
                            },
                            new GeoInfo {
                                ID = "6_1_2",
                                NameEn = "Sao Paulo",
                                NameAr = "ساو باولو"
                            }
                        }
                    }, new GeoInfo {
                        ID = "6_2",
                        NameEn = "Colombia",
                        NameAr = "كولومبيا",
                        Items = new[] {
                            new GeoInfo {
                            ID = "6_2_1",
                                NameEn = "Bogota",
                                NameAr = "بوغوتا"
                            },
                            new GeoInfo {
                                ID = "6_2_2",
                                NameEn = "Medellin",
                                NameAr = "ميديلين"
                            }
                        }
                    }
                }
            }
        };
    }
}
