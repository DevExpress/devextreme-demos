using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RecurringAppointment> RecurringAppointments = new[] {
            new RecurringAppointment {
                Text = "Watercolor Landscape",
                RoomId = 1,
                StartDate = "2021-02-29T06:30:00.000Z",
                EndDate = "2021-02-29T08:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Oil Painting for Beginners",
                RoomId = 2,
                StartDate = "2021-02-29T06:30:00.000Z",
                EndDate = "2021-02-29T08:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Testing",
                RoomId = 3,
                StartDate = "2021-02-29T09:00:00.000Z",
                EndDate = "2021-02-29T10:00:00.000Z",
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
            },
            new RecurringAppointment {
                Text = "Meeting of Instructors",
                RoomId = 4,
                StartDate = "2021-02-29T06:00:00.000Z",
                EndDate = "2021-02-29T06:15:00.000Z",
                RecurrenceRule = "FREQ=DAILY;BYDAY=WE;UNTIL=20210401"
            },
            new RecurringAppointment {
                Text = "Recruiting students",
                RoomId = 5,
                StartDate = "2021-02-24T07:00:00.000Z",
                EndDate = "2021-02-24T08:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=14",
                RecurrenceException = "20210411T100000"
            },
            new RecurringAppointment {
                Text = "Final exams",
                RoomId = 3,
                StartDate = "2021-02-24T09:00:00.000Z",
                EndDate = "2021-02-24T10:35:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=15;BYDAY=TH,FR"
            },
            new RecurringAppointment {
                Text = "Monthly Planning",
                RoomId = 4,
                StartDate = "2021-03-24T11:30:00.000Z",
                EndDate = "2021-03-24T12:45:00.000Z",
                RecurrenceRule = "FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1"
            },
            new RecurringAppointment {
                Text = "Open Day",
                RoomId = 5,
                StartDate = "2021-02-29T06:30:00.000Z",
                EndDate = "2021-02-29T10:00:00.000Z",
                RecurrenceRule = "FREQ=YEARLY;BYYEARDAY=87"
            }
        };
    }
}
