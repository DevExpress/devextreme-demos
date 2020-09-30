import { Injectable } from "@angular/core";

export class Appointment {
    text: string;
    startDate: Date;
    endDate: Date;
}

let appointments: Appointment[] = [{
    text: "Google AdWords Strategy",
    startDate: new Date("2021-05-01T06:00:00.000Z"),
    endDate: new Date("2021-05-01T07:30:00.000Z")
}, {
    text: "New Brochures",
    startDate: new Date("2021-05-01T08:30:00.000Z"),
    endDate: new Date("2021-05-01T11:15:00.000Z")
}, {
    text: "Brochure Design Review",
    startDate: new Date("2021-05-30T07:15:00.000Z"),
    endDate: new Date("2021-05-30T09:15:00.000Z")
}, {
    text: "Website Re-Design Plan",
    startDate: new Date("2021-05-01T13:45:00.000Z"),
    endDate: new Date("2021-05-02T14:15:00.000Z")
}, {
    text: "Rollout of New Website and Marketing Brochures",
    startDate: new Date("2021-05-02T05:15:00.000Z"),
    endDate: new Date("2021-05-02T07:45:00.000Z")
}, {
    text: "Update Sales Strategy Documents",
    startDate: new Date("2021-05-31T06:00:00.000Z"),
    endDate: new Date("2021-05-31T07:45:00.000Z")
}, {
    text: "Non-Compete Agreements",
    startDate: new Date("2021-05-03T05:15:00.000Z"),
    endDate: new Date("2021-05-03T06:00:00.000Z")
}, {
    text: "Approve Hiring of John Jeffers",
    startDate: new Date("2021-05-03T07:00:00.000Z"),
    endDate: new Date("2021-05-03T08:15:00.000Z")
}, {
    text: "Update NDA Agreement",
    startDate: new Date("2021-06-01T06:45:00.000Z"),
    endDate: new Date("2021-06-01T08:45:00.000Z")
}, {
    text: "Update Employee Files with New NDA",
    startDate: new Date("2021-06-01T09:00:00.000Z"),
    endDate: new Date("2021-06-01T11:45:00.000Z")
}, {
    text: "Submit Questions Regarding New NDA",
    startDate: new Date("2021-05-04T05:00:00.000Z"),
    endDate: new Date("2021-05-04T06:30:00.000Z")
}, {
    text: "Submit Signed NDA",
    startDate: new Date("2021-06-05T06:45:00.000Z"),
    endDate: new Date("2021-06-05T08:00:00.000Z")
}, {
    text: "Review Revenue Projections",
    startDate: new Date("2021-05-04T14:15:00.000Z"),
    endDate: new Date("2021-05-04T15:00:00.000Z")
}, {
    text: "Comment on Revenue Projections",
    startDate: new Date("2021-05-05T06:15:00.000Z"),
    endDate: new Date("2021-05-05T08:15:00.000Z")
}, {
    text: "Provide New Health Insurance Docs",
    startDate: new Date("2021-06-06T06:15:00.000Z"),
    endDate: new Date("2021-06-06T07:45:00.000Z")
}, {
    text: "Review Changes to Health Insurance Coverage",
    startDate: new Date("2021-06-06T07:50:00.000Z"),
    endDate: new Date("2021-06-06T09:30:00.000Z")
}, {
    text: "Review Training Course for any Ommissions",
    startDate: new Date("2021-05-08T11:00:00.000Z"),
    endDate: new Date("2021-05-09T11:00:00.000Z")
}, {
    text: "Recall Rebate Form",
    startDate: new Date("2021-06-07T07:00:00.000Z"),
    endDate: new Date("2021-06-07T08:15:00.000Z")
}, {
    text: "Create Report on Customer Feedback",
    startDate: new Date("2021-05-09T12:15:00.000Z"),
    endDate: new Date("2021-05-09T14:30:00.000Z")
}, {
    text: "Review Customer Feedback Report",
    startDate: new Date("2021-05-09T13:15:00.000Z"),
    endDate: new Date("2021-05-09T15:30:00.000Z")
}, {
    text: "Customer Feedback Report Analysis",
    startDate: new Date("2021-05-10T06:30:00.000Z"),
    endDate: new Date("2021-05-10T07:30:00.000Z")
}, {
    text: "Prepare Shipping Cost Analysis Report",
    startDate: new Date("2021-06-08T08:30:00.000Z"),
    endDate: new Date("2021-06-08T09:30:00.000Z")
}, {
    text: "Provide Feedback on Shippers",
    startDate: new Date("2021-06-09T07:15:00.000Z"),
    endDate: new Date("2021-06-09T09:00:00.000Z")
}, {
    text: "Select Preferred Shipper",
    startDate: new Date("2021-06-09T09:30:00.000Z"),
    endDate: new Date("2021-06-09T11:00:00.000Z")
}, {
    text: "Complete Shipper Selection Form",
    startDate: new Date("2021-06-12T05:30:00.000Z"),
    endDate: new Date("2021-06-12T07:00:00.000Z")
}, {
    text: "Upgrade Server Hardware",
    startDate: new Date("2021-05-11T09:00:00.000Z"),
    endDate: new Date("2021-05-11T11:15:00.000Z")
}, {
    text: "Upgrade Personal Computers",
    startDate: new Date("2021-05-11T11:45:00.000Z"),
    endDate: new Date("2021-05-11T13:30:00.000Z")
}, {
    text: "Upgrade Apps to Windows RT or stay with WinForms",
    startDate: new Date("2021-05-12T07:30:00.000Z"),
    endDate: new Date("2021-05-12T10:00:00.000Z")
}, {
    text: "Estimate Time Required to Touch-Enable Apps",
    startDate: new Date("2021-06-13T06:45:00.000Z"),
    endDate: new Date("2021-06-13T08:00:00.000Z")
}, {
    text: "Report on Tranistion to Touch-Based Apps",
    startDate: new Date("2021-06-14T08:30:00.000Z"),
    endDate: new Date("2021-06-14T09:30:00.000Z")
}, {
    text: "Submit New Website Design",
    startDate: new Date("2021-05-15T05:00:00.000Z"),
    endDate: new Date("2021-05-15T07:00:00.000Z")
}, {
    text: "Create Icons for Website",
    startDate: new Date("2021-06-15T08:30:00.000Z"),
    endDate: new Date("2021-06-15T10:15:00.000Z")
}, {
    text: "Create New Product Pages",
    startDate: new Date("2021-05-16T06:45:00.000Z"),
    endDate: new Date("2021-05-16T08:45:00.000Z")
}, {
    text: "Approve Website Launch",
    startDate: new Date("2021-06-16T09:00:00.000Z"),
    endDate: new Date("2021-06-16T12:15:00.000Z")
}, {
    text: "Update Customer Shipping Profiles",
    startDate: new Date("2021-05-17T06:30:00.000Z"),
    endDate: new Date("2021-05-17T08:00:00.000Z")
}, {
    text: "Create New Shipping Return Labels",
    startDate: new Date("2021-05-17T09:45:00.000Z"),
    endDate: new Date("2021-05-17T11:00:00.000Z")
}, {
    text: "Get Design for Shipping Return Labels",
    startDate: new Date("2021-05-17T12:00:00.000Z"),
    endDate: new Date("2021-05-17T13:30:00.000Z")
}, {
    text: "PSD needed for Shipping Return Labels",
    startDate: new Date("2021-05-18T05:30:00.000Z"),
    endDate: new Date("2021-05-18T06:15:00.000Z")
}, {
    text: "Contact ISP and Discuss Payment Options",
    startDate: new Date("2021-06-19T08:30:00.000Z"),
    endDate: new Date("2021-06-19T13:00:00.000Z")
}, {
    text: "Prepare Year-End Support Summary Report",
    startDate: new Date("2021-06-19T07:00:00.000Z"),
    endDate: new Date("2021-06-19T09:00:00.000Z")
}, {
    text: "Review New Training Material",
    startDate: new Date("2021-05-22T05:00:00.000Z"),
    endDate: new Date("2021-05-22T06:15:00.000Z")
}, {
    text: "Distribute Training Material to Support Staff",
    startDate: new Date("2021-05-19T09:45:00.000Z"),
    endDate: new Date("2021-05-19T11:00:00.000Z")
}, {
    text: "Training Material Distribution Schedule",
    startDate: new Date("2021-06-20T11:15:00.000Z"),
    endDate: new Date("2021-06-20T13:15:00.000Z")
}, {
    text: "Approval on Converting to New HDMI Specification",
    startDate: new Date("2021-05-29T06:30:00.000Z"),
    endDate: new Date("2021-05-29T07:15:00.000Z")
}, {
    text: "Create New Spike for Automation Server",
    startDate: new Date("2021-06-21T07:00:00.000Z"),
    endDate: new Date("2021-06-21T09:30:00.000Z")
}, {
    text: "Code Review - New Automation Server",
    startDate: new Date("2021-06-21T10:00:00.000Z"),
    endDate: new Date("2021-06-21T12:00:00.000Z")
}, {
    text: "Confirm Availability for Sales Meeting",
    startDate: new Date("2021-05-23T07:15:00.000Z"),
    endDate: new Date("2021-05-23T12:15:00.000Z")
}, {
    text: "Reschedule Sales Team Meeting",
    startDate: new Date("2021-05-24T13:15:00.000Z"),
    endDate: new Date("2021-05-24T15:00:00.000Z")
}, {
    text: "Send 2 Remotes for Giveaways",
    startDate: new Date("2021-06-22T06:30:00.000Z"),
    endDate: new Date("2021-06-22T08:45:00.000Z")
}, {
    text: "Discuss Product Giveaways with Management",
    startDate: new Date("2021-06-23T09:15:00.000Z"),
    endDate: new Date("2021-06-23T13:45:00.000Z")
}, {
    text: "Replace Desktops on the 3rd Floor",
    startDate: new Date("2021-05-25T06:30:00.000Z"),
    endDate: new Date("2021-05-25T07:45:00.000Z")
}, {
    text: "Update Database with New Leads",
    startDate: new Date("2021-06-26T09:00:00.000Z"),
    endDate: new Date("2021-06-26T11:15:00.000Z")
}, {
    text: "Mail New Leads for Follow Up",
    startDate: new Date("2021-06-27T11:45:00.000Z"),
    endDate: new Date("2021-06-27T12:30:00.000Z")
}, {
    text: "Send Territory Sales Breakdown",
    startDate: new Date("2021-05-25T15:00:00.000Z"),
    endDate: new Date("2021-05-25T17:00:00.000Z")
}, {
    text: "Territory Sales Breakdown Report",
    startDate: new Date("2021-05-26T05:45:00.000Z"),
    endDate: new Date("2021-05-26T06:45:00.000Z")
}, {
    text: "Report on the State of Engineering Dept",
    startDate: new Date("2021-05-26T11:45:00.000Z"),
    endDate: new Date("2021-05-26T12:30:00.000Z")
}, {
    text: "Staff Productivity Report",
    startDate: new Date("2021-06-27T13:15:00.000Z"),
    endDate: new Date("2021-06-27T16:30:00.000Z")
}];

@Injectable()
export class Service {
    getAppointments(){
        return appointments;
    }
}
