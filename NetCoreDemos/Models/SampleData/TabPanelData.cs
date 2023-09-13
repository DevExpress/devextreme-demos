using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public static class TabPanelData {
        public static readonly IEnumerable<Company> Companies = new[] {
            new Company {
                ID = 1,
                Name = "SuprMart",
                Address = "702 SW 8th Street",
                City = "Bentonville",
                State = "Arkansas",
                ZipCode = 72716,
                Phone = "(800) 555-2797",
                Fax = "(800) 555-2171",
                Website = "http://www.nowebsitesupermart.com"
            },
            new Company {
                ID = 2,
                Name = "El'Depot",
                Address = "2455 Paces Ferry Road NW",
                City = "Atlanta",
                State = "Georgia",
                ZipCode = 30339,
                Phone = "(800) 595-3232",
                Fax = "(800) 595-3231",
                Website = "http://www.nowebsitedepot.com"
            },
            new Company {
                ID = 3,
                Name = "K&S Music",
                Address = "1000 Nicllet Mall",
                City = "Minneapolis",
                State = "Minnesota",
                ZipCode = 55403,
                Phone = "(612) 304-6073",
                Fax = "(612) 304-6074",
                Website = "http://www.nowebsitemusic.com"
            },
            new Company {
                ID = 4,
                Name = "Tom Club",
                Address = "999 Lake Drive",
                City = "Issaquah",
                State = "Washington",
                ZipCode = 98027,
                Phone = "(800) 955-2292",
                Fax = "(800) 955-2293",
                Website = "http://www.nowebsitetomsclub.com"
            }
        };

        public static readonly IEnumerable<TaskItem> NotStartedTaskItems = new[] {
            new TaskItem {
                status = "Not Started",
                priority = "hight",
                text = "Revenue Projections",
                date = "2023-09-16",
                assignedBy = "John Heart"
            },
            new TaskItem {
                status = "Not Started",
                priority = "hight",
                text = "New Brochures",
                date = "2023-09-16",
                assignedBy = "Samantha Bright"
            },
            new TaskItem {
                status = "Not Started",
                priority = "normal",
                text = "Training",
                date = "2023-09-16",
                assignedBy = "Arthur Miller"
            },
            new TaskItem {
                status = "Not Started",
                priority = "normal",
                text = "NDA",
                date = "2023-09-16",
                assignedBy = "Robert Reagan"
            },
            new TaskItem {
                status = "Not Started",
                priority = "low",
                text = "Health Insurance",
                date = "2023-09-16",
                assignedBy = "Greta Sims"
            }
        };

        public static readonly IEnumerable<TaskItem> HelpNeededTaskItems = new[] {
            new TaskItem {
                status = "Help Needed",
                priority = "low",
                text = "TV Recall",
                date = "2023-09-16",
                assignedBy = "Brett Wade"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "low",
                text = "Recall and Refund Forms",
                date = "2023-09-16",
                assignedBy = "Sandra Johnson"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "hight",
                text = "Shippers",
                date = "2023-09-16",
                assignedBy = "Ed Holmes"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "normal",
                text = "Hardware Upgrade",
                date = "2023-09-16",
                assignedBy = "Barb Banks"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "normal",
                text = "Touch-Enabled Apps",
                date = "2023-09-16",
                assignedBy = "Kevin Carter"
            },
            new TaskItem {
                status = "Help Needed",
                priority = "low",
                text = "Review HR Budget Company Wide",
                date = "2023-09-16",
                assignedBy = "Ed Holmes"
            }
        };

        public static readonly IEnumerable<TaskItem> InProgressTaskItems = new[] {
            new TaskItem {
                status = "In Progress",
                priority = "normal",
                text = "Online Sales",
                date = "2023-09-16",
                assignedBy = "Cindy Stanwick"
            },
            new TaskItem {
                status = "In Progress",
                priority = "normal",
                text = "New Website Design",
                date = "2023-09-16",
                assignedBy = "Sammy Hill"
            },
            new TaskItem {
                status = "In Progress",
                priority = "low",
                text = "Bandwidth Increase",
                date = "2023-09-16",
                assignedBy = "Davey Jones"
            },
            new TaskItem {
                status = "In Progress",
                priority = "normal",
                text = "Support",
                date = "2023-09-16",
                assignedBy = "Victor Norris"
            },
            new TaskItem {
                status = "In Progress",
                priority = "low",
                text = "Training Material",
                date = "2023-09-16",
                assignedBy = "John Heart"
            }
        };

        public static readonly IEnumerable<TaskItem> DeferredTaskItems = new[] {
            new TaskItem {
                status = "Deferred",
                priority = "normal",
                text = "New Database",
                date = "2023-09-16",
                assignedBy = "Samantha Bright"
            },
            new TaskItem {
                status = "Deferred",
                priority = "hight",
                text = "Automation Server",
                date = "2023-09-16",
                assignedBy = "Arthur Miller"
            },
            new TaskItem {
                status = "Deferred",
                priority = "normal",
                text = "Retail Sales",
                date = "2023-09-16",
                assignedBy = "Robert Reagan"
            },
            new TaskItem {
                status = "Deferred",
                priority = "normal",
                text = "Shipping Labels",
                date = "2023-09-16",
                assignedBy = "Greta Sims"
            },
            new TaskItem {
                status = "Deferred",
                priority = "low",
                text = "Customer Follow Up Plan",
                date = "2023-09-16",
                assignedBy = "Brett Wade"
            },
            new TaskItem {
                status = "Deferred",
                priority = "normal",
                text = "Support Dept Budget Report",
                date = "2023-09-16",
                assignedBy = "John Heart"
            }
        };

        public static readonly IEnumerable<TaskItem> RejectedTaskItems = new[] {
            new TaskItem {
                status = "Rejected",
                priority = "hight",
                text = "Schedule Meeting with Sales Team",
                date = "2023-09-16",
                assignedBy = "Sandra Johnson"
            },
            new TaskItem {
                status = "Rejected",
                priority = "normal",
                text = "Confirm Availability for Sales Meeting",
                date = "2023-09-16",
                assignedBy = "Ed Holmes"
            },
            new TaskItem {
                status = "Rejected",
                priority = "normal",
                text = "Reschedule Sales Team Meeting",
                date = "2023-09-16",
                assignedBy = "Barb Banks"
            },
            new TaskItem {
                status = "Rejected",
                priority = "hight",
                text = "Update Database with New Leads",
                date = "2023-09-16",
                assignedBy = "Kevin Carter"
            },
            new TaskItem {
                status = "Rejected",
                priority = "low",
                text = "Send Territory Sales Breakdown",
                date = "2023-09-16",
                assignedBy = "Cindy Stanwick"
            }
        };

        public static readonly IEnumerable<TaskItem> CompletedTaskItems = new[] {
            new TaskItem {
                status = "Completed",
                priority = "normal",
                text = "Territory Sales Breakdown Report",
                date = "2023-09-16",
                assignedBy = "Sammy Hill"
            },
            new TaskItem {
                status = "Completed",
                priority = "low",
                text = "Return Merchandise Report",
                date = "2023-09-16",
                assignedBy = "Davey Jones"
            },
            new TaskItem {
                status = "Completed",
                priority = "hight",
                text = "Staff Productivity Report",
                date = "2023-09-16",
                assignedBy = "Victor Norris"
            },
            new TaskItem {
                status = "Completed",
                priority = "normal",
                text = "Review HR Budget Company Wide",
                date = "2023-09-16",
                assignedBy = "Mary Stern"
            },
            new TaskItem {
                status = "Completed",
                priority = "normal",
                text = "Support",
                date = "2023-09-16",
                assignedBy = "Victor Norris"
            },
            new TaskItem {
                status = "Completed",
                priority = "low",
                text = "Support Dept Budget Report",
                date = "2023-09-16",
                assignedBy = "Robin Cosworth"
            }
        };

        public static readonly IEnumerable<TabPanelItem> TabPanelItems = new[] {
            new TabPanelItem {
                icon = "description",
                title = "Not Started",
                tasks = NotStartedTaskItems
            },
            new TabPanelItem {
                icon = "task-helpneeded",
                title = "Help Needed",
                tasks = HelpNeededTaskItems
            },
            new TabPanelItem {
                icon = "task-inprogress",
                title = "In Progress",
                tasks = InProgressTaskItems
            },
            new TabPanelItem {
                icon = "task-stop",
                title = "Deferred",
                tasks = DeferredTaskItems
            },
            new TabPanelItem {
                icon = "task-rejected",
                title = "Rejected",
                tasks = RejectedTaskItems
            },
            new TabPanelItem {
                icon = "task-complete",
                title = "Completed",
                tasks = CompletedTaskItems
            }
        };
    }
}
