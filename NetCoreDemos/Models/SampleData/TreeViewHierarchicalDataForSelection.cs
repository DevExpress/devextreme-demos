using System;
using System.Linq;
using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.TreeView;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewHierarchicalDataForSelection {
        public static readonly IEnumerable<Employee> Employees = new List<Employee> {
            new Employee {
                ID = 1,
                FullName = "John Heart",
                Prefix = "Dr.",
                Position = "CEO",
                Expanded = true,
                Items = new List<Employee> {
                    new Employee {
                        ID = 2,
                        FullName = "Samantha Bright",
                        Prefix = "Dr.",
                        Position = "COO",
                        Expanded = true,
                        Items = new List<Employee> {
                            new Employee {
                                ID = 3,
                                FullName = "Kevin Carter",
                                Prefix = "Mr.",
                                Position = "Shipping Manager",
                            },
                            new Employee {
                                ID = 14,
                                FullName = "Victor Norris",
                                Prefix = "Mr.",
                                Selected = true,
                                Position = "Shipping Assistant"
                            }
                        }
                    },
                    new Employee {
                        ID = 4,
                        FullName = "Brett Wade",
                        Prefix = "Mr.",
                        Position = "IT Manager",
                        Expanded = true,
                        Items = new List<Employee> {
                            new Employee {
                                ID = 5,
                                FullName = "Amelia Harper",
                                Prefix = "Mrs.",
                                Position = "Network Admin"
                            },
                            new Employee {
                                ID = 6,
                                FullName = "Wally Hobbs",
                                Prefix = "Mr.",
                                Position = "Programmer"
                            },
                            new Employee {
                                ID = 7,
                                FullName = "Brad Jameson",
                                Prefix = "Mr.",
                                Position = "Programmer"
                            },
                            new Employee {
                                ID = 8,
                                FullName = "Violet Bailey",
                                Prefix = "Ms.",
                                Position = "Jr Graphic Designer",
                            }
                        }
                    },
                    new Employee {
                        ID = 9,
                        FullName = "Barb Banks",
                        Prefix = "Mrs.",
                        Position = "Support Manager",
                        Expanded = true,
                        Items = new List<Employee> {
                            new Employee {
                                ID = 10,
                                FullName = "Kelly Rodriguez",
                                Prefix = "Ms.",
                                Position = "Support Assistant"
                            },
                            new Employee {
                                ID = 11,
                                FullName = "James Anderson",
                                Prefix = "Mr.",
                                Position = "Support Assistant"
                            }
                        }
                    }
                }
            }
        };
    }
}
