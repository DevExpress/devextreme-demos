using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeAppointment> TimelineTasks = new[] {
            new EmployeeAppointment {
                Text = "Google AdWords Strategy",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-01T17:00:00.000Z",
                EndDate = "2021-02-01T18:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "New Brochures",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-01T19:30:00.000Z",
                EndDate = "2021-02-01T22:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Brochure Design Review",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-01T21:15:00.000Z",
                EndDate = "2021-02-02T00:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Website Re-Design Plan",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-02T00:45:00.000Z",
                EndDate = "2021-02-02T19:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Rollout of New Website and Marketing Brochures",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-02T16:15:00.000Z",
                EndDate = "2021-02-02T18:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update Sales Strategy Documents",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-02T20:00:00.000Z",
                EndDate = "2021-02-02T21:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Non-Compete Agreements",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-03T16:15:00.000Z",
                EndDate = "2021-02-03T17:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Approve Hiring of John Jeffers",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-03T18:00:00.000Z",
                EndDate = "2021-02-03T19:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update NDA Agreement",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-03T19:45:00.000Z",
                EndDate = "2021-02-03T21:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update Employee Files with New NDA",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-03T22:00:00.000Z",
                EndDate = "2021-02-04T00:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit Questions Regarding New NDA",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-04T16:00:00.000Z",
                EndDate = "2021-02-04T17:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit Signed NDA",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-04T20:45:00.000Z",
                EndDate = "2021-02-04T22:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review Revenue Projections",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-05T01:15:00.000Z",
                EndDate = "2021-02-05T02:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Comment on Revenue Projections",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-05T17:15:00.000Z",
                EndDate = "2021-02-05T19:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Provide New Health Insurance Docs",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-05T20:45:00.000Z",
                EndDate = "2021-02-05T22:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Review Changes to Health Insurance Coverage",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-05T22:15:00.000Z",
                EndDate = "2021-02-05T23:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review Training Course for any Ommissions",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-08T22:00:00.000Z",
                EndDate = "2021-02-09T20:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Recall Rebate Form",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-08T20:45:00.000Z",
                EndDate = "2021-02-08T21:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create Report on Customer Feedback",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-09T23:15:00.000Z",
                EndDate = "2021-02-10T01:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Review Customer Feedback Report",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-10T00:15:00.000Z",
                EndDate = "2021-02-10T02:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Customer Feedback Report Analysis",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-10T17:30:00.000Z",
                EndDate = "2021-02-10T18:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Prepare Shipping Cost Analysis Report",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-10T20:30:00.000Z",
                EndDate = "2021-02-10T21:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Provide Feedback on Shippers",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-10T22:15:00.000Z",
                EndDate = "2021-02-11T00:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Select Preferred Shipper",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-11T01:30:00.000Z",
                EndDate = "2021-02-11T04:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Complete Shipper Selection Form",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-11T16:30:00.000Z",
                EndDate = "2021-02-11T18:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Upgrade Server Hardware",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-11T20:00:00.000Z",
                EndDate = "2021-02-11T22:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Upgrade Personal Computers",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-11T22:45:00.000Z",
                EndDate = "2021-02-12T00:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Upgrade Apps to Windows RT or stay with WinForms",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-12T18:30:00.000Z",
                EndDate = "2021-02-12T21:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Estimate Time Required to Touch-Enable Apps",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-12T22:45:00.000Z",
                EndDate = "2021-02-13T00:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Report on Tranistion to Touch-Based Apps",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-13T02:30:00.000Z",
                EndDate = "2021-02-13T03:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit New Website Design",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-15T16:00:00.000Z",
                EndDate = "2021-02-15T18:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Create Icons for Website",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-15T19:30:00.000Z",
                EndDate = "2021-02-15T21:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create New Product Pages",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-16T17:45:00.000Z",
                EndDate = "2021-02-16T19:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Approve Website Launch",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-16T20:00:00.000Z",
                EndDate = "2021-02-16T23:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Update Customer Shipping Profiles",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-17T17:30:00.000Z",
                EndDate = "2021-02-17T19:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create New Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-17T20:45:00.000Z",
                EndDate = "2021-02-17T22:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Get Design for Shipping Return Labels",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-17T23:00:00.000Z",
                EndDate = "2021-02-18T00:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "PSD needed for Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-18T16:30:00.000Z",
                EndDate = "2021-02-18T17:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Contact ISP and Discuss Payment Options",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-18T19:30:00.000Z",
                EndDate = "2021-02-19T00:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Prepare Year-End Support Summary Report",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-19T01:00:00.000Z",
                EndDate = "2021-02-19T04:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review New Training Material",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-19T16:00:00.000Z",
                EndDate = "2021-02-19T17:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Distribute Training Material to Support Staff",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-19T20:45:00.000Z",
                EndDate = "2021-02-19T22:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Training Material Distribution Schedule",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-19T22:15:00.000Z",
                EndDate = "2021-02-20T00:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Approval on Converting to New HDMI Specification",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-22T17:30:00.000Z",
                EndDate = "2021-02-22T18:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Create New Spike for Automation Server",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-22T18:00:00.000Z",
                EndDate = "2021-02-22T20:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Code Review - New Automation Server",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-22T21:00:00.000Z",
                EndDate = "2021-02-22T23:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Confirm Availability for Sales Meeting",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-23T18:15:00.000Z",
                EndDate = "2021-02-23T23:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Reschedule Sales Team Meeting",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-24T00:15:00.000Z",
                EndDate = "2021-02-24T02:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Send 2 Remotes for Giveaways",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-24T17:30:00.000Z",
                EndDate = "2021-02-24T19:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Discuss Product Giveaways with Management",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-24T20:15:00.000Z",
                EndDate = "2021-02-25T00:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Replace Desktops on the 3rd Floor",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-25T17:30:00.000Z",
                EndDate = "2021-02-25T18:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Update Database with New Leads",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-25T20:00:00.000Z",
                EndDate = "2021-02-25T22:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Mail New Leads for Follow Up",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-25T22:45:00.000Z",
                EndDate = "2021-02-25T23:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Send Territory Sales Breakdown",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-26T02:00:00.000Z",
                EndDate = "2021-02-26T04:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Territory Sales Breakdown Report",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-26T16:45:00.000Z",
                EndDate = "2021-02-26T17:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Report on the State of Engineering Dept",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-26T22:45:00.000Z",
                EndDate = "2021-02-26T23:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Staff Productivity Report",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-27T00:15:00.000Z",
                EndDate = "2021-02-27T03:30:00.000Z",
                Priority = Priority.High
            }
        };
    }
}
