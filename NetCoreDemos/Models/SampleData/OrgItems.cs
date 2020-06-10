using System.Collections;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class OrgData {
        public IEnumerable Items { get; set; }
        public IEnumerable Links { get; set; }
    }
    public partial class SampleData {
        public static readonly IEnumerable<OrgItem> OrgItems = new[] {
            new OrgItem {
                ID = "106",
                Text = "Development",
                Type = "ellipse"
            },
            new OrgItem {
                ID = "107",
                Text = "WinForms\nTeam",
                Type = "ellipse"
            },
            new OrgItem {
                ID = "108",
                Text = "WPF\nTeam",
                Type = "ellipse"
            },
            new OrgItem {
                ID = "109",
                Text = "Javascript\nTeam",
                Type = "ellipse"
            },
            new OrgItem {
                ID = "110",
                Text = "ASP.NET\nTeam",
                Type = "ellipse"
            },
            new OrgItem {
                ID = "112",
                Text = "Ana\nTrujillo",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "113",
                Text = "Antonio\nMoreno",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "115",
                Text = "Christina\nBerglund",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "116",
                Text = "Hanna\nMoos",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "117",
                Text = "Frederique\nCiteaux",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "119",
                Text = "Laurence\nLebihan",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "120",
                Text = "Elizabeth\nLincoln",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "122",
                Text = "Patricio\nSimpson",
                Type = "rectangle"
            },
            new OrgItem {
                ID = "123",
                Text = "Francisco\nChang",
                Type = "rectangle"
            }
        };
        public static readonly IEnumerable<OrgLink> OrgLinks = new[] {
            new OrgLink {
                ID = "124",
                From = "106",
                To = "108",
            },
            new OrgLink {
                ID = "125",
                From = "106",
                To = "109",
            },
            new OrgLink {
                ID = "126",
                From = "106",
                To = "107",
            },
            new OrgLink {
                ID = "127",
                From = "106",
                To = "110",
            },
            new OrgLink {
                ID = "129",
                From = "110",
                To = "112",
            },
            new OrgLink {
                ID = "130",
                From = "110",
                To = "113",
            },
            new OrgLink {
                ID = "132",
                From = "107",
                To = "115",
            },
            new OrgLink {
                ID = "133",
                From = "107",
                To = "116",
            },
            new OrgLink {
                ID = "134",
                From = "107",
                To = "117",
            },
            new OrgLink {
                ID = "136",
                From = "108",
                To = "119",
            },
            new OrgLink {
                ID = "137",
                From = "108",
                To = "120",
            },
            new OrgLink {
                ID = "139",
                From = "109",
                To = "122",
            },
            new OrgLink {
                ID = "140",
                From = "109",
                To = "123",
            }
        };
        public static readonly IEnumerable<OrgItemPlain> OrgItemsPlain = new[] {
            new OrgItemPlain {
                ID = 1,
                FullName = "John Heart",
                Prefix = "Mr.",
                Title = "CEO",
                City = "Los Angeles",
                State = "California",
                Email = "jheart@dx-email.com",
                Skype = "jheart_DX_skype",
                MobilePhone = "(213) 555-9392",
                BirthDate = "1964-03-16",
                HireDate = "1995-01-15"
            },
            new OrgItemPlain {
                ID = 2,
                HeadID = 1,
                FullName = "Samantha Bright",
                Prefix = "Dr.",
                Title = "COO",
                City = "Los Angeles",
                State = "California",
                Email = "samanthab@dx-email.com",
                Skype = "samanthab_DX_skype",
                MobilePhone = "(213) 555-2858",
                BirthDate = "1966-05-02",
                HireDate = "2004-05-24"
            },
            new OrgItemPlain {
                ID = 3,
                HeadID = 1,
                FullName = "Arthur Miller",
                Prefix = "Mr.",
                Title = "CTO",
                City = "Denver",
                State = "Colorado",
                Email = "arthurm@dx-email.com",
                Skype = "arthurm_DX_skype",
                MobilePhone = "(310) 555-8583",
                BirthDate = "1972-07-11",
                HireDate = "2007-12-18"
            },
            new OrgItemPlain {
                ID = 4,
                HeadID = 1,
                FullName = "Robert Reagan",
                Prefix = "Mr.",
                Title = "CMO",
                City = "Bentonville",
                State = "Arkansas",
                Email = "robertr@dx-email.com",
                Skype = "robertr_DX_skype",
                MobilePhone = "(818) 555-2387",
                BirthDate = "1974-09-07",
                HireDate = "2002-11-08"
            },
            new OrgItemPlain {
                ID = 5,
                HeadID = 1,
                FullName = "Greta Sims",
                Prefix = "Ms.",
                Title = "HR Manager",
                City = "Atlanta",
                State = "Georgia",
                Email = "gretas@dx-email.com",
                Skype = "gretas_DX_skype",
                MobilePhone = "(818) 555-6546",
                BirthDate = "1977-11-22",
                HireDate = "1998-04-23"
            },
            new OrgItemPlain {
                ID = 6,
                HeadID = 3,
                FullName = "Brett Wade",
                Prefix = "Mr.",
                Title = "IT Manager",
                City = "Reno",
                State = "Nevada",
                Email = "brettw@dx-email.com",
                Skype = "brettw_DX_skype",
                MobilePhone = "(626) 555-0358",
                BirthDate = "1968-12-01",
                HireDate = "2009-03-06"
            },
            new OrgItemPlain {
                ID = 7,
                HeadID = 5,
                FullName = "Sandra Johnson",
                Prefix = "Mrs.",
                Title = "Controller",
                City = "Beaver",
                State = "Utah",
                Email = "sandraj@dx-email.com",
                Skype = "sandraj_DX_skype",
                MobilePhone = "(562) 555-2082",
                BirthDate = "1974-11-15",
                HireDate = "2005-05-11"
            },
            new OrgItemPlain {
                ID = 8,
                HeadID = 4,
                FullName = "Ed Holmes",
                Prefix = "Dr.",
                Title = "Sales Manager",
                City = "Malibu",
                State = "California",
                Email = "edwardh@dx-email.com",
                Skype = "edwardh_DX_skype",
                MobilePhone = "(310) 555-1288",
                BirthDate = "1973-07-14",
                HireDate = "2005-06-19"
            },
            new OrgItemPlain {
                ID = 9,
                HeadID = 3,
                FullName = "Barb Banks",
                Prefix = "Mrs.",
                Title = "Support Manager",
                City = "Phoenix",
                State = "Arizona",
                Email = "barbarab@dx-email.com",
                Skype = "barbarab_DX_skype",
                MobilePhone = "(310) 555-3355",
                BirthDate = "1979-04-14",
                HireDate = "2002-08-07"
            },
            new OrgItemPlain {
                ID = 10,
                HeadID = 2,
                FullName = "Kevin Carter",
                Prefix = "Mr.",
                Title = "Shipping Manager",
                City = "San Diego",
                State = "California",
                Email = "kevinc@dx-email.com",
                Skype = "kevinc_DX_skype",
                MobilePhone = "(213) 555-2840",
                BirthDate = "1978-01-09",
                HireDate = "2009-08-11"
            },
            new OrgItemPlain {
                ID = 11,
                HeadID = 5,
                FullName = "Cindy Stanwick",
                Prefix = "Ms.",
                Title = "HR Assistant",
                City = "Little Rock",
                State = "Arkansas",
                Email = "cindys@dx-email.com",
                Skype = "cindys_DX_skype",
                MobilePhone = "(818) 555-6655",
                BirthDate = "1985-06-05",
                HireDate = "2008-03-24"
            },
            new OrgItemPlain {
                ID = 12,
                HeadID = 8,
                FullName = "Sammy Hill",
                Prefix = "Mr.",
                Title = "Sales Assistant",
                City = "Pasadena",
                State = "California",
                Email = "sammyh@dx-email.com",
                Skype = "sammyh_DX_skype",
                MobilePhone = "(626) 555-7292",
                BirthDate = "1984-02-17",
                HireDate = "2012-02-01"
            },
            new OrgItemPlain {
                ID = 13,
                HeadID = 10,
                FullName = "Davey Jones",
                Prefix = "Mr.",
                Title = "Shipping Assistant",
                City = "Pasadena",
                State = "California",
                Email = "davidj@dx-email.com",
                Skype = "davidj_DX_skype",
                MobilePhone = "(626) 555-0281",
                BirthDate = "1983-03-06",
                HireDate = "2011-04-24"
            },
            new OrgItemPlain {
                ID = 14,
                HeadID = 10,
                FullName = "Victor Norris",
                Prefix = "Mr.",
                Title = "Shipping Assistant",
                City = "Little Rock",
                State = "Arkansas",
                Email = "victorn@dx-email.com",
                Skype = "victorn_DX_skype",
                MobilePhone = "(213) 555-9278",
                BirthDate = "1986-07-23",
                HireDate = "2012-07-23"
            },
            new OrgItemPlain {
                ID = 15,
                HeadID = 10,
                FullName = "Mary Stern",
                Prefix = "Ms.",
                Title = "Shipping Assistant",
                City = "Beaver",
                State = "Utah",
                Email = "marys@dx-email.com",
                Skype = "marys_DX_skype",
                MobilePhone = "(818) 555-7857",
                BirthDate = "1982-04-08",
                HireDate = "2012-08-12"
            },
            new OrgItemPlain {
                ID = 16,
                HeadID = 10,
                FullName = "Robin Cosworth",
                Prefix = "Mrs.",
                Title = "Shipping Assistant",
                City = "Los Angeles",
                State = "California",
                Email = "robinc@dx-email.com",
                Skype = "robinc_DX_skype",
                MobilePhone = "(818) 555-0942",
                BirthDate = "1981-06-12",
                HireDate = "2012-09-01"
            },
            new OrgItemPlain {
                ID = 17,
                HeadID = 9,
                FullName = "Kelly Rodriguez",
                Prefix = "Ms.",
                Title = "Support Assistant",
                City = "Boise",
                State = "Idaho",
                Email = "kellyr@dx-email.com",
                Skype = "kellyr_DX_skype",
                MobilePhone = "(818) 555-9248",
                BirthDate = "1988-05-11",
                HireDate = "2012-10-13"
            },
            new OrgItemPlain {
                ID = 18,
                HeadID = 9,
                FullName = "James Anderson",
                Prefix = "Mr.",
                Title = "Support Assistant",
                City = "Atlanta",
                State = "Georgia",
                Email = "jamesa@dx-email.com",
                Skype = "jamesa_DX_skype",
                MobilePhone = "(323) 555-4702",
                BirthDate = "1987-01-29",
                HireDate = "2012-10-18"
            },
            new OrgItemPlain {
                ID = 19,
                HeadID = 9,
                FullName = "Antony Remmen",
                Prefix = "Mr.",
                Title = "Support Assistant",
                City = "Boise",
                State = "Idaho",
                Email = "anthonyr@dx-email.com",
                Skype = "anthonyr_DX_skype",
                MobilePhone = "(310) 555-6625",
                BirthDate = "1986-02-19",
                HireDate = "2013-01-19"
            },
            new OrgItemPlain {
                ID = 20,
                HeadID = 8,
                FullName = "Olivia Peyton",
                Prefix = "Mrs.",
                Title = "Sales Assistant",
                City = "Atlanta",
                State = "Georgia",
                Email = "oliviap@dx-email.com",
                Skype = "oliviap_DX_skype",
                MobilePhone = "(310) 555-2728",
                BirthDate = "1981-06-03",
                HireDate = "2012-05-14"
            },
            new OrgItemPlain {
                ID = 21,
                HeadID = 6,
                FullName = "Taylor Riley",
                Prefix = "Mr.",
                Title = "Network Admin",
                City = "San Jose",
                State = "California",
                Email = "taylorr@dx-email.com",
                Skype = "taylorr_DX_skype",
                MobilePhone = "(310) 555-7276",
                BirthDate = "1982-08-14",
                HireDate = "2012-04-14"
            },
            new OrgItemPlain {
                ID = 22,
                HeadID = 6,
                FullName = "Amelia Harper",
                Prefix = "Mrs.",
                Title = "Network Admin",
                City = "Los Angeles",
                State = "California",
                Email = "ameliah@dx-email.com",
                Skype = "ameliah_DX_skype",
                MobilePhone = "(213) 555-4276",
                BirthDate = "1983-11-19",
                HireDate = "2011-02-10"
            },
            new OrgItemPlain {
                ID = 23,
                HeadID = 6,
                FullName = "Wally Hobbs",
                Prefix = "Mr.",
                Title = "Programmer",
                City = "Chatsworth",
                State = "California",
                Email = "wallyh@dx-email.com",
                Skype = "wallyh_DX_skype",
                MobilePhone = "(818) 555-8872",
                BirthDate = "1984-12-24",
                HireDate = "2011-02-17"
            },
            new OrgItemPlain {
                ID = 24,
                HeadID = 6,
                FullName = "Brad Jameson",
                Prefix = "Mr.",
                Title = "Programmer",
                City = "San Fernando",
                State = "California",
                Email = "bradleyj@dx-email.com",
                Skype = "bradleyj_DX_skype",
                MobilePhone = "(818) 555-4646",
                BirthDate = "1988-10-12",
                HireDate = "2011-03-02"
            },
            new OrgItemPlain {
                ID = 25,
                HeadID = 6,
                FullName = "Karen Goodson",
                Prefix = "Miss",
                Title = "Programmer",
                City = "South Pasadena",
                State = "California",
                Email = "kareng@dx-email.com",
                Skype = "kareng_DX_skype",
                MobilePhone = "(626) 555-0908",
                BirthDate = "1987-04-26",
                HireDate = "2011-03-14"
            },
            new OrgItemPlain {
                ID = 26,
                HeadID = 5,
                FullName = "Marcus Orbison",
                Prefix = "Mr.",
                Title = "Travel Coordinator",
                City = "Los Angeles",
                State = "California",
                Email = "marcuso@dx-email.com",
                Skype = "marcuso_DX_skype",
                MobilePhone = "(213) 555-7098",
                BirthDate = "1982-03-02",
                HireDate = "2005-05-19"
            }
        };
        public static readonly IEnumerable<OrgItemHierarchy> OrgItemsHierarchy = new[] {
            new OrgItemHierarchy {
                FullName = "John Heart",
                Prefix = "Mr.",
                Title = "CEO",
                City = "Los Angeles",
                State = "California",
                Email = "jheart@dx-email.com",
                Skype = "jheart_DX_skype",
                MobilePhone = "(213) 555-9392",
                BirthDate = "1964-03-16",
                HireDate = "1995-01-15",
                Items = new [] {
                    new OrgItemHierarchy {
                        FullName = "Samantha Bright",
                        Prefix = "Dr.",
                        Title = "COO",
                        City = "Los Angeles",
                        State = "California",
                        Email = "samanthab@dx-email.com",
                        Skype = "samanthab_DX_skype",
                        MobilePhone = "(213) 555-2858",
                        BirthDate = "1966-05-02",
                        HireDate = "2004-05-24",
                        Items = new [] {
                            new OrgItemHierarchy {
                                FullName = "Kevin Carter",
                                Prefix = "Mr.",
                                Title = "Shipping Manager",
                                City = "San Diego",
                                State = "California",
                                Email = "kevinc@dx-email.com",
                                Skype = "kevinc_DX_skype",
                                MobilePhone = "(213) 555-2840",
                                BirthDate = "1978-01-09",
                                HireDate = "2009-08-11",
                                Items = new [] {
                                    new OrgItemHierarchy {
                                        FullName = "Davey Jones",
                                        Prefix = "Mr.",
                                        Title = "Shipping Assistant",
                                        City = "Pasadena",
                                        State = "California",
                                        Email = "davidj@dx-email.com",
                                        Skype = "davidj_DX_skype",
                                        MobilePhone = "(626) 555-0281",
                                        BirthDate = "1983-03-06",
                                        HireDate = "2011-04-24"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Victor Norris",
                                        Prefix = "Mr.",
                                        Title = "Shipping Assistant",
                                        City = "Little Rock",
                                        State = "Arkansas",
                                        Email = "victorn@dx-email.com",
                                        Skype = "victorn_DX_skype",
                                        MobilePhone = "(213) 555-9278",
                                        BirthDate = "1986-07-23",
                                        HireDate = "2012-07-23"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Mary Stern",
                                        Prefix = "Ms.",
                                        Title = "Shipping Assistant",
                                        City = "Beaver",
                                        State = "Utah",
                                        Email = "marys@dx-email.com",
                                        Skype = "marys_DX_skype",
                                        MobilePhone = "(818) 555-7857",
                                        BirthDate = "1982-04-08",
                                        HireDate = "2012-08-12"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Robin Cosworth",
                                        Prefix = "Mrs.",
                                        Title = "Shipping Assistant",
                                        City = "Los Angeles",
                                        State = "California",
                                        Email = "robinc@dx-email.com",
                                        Skype = "robinc_DX_skype",
                                        MobilePhone = "(818) 555-0942",
                                        BirthDate = "1981-06-12",
                                        HireDate = "2012-09-01"
                                    }
                                }
                            }
                        }
                    },
                    new OrgItemHierarchy {
                        FullName = "Arthur Miller",
                        Prefix = "Mr.",
                        Title = "CTO",
                        City = "Denver",
                        State = "Colorado",
                        Email = "arthurm@dx-email.com",
                        Skype = "arthurm_DX_skype",
                        MobilePhone = "(310) 555-8583",
                        BirthDate = "1972-07-11",
                        HireDate = "2007-12-18",
                        Items = new [] {
                            new OrgItemHierarchy {
                                FullName = "Brett Wade",
                                Prefix = "Mr.",
                                Title = "IT Manager",
                                City = "Reno",
                                State = "Nevada",
                                Email = "brettw@dx-email.com",
                                Skype = "brettw_DX_skype",
                                MobilePhone = "(626) 555-0358",
                                BirthDate = "1968-12-01",
                                HireDate = "2009-03-06",
                                Items = new [] {
                                    new OrgItemHierarchy {
                                        FullName = "Taylor Riley",
                                        Prefix = "Mr.",
                                        Title = "Network Admin",
                                        City = "San Jose",
                                        State = "California",
                                        Email = "taylorr@dx-email.com",
                                        Skype = "taylorr_DX_skype",
                                        MobilePhone = "(310) 555-7276",
                                        BirthDate = "1982-08-14",
                                        HireDate = "2012-04-14"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Amelia Harper",
                                        Prefix = "Mrs.",
                                        Title = "Network Admin",
                                        City = "Los Angeles",
                                        State = "California",
                                        Email = "ameliah@dx-email.com",
                                        Skype = "ameliah_DX_skype",
                                        MobilePhone = "(213) 555-4276",
                                        BirthDate = "1983-11-19",
                                        HireDate = "2011-02-10"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Wally Hobbs",
                                        Prefix = "Mr.",
                                        Title = "Programmer",
                                        City = "Chatsworth",
                                        State = "California",
                                        Email = "wallyh@dx-email.com",
                                        Skype = "wallyh_DX_skype",
                                        MobilePhone = "(818) 555-8872",
                                        BirthDate = "1984-12-24",
                                        HireDate = "2011-02-17"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Brad Jameson",
                                        Prefix = "Mr.",
                                        Title = "Programmer",
                                        City = "San Fernando",
                                        State = "California",
                                        Email = "bradleyj@dx-email.com",
                                        Skype = "bradleyj_DX_skype",
                                        MobilePhone = "(818) 555-4646",
                                        BirthDate = "1988-10-12",
                                        HireDate = "2011-03-02"
                                    },
                                    new OrgItemHierarchy {
                                        FullName = "Karen Goodson",
                                        Prefix = "Miss",
                                        Title = "Programmer",
                                        City = "South Pasadena",
                                        State = "California",
                                        Email = "kareng@dx-email.com",
                                        Skype = "kareng_DX_skype",
                                        MobilePhone = "(626) 555-0908",
                                        BirthDate = "1987-04-26",
                                        HireDate = "2011-03-14"
                                    }
                                }
                            },
                        new OrgItemHierarchy {
                            FullName = "Barb Banks",
                            Prefix = "Mrs.",
                            Title = "Support Manager",
                            City = "Phoenix",
                            State = "Arizona",
                            Email = "barbarab@dx-email.com",
                            Skype = "barbarab_DX_skype",
                            MobilePhone = "(310) 555-3355",
                            BirthDate = "1979-04-14",
                            HireDate = "2002-08-07",
                            Items = new [] {
                                new OrgItemHierarchy {
                                FullName = "Kelly Rodriguez",
                                Prefix = "Ms.",
                                Title = "Support Assistant",
                                City = "Boise",
                                State = "Idaho",
                                Email = "kellyr@dx-email.com",
                                Skype = "kellyr_DX_skype",
                                MobilePhone = "(818) 555-9248",
                                BirthDate = "1988-05-11",
                                HireDate = "2012-10-13"
                            },
                            new OrgItemHierarchy {
                                FullName = "James Anderson",
                                Prefix = "Mr.",
                                Title = "Support Assistant",
                                City = "Atlanta",
                                State = "Georgia",
                                Email = "jamesa@dx-email.com",
                                Skype = "jamesa_DX_skype",
                                MobilePhone = "(323) 555-4702",
                                BirthDate = "1987-01-29",
                                HireDate = "2012-10-18"
                            },
                            new OrgItemHierarchy {
                                FullName = "Antony Remmen",
                                Prefix = "Mr.",
                                Title = "Support Assistant",
                                City = "Boise",
                                State = "Idaho",
                                Email = "anthonyr@dx-email.com",
                                Skype = "anthonyr_DX_skype",
                                MobilePhone = "(310) 555-6625",
                                BirthDate = "1986-02-19",
                                HireDate = "2013-01-19"
                            }
                            }
                        }
                        }
                    },
                    new OrgItemHierarchy {
                        FullName = "Robert Reagan",
                        Prefix = "Mr.",
                        Title = "CMO",
                        City = "Bentonville",
                        State = "Arkansas",
                        Email = "robertr@dx-email.com",
                        Skype = "robertr_DX_skype",
                        MobilePhone = "(818) 555-2387",
                        BirthDate = "1974-09-07",
                        HireDate = "2002-11-08",
                        Items = new [] {
                            new OrgItemHierarchy {
                            FullName = "Ed Holmes",
                            Prefix = "Dr.",
                            Title = "Sales Manager",
                            City = "Malibu",
                            State = "California",
                            Email = "edwardh@dx-email.com",
                            Skype = "edwardh_DX_skype",
                            MobilePhone = "(310) 555-1288",
                            BirthDate = "1973-07-14",
                            HireDate = "2005-06-19",
                            Items = new [] {
                                new OrgItemHierarchy {
                                FullName = "Sammy Hill",
                                Prefix = "Mr.",
                                Title = "Sales Assistant",
                                City = "Pasadena",
                                State = "California",
                                Email = "sammyh@dx-email.com",
                                Skype = "sammyh_DX_skype",
                                MobilePhone = "(626) 555-7292",
                                BirthDate = "1984-02-17",
                                HireDate = "2012-02-01"
                            },
                            new OrgItemHierarchy {
                                FullName = "Olivia Peyton",
                                Prefix = "Mrs.",
                                Title = "Sales Assistant",
                                City = "Atlanta",
                                State = "Georgia",
                                Email = "oliviap@dx-email.com",
                                Skype = "oliviap_DX_skype",
                                MobilePhone = "(310) 555-2728",
                                BirthDate = "1981-06-03",
                                HireDate = "2012-05-14"
                            }
                            }
                        }
                        }
                    },
                    new OrgItemHierarchy {
                        FullName = "Greta Sims",
                        Prefix = "Ms.",
                        Title = "HR Manager",
                        City = "Atlanta",
                        State = "Georgia",
                        Email = "gretas@dx-email.com",
                        Skype = "gretas_DX_skype",
                        MobilePhone = "(818) 555-6546",
                        BirthDate = "1977-11-22",
                        HireDate = "1998-04-23",
                        Items = new [] {
                            new OrgItemHierarchy {
                                FullName = "Sandra Johnson",
                                Prefix = "Mrs.",
                                Title = "Controller",
                                City = "Beaver",
                                State = "Utah",
                                Email = "sandraj@dx-email.com",
                                Skype = "sandraj_DX_skype",
                                MobilePhone = "(562) 555-2082",
                                BirthDate = "1974-11-15",
                                HireDate = "2005-05-11"
                            },
                            new OrgItemHierarchy {
                                FullName = "Cindy Stanwick",
                                Prefix = "Ms.",
                                Title = "HR Assistant",
                                City = "Little Rock",
                                State = "Arkansas",
                                Email = "cindys@dx-email.com",
                                Skype = "cindys_DX_skype",
                                MobilePhone = "(818) 555-6655",
                                BirthDate = "1985-06-05",
                                HireDate = "2008-03-24"
                            },
                            new OrgItemHierarchy {
                                FullName = "Marcus Orbison",
                                Prefix = "Mr.",
                                Title = "Travel Coordinator",
                                City = "Los Angeles",
                                State = "California",
                                Email = "marcuso@dx-email.com",
                                Skype = "marcuso_DX_skype",
                                MobilePhone = "(213) 555-7098",
                                BirthDate = "1982-03-02",
                                HireDate = "2005-05-19"
                            },
                            new OrgItemHierarchy {
                                FullName = "Sandy Bright",
                                Prefix = "Ms.",
                                Title = "Benefits Coordinator",
                                City = "Denver",
                                State = "Colorado",
                                Email = "sandrab@dx-email.com",
                                Skype = "sandrab_DX_skype",
                                MobilePhone = "(818) 555-0524",
                                BirthDate = "1983-09-11",
                                HireDate = "2005-06-04"
                            }
                        }
                    }
                }
            }
        };
        public static readonly IEnumerable<OrgItemAdvanced> OrgItemsAdvanced = new[] {
            new OrgItemAdvanced {
                ID = "106",
                Name = "Development",
                Type = "group"
            },
            new OrgItemAdvanced {
                ID = "107",
                Name = "WinForms\nTeam",
                Type = "group"
            },
            new OrgItemAdvanced {
                ID = "108",
                Name = "WPF\nTeam",
                Type = "group"
            },
            new OrgItemAdvanced {
                ID = "109",
                Name = "Javascript\nTeam",
                Type = "group"
            },
            new OrgItemAdvanced {
                ID = "110",
                Name = "ASP.NET\nTeam",
                Type = "group"
            },
            new OrgItemAdvanced {
                ID = "112",
                Name = "Ana\nTrujillo",
                Level = "senior"
            },
            new OrgItemAdvanced {
                ID = "113",
                Name = "Antonio\nMoreno"
            },
            new OrgItemAdvanced {
                ID = "115",
                Name = "Christina\nBerglund"
            },
            new OrgItemAdvanced {
                ID = "116",
                Name = "Hanna\nMoos"
            },
            new OrgItemAdvanced {
                ID = "119",
                Name = "Laurence\nLebihan"
            },
            new OrgItemAdvanced {
                ID = "120",
                Name = "Elizabeth\nLincoln",
                Level = "senior"
            },
            new OrgItemAdvanced {
                ID = "122",
                Name = "Patricio\nSimpson",
                Level = "senior"
            },
            new OrgItemAdvanced {
                ID = "123",
                Name = "Francisco\nChang"
            }
        };
        public static readonly IEnumerable<OrgLink> OrgLinksAdvanced = new[] {
            new OrgLink {
                ID = "124",
                From = "106",
                To = "108",
            },
            new OrgLink {
                ID = "125",
                From = "106",
                To = "109",
            },
            new OrgLink {
                ID = "126",
                From = "106",
                To = "107",
            },
            new OrgLink {
                ID = "127",
                From = "106",
                To = "110",
            },
            new OrgLink {
                ID = "129",
                From = "110",
                To = "112",
            },
            new OrgLink {
                ID = "130",
                From = "110",
                To = "113",
            },
            new OrgLink {
                ID = "132",
                From = "107",
                To = "115",
            },
            new OrgLink {
                ID = "133",
                From = "107",
                To = "116",
            },
            new OrgLink {
                ID = "136",
                From = "108",
                To = "119",
            },
            new OrgLink {
                ID = "137",
                From = "108",
                To = "120",
            },
            new OrgLink {
                ID = "139",
                From = "109",
                To = "122",
            },
            new OrgLink {
                ID = "140",
                From = "109",
                To = "123",
            }
        };
        public static readonly IEnumerable<OrgItemWithImage> OrgItemsWidthImage = new[] {
            new OrgItemWithImage {
                ID = "106",
                Text = "Development",
                Type = "ellipse"
            },
            new OrgItemWithImage {
                ID = "107",
                Text = "WinForms\nTeam",
                Type = "ellipse"
            },
            new OrgItemWithImage {
                ID = "108",
                Text = "WPF\nTeam",
                Type = "ellipse"
            },
            new OrgItemWithImage {
                ID = "109",
                Text = "Javascript\nTeam",
                Type = "ellipse"
            },
            new OrgItemWithImage {
                ID = "110",
                Text = "ASP.NET\nTeam",
                Type = "ellipse"
            },
            new OrgItemWithImage {
                ID = "112",
                Text = "Ken Samuelson",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/32.png"
            },
            new OrgItemWithImage {
                ID = "113",
                Text = "Terry Bradley",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/33.png"
            },
            new OrgItemWithImage {
                ID = "115",
                Text = "Nat Maguiree",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/34.png"
            },
            new OrgItemWithImage {
                ID = "116",
                Text = "Gabe Jones",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/35.png"
            },
            new OrgItemWithImage {
                ID = "117",
                Text = "Lucy Ball",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/36.png"
            },
            new OrgItemWithImage {
                ID = "119",
                Text = "Bart Arnaz",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/37.png"
            },
            new OrgItemWithImage {
                ID = "120",
                Text = "Leah Simpson",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/38.png"
            },
            new OrgItemWithImage {
                ID = "122",
                Text = "Hannah Brookly",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/39.png"
            },
            new OrgItemWithImage {
                ID = "123",
                Text = "Arnie Schwartz",
                Type = "cardWithImageOnLeft",
                Picture = "../../images/employees/40.png"
            }
        };
        public static readonly IEnumerable<OrgLink> OrgLinksWithImage = new[] {
            new OrgLink {
                ID = "124",
                From = "106",
                To = "108",
            },
            new OrgLink {
                ID = "125",
                From = "106",
                To = "109",
            },
            new OrgLink {
                ID = "126",
                From = "106",
                To = "107",
            },
            new OrgLink {
                ID = "127",
                From = "106",
                To = "110",
            },
            new OrgLink {
                ID = "129",
                From = "110",
                To = "112",
            },
            new OrgLink {
                ID = "130",
                From = "110",
                To = "113",
            },
            new OrgLink {
                ID = "132",
                From = "107",
                To = "115",
            },
            new OrgLink {
                ID = "133",
                From = "107",
                To = "116",
            },
            new OrgLink {
                ID = "134",
                From = "107",
                To = "117",
            },
            new OrgLink {
                ID = "136",
                From = "108",
                To = "119",
            },
            new OrgLink {
                ID = "137",
                From = "108",
                To = "120",
            },
            new OrgLink {
                ID = "139",
                From = "109",
                To = "122",
            },
            new OrgLink {
                ID = "140",
                From = "109",
                To = "123",
            }
        };
    }
}
