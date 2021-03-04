using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RecurringAppointment> RecurringAppointments = new[] {
            new RecurringAppointment {
                Text = "Watercolor Landscape",
                RoomId = 1,
                StartDate = "2020-11-01T17:30:00.000Z",
                EndDate = "2020-11-01T19:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Oil Painting for Beginners",
                RoomId = 2,
                StartDate = "2020-11-01T17:30:00.000Z",
                EndDate = "2020-11-01T19:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=SU,WE;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Testing",
                RoomId = 3,
                StartDate = "2020-11-01T20:00:00.000Z",
                EndDate = "2020-11-01T21:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=SU;WKST=TU;INTERVAL=2;COUNT=2"
            },
            new RecurringAppointment {
                Text = "Meeting of Instructors",
                RoomId = 4,
                StartDate = "2020-11-01T17:00:00.000Z",
                EndDate = "2020-11-01T17:15:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=TU;UNTIL=20201203"
            },
            new RecurringAppointment {
                Text = "Recruiting students",
                RoomId = 5,
                StartDate = "2020-10-24T18:00:00.000Z",
                EndDate = "2020-10-24T19:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=50;WKST=SU",
                RecurrenceException = "20201212T190000Z"
            },
            new RecurringAppointment {
                Text = "Final exams",
                RoomId = 3,
                StartDate = "2020-10-24T20:00:00.000Z",
                EndDate = "2020-10-24T21:35:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=51;BYDAY=WE,TH"
            },
            new RecurringAppointment {
                Text = "Monthly Planning",
                RoomId = 4,
                StartDate = "2020-11-24T22:30:00.000Z",
                EndDate = "2020-11-24T23:45:00.000Z",
                RecurrenceRule = "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
            },
            new RecurringAppointment {
                Text = "Open Day",
                RoomId = 5,
                StartDate = "2020-11-01T17:30:00.000Z",
                EndDate = "2020-11-01T21:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYYEARDAY=333"
            }
        };
    }
}
