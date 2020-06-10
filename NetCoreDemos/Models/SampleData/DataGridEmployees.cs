using System;
using System.Collections.Generic;
using System.Linq;
using DevExtreme.NETCore.Demos.Models.DataGrid;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<Employee> DataGridEmployees = new[] {
            new Employee {
                ID = 1,
                FirstName = "John",
                LastName = "Heart",
                Phone = "(213) 555-9392",
                Prefix = "Mr.",
                Position = "CEO",
                BirthDate = DateTime.Parse("1964/03/16"),
                HireDate = DateTime.Parse("1995/01/15"),
                Notes = "John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
                Email = "jheart@dx-email.com",
                Address = "351 S Hill St.",
                City = "Los Angeles",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 5,
                        Subject = "Choose between PPO and HMO Health Plan",
                        StartDate = DateTime.Parse("2013/02/15"),
                        DueDate = DateTime.Parse("2013/04/15"),
                        Status = "In Progress",
                        Priority = Priority.High,
                        Completion = 75
                    },
                    new EmployeeTask {
                        ID = 6,
                        Subject = "Google AdWords Strategy",
                        StartDate = DateTime.Parse("2013/02/16"),
                        DueDate = DateTime.Parse("2013/02/28"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 7,
                        Subject = "New Brochures",
                        StartDate = DateTime.Parse("2013/02/17"),
                        DueDate = DateTime.Parse("2013/02/24"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 22,
                        Subject = "Update NDA Agreement",
                        StartDate = DateTime.Parse("2013/03/14"),
                        DueDate = DateTime.Parse("2013/03/16"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 52,
                        Subject = "Review Product Recall Report by Engineering Team",
                        StartDate = DateTime.Parse("2013/05/17"),
                        DueDate = DateTime.Parse("2013/05/20"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    }
                },
                State = "California",
                StateID = 5,
                HomePhone = "(213) 555-9208",
                Skype = "jheartDXskype",
                Picture = "../../images/employees/01.png"
            },
            new Employee {
                ID = 2,
                FirstName = "Olivia",
                LastName = "Peyton",
                Phone = "(310) 555-2728",
                Prefix = "Mrs.",
                Position = "Sales Assistant",
                BirthDate = DateTime.Parse("1981/06/03"),
                HireDate = DateTime.Parse("2012/05/14"),
                Notes = "Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\nOlivia was homecoming queen in high school. She is expecting her first child in 6 months. Good Luck Olivia.",
                Email = "oliviap@dx-email.com",
                Address = "807 W Paseo Del Mar",
                City = "Los Angeles",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 3,
                        Subject = "Update Personnel Files",
                        StartDate = DateTime.Parse("2013/02/03"),
                        DueDate = DateTime.Parse("2013/02/28"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 4,
                        Subject = "Review Health Insurance Options Under the Affordable Care Act",
                        StartDate = DateTime.Parse("2013/02/12"),
                        DueDate = DateTime.Parse("2013/04/25"),
                        Status = "In Progress",
                        Priority = Priority.High,
                        Completion = 50
                    },
                    new EmployeeTask {
                        ID = 21,
                        Subject = "Non-Compete Agreements",
                        StartDate = DateTime.Parse("2013/03/12"),
                        DueDate = DateTime.Parse("2013/03/14"),
                        Status = "Completed",
                        Priority = Priority.Low,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 50,
                        Subject = "Give Final Approval for Refunds",
                        StartDate = DateTime.Parse("2013/05/05"),
                        DueDate = DateTime.Parse("2013/05/15"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    }
                },
                State = "California",
                StateID = 5,
                HomePhone = "(310) 555-4547",
                Skype = "oliviapDXskype",
                Picture = "../../images/employees/09.png"
            },
            new Employee {
                ID = 3,
                FirstName = "Robert",
                LastName = "Reagan",
                Phone = "(818) 555-2387",
                Prefix = "Mr.",
                Position = "CMO",
                BirthDate = DateTime.Parse("1974/09/07"),
                HireDate = DateTime.Parse("2002/11/08"),
                Notes = "Robert was recently voted the CMO of the year by CMO Magazine. He is a proud member of the DevAV Management Team.\r\n\r\nRobert is a championship BBQ chef, so when you get the chance ask him for his secret recipe.",
                Address = "4 Westmoreland Pl.",
                City = "Bentonville",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 16,
                        Subject = "Deliver R&D Plans for 2013",
                        StartDate = DateTime.Parse("2013/03/01"),
                        DueDate = DateTime.Parse("2013/03/10"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 74,
                        Subject = "Decide on Mobile Devices to Use in the Field",
                        StartDate = DateTime.Parse("2013/07/30"),
                        DueDate = DateTime.Parse("2013/08/02"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 78,
                        Subject = "Try New Touch-Enabled WinForms Apps",
                        StartDate = DateTime.Parse("2013/08/11"),
                        DueDate = DateTime.Parse("2013/08/15"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 117,
                        Subject = "Approval on Converting to New HDMI Specification",
                        StartDate = DateTime.Parse("2014/01/11"),
                        DueDate = DateTime.Parse("2014/01/31"),
                        Status = "Deferred",
                        Priority = Priority.Normal,
                        Completion = 75
                    }
                },
                Email = "robertr@dx-email.com",
                State = "Arkansas",
                StateID = 4,
                HomePhone = "(818) 555-2438",
                Skype = "robertrDXskype",
                Picture = "../../images/employees/03.png"
            },
            new Employee {
                ID = 4,
                FirstName = "Greta",
                LastName = "Sims",
                Phone = "(818) 555-6546",
                Prefix = "Ms.",
                Position = "HR Manager",
                BirthDate = DateTime.Parse("1977/11/22"),
                HireDate = DateTime.Parse("1998/04/23"),
                Notes = "Greta has been DevAV's HR Manager since 2003. She joined DevAV from Sonee Corp.\r\n\r\nGreta is currently training for the NYC marathon. Her best marathon time is 4 hours. Go Greta.",
                Email = "gretas@dx-email.com",
                Address = "1700 S Grandview Dr.",
                City = "Atlanta",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 20,
                        Subject = "Approve Hiring of John Jeffers",
                        StartDate = DateTime.Parse("2013/03/02"),
                        DueDate = DateTime.Parse("2013/03/12"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 23,
                        Subject = "Update Employee Files with New NDA",
                        StartDate = DateTime.Parse("2013/03/16"),
                        DueDate = DateTime.Parse("2013/03/26"),
                        Status = "Need Assistance",
                        Priority = Priority.Normal,
                        Completion = 90
                    },
                    new EmployeeTask {
                        ID = 40,
                        Subject = "Provide New Health Insurance Docs",
                        StartDate = DateTime.Parse("2013/03/28"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    }
                },
                State = "Georgia",
                StateID = 11,
                HomePhone = "(818) 555-0976",
                Skype = "gretasDXskype",
                Picture = "../../images/employees/04.png"
            },
            new Employee {
                ID = 5,
                FirstName = "Brett",
                LastName = "Wade",
                Phone = "(626) 555-0358",
                Prefix = "Mr.",
                Position = "IT Manager",
                BirthDate = DateTime.Parse("1968/12/01"),
                HireDate = DateTime.Parse("2009/03/06"),
                Notes = "Brett came to DevAv from Microsoft and has led our IT department since 2012.\r\n\r\nWhen he is not working hard for DevAV, he coaches Little League (he was a high school pitcher).",
                Email = "brettw@dx-email.com",
                Address = "1120 Old Mill Rd.",
                City = "Boise",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 2,
                        Subject = "Prepare 3013 Marketing Plan",
                        StartDate = DateTime.Parse("2013/01/01"),
                        DueDate = DateTime.Parse("2013/01/31"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 11,
                        Subject = "Rollout of New Website and Marketing Brochures",
                        StartDate = DateTime.Parse("2013/02/20"),
                        DueDate = DateTime.Parse("2013/02/28"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 15,
                        Subject = "Review 2012 Sales Report and Approve 2013 Plans",
                        StartDate = DateTime.Parse("2013/02/23"),
                        DueDate = DateTime.Parse("2013/02/28"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 81,
                        Subject = "Review Site Up-Time Report",
                        StartDate = DateTime.Parse("2013/08/24"),
                        DueDate = DateTime.Parse("2013/08/30"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    }
                },
                State = "Idaho",
                StateID = 13,
                HomePhone = "(626) 555-5985",
                Skype = "brettwDXskype",
                Picture = "../../images/employees/05.png"
            },
            new Employee {
                ID = 6,
                FirstName = "Sandra",
                LastName = "Johnson",
                Phone = "(562) 555-2082",
                Prefix = "Mrs.",
                Position = "Controller",
                BirthDate = DateTime.Parse("1974/11/15"),
                HireDate = DateTime.Parse("2005/05/11"),
                Notes = "Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you've not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.",
                Email = "sandraj@dx-email.com",
                Address = "4600 N Virginia Rd.",
                City = "Beaver",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 20,
                        Subject = "Approve Hiring of John Jeffers",
                        StartDate = DateTime.Parse("2013/03/02"),
                        DueDate = DateTime.Parse("2013/03/12"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 23,
                        Subject = "Update Employee Files with New NDA",
                        StartDate = DateTime.Parse("2013/03/16"),
                        DueDate = DateTime.Parse("2013/03/26"),
                        Status = "Need Assistance",
                        Priority = Priority.Normal,
                        Completion = 90
                    },
                    new EmployeeTask {
                        ID = 40,
                        Subject = "Provide New Health Insurance Docs",
                        StartDate = DateTime.Parse("2013/03/28"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 138,
                        Subject = "Review HR Budget Company Wide",
                        StartDate = DateTime.Parse("2014/03/20"),
                        DueDate = DateTime.Parse("2014/03/25"),
                        Status = "In Progress",
                        Priority = Priority.Normal,
                        Completion = 40
                    },
                    new EmployeeTask {
                        ID = 145,
                        Subject = "Final Budget Review",
                        StartDate = DateTime.Parse("2014/03/26"),
                        DueDate = DateTime.Parse("2014/03/27"),
                        Status = "In Progress",
                        Priority = Priority.High,
                        Completion = 25
                    }
                },
                State = "Utah",
                StateID = 44,
                HomePhone = "(562) 555-8272",
                Skype = "sandrajDXskype",
                Picture = "../../images/employees/06.png"
            },
            new Employee {
                ID = 7,
                FirstName = "Kevin",
                LastName = "Carter",
                Phone = "(213) 555-2840",
                Prefix = "Mr.",
                Position = "Shipping Manager",
                BirthDate = DateTime.Parse("1978/01/09"),
                HireDate = DateTime.Parse("2009/08/11"),
                Notes = "Kevin is our hard-working shipping manager and has been helping that department work like clockwork for 18 months.\r\n\r\nWhen not in the office, he is usually on the basketball court playing pick-up games.",
                Email = "kevinc@dx-email.com",
                Address = "424 N Main St.",
                City = "San Diego",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 24,
                        Subject = "Sign Updated NDA",
                        StartDate = DateTime.Parse("2013/03/20"),
                        DueDate = DateTime.Parse("2013/03/25"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 55,
                        Subject = "Review Overtime Report",
                        StartDate = DateTime.Parse("2013/06/10"),
                        DueDate = DateTime.Parse("2013/06/14"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 71,
                        Subject = "Upgrade Server Hardware",
                        StartDate = DateTime.Parse("2013/07/22"),
                        DueDate = DateTime.Parse("2013/07/31"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 72,
                        Subject = "Upgrade Personal Computers",
                        StartDate = DateTime.Parse("2013/07/24"),
                        DueDate = DateTime.Parse("2014/04/30"),
                        Status = "In Progress",
                        Priority = Priority.Normal,
                        Completion = 85
                    }
                },
                State = "California",
                StateID = 5,
                HomePhone = "(213) 555-8038",
                Skype = "kevincDXskype",
                Picture = "../../images/employees/07.png"
            },
            new Employee {
                ID = 8,
                FirstName = "Cynthia",
                LastName = "Stanwick",
                Phone = "(818) 555-6655",
                Prefix = "Ms.",
                Position = "HR Assistant",
                BirthDate = DateTime.Parse("1985/06/05"),
                HireDate = DateTime.Parse("2008/03/24"),
                Notes = "Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was recently awarded employee of the month. Way to go Cindy!",
                Email = "cindys@dx-email.com",
                Address = "2211 Bonita Dr.",
                City = "Little Rock",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 1,
                        Subject = "Prepare 2013 Financial",
                        StartDate = DateTime.Parse("2013/01/15"),
                        DueDate = DateTime.Parse("2013/01/31"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 25,
                        Subject = "Sign Updated NDA",
                        StartDate = DateTime.Parse("2013/03/20"),
                        DueDate = DateTime.Parse("2013/03/25"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 35,
                        Subject = "Update Revenue Projections",
                        StartDate = DateTime.Parse("2013/03/24"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 99,
                        Subject = "Submit D&B Number to ISP for Credit Approval",
                        StartDate = DateTime.Parse("2013/11/04"),
                        DueDate = DateTime.Parse("2013/11/07"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    }
                },
                State = "Arkansas",
                StateID = 4,
                HomePhone = "(818) 555-6808",
                Skype = "cindysDXskype",
                Picture = "../../images/employees/08.png"
            },
            new Employee {
                ID = 9,
                FirstName = "Kent",
                LastName = "Samuelson",
                Phone = "(562) 555-9282",
                Prefix = "Dr.",
                Position = "Ombudsman",
                BirthDate = DateTime.Parse("1972/09/11"),
                HireDate = DateTime.Parse("2009/04/22"),
                Notes = "As our ombudsman, Kent is on the front-lines solving customer problems and helping our partners address issues out in the field.    He is a classically trained musician and is a member of the Chamber Orchestra.",
                Email = "kents@dx-email.com",
                Address = "12100 Mora Dr",
                City = "St. Louis",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 12,
                        Subject = "Update Sales Strategy Documents",
                        StartDate = DateTime.Parse("2013/02/20"),
                        DueDate = DateTime.Parse("2013/02/22"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 26,
                        Subject = "Sign Updated NDA",
                        StartDate = DateTime.Parse("2013/03/20"),
                        DueDate = DateTime.Parse("2013/03/25"),
                        Status = "Need Assistance",
                        Priority = Priority.Urgent,
                        Completion = 25
                    },
                    new EmployeeTask {
                        ID = 36,
                        Subject = "Review Revenue Projections",
                        StartDate = DateTime.Parse("2013/03/25"),
                        DueDate = DateTime.Parse("2013/04/06"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 60,
                        Subject = "Refund Request Template",
                        StartDate = DateTime.Parse("2013/06/17"),
                        DueDate = DateTime.Parse("2014/04/01"),
                        Status = "Deferred",
                        Priority = Priority.Normal,
                        Completion = 0
                    }
                },
                State = "Missouri",
                StateID = 26,
                Picture = "../../images/employees/02.png",
                HomePhone = "(562) 555-1328",
                Skype = "kentsDXskype"
            },
            new Employee {
                ID = 10,
                FirstName = "Taylor",
                LastName = "Riley",
                Phone = "(310) 555-7276",
                Prefix = "Mr.",
                Position = "Network Admin",
                BirthDate = DateTime.Parse("1982/08/14"),
                HireDate = DateTime.Parse("2012/04/14"),
                Notes = "If you are like the rest of us at DevAV, then you've probably reached out for help from Taylor. He does a great job as a member of our IT department.",
                Email = "taylorr@dx-email.com",
                Address = "7776 Torreyson Dr",
                City = "San Jose",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 1,
                        Subject = "Prepare 2013 Financial",
                        StartDate = DateTime.Parse("2013/01/15"),
                        DueDate = DateTime.Parse("2013/01/31"),
                        Status = "Completed",
                        Priority = Priority.High,
                        Completion = 100
                    },
                                    new EmployeeTask {
                        ID = 25,
                        Subject = "Sign Updated NDA",
                        StartDate = DateTime.Parse("2013/03/20"),
                        DueDate = DateTime.Parse("2013/03/25"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 35,
                        Subject = "Update Revenue Projections",
                        StartDate = DateTime.Parse("2013/03/24"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    }
                },
                State = "California",
                StateID = 5,
                HomePhone = "(310) 555-9712",
                Skype = "taylorrDXskype"
            },
            new Employee {
                ID = 11,
                FirstName = "Sam",
                LastName = "Hill",
                Phone = "(800) 555-2797",
                Prefix = "Mr.",
                Position = "Sales Assistant",
                BirthDate = DateTime.Parse("1984/02/17"),
                HireDate = DateTime.Parse("2012/02/01"),
                Notes = "Sammy is proud to be a member of the DevAV team. He joined the team in 2012 and has been in the sales department from the beginning.\r\n\r\nHe has just picked up golf so you can find him on the links every weekend.",
                Email = "sammyh@dx-email.com",
                Address = "645 Prospect Crescent",
                City = "Warner Robbins",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 35,
                        Subject = "Update Revenue Projections",
                        StartDate = DateTime.Parse("2013/03/24"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    }
                },
                State = "Georgia",
                StateID = 11,
                HomePhone = "(800) 555-6377",
                Skype = "sammyhDXskype"
            },
            new Employee {
                ID = 12,
                FirstName = "Kelly",
                LastName = "Rodriguez",
                Phone = "(800) 595-3232",
                Prefix = "Ms.",
                Position = "Support Assistant",
                BirthDate = DateTime.Parse("1988/05/11"),
                HireDate = DateTime.Parse("2012/10/13"),
                Notes = "Kelly loves people and that's why she joined DevAV's support department. One of the funniest people in the company, she does stand-up on the weekends at the Laugh Factory.",
                Email = "kellyr@dx-email.com",
                Address = "1601 W Mountain St.",
                City = "Compton",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 25,
                        Subject = "Sign Updated NDA",
                        StartDate = DateTime.Parse("2013/03/20"),
                        DueDate = DateTime.Parse("2013/03/25"),
                        Status = "Completed",
                        Priority = Priority.Urgent,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 35,
                        Subject = "Update Revenue Projections",
                        StartDate = DateTime.Parse("2013/03/24"),
                        DueDate = DateTime.Parse("2013/04/07"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    }
                },
                State = "California",
                StateID = 5,
                HomePhone = "(800) 595-4327",
                Skype = "kellyrDXskype"
            },
            new Employee {
                ID = 13,
                FirstName = "Natalie",
                LastName = "Maguirre",
                Phone = "(612) 304-6073",
                Prefix = "Mrs.",
                Position = "Trainer",
                BirthDate = DateTime.Parse("1977/10/07"),
                HireDate = DateTime.Parse("2008/06/19"),
                Notes = "Natalie travels the US and teaches our partners how to explain the benefits of our products to customers.\r\n\r\nShe is a proud wife and mom and volunteers her time at the elementary school.",
                Email = "nataliem@dx-email.com",
                Address = "6400 E Bixby Hill Rd",
                City = "Las Vegas",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 60,
                        Subject = "Refund Request Template",
                        StartDate = DateTime.Parse("2013/06/17"),
                        DueDate = DateTime.Parse("2014/04/01"),
                        Status = "Deferred",
                        Priority = Priority.Normal,
                        Completion = 0
                    }
                },
                State = "Nevada",
                StateID = 29,
                HomePhone = "(612) 304-2265",
                Skype = "nataliemDXskype"
            },
            new Employee {
                ID = 14,
                FirstName = "Walter",
                LastName = "Hobbs",
                Phone = "(800) 955-2292",
                Prefix = "Mr.",
                Position = "Programmer",
                BirthDate = DateTime.Parse("1984/12/24"),
                HireDate = DateTime.Parse("2011/02/17"),
                Notes = "Walter has been developing apps and websites for DevAV since 2011. His passion is software and if you ever walk by his desk, you'll know why.\r\n\r\nWally once worked 72 hours straight - writing code and fixing bugs.",
                Email = "walterh@dx-email.com",
                Address = "10385 Shadow Oak Dr",
                City = "Eagle",
                Tasks = new[] {
                    new EmployeeTask {
                        ID = 20,
                        Subject = "Approve Hiring of John Jeffers",
                        StartDate = DateTime.Parse("2013/03/02"),
                        DueDate = DateTime.Parse("2013/03/12"),
                        Status = "Completed",
                        Priority = Priority.Normal,
                        Completion = 100
                    },
                    new EmployeeTask {
                        ID = 23,
                        Subject = "Update Employee Files with New NDA",
                        StartDate = DateTime.Parse("2013/03/16"),
                        DueDate = DateTime.Parse("2013/03/26"),
                        Status = "Need Assistance",
                        Priority = Priority.Normal,
                        Completion = 90
                    }
                },
                State = "Idaho",
                StateID = 13,
                HomePhone = "(800) 955-7848",
                Skype = "walterhDXskype"
            }
        };
    }
}
