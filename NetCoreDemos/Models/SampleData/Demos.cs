using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<Demo> Demos = new[] {
            new Demo {
                Id = 1,
                ParentId = 0,
                Name = "Data Grid",
                Status = 1,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/01/11"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 2,
                ParentId = 1,
                Name = "Data Binding",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/08/19"),
                ModifiedDate = DateTime.Parse("2014/08/19"),
                Hidden = false
            },
            new Demo {
                Id = 3,
                ParentId = 2,
                Name = "Local Data Source",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/08/19"),
                ModifiedDate = DateTime.Parse("2016/04/16"),
                Hidden = false
            },
            new Demo {
                Id = 4,
                ParentId = 2,
                Name = "Ajax Request",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/07/28"),
                ModifiedDate = DateTime.Parse("2016/09/07"),
                Hidden = false
            },
            new Demo {
                Id = 5,
                ParentId = 2,
                Name = "OData Service",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/10/19"),
                ModifiedDate = DateTime.Parse("2016/10/06"),
                Hidden = false
            },
            new Demo {
                Id = 6,
                ParentId = 2,
                Name = "Custom Data Source",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/04/24"),
                ModifiedDate = DateTime.Parse("2015/04/24"),
                Hidden = false
            },
            new Demo {
                Id = 7,
                ParentId = 2,
                Name = "Web API Service",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/11/05"),
                ModifiedDate = DateTime.Parse("2016/11/05"),
                Hidden = false
            },
            new Demo {
                Id = 8,
                ParentId = 1,
                Name = "Paging and Scrolling",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/09/05"),
                ModifiedDate = DateTime.Parse("2014/09/05"),
                Hidden = false
            },
            new Demo {
                Id = 9,
                ParentId = 8,
                Name = "Record Paging",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/12/09"),
                ModifiedDate = DateTime.Parse("2016/10/07"),
                Hidden = false
            },
            new Demo {
                Id = 10,
                ParentId = 8,
                Name = "Virtual Scrolling",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/09/05"),
                ModifiedDate = DateTime.Parse("2014/09/05"),
                Hidden = false
            },
            new Demo {
                Id = 11,
                ParentId = 8,
                Name = "Infinite Scrolling",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/09/23"),
                ModifiedDate = DateTime.Parse("2015/09/23"),
                Hidden = false
            },
            new Demo {
                Id = 12,
                ParentId = 1,
                Name = "Editing",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2014/04/04"),
                ModifiedDate = DateTime.Parse("2014/11/26"),
                Hidden = false
            },
            new Demo {
                Id = 13,
                ParentId = 12,
                Name = "Row Editing and Editing Events",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/07/01"),
                ModifiedDate = DateTime.Parse("2016/09/26"),
                Hidden = false
            },
            new Demo {
                Id = 14,
                ParentId = 12,
                Name = "Batch Editing",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/04/29"),
                ModifiedDate = DateTime.Parse("2014/09/03"),
                Hidden = false
            },
            new Demo {
                Id = 15,
                ParentId = 12,
                Name = "Cell Editing and Editing API",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/07/25"),
                ModifiedDate = DateTime.Parse("2015/12/25"),
                Hidden = false
            },
            new Demo {
                Id = 16,
                ParentId = 12,
                Name = "Data Validation",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2016/03/05"),
                ModifiedDate = DateTime.Parse("2016/09/26"),
                Hidden = false
            },
            new Demo {
                Id = 17,
                ParentId = 12,
                Name = "Form Editing",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/04/04"),
                ModifiedDate = DateTime.Parse("2015/07/24"),
                Hidden = false
            },
            new Demo {
                Id = 18,
                ParentId = 1,
                Name = "Grouping",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/09/29"),
                ModifiedDate = DateTime.Parse("2015/09/29"),
                Hidden = false
            },
            new Demo {
                Id = 19,
                ParentId = 18,
                Name = "Record Grouping",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/03/14"),
                ModifiedDate = DateTime.Parse("2016/03/14"),
                Hidden = false
            },
            new Demo {
                Id = 20,
                ParentId = 18,
                Name = "Remote Grouping",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/09/29"),
                ModifiedDate = DateTime.Parse("2016/12/19"),
                Hidden = false
            },
            new Demo {
                Id = 21,
                ParentId = 1,
                Name = "Filtering and Sorting",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/10/12"),
                ModifiedDate = DateTime.Parse("2014/10/12"),
                Hidden = false
            },
            new Demo {
                Id = 22,
                ParentId = 21,
                Name = "Multiple Sorting",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2016/12/23"),
                ModifiedDate = DateTime.Parse("2016/12/23"),
                Hidden = false
            },
            new Demo {
                Id = 23,
                ParentId = 21,
                Name = "Filtering",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/07/28"),
                ModifiedDate = DateTime.Parse("2015/10/23"),
                Hidden = false
            },
            new Demo {
                Id = 24,
                ParentId = 21,
                Name = "Filtering API",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/08/05"),
                ModifiedDate = DateTime.Parse("2016/11/12"),
                Hidden = false
            },
            new Demo {
                Id = 25,
                ParentId = 1,
                Name = "Selection",
                Status = 1,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/11/21"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 26,
                ParentId = 25,
                Name = "Row Selection",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/12/08"),
                ModifiedDate = DateTime.Parse("2016/12/08"),
                Hidden = false
            },
            new Demo {
                Id = 27,
                ParentId = 25,
                Name = "Multiple Record Selection Modes",
                Status = 1,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 28,
                ParentId = 25,
                Name = "Multiple Record Selection API",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2015/11/21"),
                ModifiedDate = DateTime.Parse("2015/11/21"),
                Hidden = false
            },
            new Demo {
                Id = 29,
                ParentId = 25,
                Name = "Deferred Selection",
                Status = 2,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/12/25"),
                Hidden = false
            },
            new Demo {
                Id = 30,
                ParentId = 1,
                Name = "Columns",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/01/11"),
                ModifiedDate = DateTime.Parse("2014/01/11"),
                Hidden = false
            },
            new Demo {
                Id = 31,
                ParentId = 30,
                Name = "Column Customization",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/05/28"),
                ModifiedDate = DateTime.Parse("2016/05/28"),
                Hidden = false
            },
            new Demo {
                Id = 32,
                ParentId = 30,
                Name = "Columns based on a Data Source",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/01/11"),
                ModifiedDate = DateTime.Parse("2016/06/15"),
                Hidden = false
            },
            new Demo {
                Id = 33,
                ParentId = 30,
                Name = "Multi-Row Headers (Bands)",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/02/23"),
                ModifiedDate = DateTime.Parse("2014/02/23"),
                Hidden = false
            },
            new Demo {
                Id = 34,
                ParentId = 1,
                Name = "State Persistence",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/03/31"),
                ModifiedDate = DateTime.Parse("2015/03/31"),
                Hidden = false
            },
            new Demo {
                Id = 35,
                ParentId = 34,
                Name = "State Persistence",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/08/24"),
                ModifiedDate = DateTime.Parse("2016/11/02"),
                Hidden = false
            },
            new Demo {
                Id = 36,
                ParentId = 1,
                Name = "Appearance",
                Status = 1,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/07/16"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 37,
                ParentId = 36,
                Name = "Appearance",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/07/16"),
                ModifiedDate = DateTime.Parse("2014/07/16"),
                Hidden = false
            },
            new Demo {
                Id = 38,
                ParentId = 36,
                Name = "Right-To-Left Support",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/05/29"),
                ModifiedDate = DateTime.Parse("2016/07/12"),
                Hidden = false
            },
            new Demo {
                Id = 39,
                ParentId = 36,
                Name = "Customize Command Columns",
                Status = 2,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 40,
                ParentId = 1,
                Name = "Templates",
                Status = 1,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/05/07"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 41,
                ParentId = 40,
                Name = "Column Template",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/05/07"),
                ModifiedDate = DateTime.Parse("2014/05/07"),
                Hidden = false
            },
            new Demo {
                Id = 42,
                ParentId = 40,
                Name = "Row Template",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/06/20"),
                ModifiedDate = DateTime.Parse("2016/10/07"),
                Hidden = false
            },
            new Demo {
                Id = 43,
                ParentId = 40,
                Name = "Column 3rd Party Engine Template",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/03/20"),
                ModifiedDate = DateTime.Parse("2016/03/20"),
                Hidden = false
            },
            new Demo {
                Id = 44,
                ParentId = 40,
                Name = "Row 3rd Party Engine Template",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/08/14"),
                ModifiedDate = DateTime.Parse("2014/08/14"),
                Hidden = false
            },
            new Demo {
                Id = 45,
                ParentId = 40,
                Name = "Cell Customization",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2016/08/29"),
                ModifiedDate = DateTime.Parse("2016/12/05"),
                Hidden = false
            },
            new Demo {
                Id = 46,
                ParentId = 40,
                Name = "Toolbar Customization",
                Status = 2,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 47,
                ParentId = 1,
                Name = "Data Summaries",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/01/14"),
                ModifiedDate = DateTime.Parse("2014/01/14"),
                Hidden = false
            },
            new Demo {
                Id = 48,
                ParentId = 47,
                Name = "Grid Summaries",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/04/01"),
                ModifiedDate = DateTime.Parse("2016/06/04"),
                Hidden = false
            },
            new Demo {
                Id = 49,
                ParentId = 47,
                Name = "Group Summaries",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/01/02"),
                ModifiedDate = DateTime.Parse("2016/01/02"),
                Hidden = false
            },
            new Demo {
                Id = 50,
                ParentId = 47,
                Name = "Custom Summaries",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2014/01/14"),
                ModifiedDate = DateTime.Parse("2014/01/14"),
                Hidden = false
            },
            new Demo {
                Id = 51,
                ParentId = 1,
                Name = "Master-Detail",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/02/09"),
                ModifiedDate = DateTime.Parse("2016/07/22"),
                Hidden = false
            },
            new Demo {
                Id = 52,
                ParentId = 51,
                Name = "Master-Detail View",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/02/09"),
                ModifiedDate = DateTime.Parse("2014/02/09"),
                Hidden = false
            },
            new Demo {
                Id = 53,
                ParentId = 51,
                Name = "Master-Detail API",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/04/27"),
                ModifiedDate = DateTime.Parse("2016/12/15"),
                Hidden = false
            },
            new Demo {
                Id = 54,
                ParentId = 1,
                Name = "Export",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/06/06"),
                ModifiedDate = DateTime.Parse("2016/12/15"),
                Hidden = false
            },
            new Demo {
                Id = 55,
                ParentId = 54,
                Name = "Export to Excel",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/07/09"),
                ModifiedDate = DateTime.Parse("2016/10/27"),
                Hidden = false
            },
            new Demo {
                Id = 56,
                ParentId = 1,
                Name = "Adaptability",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/04/04"),
                ModifiedDate = DateTime.Parse("2015/10/21"),
                Hidden = false
            },
            new Demo {
                Id = 57,
                ParentId = 56,
                Name = "Grid Adaptability Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/12/15"),
                ModifiedDate = DateTime.Parse("2015/12/15"),
                Hidden = false
            },
            new Demo {
                Id = 58,
                ParentId = 56,
                Name = "Grid Columns Hiding Priority",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/01/30"),
                ModifiedDate = DateTime.Parse("2016/10/30"),
                Hidden = false
            },
            new Demo {
                Id = 59,
                ParentId = 0,
                Name = "Pivot Grid",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/02/24"),
                ModifiedDate = DateTime.Parse("2014/03/14"),
                Hidden = false
            },
            new Demo {
                Id = 60,
                ParentId = 59,
                Name = "Data Binding",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2014/02/24"),
                ModifiedDate = DateTime.Parse("2014/02/24"),
                Hidden = false
            },
            new Demo {
                Id = 61,
                ParentId = 60,
                Name = "Local Data Source",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2016/04/21"),
                ModifiedDate = DateTime.Parse("2016/10/22"),
                Hidden = false
            },
            new Demo {
                Id = 62,
                ParentId = 60,
                Name = "OLAP Data Source",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/02/24"),
                ModifiedDate = DateTime.Parse("2014/02/24"),
                Hidden = false
            },
            new Demo {
                Id = 63,
                ParentId = 59,
                Name = "Features",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/06/29"),
                ModifiedDate = DateTime.Parse("2014/06/29"),
                Hidden = false
            },
            new Demo {
                Id = 64,
                ParentId = 63,
                Name = "Field Chooser",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/11/05"),
                ModifiedDate = DateTime.Parse("2015/11/05"),
                Hidden = false
            },
            new Demo {
                Id = 65,
                ParentId = 63,
                Name = "Field Panel",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/08/23"),
                ModifiedDate = DateTime.Parse("2014/08/23"),
                Hidden = false
            },
            new Demo {
                Id = 66,
                ParentId = 63,
                Name = "Running Totals",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/03/20"),
                ModifiedDate = DateTime.Parse("2016/03/20"),
                Hidden = false
            },
            new Demo {
                Id = 67,
                ParentId = 63,
                Name = "Summary Display Modes",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2014/06/29"),
                ModifiedDate = DateTime.Parse("2014/06/29"),
                Hidden = false
            },
            new Demo {
                Id = 68,
                ParentId = 63,
                Name = "Drill Down",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/01/15"),
                ModifiedDate = DateTime.Parse("2016/01/11"),
                Hidden = false
            },
            new Demo {
                Id = 69,
                ParentId = 63,
                Name = "Virtual Scrolling",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/08/19"),
                ModifiedDate = DateTime.Parse("2015/08/19"),
                Hidden = false
            },
            new Demo {
                Id = 70,
                ParentId = 63,
                Name = "State Persistence",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/06/10"),
                ModifiedDate = DateTime.Parse("2016/06/10"),
                Hidden = false
            },
            new Demo {
                Id = 71,
                ParentId = 63,
                Name = "Chart Integration",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/04/23"),
                ModifiedDate = DateTime.Parse("2016/05/17"),
                Hidden = false
            },
            new Demo {
                Id = 72,
                ParentId = 63,
                Name = "Layout Customization",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/03/04"),
                ModifiedDate = DateTime.Parse("2015/12/31"),
                Hidden = false
            },
            new Demo {
                Id = 73,
                ParentId = 0,
                Name = "Tree List",
                Status = 2,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = true
            },
            new Demo {
                Id = 74,
                ParentId = 73,
                Name = "Data Binding",
                Status = 2,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/12/18"),
                Hidden = true
            },
            new Demo {
                Id = 75,
                ParentId = 74,
                Name = "Local Data Source",
                Status = 2,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = true
            },
            new Demo {
                Id = 76,
                ParentId = 0,
                Name = "Charts",
                Status = 1,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2014/01/07"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 77,
                ParentId = 76,
                Name = "Data Binding",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/11/14"),
                ModifiedDate = DateTime.Parse("2015/03/22"),
                Hidden = false
            },
            new Demo {
                Id = 78,
                ParentId = 77,
                Name = "Local Data Source",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/03/12"),
                ModifiedDate = DateTime.Parse("2016/03/12"),
                Hidden = false
            },
            new Demo {
                Id = 79,
                ParentId = 77,
                Name = "Ajax Request",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/11/21"),
                ModifiedDate = DateTime.Parse("2016/11/22"),
                Hidden = false
            },
            new Demo {
                Id = 80,
                ParentId = 77,
                Name = "Client-Side Data Processing",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2016/10/05"),
                ModifiedDate = DateTime.Parse("2016/10/05"),
                Hidden = false
            },
            new Demo {
                Id = 81,
                ParentId = 77,
                Name = "Server-Side Data Processing",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/07/17"),
                ModifiedDate = DateTime.Parse("2015/07/17"),
                Hidden = false
            },
            new Demo {
                Id = 82,
                ParentId = 76,
                Name = "Bar Series",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2014/02/06"),
                ModifiedDate = DateTime.Parse("2014/02/06"),
                Hidden = false
            },
            new Demo {
                Id = 83,
                ParentId = 82,
                Name = "Standard Bar",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/01/04"),
                ModifiedDate = DateTime.Parse("2016/08/11"),
                Hidden = false
            },
            new Demo {
                Id = 84,
                ParentId = 82,
                Name = "Side-by-Side Bar",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/04/14"),
                ModifiedDate = DateTime.Parse("2014/12/07"),
                Hidden = false
            },
            new Demo {
                Id = 85,
                ParentId = 82,
                Name = "Stacked Bar",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/10/23"),
                ModifiedDate = DateTime.Parse("2016/12/09"),
                Hidden = false
            },
            new Demo {
                Id = 86,
                ParentId = 82,
                Name = "Full Stacked Bar",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/02/06"),
                ModifiedDate = DateTime.Parse("2014/02/06"),
                Hidden = false
            },
            new Demo {
                Id = 87,
                ParentId = 82,
                Name = "Side-by-Side Stacked Bar",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/08/06"),
                ModifiedDate = DateTime.Parse("2016/08/06"),
                Hidden = false
            },
            new Demo {
                Id = 88,
                ParentId = 82,
                Name = "Side-by-Side Full-Stacked Bar",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/11/12"),
                ModifiedDate = DateTime.Parse("2016/11/22"),
                Hidden = false
            },
            new Demo {
                Id = 89,
                ParentId = 82,
                Name = "Auto-Calculated Bar Width",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/06/02"),
                ModifiedDate = DateTime.Parse("2016/11/07"),
                Hidden = false
            },
            new Demo {
                Id = 90,
                ParentId = 82,
                Name = "Custom Bar Width",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/10/26"),
                ModifiedDate = DateTime.Parse("2015/06/12"),
                Hidden = false
            },
            new Demo {
                Id = 91,
                ParentId = 76,
                Name = "Line And Point Series",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/01/16"),
                ModifiedDate = DateTime.Parse("2015/12/15"),
                Hidden = false
            },
            new Demo {
                Id = 92,
                ParentId = 91,
                Name = "Line",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/03/08"),
                ModifiedDate = DateTime.Parse("2015/03/08"),
                Hidden = false
            },
            new Demo {
                Id = 93,
                ParentId = 91,
                Name = "Spline",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/04/03"),
                ModifiedDate = DateTime.Parse("2016/05/23"),
                Hidden = false
            },
            new Demo {
                Id = 94,
                ParentId = 91,
                Name = "Scatter",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/10/24"),
                ModifiedDate = DateTime.Parse("2016/05/08"),
                Hidden = false
            },
            new Demo {
                Id = 95,
                ParentId = 91,
                Name = "Step Line",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/10/19"),
                ModifiedDate = DateTime.Parse("2015/10/19"),
                Hidden = false
            },
            new Demo {
                Id = 96,
                ParentId = 91,
                Name = "Bubble",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/01/16"),
                ModifiedDate = DateTime.Parse("2015/01/16"),
                Hidden = false
            },
            new Demo {
                Id = 97,
                ParentId = 76,
                Name = "Financial Series",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/03/10"),
                ModifiedDate = DateTime.Parse("2015/02/21"),
                Hidden = false
            },
            new Demo {
                Id = 98,
                ParentId = 97,
                Name = "Stock",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/12/19"),
                ModifiedDate = DateTime.Parse("2016/12/30"),
                Hidden = false
            },
            new Demo {
                Id = 99,
                ParentId = 97,
                Name = "Candlestick",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/09/09"),
                ModifiedDate = DateTime.Parse("2014/09/09"),
                Hidden = false
            },
            new Demo {
                Id = 100,
                ParentId = 76,
                Name = "Area Series",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/04/07"),
                ModifiedDate = DateTime.Parse("2016/06/05"),
                Hidden = false
            },
            new Demo {
                Id = 101,
                ParentId = 100,
                Name = "Area",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/05/03"),
                ModifiedDate = DateTime.Parse("2016/10/27"),
                Hidden = false
            },
            new Demo {
                Id = 102,
                ParentId = 100,
                Name = "Spline Area",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/04/07"),
                ModifiedDate = DateTime.Parse("2016/03/21"),
                Hidden = false
            },
            new Demo {
                Id = 103,
                ParentId = 100,
                Name = "Step Area",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/08/16"),
                ModifiedDate = DateTime.Parse("2015/08/16"),
                Hidden = false
            },
            new Demo {
                Id = 104,
                ParentId = 76,
                Name = "Range Series",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2015/11/23"),
                ModifiedDate = DateTime.Parse("2016/02/15"),
                Hidden = false
            },
            new Demo {
                Id = 105,
                ParentId = 104,
                Name = "Range Bar",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/01/09"),
                ModifiedDate = DateTime.Parse("2016/01/09"),
                Hidden = false
            },
            new Demo {
                Id = 106,
                ParentId = 104,
                Name = "Range Area",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2016/02/24"),
                ModifiedDate = DateTime.Parse("2016/02/24"),
                Hidden = false
            },
            new Demo {
                Id = 107,
                ParentId = 76,
                Name = "Pie Series",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/01/07"),
                ModifiedDate = DateTime.Parse("2014/12/16"),
                Hidden = false
            },
            new Demo {
                Id = 108,
                ParentId = 107,
                Name = "Pie",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/01/07"),
                ModifiedDate = DateTime.Parse("2016/09/18"),
                Hidden = false
            },
            new Demo {
                Id = 109,
                ParentId = 107,
                Name = "Pie with Custom Labels",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/04/13"),
                ModifiedDate = DateTime.Parse("2014/04/13"),
                Hidden = false
            },
            new Demo {
                Id = 110,
                ParentId = 107,
                Name = "Pie with Small Values Grouped",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/08/29"),
                ModifiedDate = DateTime.Parse("2016/04/24"),
                Hidden = false
            },
            new Demo {
                Id = 111,
                ParentId = 107,
                Name = "Pie with Resolved Label Overlapping",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/05/26"),
                ModifiedDate = DateTime.Parse("2014/05/26"),
                Hidden = false
            },
            new Demo {
                Id = 112,
                ParentId = 107,
                Name = "Pie with Multiple Series",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/06/21"),
                ModifiedDate = DateTime.Parse("2014/06/21"),
                Hidden = false
            },
            new Demo {
                Id = 113,
                ParentId = 76,
                Name = "Doughnut Series",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/07/11"),
                ModifiedDate = DateTime.Parse("2014/07/11"),
                Hidden = false
            },
            new Demo {
                Id = 114,
                ParentId = 113,
                Name = "Doughnut",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/06/02"),
                ModifiedDate = DateTime.Parse("2016/11/14"),
                Hidden = false
            },
            new Demo {
                Id = 115,
                ParentId = 113,
                Name = "Doughnut Selection",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/07/11"),
                ModifiedDate = DateTime.Parse("2015/10/03"),
                Hidden = false
            },
            new Demo {
                Id = 116,
                ParentId = 113,
                Name = "Doughnut with Top N Series",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/11/29"),
                ModifiedDate = DateTime.Parse("2016/11/29"),
                Hidden = false
            },
            new Demo {
                Id = 117,
                ParentId = 76,
                Name = "Advanced features",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/01/21"),
                ModifiedDate = DateTime.Parse("2014/01/21"),
                Hidden = false
            },
            new Demo {
                Id = 118,
                ParentId = 117,
                Name = "Zooming and Scrolling",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/06/12"),
                ModifiedDate = DateTime.Parse("2015/06/12"),
                Hidden = false
            },
            new Demo {
                Id = 119,
                ParentId = 117,
                Name = "Zooming and Scrolling API",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/01/17"),
                ModifiedDate = DateTime.Parse("2015/06/28"),
                Hidden = false
            },
            new Demo {
                Id = 120,
                ParentId = 117,
                Name = "Multiple Axes",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/02/27"),
                ModifiedDate = DateTime.Parse("2016/10/02"),
                Hidden = false
            },
            new Demo {
                Id = 121,
                ParentId = 117,
                Name = "Multiple Panes",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/03/14"),
                ModifiedDate = DateTime.Parse("2015/10/07"),
                Hidden = false
            },
            new Demo {
                Id = 122,
                ParentId = 117,
                Name = "Hover Mode",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/11/11"),
                ModifiedDate = DateTime.Parse("2015/11/11"),
                Hidden = false
            },
            new Demo {
                Id = 123,
                ParentId = 117,
                Name = "Selection",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2015/05/14"),
                ModifiedDate = DateTime.Parse("2015/05/14"),
                Hidden = false
            },
            new Demo {
                Id = 124,
                ParentId = 117,
                Name = "Multiple Series Selection",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/05/05"),
                ModifiedDate = DateTime.Parse("2015/11/05"),
                Hidden = false
            },
            new Demo {
                Id = 125,
                ParentId = 117,
                Name = "Multiple Point Selection",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/11/08"),
                ModifiedDate = DateTime.Parse("2016/11/13"),
                Hidden = false
            },
            new Demo {
                Id = 126,
                ParentId = 117,
                Name = "Series Templates",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/02/17"),
                ModifiedDate = DateTime.Parse("2016/02/17"),
                Hidden = false
            },
            new Demo {
                Id = 127,
                ParentId = 117,
                Name = "Null Point Support",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/05/15"),
                ModifiedDate = DateTime.Parse("2015/05/03"),
                Hidden = false
            },
            new Demo {
                Id = 128,
                ParentId = 117,
                Name = "API - Select a Point",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/02/29"),
                ModifiedDate = DateTime.Parse("2016/12/14"),
                Hidden = false
            },
            new Demo {
                Id = 129,
                ParentId = 117,
                Name = "API - Display a Tooltip",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/06/21"),
                ModifiedDate = DateTime.Parse("2016/06/21"),
                Hidden = false
            },
            new Demo {
                Id = 130,
                ParentId = 117,
                Name = "Tooltip HTML Support",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/07/03"),
                ModifiedDate = DateTime.Parse("2015/07/03"),
                Hidden = false
            },
            new Demo {
                Id = 131,
                ParentId = 117,
                Name = "Crosshair",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/11/06"),
                ModifiedDate = DateTime.Parse("2016/01/06"),
                Hidden = false
            },
            new Demo {
                Id = 132,
                ParentId = 117,
                Name = "Point Image",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/05/11"),
                ModifiedDate = DateTime.Parse("2014/11/21"),
                Hidden = false
            },
            new Demo {
                Id = 133,
                ParentId = 117,
                Name = "Customize Points and Labels",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/09/07"),
                ModifiedDate = DateTime.Parse("2016/09/07"),
                Hidden = false
            },
            new Demo {
                Id = 134,
                ParentId = 117,
                Name = "Logarithmic Axis",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2016/01/10"),
                ModifiedDate = DateTime.Parse("2016/10/20"),
                Hidden = false
            },
            new Demo {
                Id = 135,
                ParentId = 117,
                Name = "Points Aggregation",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/12/25"),
                ModifiedDate = DateTime.Parse("2016/12/27"),
                Hidden = false
            },
            new Demo {
                Id = 136,
                ParentId = 117,
                Name = "Points Aggregation - Financial Chart",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/01/21"),
                ModifiedDate = DateTime.Parse("2014/01/21"),
                Hidden = false
            },
            new Demo {
                Id = 137,
                ParentId = 117,
                Name = "Discrete Axis Zooming and Scrolling",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/04/21"),
                ModifiedDate = DateTime.Parse("2015/08/17"),
                Hidden = false
            },
            new Demo {
                Id = 138,
                ParentId = 117,
                Name = "Error Bars",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/10/27"),
                ModifiedDate = DateTime.Parse("2015/10/27"),
                Hidden = false
            },
            new Demo {
                Id = 139,
                ParentId = 117,
                Name = "Export and Printing API",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/11/05"),
                ModifiedDate = DateTime.Parse("2016/12/09"),
                Hidden = false
            },
            new Demo {
                Id = 140,
                ParentId = 76,
                Name = "Polar and Radar Charts",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/08/07"),
                ModifiedDate = DateTime.Parse("2014/08/07"),
                Hidden = false
            },
            new Demo {
                Id = 141,
                ParentId = 140,
                Name = "Continuous Data",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/11/13"),
                ModifiedDate = DateTime.Parse("2015/11/13"),
                Hidden = false
            },
            new Demo {
                Id = 142,
                ParentId = 140,
                Name = "Discrete Data",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/02/21"),
                ModifiedDate = DateTime.Parse("2016/12/19"),
                Hidden = false
            },
            new Demo {
                Id = 143,
                ParentId = 140,
                Name = "Spider Web",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/10/20"),
                ModifiedDate = DateTime.Parse("2014/10/20"),
                Hidden = false
            },
            new Demo {
                Id = 144,
                ParentId = 140,
                Name = "Wind Rose",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/08/07"),
                ModifiedDate = DateTime.Parse("2016/09/08"),
                Hidden = false
            },
            new Demo {
                Id = 145,
                ParentId = 140,
                Name = "Periodic Data",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2014/10/25"),
                ModifiedDate = DateTime.Parse("2014/10/25"),
                Hidden = false
            },
            new Demo {
                Id = 146,
                ParentId = 140,
                Name = "Inverted Chart",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/12/05"),
                ModifiedDate = DateTime.Parse("2016/12/05"),
                Hidden = false
            },
            new Demo {
                Id = 147,
                ParentId = 76,
                Name = "Sparklines",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/07/12"),
                ModifiedDate = DateTime.Parse("2014/07/12"),
                Hidden = false
            },
            new Demo {
                Id = 148,
                ParentId = 147,
                Name = "Simple Sparklines",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/10/23"),
                ModifiedDate = DateTime.Parse("2016/10/23"),
                Hidden = false
            },
            new Demo {
                Id = 149,
                ParentId = 147,
                Name = "Area Sparklines",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/12/07"),
                ModifiedDate = DateTime.Parse("2016/12/22"),
                Hidden = false
            },
            new Demo {
                Id = 150,
                ParentId = 147,
                Name = "Bar Sparklines",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2014/07/12"),
                ModifiedDate = DateTime.Parse("2014/07/12"),
                Hidden = false
            },
            new Demo {
                Id = 151,
                ParentId = 147,
                Name = "Winloss Sparklines",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/12/23"),
                ModifiedDate = DateTime.Parse("2016/10/18"),
                Hidden = false
            },
            new Demo {
                Id = 152,
                ParentId = 76,
                Name = "Bullets",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/03/22"),
                ModifiedDate = DateTime.Parse("2014/03/22"),
                Hidden = false
            },
            new Demo {
                Id = 153,
                ParentId = 152,
                Name = "Simple Bullets",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/03/22"),
                ModifiedDate = DateTime.Parse("2014/03/22"),
                Hidden = false
            },
            new Demo {
                Id = 154,
                ParentId = 76,
                Name = "Tree Map",
                Status = 1,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/07/29"),
                ModifiedDate = DateTime.Parse("2016/10/09"),
                Hidden = false
            },
            new Demo {
                Id = 155,
                ParentId = 154,
                Name = "Hierarchical Data Structure",
                Status = 1,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/12"),
                Hidden = false
            },
            new Demo {
                Id = 156,
                ParentId = 154,
                Name = "Flat Data Structure",
                Status = 1,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/10/01"),
                Hidden = false
            },
            new Demo {
                Id = 157,
                ParentId = 154,
                Name = "Tiling Algorithms",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/07/29"),
                ModifiedDate = DateTime.Parse("2015/08/07"),
                Hidden = false
            },
            new Demo {
                Id = 158,
                ParentId = 154,
                Name = "Colorization",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2015/03/23"),
                ModifiedDate = DateTime.Parse("2016/05/05"),
                Hidden = false
            },
            new Demo {
                Id = 159,
                ParentId = 154,
                Name = "Drill Down",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/05/06"),
                ModifiedDate = DateTime.Parse("2015/05/06"),
                Hidden = false
            },
            new Demo {
                Id = 160,
                ParentId = 0,
                Name = "Gauges",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2014/12/18"),
                Hidden = false
            },
            new Demo {
                Id = 161,
                ParentId = 160,
                Name = "Data Binding",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/04/21"),
                ModifiedDate = DateTime.Parse("2014/04/21"),
                Hidden = false
            },
            new Demo {
                Id = 162,
                ParentId = 161,
                Name = "Update Circular Gauge Data at Runtime",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/04/21"),
                ModifiedDate = DateTime.Parse("2014/04/21"),
                Hidden = false
            },
            new Demo {
                Id = 163,
                ParentId = 161,
                Name = "Update Linear Gauge Data at Runtime",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/04/13"),
                ModifiedDate = DateTime.Parse("2016/07/11"),
                Hidden = false
            },
            new Demo {
                Id = 164,
                ParentId = 161,
                Name = "Update Bar Gauge Data at Runtime",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/06/04"),
                ModifiedDate = DateTime.Parse("2014/06/04"),
                Hidden = false
            },
            new Demo {
                Id = 165,
                ParentId = 160,
                Name = "Circular Gauge",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2014/12/10"),
                Hidden = false
            },
            new Demo {
                Id = 166,
                ParentId = 165,
                Name = "Palette for Ranges",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/11/17"),
                ModifiedDate = DateTime.Parse("2016/01/20"),
                Hidden = false
            },
            new Demo {
                Id = 167,
                ParentId = 165,
                Name = "Scale Minor Ticks",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2015/03/28"),
                Hidden = false
            },
            new Demo {
                Id = 168,
                ParentId = 165,
                Name = "Scale Label Formatting",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/02/19"),
                ModifiedDate = DateTime.Parse("2016/05/30"),
                Hidden = false
            },
            new Demo {
                Id = 169,
                ParentId = 165,
                Name = "Different Value Indicator Types",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2016/03/29"),
                ModifiedDate = DateTime.Parse("2016/06/24"),
                Hidden = false
            },
            new Demo {
                Id = 170,
                ParentId = 165,
                Name = "Different Subvalue Indicator Types",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/08/05"),
                ModifiedDate = DateTime.Parse("2016/09/03"),
                Hidden = false
            },
            new Demo {
                Id = 171,
                ParentId = 165,
                Name = "Subvalue Indicator Text Formatting",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/04/28"),
                ModifiedDate = DateTime.Parse("2015/04/28"),
                Hidden = false
            },
            new Demo {
                Id = 172,
                ParentId = 165,
                Name = "Custom Layout",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/04/26"),
                ModifiedDate = DateTime.Parse("2016/04/18"),
                Hidden = false
            },
            new Demo {
                Id = 173,
                ParentId = 165,
                Name = "Angles Customization",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/05/15"),
                ModifiedDate = DateTime.Parse("2016/05/15"),
                Hidden = false
            },
            new Demo {
                Id = 174,
                ParentId = 165,
                Name = "Gauge Title Customized",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2015/09/05"),
                ModifiedDate = DateTime.Parse("2016/02/04"),
                Hidden = false
            },
            new Demo {
                Id = 175,
                ParentId = 165,
                Name = "Gauge Tooltip",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/11/18"),
                ModifiedDate = DateTime.Parse("2016/11/18"),
                Hidden = false
            },
            new Demo {
                Id = 176,
                ParentId = 165,
                Name = "Value Indicators API",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/06/21"),
                ModifiedDate = DateTime.Parse("2015/06/21"),
                Hidden = false
            },
            new Demo {
                Id = 177,
                ParentId = 160,
                Name = "Linear Gauge",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/11/14"),
                ModifiedDate = DateTime.Parse("2014/11/14"),
                Hidden = false
            },
            new Demo {
                Id = 178,
                ParentId = 177,
                Name = "Scale Custom Tick Interval",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/11/14"),
                ModifiedDate = DateTime.Parse("2014/11/14"),
                Hidden = false
            },
            new Demo {
                Id = 179,
                ParentId = 177,
                Name = "Scale Custom Tick Values",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2015/10/06"),
                ModifiedDate = DateTime.Parse("2016/08/16"),
                Hidden = false
            },
            new Demo {
                Id = 180,
                ParentId = 177,
                Name = "Different Value Indicator Types",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/04/19"),
                ModifiedDate = DateTime.Parse("2016/04/19"),
                Hidden = false
            },
            new Demo {
                Id = 181,
                ParentId = 177,
                Name = "Different Subvalue Indicator Types",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/05/29"),
                ModifiedDate = DateTime.Parse("2016/09/13"),
                Hidden = false
            },
            new Demo {
                Id = 182,
                ParentId = 177,
                Name = "Base Value for Range Bar",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/03/04"),
                ModifiedDate = DateTime.Parse("2016/04/29"),
                Hidden = false
            },
            new Demo {
                Id = 183,
                ParentId = 177,
                Name = "Custom Layout",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/08/05"),
                ModifiedDate = DateTime.Parse("2016/08/05"),
                Hidden = false
            },
            new Demo {
                Id = 184,
                ParentId = 177,
                Name = "Variable Number of Subvalue Indicators",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/08/20"),
                ModifiedDate = DateTime.Parse("2016/08/20"),
                Hidden = false
            },
            new Demo {
                Id = 185,
                ParentId = 160,
                Name = "Bar Gauge",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/03/21"),
                ModifiedDate = DateTime.Parse("2016/03/10"),
                Hidden = false
            },
            new Demo {
                Id = 186,
                ParentId = 185,
                Name = "Labels Customization",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/12/13"),
                ModifiedDate = DateTime.Parse("2014/12/13"),
                Hidden = false
            },
            new Demo {
                Id = 187,
                ParentId = 185,
                Name = "Palette",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/08/09"),
                ModifiedDate = DateTime.Parse("2015/08/09"),
                Hidden = false
            },
            new Demo {
                Id = 188,
                ParentId = 185,
                Name = "Tooltip",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/12/24"),
                ModifiedDate = DateTime.Parse("2016/12/27"),
                Hidden = false
            },
            new Demo {
                Id = 189,
                ParentId = 185,
                Name = "Variable Number of Bars",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/11/19"),
                ModifiedDate = DateTime.Parse("2016/11/19"),
                Hidden = false
            },
            new Demo {
                Id = 190,
                ParentId = 0,
                Name = "Navigation",
                Status = 1,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/02/03"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 191,
                ParentId = 190,
                Name = "Tree View",
                Status = 1,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/08/20"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 192,
                ParentId = 191,
                Name = "Hierarchical Data Structure",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/11/17"),
                ModifiedDate = DateTime.Parse("2016/12/28"),
                Hidden = false
            },
            new Demo {
                Id = 193,
                ParentId = 191,
                Name = "Flat Data Structure",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/08/20"),
                ModifiedDate = DateTime.Parse("2014/10/28"),
                Hidden = false
            },
            new Demo {
                Id = 194,
                ParentId = 191,
                Name = "Item Selection and Customization",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/11/20"),
                ModifiedDate = DateTime.Parse("2014/11/20"),
                Hidden = false
            },
            new Demo {
                Id = 195,
                ParentId = 191,
                Name = "Virtual Mode",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/08/04"),
                ModifiedDate = DateTime.Parse("2016/12/05"),
                Hidden = false
            },
            new Demo {
                Id = 196,
                ParentId = 191,
                Name = "Load Data on Demand",
                Status = 2,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 197,
                ParentId = 190,
                Name = "NavBar",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/05/20"),
                ModifiedDate = DateTime.Parse("2014/05/20"),
                Hidden = false
            },
            new Demo {
                Id = 198,
                ParentId = 197,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/07/04"),
                ModifiedDate = DateTime.Parse("2015/07/04"),
                Hidden = false
            },
            new Demo {
                Id = 199,
                ParentId = 190,
                Name = "Toolbar",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/02/03"),
                ModifiedDate = DateTime.Parse("2015/04/15"),
                Hidden = false
            },
            new Demo {
                Id = 200,
                ParentId = 199,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/02/03"),
                ModifiedDate = DateTime.Parse("2016/02/19"),
                Hidden = false
            },
            new Demo {
                Id = 201,
                ParentId = 190,
                Name = "Slideout",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/05/10"),
                ModifiedDate = DateTime.Parse("2014/05/10"),
                Hidden = false
            },
            new Demo {
                Id = 202,
                ParentId = 201,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/10/21"),
                ModifiedDate = DateTime.Parse("2014/10/21"),
                Hidden = false
            },
            new Demo {
                Id = 203,
                ParentId = 190,
                Name = "Panorama",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/10/06"),
                ModifiedDate = DateTime.Parse("2015/10/06"),
                Hidden = false
            },
            new Demo {
                Id = 204,
                ParentId = 203,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/10/06"),
                ModifiedDate = DateTime.Parse("2015/11/23"),
                Hidden = false
            },
            new Demo {
                Id = 205,
                ParentId = 190,
                Name = "Pivot",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/03/17"),
                ModifiedDate = DateTime.Parse("2014/03/17"),
                Hidden = false
            },
            new Demo {
                Id = 206,
                ParentId = 205,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/03/17"),
                ModifiedDate = DateTime.Parse("2015/11/08"),
                Hidden = false
            },
            new Demo {
                Id = 207,
                ParentId = 190,
                Name = "Menu",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/06/16"),
                ModifiedDate = DateTime.Parse("2014/06/16"),
                Hidden = false
            },
            new Demo {
                Id = 208,
                ParentId = 207,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/06/16"),
                ModifiedDate = DateTime.Parse("2016/10/04"),
                Hidden = false
            },
            new Demo {
                Id = 209,
                ParentId = 190,
                Name = "Tabs",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/02/14"),
                ModifiedDate = DateTime.Parse("2015/02/14"),
                Hidden = false
            },
            new Demo {
                Id = 210,
                ParentId = 209,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/02/14"),
                ModifiedDate = DateTime.Parse("2015/02/14"),
                Hidden = false
            },
            new Demo {
                Id = 211,
                ParentId = 190,
                Name = "Multi View",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/01/21"),
                ModifiedDate = DateTime.Parse("2016/09/26"),
                Hidden = false
            },
            new Demo {
                Id = 212,
                ParentId = 211,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2016/01/21"),
                ModifiedDate = DateTime.Parse("2016/11/16"),
                Hidden = false
            },
            new Demo {
                Id = 213,
                ParentId = 190,
                Name = "Tab Panel",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/11/04"),
                ModifiedDate = DateTime.Parse("2014/11/23"),
                Hidden = false
            },
            new Demo {
                Id = 214,
                ParentId = 213,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/12/22"),
                ModifiedDate = DateTime.Parse("2016/11/08"),
                Hidden = false
            },
            new Demo {
                Id = 215,
                ParentId = 190,
                Name = "Accordion",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2016/09/03"),
                ModifiedDate = DateTime.Parse("2016/09/03"),
                Hidden = false
            },
            new Demo {
                Id = 216,
                ParentId = 215,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/12/17"),
                ModifiedDate = DateTime.Parse("2016/12/26"),
                Hidden = false
            },
            new Demo {
                Id = 217,
                ParentId = 0,
                Name = "Editors",
                Status = 1,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/05/19"),
                ModifiedDate = DateTime.Parse("2016/09/07"),
                Hidden = false
            },
            new Demo {
                Id = 218,
                ParentId = 217,
                Name = "Check Box",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/05/19"),
                ModifiedDate = DateTime.Parse("2016/03/31"),
                Hidden = false
            },
            new Demo {
                Id = 219,
                ParentId = 218,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/05/19"),
                ModifiedDate = DateTime.Parse("2016/03/06"),
                Hidden = false
            },
            new Demo {
                Id = 220,
                ParentId = 217,
                Name = "Switch",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2015/04/09"),
                ModifiedDate = DateTime.Parse("2015/04/09"),
                Hidden = false
            },
            new Demo {
                Id = 221,
                ParentId = 220,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/04/09"),
                ModifiedDate = DateTime.Parse("2015/04/09"),
                Hidden = false
            },
            new Demo {
                Id = 222,
                ParentId = 217,
                Name = "Text Box",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/03/10"),
                ModifiedDate = DateTime.Parse("2016/07/09"),
                Hidden = false
            },
            new Demo {
                Id = 223,
                ParentId = 222,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/03/10"),
                ModifiedDate = DateTime.Parse("2015/10/07"),
                Hidden = false
            },
            new Demo {
                Id = 224,
                ParentId = 217,
                Name = "Number Box",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/03/11"),
                ModifiedDate = DateTime.Parse("2016/10/01"),
                Hidden = false
            },
            new Demo {
                Id = 225,
                ParentId = 224,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/06/22"),
                ModifiedDate = DateTime.Parse("2016/11/17"),
                Hidden = false
            },
            new Demo {
                Id = 226,
                ParentId = 217,
                Name = "Select Box",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/08/15"),
                ModifiedDate = DateTime.Parse("2014/08/15"),
                Hidden = false
            },
            new Demo {
                Id = 227,
                ParentId = 226,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/08/15"),
                ModifiedDate = DateTime.Parse("2015/12/09"),
                Hidden = false
            },
            new Demo {
                Id = 228,
                ParentId = 226,
                Name = "Search and Editing",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/10/22"),
                ModifiedDate = DateTime.Parse("2015/10/22"),
                Hidden = false
            },
            new Demo {
                Id = 229,
                ParentId = 226,
                Name = "Customize Button Style",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/06/28"),
                ModifiedDate = DateTime.Parse("2016/06/28"),
                Hidden = false
            },
            new Demo {
                Id = 230,
                ParentId = 217,
                Name = "Tag Box",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/10/07"),
                ModifiedDate = DateTime.Parse("2016/08/10"),
                Hidden = false
            },
            new Demo {
                Id = 231,
                ParentId = 230,
                Name = "Overview",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/04/14"),
                ModifiedDate = DateTime.Parse("2016/06/01"),
                Hidden = false
            },
            new Demo {
                Id = 232,
                ParentId = 217,
                Name = "Text Area",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/02/15"),
                ModifiedDate = DateTime.Parse("2016/02/15"),
                Hidden = false
            },
            new Demo {
                Id = 233,
                ParentId = 232,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/11/22"),
                ModifiedDate = DateTime.Parse("2016/11/22"),
                Hidden = false
            },
            new Demo {
                Id = 234,
                ParentId = 217,
                Name = "Date Box",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/06/29"),
                ModifiedDate = DateTime.Parse("2014/06/29"),
                Hidden = false
            },
            new Demo {
                Id = 235,
                ParentId = 234,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/06/29"),
                ModifiedDate = DateTime.Parse("2014/06/29"),
                Hidden = false
            },
            new Demo {
                Id = 236,
                ParentId = 217,
                Name = "Color Box",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/07/09"),
                ModifiedDate = DateTime.Parse("2016/03/02"),
                Hidden = false
            },
            new Demo {
                Id = 237,
                ParentId = 236,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/12/29"),
                ModifiedDate = DateTime.Parse("2016/12/29"),
                Hidden = false
            },
            new Demo {
                Id = 238,
                ParentId = 217,
                Name = "Calendar",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/12/25"),
                ModifiedDate = DateTime.Parse("2015/08/18"),
                Hidden = false
            },
            new Demo {
                Id = 239,
                ParentId = 238,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/04/06"),
                ModifiedDate = DateTime.Parse("2016/06/21"),
                Hidden = false
            },
            new Demo {
                Id = 240,
                ParentId = 217,
                Name = "Autocomplete",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/05/29"),
                ModifiedDate = DateTime.Parse("2015/05/29"),
                Hidden = false
            },
            new Demo {
                Id = 241,
                ParentId = 240,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/12/31"),
                ModifiedDate = DateTime.Parse("2015/12/31"),
                Hidden = false
            },
            new Demo {
                Id = 242,
                ParentId = 217,
                Name = "Validation",
                Status = 1,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/16"),
                Hidden = false
            },
            new Demo {
                Id = 243,
                ParentId = 242,
                Name = "Overview",
                Status = 1,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 244,
                ParentId = 0,
                Name = "Forms and Multi-Purpose",
                Status = 1,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/01/17"),
                ModifiedDate = DateTime.Parse("2016/11/17"),
                Hidden = false
            },
            new Demo {
                Id = 245,
                ParentId = 244,
                Name = "Field Set",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/01/31"),
                ModifiedDate = DateTime.Parse("2015/03/09"),
                Hidden = false
            },
            new Demo {
                Id = 246,
                ParentId = 245,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/02/18"),
                ModifiedDate = DateTime.Parse("2016/11/05"),
                Hidden = false
            },
            new Demo {
                Id = 247,
                ParentId = 244,
                Name = "Radio Group",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/03/11"),
                ModifiedDate = DateTime.Parse("2015/08/03"),
                Hidden = false
            },
            new Demo {
                Id = 248,
                ParentId = 247,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2015/06/26"),
                ModifiedDate = DateTime.Parse("2015/09/10"),
                Hidden = false
            },
            new Demo {
                Id = 249,
                ParentId = 244,
                Name = "Slider",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/07/25"),
                ModifiedDate = DateTime.Parse("2015/06/25"),
                Hidden = false
            },
            new Demo {
                Id = 250,
                ParentId = 249,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/07/25"),
                ModifiedDate = DateTime.Parse("2014/07/25"),
                Hidden = false
            },
            new Demo {
                Id = 251,
                ParentId = 244,
                Name = "Range Slider",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/04/12"),
                ModifiedDate = DateTime.Parse("2016/08/18"),
                Hidden = false
            },
            new Demo {
                Id = 252,
                ParentId = 251,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/07/12"),
                ModifiedDate = DateTime.Parse("2015/07/12"),
                Hidden = false
            },
            new Demo {
                Id = 253,
                ParentId = 244,
                Name = "Range Selector",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/01/17"),
                ModifiedDate = DateTime.Parse("2015/12/25"),
                Hidden = false
            },
            new Demo {
                Id = 254,
                ParentId = 253,
                Name = "Numeric Scale (Lightweight)",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/02/22"),
                ModifiedDate = DateTime.Parse("2014/06/10"),
                Hidden = false
            },
            new Demo {
                Id = 255,
                ParentId = 253,
                Name = "Numeric Scale",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/03/17"),
                ModifiedDate = DateTime.Parse("2014/03/17"),
                Hidden = false
            },
            new Demo {
                Id = 256,
                ParentId = 253,
                Name = "Date-Time Scale (Lightweight)",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/03/17"),
                ModifiedDate = DateTime.Parse("2016/03/17"),
                Hidden = false
            },
            new Demo {
                Id = 257,
                ParentId = 253,
                Name = "Date-Time Scale",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/10/29"),
                ModifiedDate = DateTime.Parse("2016/11/12"),
                Hidden = false
            },
            new Demo {
                Id = 258,
                ParentId = 253,
                Name = "Logarithmic Scale",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/09/21"),
                ModifiedDate = DateTime.Parse("2016/09/21"),
                Hidden = false
            },
            new Demo {
                Id = 259,
                ParentId = 253,
                Name = "Discrete scale",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/01/17"),
                ModifiedDate = DateTime.Parse("2016/08/07"),
                Hidden = false
            },
            new Demo {
                Id = 260,
                ParentId = 253,
                Name = "Custom Formatting",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/03/06"),
                ModifiedDate = DateTime.Parse("2016/05/26"),
                Hidden = false
            },
            new Demo {
                Id = 261,
                ParentId = 253,
                Name = "Use Range Selection for Calculation",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/01/20"),
                ModifiedDate = DateTime.Parse("2014/01/20"),
                Hidden = false
            },
            new Demo {
                Id = 262,
                ParentId = 253,
                Name = "Use Range Selection for Filtering",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/05/25"),
                ModifiedDate = DateTime.Parse("2016/02/22"),
                Hidden = false
            },
            new Demo {
                Id = 263,
                ParentId = 253,
                Name = "Image on Background",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/04/03"),
                ModifiedDate = DateTime.Parse("2015/04/03"),
                Hidden = false
            },
            new Demo {
                Id = 264,
                ParentId = 253,
                Name = "Chart on Background",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/05/28"),
                ModifiedDate = DateTime.Parse("2016/06/23"),
                Hidden = false
            },
            new Demo {
                Id = 265,
                ParentId = 253,
                Name = "Customized Chart on Background",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/08/15"),
                ModifiedDate = DateTime.Parse("2015/08/15"),
                Hidden = false
            },
            new Demo {
                Id = 266,
                ParentId = 253,
                Name = "Chart on Background with Series Template",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/03/07"),
                ModifiedDate = DateTime.Parse("2015/03/07"),
                Hidden = false
            },
            new Demo {
                Id = 267,
                ParentId = 244,
                Name = "Box",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/04/01"),
                ModifiedDate = DateTime.Parse("2015/01/31"),
                Hidden = false
            },
            new Demo {
                Id = 268,
                ParentId = 267,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/04/01"),
                ModifiedDate = DateTime.Parse("2014/09/12"),
                Hidden = false
            },
            new Demo {
                Id = 269,
                ParentId = 244,
                Name = "Responsive Box",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/04/14"),
                ModifiedDate = DateTime.Parse("2015/05/17"),
                Hidden = false
            },
            new Demo {
                Id = 270,
                ParentId = 269,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/04/14"),
                ModifiedDate = DateTime.Parse("2014/04/14"),
                Hidden = false
            },
            new Demo {
                Id = 271,
                ParentId = 244,
                Name = "Scroll View",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/07/28"),
                ModifiedDate = DateTime.Parse("2016/06/01"),
                Hidden = false
            },
            new Demo {
                Id = 272,
                ParentId = 271,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/07/28"),
                ModifiedDate = DateTime.Parse("2015/07/28"),
                Hidden = false
            },
            new Demo {
                Id = 273,
                ParentId = 244,
                Name = "Scheduler",
                Status = 1,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/03/05"),
                ModifiedDate = DateTime.Parse("2016/09/30"),
                Hidden = false
            },
            new Demo {
                Id = 274,
                ParentId = 273,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/09/09"),
                ModifiedDate = DateTime.Parse("2014/09/09"),
                Hidden = false
            },
            new Demo {
                Id = 275,
                ParentId = 273,
                Name = "Grouped Appointments",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/09/18"),
                ModifiedDate = DateTime.Parse("2014/09/18"),
                Hidden = false
            },
            new Demo {
                Id = 276,
                ParentId = 273,
                Name = "Timelines",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/10/03"),
                ModifiedDate = DateTime.Parse("2014/10/03"),
                Hidden = false
            },
            new Demo {
                Id = 277,
                ParentId = 273,
                Name = "Google Calendar Integration",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/09/10"),
                ModifiedDate = DateTime.Parse("2014/11/16"),
                Hidden = false
            },
            new Demo {
                Id = 278,
                ParentId = 273,
                Name = "Custom Templates",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/03/05"),
                ModifiedDate = DateTime.Parse("2015/05/08"),
                Hidden = false
            },
            new Demo {
                Id = 279,
                ParentId = 273,
                Name = "Time Zones Support",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/06/08"),
                ModifiedDate = DateTime.Parse("2014/06/08"),
                Hidden = false
            },
            new Demo {
                Id = 280,
                ParentId = 273,
                Name = "Cell Templates",
                Status = 2,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 281,
                ParentId = 273,
                Name = "Customize Individual Views",
                Status = 2,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 282,
                ParentId = 244,
                Name = "Form",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2014/01/29"),
                ModifiedDate = DateTime.Parse("2014/01/29"),
                Hidden = false
            },
            new Demo {
                Id = 283,
                ParentId = 282,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/07/05"),
                ModifiedDate = DateTime.Parse("2014/07/05"),
                Hidden = false
            },
            new Demo {
                Id = 284,
                ParentId = 282,
                Name = "Customize Item",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2014/06/07"),
                ModifiedDate = DateTime.Parse("2014/11/10"),
                Hidden = false
            },
            new Demo {
                Id = 285,
                ParentId = 282,
                Name = "Grouped Fields",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/01/29"),
                ModifiedDate = DateTime.Parse("2014/01/29"),
                Hidden = false
            },
            new Demo {
                Id = 286,
                ParentId = 282,
                Name = "Columns Adaptability",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2015/10/22"),
                ModifiedDate = DateTime.Parse("2016/05/31"),
                Hidden = false
            },
            new Demo {
                Id = 287,
                ParentId = 282,
                Name = "Validation",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/01/04"),
                ModifiedDate = DateTime.Parse("2016/06/23"),
                Hidden = false
            },
            new Demo {
                Id = 288,
                ParentId = 0,
                Name = "Actions and Lists",
                Status = 1,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/02/06"),
                ModifiedDate = DateTime.Parse("2016/09/24"),
                Hidden = false
            },
            new Demo {
                Id = 289,
                ParentId = 288,
                Name = "Button",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/05/14"),
                ModifiedDate = DateTime.Parse("2016/01/01"),
                Hidden = false
            },
            new Demo {
                Id = 290,
                ParentId = 289,
                Name = "Predefined Types",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/05/14"),
                ModifiedDate = DateTime.Parse("2014/05/14"),
                Hidden = false
            },
            new Demo {
                Id = 291,
                ParentId = 289,
                Name = "Icons",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/07/20"),
                ModifiedDate = DateTime.Parse("2014/07/20"),
                Hidden = false
            },
            new Demo {
                Id = 292,
                ParentId = 288,
                Name = "Lookup",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/02/06"),
                ModifiedDate = DateTime.Parse("2016/11/05"),
                Hidden = false
            },
            new Demo {
                Id = 293,
                ParentId = 292,
                Name = "Basics",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2016/05/16"),
                ModifiedDate = DateTime.Parse("2016/05/16"),
                Hidden = false
            },
            new Demo {
                Id = 294,
                ParentId = 292,
                Name = "Templates",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/04/11"),
                ModifiedDate = DateTime.Parse("2016/04/11"),
                Hidden = false
            },
            new Demo {
                Id = 295,
                ParentId = 292,
                Name = "Event Handling",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/02/06"),
                ModifiedDate = DateTime.Parse("2015/08/10"),
                Hidden = false
            },
            new Demo {
                Id = 296,
                ParentId = 288,
                Name = "Gallery",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2014/04/18"),
                ModifiedDate = DateTime.Parse("2015/08/15"),
                Hidden = false
            },
            new Demo {
                Id = 297,
                ParentId = 296,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/04/12"),
                ModifiedDate = DateTime.Parse("2016/04/12"),
                Hidden = false
            },
            new Demo {
                Id = 298,
                ParentId = 296,
                Name = "Item Template",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2014/04/18"),
                ModifiedDate = DateTime.Parse("2014/04/18"),
                Hidden = false
            },
            new Demo {
                Id = 299,
                ParentId = 296,
                Name = "Item 3rd Party Engine Template",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2016/08/07"),
                ModifiedDate = DateTime.Parse("2016/08/07"),
                Hidden = false
            },
            new Demo {
                Id = 300,
                ParentId = 288,
                Name = "List",
                Status = 1,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/02/08"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 301,
                ParentId = 300,
                Name = "List Editing and API",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/04/29"),
                ModifiedDate = DateTime.Parse("2014/04/29"),
                Hidden = false
            },
            new Demo {
                Id = 302,
                ParentId = 300,
                Name = "Grouped List",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/11/11"),
                ModifiedDate = DateTime.Parse("2016/12/09"),
                Hidden = false
            },
            new Demo {
                Id = 303,
                ParentId = 300,
                Name = "Item Template",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/08/16"),
                ModifiedDate = DateTime.Parse("2016/12/21"),
                Hidden = false
            },
            new Demo {
                Id = 304,
                ParentId = 300,
                Name = "Item 3rd Party Engine Template",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/08/30"),
                ModifiedDate = DateTime.Parse("2014/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 305,
                ParentId = 300,
                Name = "List with Search Bar",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/02/08"),
                ModifiedDate = DateTime.Parse("2014/11/19"),
                Hidden = false
            },
            new Demo {
                Id = 306,
                ParentId = 300,
                Name = "List Selection",
                Status = 2,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/10/25"),
                Hidden = false
            },
            new Demo {
                Id = 307,
                ParentId = 300,
                Name = "Web API Service",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/04/17"),
                ModifiedDate = DateTime.Parse("2014/04/17"),
                Hidden = false
            },
            new Demo {
                Id = 308,
                ParentId = 288,
                Name = "Action Sheet",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/08/05"),
                ModifiedDate = DateTime.Parse("2014/08/05"),
                Hidden = false
            },
            new Demo {
                Id = 309,
                ParentId = 308,
                Name = "Basics",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2015/05/17"),
                ModifiedDate = DateTime.Parse("2016/10/03"),
                Hidden = false
            },
            new Demo {
                Id = 310,
                ParentId = 308,
                Name = "Popover Mode",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2014/08/05"),
                ModifiedDate = DateTime.Parse("2014/08/05"),
                Hidden = false
            },
            new Demo {
                Id = 311,
                ParentId = 288,
                Name = "Tile View",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/08/29"),
                ModifiedDate = DateTime.Parse("2016/11/18"),
                Hidden = false
            },
            new Demo {
                Id = 312,
                ParentId = 311,
                Name = "Basics",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/06/01"),
                ModifiedDate = DateTime.Parse("2015/06/01"),
                Hidden = false
            },
            new Demo {
                Id = 313,
                ParentId = 311,
                Name = "Directions",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/09/30"),
                ModifiedDate = DateTime.Parse("2016/10/31"),
                Hidden = false
            },
            new Demo {
                Id = 314,
                ParentId = 311,
                Name = "Item Template",
                Status = 0,
                CreatedBy = "Kelly Rodriguez",
                CreatedDate = DateTime.Parse("2015/04/20"),
                ModifiedDate = DateTime.Parse("2016/04/18"),
                Hidden = false
            },
            new Demo {
                Id = 315,
                ParentId = 311,
                Name = "Item 3rd Party Engine Template",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/12/18"),
                ModifiedDate = DateTime.Parse("2015/04/19"),
                Hidden = false
            },
            new Demo {
                Id = 316,
                ParentId = 288,
                Name = "Context Menu",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/08/22"),
                ModifiedDate = DateTime.Parse("2015/08/22"),
                Hidden = false
            },
            new Demo {
                Id = 317,
                ParentId = 316,
                Name = "Basics",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2015/08/22"),
                ModifiedDate = DateTime.Parse("2016/09/30"),
                Hidden = false
            },
            new Demo {
                Id = 318,
                ParentId = 316,
                Name = "Templates",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/09/03"),
                ModifiedDate = DateTime.Parse("2016/12/28"),
                Hidden = false
            },
            new Demo {
                Id = 319,
                ParentId = 288,
                Name = "File Uploader",
                Status = 0,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2014/06/11"),
                ModifiedDate = DateTime.Parse("2014/06/11"),
                Hidden = false
            },
            new Demo {
                Id = 320,
                ParentId = 319,
                Name = "File Selection",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2015/08/14"),
                ModifiedDate = DateTime.Parse("2015/12/13"),
                Hidden = false
            },
            new Demo {
                Id = 321,
                ParentId = 319,
                Name = "File Uploading",
                Status = 0,
                CreatedBy = "Kevin Carter",
                CreatedDate = DateTime.Parse("2014/06/11"),
                ModifiedDate = DateTime.Parse("2016/06/08"),
                Hidden = false
            },
            new Demo {
                Id = 322,
                ParentId = 0,
                Name = "Maps",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2015/03/05"),
                Hidden = false
            },
            new Demo {
                Id = 323,
                ParentId = 322,
                Name = "Map",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2014/07/03"),
                ModifiedDate = DateTime.Parse("2014/07/03"),
                Hidden = false
            },
            new Demo {
                Id = 324,
                ParentId = 323,
                Name = "Providers and Types",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2016/09/14"),
                ModifiedDate = DateTime.Parse("2016/11/02"),
                Hidden = false
            },
            new Demo {
                Id = 325,
                ParentId = 323,
                Name = "Markers",
                Status = 0,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2015/06/02"),
                ModifiedDate = DateTime.Parse("2016/10/29"),
                Hidden = false
            },
            new Demo {
                Id = 326,
                ParentId = 323,
                Name = "Routes",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/11/23"),
                ModifiedDate = DateTime.Parse("2015/04/22"),
                Hidden = false
            },
            new Demo {
                Id = 327,
                ParentId = 322,
                Name = "Vector Map",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2014/01/27"),
                Hidden = false
            },
            new Demo {
                Id = 328,
                ParentId = 327,
                Name = "Colors Customization",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/04/06"),
                ModifiedDate = DateTime.Parse("2016/04/06"),
                Hidden = false
            },
            new Demo {
                Id = 329,
                ParentId = 327,
                Name = "Zooming and Centering",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/03/02"),
                ModifiedDate = DateTime.Parse("2016/09/10"),
                Hidden = false
            },
            new Demo {
                Id = 330,
                ParentId = 327,
                Name = "Palette",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/08/11"),
                ModifiedDate = DateTime.Parse("2016/04/09"),
                Hidden = false
            },
            new Demo {
                Id = 331,
                ParentId = 327,
                Name = "Image Markers",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2014/01/27"),
                ModifiedDate = DateTime.Parse("2014/01/27"),
                Hidden = false
            },
            new Demo {
                Id = 332,
                ParentId = 327,
                Name = "Bubble Markers",
                Status = 0,
                CreatedBy = "Natalie Maguirre",
                CreatedDate = DateTime.Parse("2016/08/04"),
                ModifiedDate = DateTime.Parse("2016/08/04"),
                Hidden = false
            },
            new Demo {
                Id = 333,
                ParentId = 327,
                Name = "Pie Markers",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2016/03/04"),
                ModifiedDate = DateTime.Parse("2016/07/13"),
                Hidden = false
            },
            new Demo {
                Id = 334,
                ParentId = 327,
                Name = "Dynamic Viewport",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/03/24"),
                ModifiedDate = DateTime.Parse("2016/03/24"),
                Hidden = false
            },
            new Demo {
                Id = 335,
                ParentId = 327,
                Name = "Area with Labels and Two Legends",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/11/13"),
                ModifiedDate = DateTime.Parse("2016/01/16"),
                Hidden = false
            },
            new Demo {
                Id = 336,
                ParentId = 327,
                Name = "Tooltip HTML Support",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2016/12/30"),
                ModifiedDate = DateTime.Parse("2016/12/30"),
                Hidden = false
            },
            new Demo {
                Id = 337,
                ParentId = 327,
                Name = "Custom Projection",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/03/22"),
                ModifiedDate = DateTime.Parse("2015/03/22"),
                Hidden = false
            },
            new Demo {
                Id = 338,
                ParentId = 327,
                Name = "Floor Plan",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/06/10"),
                ModifiedDate = DateTime.Parse("2014/06/10"),
                Hidden = false
            },
            new Demo {
                Id = 339,
                ParentId = 327,
                Name = "Multiple Layers",
                Status = 0,
                CreatedBy = "Robert Reagan",
                CreatedDate = DateTime.Parse("2014/12/18"),
                ModifiedDate = DateTime.Parse("2016/02/26"),
                Hidden = false
            },
            new Demo {
                Id = 340,
                ParentId = 327,
                Name = "Custom Map Data",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2015/06/12"),
                ModifiedDate = DateTime.Parse("2015/11/30"),
                Hidden = false
            },
            new Demo {
                Id = 341,
                ParentId = 0,
                Name = "Dialogs and Notifications",
                Status = 1,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/05/03"),
                ModifiedDate = DateTime.Parse("2016/10/27"),
                Hidden = false
            },
            new Demo {
                Id = 342,
                ParentId = 341,
                Name = "Popover",
                Status = 1,
                CreatedBy = "Kent Samuelson",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 343,
                ParentId = 342,
                Name = "Overview",
                Status = 1,
                CreatedBy = "Taylor Riley",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 344,
                ParentId = 341,
                Name = "Popup",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/08/01"),
                ModifiedDate = DateTime.Parse("2016/11/22"),
                Hidden = false
            },
            new Demo {
                Id = 345,
                ParentId = 344,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2016/08/01"),
                ModifiedDate = DateTime.Parse("2016/11/27"),
                Hidden = false
            },
            new Demo {
                Id = 346,
                ParentId = 341,
                Name = "Toast",
                Status = 0,
                CreatedBy = "Sandra Johnson",
                CreatedDate = DateTime.Parse("2015/05/15"),
                ModifiedDate = DateTime.Parse("2015/05/30"),
                Hidden = false
            },
            new Demo {
                Id = 347,
                ParentId = 346,
                Name = "Overview",
                Status = 0,
                CreatedBy = "John Heart",
                CreatedDate = DateTime.Parse("2015/05/15"),
                ModifiedDate = DateTime.Parse("2015/05/15"),
                Hidden = false
            },
            new Demo {
                Id = 348,
                ParentId = 341,
                Name = "Load Panel",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2014/05/03"),
                ModifiedDate = DateTime.Parse("2016/06/03"),
                Hidden = false
            },
            new Demo {
                Id = 349,
                ParentId = 348,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Cynthia Stanwick",
                CreatedDate = DateTime.Parse("2014/05/03"),
                ModifiedDate = DateTime.Parse("2016/05/03"),
                Hidden = false
            },
            new Demo {
                Id = 350,
                ParentId = 341,
                Name = "Tooltip",
                Status = 1,
                CreatedBy = "Sam Hill",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/09/01"),
                Hidden = false
            },
            new Demo {
                Id = 351,
                ParentId = 350,
                Name = "Overview",
                Status = 1,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2016/09/01"),
                ModifiedDate = DateTime.Parse("2016/12/20"),
                Hidden = false
            },
            new Demo {
                Id = 352,
                ParentId = 341,
                Name = "Progress Bar",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/11/17"),
                ModifiedDate = DateTime.Parse("2015/11/17"),
                Hidden = false
            },
            new Demo {
                Id = 353,
                ParentId = 352,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Olivia Peyton",
                CreatedDate = DateTime.Parse("2015/11/17"),
                ModifiedDate = DateTime.Parse("2015/11/17"),
                Hidden = false
            },
            new Demo {
                Id = 354,
                ParentId = 341,
                Name = "Load Indicator",
                Status = 0,
                CreatedBy = "Brett Wade",
                CreatedDate = DateTime.Parse("2015/08/12"),
                ModifiedDate = DateTime.Parse("2016/05/03"),
                Hidden = false
            },
            new Demo {
                Id = 355,
                ParentId = 354,
                Name = "Overview",
                Status = 0,
                CreatedBy = "Greta Sims",
                CreatedDate = DateTime.Parse("2015/08/12"),
                ModifiedDate = DateTime.Parse("2016/05/19"),
                Hidden = false
            }
        };
    }
}
