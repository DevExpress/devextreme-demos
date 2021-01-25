using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<AppointmentWithResources> AgendaTasks = new[] {
            new AppointmentWithResources {
                Text = "Google AdWords Strategy",
                StartDate = "2021-05-03T16:00:00.000Z",
                EndDate = "2021-05-03T17:30:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "New Brochures",
                StartDate = "2021-05-03T18:30:00.000Z",
                EndDate = "2021-05-03T21:15:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Brochure Design Review",
                StartDate = "2021-05-03T20:15:00.000Z",
                EndDate = "2021-05-03T23:15:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Website Re-Design Plan",
                StartDate = "2021-05-03T23:45:00.000Z",
                EndDate = "2021-05-04T18:15:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Rollout of New Website and Marketing Brochures",
                StartDate = "2021-05-04T15:15:00.000Z",
                EndDate = "2021-05-04T17:45:00.000Z",
                OwnerId = 4,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Update Sales Strategy Documents",
                StartDate = "2021-05-04T19:00:00.000Z",
                EndDate = "2021-05-04T20:45:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Non-Compete Agreements",
                StartDate = "2021-05-05T15:15:00.000Z",
                EndDate = "2021-05-05T16:00:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Approve Hiring of John Jeffers",
                StartDate = "2021-05-05T17:00:00.000Z",
                EndDate = "2021-05-05T18:15:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Update NDA Agreement",
                StartDate = "2021-05-05T18:45:00.000Z",
                EndDate = "2021-05-05T20:45:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Update Employee Files with New NDA",
                StartDate = "2021-05-05T21:00:00.000Z",
                EndDate = "2021-05-05T23:45:00.000Z",
                OwnerId = 4,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Submit Questions Regarding New NDA",
                StartDate = "2021-05-07T01:00:00.000Z",
                EndDate = "2021-05-06T16:30:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Submit Signed NDA",
                StartDate = "2021-05-06T19:45:00.000Z",
                EndDate = "2021-05-06T21:00:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Review Revenue Projections",
                StartDate = "2021-05-07T00:15:00.000Z",
                EndDate = "2021-05-06T15:00:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Comment on Revenue Projections",
                StartDate = "2021-05-07T16:15:00.000Z",
                EndDate = "2021-05-07T18:15:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Provide New Health Insurance Docs",
                StartDate = "2021-05-07T19:45:00.000Z",
                EndDate = "2021-05-07T21:15:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Review Changes to Health Insurance Coverage",
                StartDate = "2021-05-07T21:15:00.000Z",
                EndDate = "2021-05-07T22:30:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Review Training Course for any Ommissions",
                StartDate = "2021-05-10T21:00:00.000Z",
                EndDate = "2021-05-11T19:00:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Recall Rebate Form",
                StartDate = "2021-05-10T19:45:00.000Z",
                EndDate = "2021-05-10T20:15:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Create Report on Customer Feedback",
                StartDate = "2021-05-11T22:15:00.000Z",
                EndDate = "2021-05-12T00:30:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Review Customer Feedback Report",
                StartDate = "2021-05-11T23:15:00.000Z",
                EndDate = "2021-05-12T01:30:00.000Z",
                OwnerId = 2,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Customer Feedback Report Analysis",
                StartDate = "2021-05-12T16:30:00.000Z",
                EndDate = "2021-05-12T17:30:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY",
                OwnerId = 4,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Prepare Shipping Cost Analysis Report",
                StartDate = "2021-05-12T19:30:00.000Z",
                EndDate = "2021-05-12T20:30:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Provide Feedback on Shippers",
                StartDate = "2021-05-12T21:15:00.000Z",
                EndDate = "2021-05-12T23:00:00.000Z",
                OwnerId = 4,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Select Preferred Shipper",
                StartDate = "2021-05-13T00:30:00.000Z",
                EndDate = "2021-05-13T03:00:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Complete Shipper Selection Form",
                StartDate = "2021-05-13T15:30:00.000Z",
                EndDate = "2021-05-13T17:00:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Upgrade Server Hardware",
                StartDate = "2021-05-13T19:00:00.000Z",
                EndDate = "2021-05-13T21:15:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY",
                OwnerId = 2,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Upgrade Personal Computers",
                StartDate = "2021-05-13T21:45:00.000Z",
                EndDate = "2021-05-13T23:30:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Upgrade Apps to Windows RT or stay with WinForms",
                StartDate = "2021-05-14T17:30:00.000Z",
                EndDate = "2021-05-14T20:00:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Estimate Time Required to Touch-Enable Apps",
                StartDate = "2021-05-14T21:45:00.000Z",
                EndDate = "2021-05-14T23:30:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Report on Tranistion to Touch-Based Apps",
                StartDate = "2021-05-15T01:30:00.000Z",
                EndDate = "2021-05-15T02:00:00.000Z",
                OwnerId = 4,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Submit New Website Design",
                StartDate = "2021-05-17T15:00:00.000Z",
                EndDate = "2021-05-17T17:00:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Create Icons for Website",
                StartDate = "2021-05-17T18:30:00.000Z",
                EndDate = "2021-05-17T20:15:00.000Z",
                OwnerId = 4,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Create New Product Pages",
                StartDate = "2021-05-18T16:45:00.000Z",
                EndDate = "2021-05-18T18:45:00.000Z",
                OwnerId = 2,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Approve Website Launch",
                StartDate = "2021-05-18T19:00:00.000Z",
                EndDate = "2021-05-18T22:15:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Update Customer Shipping Profiles",
                StartDate = "2021-05-19T16:30:00.000Z",
                EndDate = "2021-05-19T18:00:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Create New Shipping Return Labels",
                StartDate = "2021-05-19T19:45:00.000Z",
                EndDate = "2021-05-19T21:00:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Get Design for Shipping Return Labels",
                StartDate = "2021-05-19T22:00:00.000Z",
                EndDate = "2021-05-19T23:30:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "PSD needed for Shipping Return Labels",
                StartDate = "2021-05-20T15:30:00.000Z",
                EndDate = "2021-05-20T16:15:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Contact ISP and Discuss Payment Options",
                StartDate = "2021-05-20T18:30:00.000Z",
                EndDate = "2021-05-20T23:00:00.000Z",
                OwnerId = 4,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Prepare Year-End Support Summary Report",
                StartDate = "2021-05-21T00:00:00.000Z",
                EndDate = "2021-05-21T03:00:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Review New Training Material",
                StartDate = "2021-05-21T15:00:00.000Z",
                EndDate = "2021-05-21T16:15:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Distribute Training Material to Support Staff",
                StartDate = "2021-05-21T19:45:00.000Z",
                EndDate = "2021-05-21T21:00:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Training Material Distribution Schedule",
                StartDate = "2021-05-21T21:15:00.000Z",
                EndDate = "2021-05-21T23:15:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Approval on Converting to New HDMI Specification",
                StartDate = "2021-05-24T16:30:00.000Z",
                EndDate = "2021-05-24T17:15:00.000Z",
                OwnerId = 4,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Create New Spike for Automation Server",
                StartDate = "2021-05-24T17:00:00.000Z",
                EndDate = "2021-05-24T19:30:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Code Review - New Automation Server",
                StartDate = "2021-05-24T20:00:00.000Z",
                EndDate = "2021-05-24T22:00:00.000Z",
                OwnerId = 3,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Confirm Availability for Sales Meeting",
                StartDate = "2021-05-25T17:15:00.000Z",
                EndDate = "2021-05-25T22:15:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Reschedule Sales Team Meeting",
                StartDate = "2021-05-25T23:15:00.000Z",
                EndDate = "2021-05-26T01:00:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Send 2 Remotes for Giveaways",
                StartDate = "2021-05-26T16:30:00.000Z",
                EndDate = "2021-05-26T18:45:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Discuss Product Giveaways with Management",
                StartDate = "2021-05-26T19:15:00.000Z",
                EndDate = "2021-05-26T23:45:00.000Z",
                OwnerId = 4,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Replace Desktops on the 3rd Floor",
                StartDate = "2021-05-27T16:30:00.000Z",
                EndDate = "2021-05-27T17:45:00.000Z",
                OwnerId = 2,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Update Database with New Leads",
                StartDate = "2021-05-27T19:00:00.000Z",
                EndDate = "2021-05-27T21:15:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Mail New Leads for Follow Up",
                StartDate = "2021-05-27T21:45:00.000Z",
                EndDate = "2021-05-27T22:30:00.000Z",
                OwnerId = 1,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Send Territory Sales Breakdown",
                StartDate = "2021-05-28T01:00:00.000Z",
                EndDate = "2021-05-28T03:00:00.000Z",
                OwnerId = 2,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Territory Sales Breakdown Report",
                StartDate = "2021-05-28T15:45:00.000Z",
                EndDate = "2021-05-28T16:45:00.000Z",
                OwnerId = 3,
                PriorityId = 2
            }, new AppointmentWithResources {
                Text = "Report on the State of Engineering Dept",
                StartDate = "2021-05-28T21:45:00.000Z",
                EndDate = "2021-05-28T22:30:00.000Z",
                OwnerId = 4,
                PriorityId = 1
            }, new AppointmentWithResources {
                Text = "Staff Productivity Report",
                StartDate = "2021-05-28T23:15:00.000Z",
                EndDate = "2021-05-29T02:30:00.000Z",
                OwnerId = 1,
                PriorityId = 1
            }
        };
    }
}
