import { Injectable } from '@angular/core';

export class Data {
    text: string;
    startDate: Date;
    endDate: Date;
}

const data: Data[] = [
    {
        text: "Website Re-Design Plan",
        startDate: new Date("2021-05-24T16:30:00.000Z"),
        endDate: new Date("2021-05-24T18:30:00.000Z")
    },
    {
        text: "Install New Router in Dev Room",
        startDate: new Date("2021-05-24T20:00:00.000Z"),
        endDate: new Date("2021-05-24T21:00:00.000Z")
    },
    {
        text: "Approve Personal Computer Upgrade Plan",
        startDate: new Date("2021-05-25T17:00:00.000Z"),
        endDate: new Date("2021-05-25T18:00:00.000Z")
    },
    {
        text: "Final Budget Review",
        startDate: new Date("2021-05-25T20:30:00.000Z"),
        endDate: new Date("2021-05-25T22:00:00.000Z")
    },
    {
        text: "New Brochures",
        startDate: new Date("2021-05-24T22:00:00.000Z"),
        endDate: new Date("2021-05-24T23:15:00.000Z")
    },
    {
        text: "Install New Database",
        startDate: new Date("2021-05-26T16:45:00.000Z"),
        endDate: new Date("2021-05-26T19:00:00.000Z")
    },
    {
        text: "Approve New Online Marketing Strategy",
        startDate: new Date("2021-05-26T21:30:00.000Z"),
        endDate: new Date("2021-05-26T23:30:00.000Z")
    },
    {
        text: "Upgrade Personal Computers",
        startDate: new Date("2021-05-25T22:30:00.000Z"),
        endDate: new Date("2021-05-25T23:45:00.000Z")
    },
    {
        text: "Prepare 2021 Marketing Plan",
        startDate: new Date("2021-05-31T20:00:00.000Z"),
        endDate: new Date("2021-05-31T22:00:00.000Z")
    },
    {
        text: "Brochure Design Review",
        startDate: new Date("2021-06-01T22:30:00.000Z"),
        endDate: new Date("2021-06-02T00:00:00.000Z")
    },
    {
        text: "Create Icons for Website",
        startDate: new Date("2021-05-28T17:00:00.000Z"),
        endDate: new Date("2021-05-28T19:00:00.000Z")
    },
    {
        text: "Upgrade Server Hardware",
        startDate: new Date("2021-05-28T23:30:00.000Z"),
        endDate: new Date("2021-05-29T01:00:00.000Z")
    },
    {
        text: "Submit New Website Design",
        startDate: new Date("2021-06-02T17:00:00.000Z"),
        endDate: new Date("2021-06-02T18:30:00.000Z")
    },
    {
        text: "Launch New Website",
        startDate: new Date("2021-05-28T21:30:00.000Z"),
        endDate: new Date("2021-05-28T23:10:00.000Z")
    }
];

@Injectable()
export class DataService {
    getData() {
        return data;
    }

    getDinnerTime() {
        return { from: 12, to: 13 };
    }

    getHolidays() {
        return [
            new Date(2021, 4, 27),
            new Date(2021, 6, 4)
        ];
    }
}
