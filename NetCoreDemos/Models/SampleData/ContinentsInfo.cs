using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<ContinentInfo> ContinentsInfo = new[] {
            new ContinentInfo {
                ID = "1",
                Text = "Africa",
                Expanded = true,
                Items = new[] {
                    new CountryInfo {
                        ID = "1_1",
                        Text = "Egypt",
                        Selected = true,
                        FullName = "Arab Republic of Egypt",
                        Description = "Egypt is a transcontinental country spanning the northeast corner of Africa and southwest corner of Asia by a land bridge the Sinai Peninsula forms.",
                        Area = "1,010,407.87",
                        Population = "94,798,827",
                        GDP = "1,173",
                        Flag = "../../images/Flags/Egypt.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "1_1_1",
                                Text = "Cairo",
                                Population = "9,500,000",
                                Area = "528",
                                Density = "19,376",
                                Description = "The city's metropolitan area is the largest in the Middle East and the Arab world, and the 15th-largest in the world, is associated with ancient Egypt.",
                                Flag = "../../images/Flags/Cairo.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "1_1_2",
                                Text = "Alexandria",
                                Population = "4,984,387",
                                Area = "2,679",
                                Density = "1,900",
                                Description = "Alexandria is the second largest city and a major economic center in Egypt, extending about 32 km (20 mi) along the coast of the Mediterranean Sea in the north central part of the country.",
                                Flag = "../../images/Flags/Alexandria.png"
                            },
                            new CityInfo {
                                ID = "1_1_3",
                                Text = "Giza",
                                Population = "3,628,062",
                                Area = "1,579.75",
                                Density = "2,300",
                                Description = "Giza is the third-largest city in Egypt. It is located on the west bank of the Nile, 5 km (3 mi) southwest of central Cairo.",
                                Flag = "../../images/Flags/Giza.png"
                            }
                        }
                    },
                    new CountryInfo {
                        ID = "1_2",
                        Text = "South Africa",
                        FullName = "Republic of South Africa",
                        Description = "South Africa is the southernmost country in Africa. It is bounded on the south by 2,798 kilometres (1,739 mi) of coastline of Southern Africa stretching along the South Atlantic and Indian Oceans.",
                        Area = "1,221,037",
                        Population = "54,956,900",
                        GDP = "742.461",
                        Flag = "../../images/Flags/SouthAfrica.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "1_2_1",
                                Text = "Pretoria",
                                Population = "741,651",
                                Area = "687.54",
                                Density = "1,100",
                                Description = "Pretoria is a city in the northern part of Gauteng, South Africa. Being one of the country's three capital cities, it serves as the seat of the executive branch of government.",
                                Flag = "../../images/Flags/Pretoria.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "1_2_2",
                                Text = "Johannesburg",
                                Population = "957,441",
                                Area = "334.81",
                                Density = "2,900",
                                Description = "Johannesburg is the largest city in South Africa and is one of the 50 largest urban areas in the world.",
                                Flag = "../../images/Flags/Johannesburg.png"
                            },
                            new CityInfo {
                                ID = "1_2_3",
                                Text = "Durban",
                                Population = "595,061",
                                Area = "225.91",
                                Density = "2,600",
                                Description = "Durban is the largest city in the South African province of KwaZulu-Natal. It is Located on the Indian Ocean coast of the African continent.",
                                Flag = "../../images/Flags/Durban.png"
                            }
                        }
                    }
                }
            },
            new ContinentInfo {
                ID = "2",
                Text = "Asia",
                Items = new[] {
                    new CountryInfo {
                        ID = "2_1",
                        Text = "Japan",
                        FullName = "Japan",
                        Description = "Japan is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest.",
                        Area = "377,972",
                        Population = "126,672,000",
                        GDP = "5,420",
                        Flag = "../../images/Flags/Japan.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "2_1_1",
                                Text = "Tokyo",
                                Population = "13,617,445",
                                Area = "2,187.66",
                                Density = "6,224.66",
                                Description = "The Greater Tokyo Area is the most populous metropolitan area in the world. The city is located in the Kantō region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands.",
                                Flag = "../../images/Flags/Tokyo.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "2_1_2",
                                Text = "Yokohama",
                                Population = "3,732,616",
                                Area = "437.38",
                                Density = "8,534.03",
                                Description = "Yokohama is the second largest city in Japan by population, after Tokyo, and the most populous municipality of Japan. It lies on Tokyo Bay, south of Tokyo, in the Kantō region of the main island of Honshu.",
                                Flag = "../../images/Flags/Yokohama.png"
                            },
                            new CityInfo {
                                ID = "2_1_3",
                                Text = "Osaka",
                                Population = "2,668,586",
                                Area = "223",
                                Density = "12,030",
                                Description = "Osaka is a designated city in the Kansai region of Japan. It is the largest component of the Keihanshin Metropolitan Area, the second largest metropolitan area in Japan. The city is situated at the mouth of the Yodo River on Osaka Bay, Honshu island",
                                Flag = "../../images/Flags/Osaka.png"
                            },
                            new CityInfo {
                                ID = "2_1_4",
                                Text = "Nagoya",
                                Population = "2,283,289",
                                Area = "326.43",
                                Density = "6,969.86",
                                Description = "Nagoya is the largest city in the Chūbu region of Japan. It is Japan's third-largest incorporated city and the fourth most populous urban area.",
                                Flag = "../../images/Flags/Nagoya.png"
                            }
                        }
                    },
                    new CountryInfo {
                        ID = "2_2",
                        Text = "Malaysia",
                        FullName = "Malaysia",
                        Description = "Malaysia is a federal constitutional monarchy located in Southeast Asia.",
                        Area = "330,803",
                        Population = "31,708,000",
                        GDP = "913.593",
                        Flag = "../../images/Flags/Malaysia.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "2_2_1",
                                Text = "Kuala Lumpur",
                                Population = "1,768,000",
                                Area = "243",
                                Density = "6,891",
                                Description = "Kuala Lumpur, officially the Federal Territory of Kuala Lumpur, or commonly KL, is the largest city of Malaysia. It is located in Klang Valley.",
                                Flag = "../../images/Flags/KualaLumpur.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "2_2_2",
                                Text = "George Town",
                                Population = "708,127",
                                Area = "305.77",
                                Density = "2,372",
                                Description = "George Town, the capital city of the Malaysian state of Penang, is located at the northeastern tip of Penang Island.",
                                Flag = "../../images/Flags/GeorgeTown.png"
                            },
                            new CityInfo {
                                ID = "2_2_3",
                                Text = "Ipoh",
                                Population = "657,892",
                                Area = "643",
                                Density = "1,023",
                                Description = "Ipoh is the capital of the Malaysian state of Perak. It stands on the banks of the Kinta River.",
                                Flag = "../../images/Flags/Ipoh.png"
                            }
                        }
                    }
                }
            },
            new ContinentInfo {
                ID = "3",
                Text = "Australia",
                Items = new[] {
                    new CountryInfo {
                        ID = "3_1",
                        Text = "Australia",
                        FullName = "Commonwealth of Australia",
                        Description = "It is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area.",
                        Area = "7,692,024",
                        Population = "24,696,700",
                        GDP = "1,189",
                        Flag = "../../images/Flags/Australia.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "3_1_1",
                                Text = "Canberra",
                                Population = "403,468",
                                Area = "814.2",
                                Density = "428.6",
                                Description = "The city is located at the northern end of the Australian Capital Territory (ACT), 280 km (170 mi) south-west of Sydney, and 660 km (410 mi) north-east of Melbourne.",
                                Flag = "../../images/Flags/Canberra.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "3_1_2",
                                Text = "Sydney",
                                Population = "5,029,768",
                                Area = "12,367.7",
                                Density = "400",
                                Description = "Sydney is the state capital of New South Wales and the most populous city in Australia and Oceania. It is located on Australia's east coast.",
                                Flag = "../../images/Flags/Sydney.jpg"
                            },
                            new CityInfo {
                                ID = "3_1_3",
                                Text = "Melbourne",
                                Population = "4,725,316",
                                Area = "2,664",
                                Density = "453",
                                Description = "Melbourne is the capital and most populous city of the Australian state of Victoria, and the second-most populous city in Australia and Oceania. The city is located in the south-eastern part of mainland Australia.",
                                Flag = "../../images/Flags/Melbourne.PNG"
                            }
                        }
                    }
                }
            },
            new ContinentInfo {
                ID = "4",
                Text = "Europe",
                Items = new[] {
                    new CountryInfo {
                        ID = "4_1",
                        Text = "Germany",
                        FullName = "Federal Republic of Germany",
                        Description = "The country is a federal parliamentary republic in central-western Europe. Germany is the most populous member state of the European Union.",
                        Area = "357,168",
                        Population = "82,175,700",
                        GDP = "4,150",
                        Flag = "../../images/Flags/Germany.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "4_1_1",
                                Text = "Berlin",
                                Population = "3,670,622",
                                Area = "891.7",
                                Density = "4,100",
                                Description = "Berlin is the capital and the largest city of Germany as well as one of its 16 constituent states.",
                                Flag = "../../images/Flags/Berlin.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "4_1_2",
                                Text = "Hamburg",
                                Population = "1,787,408",
                                Area = "755",
                                Density = "2,400",
                                Description = "Hamburg, officially the Free and Hanseatic City of Hamburg, is the second largest city and a state of Germany.",
                                Flag = "../../images/Flags/Hamburg.png"
                            },
                            new CityInfo {
                                ID = "4_1_3",
                                Text = "Munich",
                                Population = "1,450,381",
                                Area = "310.43",
                                Density = "4,700",
                                Description = "Munich is the capital and the most populated city in the German state of Bavaria, on the banks of River Isar north of the Bavarian Alps.",
                                Flag = "../../images/Flags/Munich.png"
                            }
                        }
                    },
                    new CountryInfo {
                        ID = "4_2",
                        Text = "Russia",
                        FullName = "Russian Federation",
                        Description = "Russia is a country in Eurasia. It is the largest country in the world by surface area, covering more than one-eighth of the Earth's inhabited land area.",
                        Area = "17,075,200",
                        Population = "144,463,451",
                        GDP = "4,000",
                        Flag = "../../images/Flags/Russia.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "4_2_1",
                                Text = "Moscow",
                                Population = "12,228,685",
                                Area = "2,511",
                                Density = "4,833.36",
                                Description = "Moscow is the capital and most populous city of Russia. It is located in the western part of Russia on the banks of the Moskva River.",
                                Flag = "../../images/Flags/Moscow.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "4_2_2",
                                Text = "Saint Petersburg",
                                Population = "5,323,300",
                                Area = "1,439",
                                Density = "3,764.49",
                                Description = "Saint Petersburg is Russia's second-largest city after Moscow. An important Russian port on the Baltic Sea, it is politically administered as a federal subject (a federal city).",
                                Flag = "../../images/Flags/SaintPetersburg.png"
                            },
                            new CityInfo {
                                ID = "4_2_3",
                                Text = "Novosibirsk",
                                Population = "1,473,754",
                                Area = "502.7",
                                Density = "2,932",
                                Description = "Novosibirsk is the most populous city in Asian Russia. The city is located in the southwestern part of Siberia on the banks of the Ob River adjacent to the Ob River Valley.",
                                Flag = "../../images/Flags/Novosibirsk.png"
                            }
                        }
                    },
                    new CountryInfo {
                        ID = "4_3",
                        Text = "United Kingdom",
                        FullName = "United Kingdom of Great Britain and Northern Ireland",
                        Description = "United Kingdom is a sovereign country in western Europe. Lying off the north-western coast of the European mainland, the United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands.",
                        Area = "242,495",
                        Population = "65,648,000",
                        GDP = "2,790",
                        Flag = "../../images/Flags/UnitedKingdom.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "4_3_1",
                                Text = "London",
                                Population = "8,787,892",
                                Area = "1,572",
                                Density = "5,590",
                                Description = "London is the capital and most populous city of England and the United Kingdom. It stands on the River Thames in the south-east of the Great Britain island.",
                                Flag = "../../images/Flags/London.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "4_3_2",
                                Text = "Birmingham",
                                Population = "1,124,600",
                                Area = "267.8",
                                Density = "4,199",
                                Description = "Birmingham is a city and metropolitan borough in the West Midlands, England. The city stands on the small River Rea.",
                                Flag = "../../images/Flags/Birmingham.png"
                            }
                        }
                    }
                }
            },
            new ContinentInfo {
                ID = "5",
                Text = "North America",
                Items = new[] {
                    new CountryInfo {
                        ID = "5_1",
                        Text = "Mexico",
                        FullName = "United Mexican States",
                        Description = "Mexico is a federal republic in the southern portion of North America.",
                        Area = "1,972,550",
                        Population = "119,530,753",
                        GDP = "2,406",
                        Flag = "../../images/Flags/Mexico.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "5_1_1",
                                Text = "Mexico City",
                                Population = "8,918,653",
                                Area = "1,485",
                                Density = "6,000",
                                Description = "Mexico City is the most populous city of Mexico. It is located in the Valley of Mexico, a large valley in the high plateaus at the center of Mexico.",
                                Flag = "../../images/Flags/MexicoCity.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "5_1_2",
                                Text = "Puebla",
                                Population = "2,499,519",
                                Area = "534.32",
                                Density = "4,678",
                                Description = "Puebla, formally Heroica Puebla de Zaragoza and also known as Puebla de los Angeles, is located in the Valley of Puebla, a large valley surrounded by the mountains and volcanoes of the Trans-Mexican volcanic belt on four sides.",
                                Flag = "../../images/Flags/Puebla.png"
                            },
                            new CityInfo {
                                ID = "5_1_3",
                                Text = "Guadalajara",
                                Population = "1,495,189",
                                Area = "151",
                                Density = "10,361",
                                Description = "Guadalajara is the capital and largest city of the Mexican state of Jalisco. The city is in the central region of Jalisco in the Western-Pacific area of Mexico.",
                                Flag = "../../images/Flags/Guadalajara.png"
                            }
                        }
                    },
                    new CountryInfo {
                        ID = "5_2",
                        Text = "United States",
                        FullName = "United States of America",
                        Description = "The country is a federal republic mainly located in the central part of the North American continent. The state of Alaska is in the northwest corner of North America and the state of Hawaii is an archipelago in the mid-Pacific Ocean.",
                        Area = "9,833,520",
                        Population = "325,365,189",
                        GDP = "18,558",
                        Flag = "../../images/Flags/UnitedStates.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "5_2_1",
                                Text = "Washington",
                                Population = "681,170",
                                Area = "177",
                                Density = "4,308",
                                Description = "Washington, D.C., is located in the mid-Atlantic region of the U.S. East Coast and partially bordered by the Potomac River.",
                                Flag = "../../images/Flags/Washington.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "5_2_2",
                                Text = "New York",
                                Population = "8,175,133",
                                Area = "34,306",
                                Density = "10,890",
                                Description = "The City of New York is the most populous city in the United States. Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, one of the most populous urban agglomerations in the world.",
                                Flag = "../../images/Flags/NewYork.png"
                            },
                            new CityInfo {
                                ID = "5_2_3",
                                Text = "Los Angeles",
                                Population = "3,792,621",
                                Area = "1,302.15",
                                Density = "8,483.02",
                                Description = "Los Angeles, officially the City of Los Angeles, is located on the on the West Coast of the United States. It is the second most populous city in the United States and the most populous city in the state of California.",
                                Flag = "../../images/Flags/LosAngeles.png"
                            },
                            new CityInfo {
                                ID = "5_2_4",
                                Text = "Chicago",
                                Population = "2,695,598",
                                Area = "606.42",
                                Density = "11,898.29",
                                Description = "Chicago, officially the City of Chicago, is the third-most populous city in the United States. It is located in northern Illinois at the south-western tip of Lake Michigan.",
                                Flag = "../../images/Flags/Chicago.png"
                            }
                        }
                    }
                }
            },
            new ContinentInfo {
                ID = "6",
                Text = "South America",
                Items = new[] {
                    new CountryInfo {
                        ID = "6_1",
                        Text = "Brazil",
                        FullName = "Federative Republic of Brazil",
                        Description = "Brazil is the largest country in both South America and Latin America. It occupies a large area along the eastern coast of South America and includes much of the continent's interior.",
                        Area = "8,515,767",
                        Population = "208,064,000",
                        GDP = "3,217",
                        Flag = "../../images/Flags/Brazil.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "6_1_1",
                                Text = "Brasilia",
                                Population = "2,977,216",
                                Area = "5,801,937",
                                Density = "513,14",
                                Description = "Brasília is the federal capital of Brazil and seat of the Federal District government. The city is located atop the Brazilian highlands in the country's center-western region.",
                                Flag = "../../images/Flags/Brasilia.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "6_1_2",
                                Text = "Sao Paulo",
                                Population = "12,038,175",
                                Area = "1,521.11",
                                Density = "7,913.29",
                                Description = "Sao Paulo is a municipality in the southeast region of Brazil. The city is the capital of the surrounding San Paulo state.",
                                Flag = "../../images/Flags/SaoPaulo.png"
                            },
                            new CityInfo {
                                ID = "6_1_3",
                                Text = "Rio de Janeiro",
                                Population = "6,453,682",
                                Area = "1,221",
                                Density = "2,705.1",
                                Description = "Rio de Janeiro is the second-most populous municipality in Brazil and the capital of the Rio de Janeiro state, Brazil's third-most populous state.",
                                Flag = "../../images/Flags/RioDeJaneiro.png"
                            }
                        }
                    }, new CountryInfo {
                        ID = "6_2",
                        Text = "Colombia",
                        FullName = "Republic of Colombia",
                        Description = "Colombia is a sovereign state mainly located in the northwest of South America, with territories in Central America.",
                        Area = "1,141,748",
                        Population = "49,364,592",
                        GDP = "720.151",
                        Flag = "../../images/Flags/Colombia.png",
                        Cities = new[] {
                            new CityInfo {
                                ID = "6_2_1",
                                Text = "Bogota",
                                Population = "8,080,734",
                                Area = "1,587",
                                Density = "6,060",
                                Description = "Bogotá is the capital and largest city of Colombia administered as the Capital District, although often thought of as part of Cundinamarca. The city is located in the southeastern part of the Bogotá savanna.",
                                Flag = "../../images/Flags/Bogota.png",
                                Capital = true
                            },
                            new CityInfo {
                                ID = "6_2_2",
                                Text = "Medellin",
                                Population = "2,441,123",
                                Area = "380.64",
                                Density = "6,413",
                                Description = "Medellín is the second-largest city in Colombia and the capital of the Antioquia department. It is located in the Aburrá Valley, a central region of the Andes Mountains in South America.",
                                Flag = "../../images/Flags/Medellin.png"
                            },
                            new CityInfo {
                                ID = "6_2_3",
                                Text = "Cali",
                                Population = "2,400,653",
                                Area = "619",
                                Density = "3,900",
                                Description = "Santiago de Cali, usually known by its short name Cali, is the capital of the Valle del Cauca department, and the most populous city in southwest Colombia.",
                                Flag = "../../images/Flags/Cali.png"
                            }
                        }
                    }
                }
            }
        };
    }
}
