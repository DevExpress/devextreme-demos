using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeTask> TimelineTasks = new[] {
            new EmployeeTask {
                Subject = "Google AdWords Strategy",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 1, 9, 0, 0),
                DueDate = new DateTime(2017, 5, 1, 10, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "New Brochures",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 1, 11, 30, 0),
                DueDate = new DateTime(2017, 5, 1, 14, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Brochure Design Review",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 1, 13, 15, 0),
                DueDate = new DateTime(2017, 5, 1, 16, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Website Re-Design Plan",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 1, 16, 45, 0),
                DueDate = new DateTime(2017, 5, 2, 11, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Rollout of New Website and Marketing Brochures",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 2, 8, 15, 0),
                DueDate = new DateTime(2017, 5, 2, 10, 45, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Update Sales Strategy Documents",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 2, 12, 0, 0),
                DueDate = new DateTime(2017, 5, 2, 13, 45, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Non-Compete Agreements",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 3, 8, 15, 0),
                DueDate = new DateTime(2017, 5, 3, 9, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Approve Hiring of John Jeffers",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 3, 10, 0, 0),
                DueDate = new DateTime(2017, 5, 3, 11, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Update NDA Agreement",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 3, 11, 45, 0),
                DueDate = new DateTime(2017, 5, 3, 13, 45, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Update Employee Files with New NDA",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 3, 14, 0, 0),
                DueDate = new DateTime(2017, 5, 3, 16, 45, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Submit Questions Regarding New NDA",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 4, 8, 0, 0),
                DueDate = new DateTime(2017, 5, 4, 9, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Submit Signed NDA",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 4, 12, 45, 0),
                DueDate = new DateTime(2017, 5, 4, 14, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Review Revenue Projections",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 4, 17, 15, 0),
                DueDate = new DateTime(2017, 5, 4, 18, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Comment on Revenue Projections",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 5, 9, 15, 0),
                DueDate = new DateTime(2017, 5, 5, 11, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Provide New Health Insurance Docs",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 5, 12, 45, 0),
                DueDate = new DateTime(2017, 5, 5, 14, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Review Changes to Health Insurance Coverage",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 5, 14, 15, 0),
                DueDate = new DateTime(2017, 5, 5, 15, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Review Training Course for any Ommissions",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 8, 14, 0, 0),
                DueDate = new DateTime(2017, 5, 9, 12, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Recall Rebate Form",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 8, 12, 45, 0),
                DueDate = new DateTime(2017, 5, 8, 13, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Create Report on Customer Feedback",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 9, 15, 15, 0),
                DueDate = new DateTime(2017, 5, 9, 17, 30, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Review Customer Feedback Report",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 9, 16, 15, 0),
                DueDate = new DateTime(2017, 5, 9, 18, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Customer Feedback Report Analysis",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 10, 9, 30, 0),
                DueDate = new DateTime(2017, 5, 10, 10, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Prepare Shipping Cost Analysis Report",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 10, 12, 30, 0),
                DueDate = new DateTime(2017, 5, 10, 13, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Provide Feedback on Shippers",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 10, 14, 15, 0),
                DueDate = new DateTime(2017, 5, 10, 16, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Select Preferred Shipper",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 10, 17, 30, 0),
                DueDate = new DateTime(2017, 5, 10, 20, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Complete Shipper Selection Form",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 11, 8, 30, 0),
                DueDate = new DateTime(2017, 5, 11, 10, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Upgrade Server Hardware",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 11, 12, 0, 0),
                DueDate = new DateTime(2017, 5, 11, 14, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Upgrade Personal Computers",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 11, 14, 45, 0),
                DueDate = new DateTime(2017, 5, 11, 16, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Upgrade Apps to Windows RT or stay with WinForms",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 12, 10, 30, 0),
                DueDate = new DateTime(2017, 5, 12, 13, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Estimate Time Required to Touch-Enable Apps",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 12, 14, 45, 0),
                DueDate = new DateTime(2017, 5, 12, 16, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Report on Tranistion to Touch-Based Apps",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 12, 18, 30, 0),
                DueDate = new DateTime(2017, 5, 12, 19, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Submit New Website Design",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 15, 8, 0, 0),
                DueDate = new DateTime(2017, 5, 15, 10, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Create Icons for Website",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 15, 11, 30, 0),
                DueDate = new DateTime(2017, 5, 15, 13, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Create New Product Pages",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 16, 9, 45, 0),
                DueDate = new DateTime(2017, 5, 16, 11, 45, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Approve Website Launch",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 16, 12, 0, 0),
                DueDate = new DateTime(2017, 5, 16, 15, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Update Customer Shipping Profiles",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 17, 9, 30, 0),
                DueDate = new DateTime(2017, 5, 17, 11, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Create New Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 17, 12, 45, 0),
                DueDate = new DateTime(2017, 5, 17, 14, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Get Design for Shipping Return Labels",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 17, 15, 0, 0),
                DueDate = new DateTime(2017, 5, 17, 16, 30, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "PSD needed for Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 18, 8, 30, 0),
                DueDate = new DateTime(2017, 5, 18, 9, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Contact ISP and Discuss Payment Options",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 18, 11, 30, 0),
                DueDate = new DateTime(2017, 5, 18, 16, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Prepare Year-End Support Summary Report",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 18, 17, 0, 0),
                DueDate = new DateTime(2017, 5, 18, 20, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Review New Training Material",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 19, 8, 0, 0),
                DueDate = new DateTime(2017, 5, 19, 9, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Distribute Training Material to Support Staff",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 19, 12, 45, 0),
                DueDate = new DateTime(2017, 5, 19, 14, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Training Material Distribution Schedule",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 19, 14, 15, 0),
                DueDate = new DateTime(2017, 5, 19, 16, 15, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Approval on Converting to New HDMI Specification",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 22, 9, 30, 0),
                DueDate = new DateTime(2017, 5, 22, 10, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Create New Spike for Automation Server",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 22, 10, 0, 0),
                DueDate = new DateTime(2017, 5, 22, 12, 30, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Code Review - New Automation Server",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 22, 13, 0, 0),
                DueDate = new DateTime(2017, 5, 22, 15, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Confirm Availability for Sales Meeting",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 23, 10, 15, 0),
                DueDate = new DateTime(2017, 5, 23, 15, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Reschedule Sales Team Meeting",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 23, 16, 15, 0),
                DueDate = new DateTime(2017, 5, 23, 18, 0, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Send 2 Remotes for Giveaways",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 24, 9, 30, 0),
                DueDate = new DateTime(2017, 5, 24, 11, 45, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Discuss Product Giveaways with Management",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 24, 12, 15, 0),
                DueDate = new DateTime(2017, 5, 24, 16, 45, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Replace Desktops on the 3rd Floor",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 25, 9, 30, 0),
                DueDate = new DateTime(2017, 5, 25, 10, 45, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Update Database with New Leads",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 25, 12, 0, 0),
                DueDate = new DateTime(2017, 5, 25, 14, 15, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Mail New Leads for Follow Up",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 25, 14, 45, 0),
                DueDate = new DateTime(2017, 5, 25, 15, 30, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Send Territory Sales Breakdown",
                OwnerId = new[] { 2 },
                StartDate = new DateTime(2017, 5, 25, 18, 0, 0),
                DueDate = new DateTime(2017, 5, 25, 20, 0, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Territory Sales Breakdown Report",
                OwnerId = new[] { 1 },
                StartDate = new DateTime(2017, 5, 26, 8, 45, 0),
                DueDate = new DateTime(2017, 5, 26, 9, 45, 0),
                Priority = Priority.Low
            },
            new EmployeeTask {
                Subject = "Report on the State of Engineering Dept",
                OwnerId = new[] { 3 },
                StartDate = new DateTime(2017, 5, 26, 14, 45, 0),
                DueDate = new DateTime(2017, 5, 26, 15, 30, 0),
                Priority = Priority.High
            },
            new EmployeeTask {
                Subject = "Staff Productivity Report",
                OwnerId = new[] { 4 },
                StartDate = new DateTime(2017, 5, 26, 16, 15, 0),
                DueDate = new DateTime(2017, 5, 26, 19, 30, 0),
                Priority = Priority.High
            }
        };
    }
}
