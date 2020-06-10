using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeTask> GroupByDateTasks = new[] {
            new EmployeeTask {
                Subject = "Website Re-Design Plan",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 21, 9, 30, 0),
                DueDate = new DateTime(2018, 5, 21, 11, 30, 0)
            },
            new EmployeeTask {
                Subject = "Book Flights to San Fran for Sales Trip",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 24, 10, 0, 0),
                DueDate = new DateTime(2018, 5, 24, 12, 0, 0)
            },
            new EmployeeTask {
                Subject = "Install New Router in Dev Room",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 20, 13, 0, 0),
                DueDate = new DateTime(2018, 5, 20, 15, 30, 0)
            },
            new EmployeeTask {
                Subject = "Approve Personal Computer Upgrade Plan",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 22, 10, 0, 0),
                DueDate = new DateTime(2018, 5, 22, 11, 0, 0)
            },
            new EmployeeTask {
                Subject = "Final Budget Review",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 22, 12, 0, 0),
                DueDate = new DateTime(2018, 5, 22, 13, 35, 0)
            },
            new EmployeeTask {
                Subject = "New Brochures",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 21, 13, 0, 0),
                DueDate = new DateTime(2018, 5, 21, 15, 15, 0)
            },
            new EmployeeTask {
                Subject = "Install New Database",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 13, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 15, 12, 15, 0)
            },
            new EmployeeTask {
                Subject = "Approve New Online Marketing Strategy",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 23, 12, 0, 0),
                DueDate = new DateTime(2018, 5, 23, 14, 0, 0)
            },
            new EmployeeTask {
                Subject = "Upgrade Personal Computers",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 13, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 13, 11, 30, 0),
                RecurrenceRule = "FREQ=DAILY;COUNT=4"
            },
            new EmployeeTask {
                Subject = "Prepare 2018 Marketing Plan",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 24, 11, 0, 0),
                DueDate = new DateTime(2018, 5, 24, 13, 30, 0)
            },
            new EmployeeTask {
                Subject = "Brochure Design Review",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 23, 11, 0, 0),
                DueDate = new DateTime(2018, 5, 23, 13, 30, 0)
            },
            new EmployeeTask {
                Subject = "Create Icons for Website",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 25, 10, 0, 0),
                DueDate = new DateTime(2018, 5, 25, 11, 30, 0)
            },
            new EmployeeTask {
                Subject = "Upgrade Server Hardware",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 7, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 10, 15, 0, 0)
            },
            new EmployeeTask {
                Subject = "Submit New Website Design",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 25, 16, 30, 0),
                DueDate = new DateTime(2018, 5, 25, 18, 0, 0)
            },
            new EmployeeTask {
                Subject = "Launch New Website",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 26, 12, 20, 0),
                DueDate = new DateTime(2018, 5, 26, 14, 0, 0)
            },
            new EmployeeTask {
                Subject = "Google AdWords Strategy",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 28, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 28, 12, 0, 0)
            },
            new EmployeeTask {
                Subject = "Rollout of New Website and Marketing Brochures",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 28, 13, 0, 0),
                DueDate = new DateTime(2018, 5, 28, 15, 30, 0)
            },
            new EmployeeTask {
                Subject = "Non-Compete Agreements",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 29, 13, 0, 0),
                DueDate = new DateTime(2018, 5, 29, 15, 45, 0)
            },
            new EmployeeTask {
                Subject = "Approve Hiring of John Jeffers",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 29, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 29, 12, 0, 0)
            },
            new EmployeeTask {
                Subject = "Update NDA Agreement",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 29, 11, 0, 0),
                DueDate = new DateTime(2018, 5, 29, 14, 15, 0)
            },
            new EmployeeTask {
                Subject = "Update Employee Files with New NDA",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 6, 1, 9, 0, 0),
                DueDate = new DateTime(2018, 6, 1, 11, 45, 0)
            },
            new EmployeeTask {
                Subject = "Submit Questions Regarding New NDA",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 30, 10, 0, 0),
                DueDate = new DateTime(2018, 5, 30, 11, 30, 0)
            },
            new EmployeeTask {
                Subject = "Submit Signed NDA",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 30, 13, 0, 0),
                DueDate = new DateTime(2018, 5, 30, 15, 0, 0)
            },
            new EmployeeTask {
                Subject = "Review Revenue Projections",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 30, 11, 0, 0),
                DueDate = new DateTime(2018, 5, 30, 14, 0, 0)
            },
            new EmployeeTask {
                Subject = "Comment on Revenue Projections",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 28, 10, 0, 0),
                DueDate = new DateTime(2018, 5, 28, 13, 0, 0)
            },
            new EmployeeTask {
                Subject = "Provide New Health Insurance Docs",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 6, 1, 12, 0, 0),
                DueDate = new DateTime(2018, 6, 1, 15, 0, 0)
            },
            new EmployeeTask {
                Subject = "Review Changes to Health Insurance Coverage",
                Priority = Priority.High,
                StartDate = new DateTime(2018, 5, 31, 9, 0, 0),
                DueDate = new DateTime(2018, 5, 31, 13, 0, 0)
            },
            new EmployeeTask {
                Subject = "Review Training Course for any Ommissions",
                Priority = Priority.Low,
                StartDate = new DateTime(2018, 5, 31, 11, 0, 0),
                DueDate = new DateTime(2018, 5, 31, 14, 0, 0)
            }
        };
    }
}
