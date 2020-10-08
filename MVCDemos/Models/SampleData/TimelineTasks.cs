using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<EmployeeAppointment> TimelineTasks = new[] {
            new EmployeeAppointment {
                Text = "Google AdWords Strategy",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-01T06:00:00.000Z",
                EndDate = "2021-02-01T07:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "New Brochures",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-01T08:30:00.000Z",
                EndDate = "2021-02-01T11:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Brochure Design Review",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-01T10:15:00.000Z",
                EndDate = "2021-02-01T13:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Website Re-Design Plan",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-01T13:45:00.000Z",
                EndDate = "2021-02-02T08:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Rollout of New Website and Marketing Brochures",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-02T05:15:00.000Z",
                EndDate = "2021-02-02T07:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update Sales Strategy Documents",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-02T09:00:00.000Z",
                EndDate = "2021-02-02T10:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Non-Compete Agreements",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-03T05:15:00.000Z",
                EndDate = "2021-02-03T06:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Approve Hiring of John Jeffers",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-03T07:00:00.000Z",
                EndDate = "2021-02-03T08:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update NDA Agreement",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-03T08:45:00.000Z",
                EndDate = "2021-02-03T10:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Update Employee Files with New NDA",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-03T11:00:00.000Z",
                EndDate = "2021-02-03T13:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit Questions Regarding New NDA",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-04T05:00:00.000Z",
                EndDate = "2021-02-04T06:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit Signed NDA",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-04T09:45:00.000Z",
                EndDate = "2021-02-04T11:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review Revenue Projections",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-04T14:15:00.000Z",
                EndDate = "2021-02-04T15:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Comment on Revenue Projections",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-05T06:15:00.000Z",
                EndDate = "2021-02-05T08:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Provide New Health Insurance Docs",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-05T09:45:00.000Z",
                EndDate = "2021-02-05T11:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Review Changes to Health Insurance Coverage",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-05T11:15:00.000Z",
                EndDate = "2021-02-05T12:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review Training Course for any Ommissions",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-08T11:00:00.000Z",
                EndDate = "2021-02-09T09:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Recall Rebate Form",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-08T09:45:00.000Z",
                EndDate = "2021-02-08T10:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create Report on Customer Feedback",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-09T12:15:00.000Z",
                EndDate = "2021-02-09T14:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Review Customer Feedback Report",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-09T13:15:00.000Z",
                EndDate = "2021-02-09T15:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Customer Feedback Report Analysis",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-10T06:30:00.000Z",
                EndDate = "2021-02-10T07:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Prepare Shipping Cost Analysis Report",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-10T09:30:00.000Z",
                EndDate = "2021-02-10T10:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Provide Feedback on Shippers",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-10T11:15:00.000Z",
                EndDate = "2021-02-10T13:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Select Preferred Shipper",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-10T14:30:00.000Z",
                EndDate = "2021-02-10T17:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Complete Shipper Selection Form",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-11T05:30:00.000Z",
                EndDate = "2021-02-11T07:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Upgrade Server Hardware",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-11T09:00:00.000Z",
                EndDate = "2021-02-11T11:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Upgrade Personal Computers",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-11T11:45:00.000Z",
                EndDate = "2021-02-11T13:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Upgrade Apps to Windows RT or stay with WinForms",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-12T07:30:00.000Z",
                EndDate = "2021-02-12T10:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Estimate Time Required to Touch-Enable Apps",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-12T11:45:00.000Z",
                EndDate = "2021-02-12T13:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Report on Tranistion to Touch-Based Apps",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-12T15:30:00.000Z",
                EndDate = "2021-02-12T16:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Submit New Website Design",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-15T05:00:00.000Z",
                EndDate = "2021-02-15T07:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Create Icons for Website",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-15T08:30:00.000Z",
                EndDate = "2021-02-15T10:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create New Product Pages",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-16T06:45:00.000Z",
                EndDate = "2021-02-16T08:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Approve Website Launch",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-16T09:00:00.000Z",
                EndDate = "2021-02-16T12:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Update Customer Shipping Profiles",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-17T06:30:00.000Z",
                EndDate = "2021-02-17T08:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Create New Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-17T09:45:00.000Z",
                EndDate = "2021-02-17T11:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Get Design for Shipping Return Labels",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-17T12:00:00.000Z",
                EndDate = "2021-02-17T13:30:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "PSD needed for Shipping Return Labels",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-18T05:30:00.000Z",
                EndDate = "2021-02-18T06:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Contact ISP and Discuss Payment Options",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-18T08:30:00.000Z",
                EndDate = "2021-02-18T13:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Prepare Year-End Support Summary Report",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-18T14:00:00.000Z",
                EndDate = "2021-02-18T17:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Review New Training Material",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-19T05:00:00.000Z",
                EndDate = "2021-02-19T06:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Distribute Training Material to Support Staff",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-19T09:45:00.000Z",
                EndDate = "2021-02-19T11:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Training Material Distribution Schedule",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-19T11:15:00.000Z",
                EndDate = "2021-02-19T13:15:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Approval on Converting to New HDMI Specification",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-22T06:30:00.000Z",
                EndDate = "2021-02-22T07:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Create New Spike for Automation Server",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-22T07:00:00.000Z",
                EndDate = "2021-02-22T09:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Code Review - New Automation Server",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-22T10:00:00.000Z",
                EndDate = "2021-02-22T12:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Confirm Availability for Sales Meeting",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-23T07:15:00.000Z",
                EndDate = "2021-02-23T12:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Reschedule Sales Team Meeting",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-23T13:15:00.000Z",
                EndDate = "2021-02-23T15:00:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Send 2 Remotes for Giveaways",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-24T06:30:00.000Z",
                EndDate = "2021-02-24T08:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Discuss Product Giveaways with Management",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-24T09:15:00.000Z",
                EndDate = "2021-02-24T13:45:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Replace Desktops on the 3rd Floor",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-25T06:30:00.000Z",
                EndDate = "2021-02-25T07:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Update Database with New Leads",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-25T09:00:00.000Z",
                EndDate = "2021-02-25T11:15:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Mail New Leads for Follow Up",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-25T11:45:00.000Z",
                EndDate = "2021-02-25T12:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Send Territory Sales Breakdown",
                OwnerId = new[] { 2 },
                StartDate = "2021-02-25T15:00:00.000Z",
                EndDate = "2021-02-25T17:00:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Territory Sales Breakdown Report",
                OwnerId = new[] { 1 },
                StartDate = "2021-02-26T05:45:00.000Z",
                EndDate = "2021-02-26T06:45:00.000Z",
                Priority = Priority.Low
            },
            new EmployeeAppointment {
                Text = "Report on the State of Engineering Dept",
                OwnerId = new[] { 3 },
                StartDate = "2021-02-26T11:45:00.000Z",
                EndDate = "2021-02-26T12:30:00.000Z",
                Priority = Priority.High
            },
            new EmployeeAppointment {
                Text = "Staff Productivity Report",
                OwnerId = new[] { 4 },
                StartDate = "2021-02-26T13:15:00.000Z",
                EndDate = "2021-02-26T16:30:00.000Z",
                Priority = Priority.High
            }
        };
    }
}
