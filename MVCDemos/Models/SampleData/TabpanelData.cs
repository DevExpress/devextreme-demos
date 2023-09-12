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
                Status = 'Not Started',
                Priority = 'hight',
                Text = 'Revenue Projections',
                Date = '2023-09-16',
                AssignedBy = 'John Heart'
            }
            new TaskItem {
                Status = 'Not Started',
                Priority = 'hight',
                Text = 'New Brochures',
                Date = '2023-09-16',
                AssignedBy = 'Samantha Bright'
            }
            new TaskItem {
                Status = 'Not Started',
                Priority = 'normal',
                Text = 'Training',
                Date = '2023-09-16',
                AssignedBy = 'Arthur Miller'
            }
            new TaskItem {
                Status = 'Not Started',
                Priority = 'normal',
                Text = 'NDA',
                Date = '2023-09-16',
                AssignedBy = 'Robert Reagan'
            }
            new TaskItem {
                Status = 'Not Started',
                Priority = 'low',
                Text = 'Health Insurance',
                Date = '2023-09-16',
                AssignedBy = 'Greta Sims'
            }
        }

        public static readonly IEnumerable<TaskItem> HelpNeededTaskItems = new[] {
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'low',
                Text = 'TV Recall',
                Date = '2023-09-16',
                AssignedBy = 'Brett Wade'
            },
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'low',
                Text = 'Recall and Refund Forms',
                Date = '2023-09-16',
                AssignedBy = 'Sandra Johnson'
            },
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'hight',
                Text = 'Shippers',
                Date = '2023-09-16',
                AssignedBy = 'Ed Holmes'
            },
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'normal',
                Text = 'Hardware Upgrade',
                Date = '2023-09-16',
                AssignedBy = 'Barb Banks'
            },
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'normal',
                Text = 'Touch-Enabled Apps',
                Date = '2023-09-16',
                AssignedBy = 'Kevin Carter'
            },
            new TaskItem {
                Status = 'Help Needed',
                Priority = 'low',
                Text = 'Review HR Budget Company Wide',
                Date = '2023-09-16',
                AssignedBy = 'Ed Holmes'
            }
        }

        public static readonly IEnumerable<TaskItem> InProgressTaskItems = new[] {
            new TaskItem {
                Status = 'In Progress',
                Priority = 'normal',
                Text = 'Online Sales',
                Date = '2023-09-16',
                AssignedBy = 'Cindy Stanwick'
            },
            new TaskItem {
                Status = 'In Progress',
                Priority = 'normal',
                Text = 'New Website Design',
                Date = '2023-09-16',
                AssignedBy = 'Sammy Hill'
            },
            new TaskItem {
                Status = 'In Progress',
                Priority = 'low',
                Text = 'Bandwidth Increase',
                Date = '2023-09-16',
                AssignedBy = 'Davey Jones'
            },
            new TaskItem {
                Status = 'In Progress',
                Priority = 'normal',
                Text = 'Support',
                Date = '2023-09-16',
                AssignedBy = 'Victor Norris'
            },
            new TaskItem {
                Status = 'In Progress',
                Priority = 'low',
                Text = 'Training Material',
                Date = '2023-09-16',
                AssignedBy = 'John Heart'
            }
        }

        public static readonly IEnumerable<TaskItem> DeferredTaskItems = new[] {
            new TaskItem {
                Status = 'Deferred',
                Priority = 'normal',
                Text = 'New Database',
                Date = '2023-09-16',
                AssignedBy = 'Samantha Bright'
            },
            new TaskItem {
                Status = 'Deferred',
                Priority = 'hight',
                Text = 'Automation Server',
                Date = '2023-09-16',
                AssignedBy = 'Arthur Miller'
            },
            new TaskItem {
                Status = 'Deferred',
                Priority = 'normal',
                Text = 'Retail Sales',
                Date = '2023-09-16',
                AssignedBy = 'Robert Reagan'
            },
            new TaskItem {
                Status = 'Deferred',
                Priority = 'normal',
                Text = 'Shipping Labels',
                Date = '2023-09-16',
                AssignedBy = 'Greta Sims'
            },
            new TaskItem {
                Status = 'Deferred',
                Priority = 'low',
                Text = 'Customer Follow Up Plan',
                Date = '2023-09-16',
                AssignedBy = 'Brett Wade'
            },
            new TaskItem {
                Status = 'Deferred',
                Priority = 'normal',
                Text = 'Support Dept Budget Report',
                Date = '2023-09-16',
                AssignedBy = 'John Heart'
            }
        }

        public static readonly IEnumerable<TaskItem> RejectedTaskItems = new[] {
            new TaskItem {
                Status = 'Rejected',
                Priority = 'hight',
                Text = 'Schedule Meeting with Sales Team',
                Date = '2023-09-16',
                AssignedBy = 'Sandra Johnson'
            },
            new TaskItem {
                Status = 'Rejected',
                Priority = 'normal',
                Text = 'Confirm Availability for Sales Meeting',
                Date = '2023-09-16',
                AssignedBy = 'Ed Holmes'
            },
            new TaskItem {
                Status = 'Rejected',
                Priority = 'normal',
                Text = 'Reschedule Sales Team Meeting',
                Date = '2023-09-16',
                AssignedBy = 'Barb Banks'
            },
            new TaskItem {
                Status = 'Rejected',
                Priority = 'hight',
                Text = 'Update Database with New Leads',
                Date = '2023-09-16',
                AssignedBy = 'Kevin Carter'
            },
            new TaskItem {
                Status = 'Rejected',
                Priority = 'low',
                Text = 'Send Territory Sales Breakdown',
                Date = '2023-09-16',
                AssignedBy = 'Cindy Stanwick'
            }
        }

        public static readonly IEnumerable<TaskItem> CompletedTaskItems = new[] {
            new TaskItem {
                Status = 'Completed',
                Priority = 'normal',
                Text = 'Territory Sales Breakdown Report',
                Date = '2023-09-16',
                AssignedBy = 'Sammy Hill'
            },
            new TaskItem {
                Status = 'Completed',
                Priority = 'low',
                Text = 'Return Merchandise Report',
                Date = '2023-09-16',
                AssignedBy = 'Davey Jones'
            },
            new TaskItem {
                Status = 'Completed',
                Priority = 'hight',
                Text = 'Staff Productivity Report',
                Date = '2023-09-16',
                AssignedBy = 'Victor Norris'
            },
            new TaskItem {
                Status = 'Completed',
                Priority = 'normal',
                Text = 'Review HR Budget Company Wide',
                Date = '2023-09-16',
                AssignedBy = 'Mary Stern'
            },
            new TaskItem {
                Status = 'Completed',
                Priority = 'normal',
                Text = 'Support',
                Date = '2023-09-16',
                AssignedBy = 'Victor Norris'
            },
            new TaskItem {
                Status = 'Completed',
                Priority = 'low',
                Text = 'Support Dept Budget Report',
                Date = '2023-09-16',
                AssignedBy = 'Robin Cosworth'
            }
        }

        public static readonly IEnumerable<TabPanelItem> TabPanelItems = new[] {
            new TabPanelItem {
                Icon = 'description',
                Title = 'Not Started',
                Tasks = NotStartedTaskItems
            }
            new TabPanelItem {
                Icon = 'task-helpneeded',
                Title = 'Help Needed',
                Tasks = HelpNeededTaskItems
            }
            new TabPanelItem {
                Icon = 'task-inprogress',
                Title = 'In Progress',
                Tasks = InProgressTaskItems
            }
            new TabPanelItem {
                Icon = 'task-stop',
                Title = 'Deferred',
                Tasks = DeferredTaskItems
            }
            new TabPanelItem {
                Icon = 'task-rejected',
                Title = 'Rejected',
                Tasks = RejectedTaskItems
            }
            new TabPanelItem {
                Icon = 'task-complete',
                Title = 'Completed',
                Tasks = CompletedTaskItems
            }
        }
    }
}
