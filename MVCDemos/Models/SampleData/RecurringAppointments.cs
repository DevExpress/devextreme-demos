using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RecurringAppointment> RecurringAppointments = new[] {
            new RecurringAppointment {
                Text = "Watercolor Landscape",
                RoomId = 1,
                StartDate = "2021-03-01T17:30:00.000Z",
                EndDate = "2021-03-01T19:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Oil Painting for Beginners",
                RoomId = 2,
                StartDate = "2021-03-01T17:30:00.000Z",
                EndDate = "2021-03-01T19:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Testing",
                RoomId = 3,
                StartDate = "2021-03-01T20:00:00.000Z",
                EndDate = "2021-03-01T21:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
            },
            new RecurringAppointment {
                Text = "Meeting of Instructors",
                RoomId = 4,
                StartDate = "2021-03-01T17:00:00.000Z",
                EndDate = "2021-03-01T17:15:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=WE;UNTIL=20210401"
            },
            new RecurringAppointment {
                Text = "Recruiting students",
                RoomId = 5,
                StartDate = "2021-02-24T18:00:00.000Z",
                EndDate = "2021-02-24T19:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=14",
                RecurrenceException = "20210411T170000Z"
            },
            new RecurringAppointment {
                Text = "Final exams",
                RoomId = 3,
                StartDate = "2021-02-24T20:00:00.000Z",
                EndDate = "2021-02-24T21:35:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=15;BYDAY=TH,FR"
            },
            new RecurringAppointment {
                Text = "Monthly Planning",
                RoomId = 4,
                StartDate = "2021-03-24T22:30:00.000Z",
                EndDate = "2021-03-24T23:45:00.000Z",
                RecurrenceRule = "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
            },
            new RecurringAppointment {
                Text = "Open Day",
                RoomId = 5,
                StartDate = "2021-03-01T17:30:00.000Z",
                EndDate = "2021-03-01T21:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYYEARDAY=87"
            }
        };
    }
}
