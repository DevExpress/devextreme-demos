using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<RecurringAppointment> RecurringAppointments = new[] {
            new RecurringAppointment {
                Text = "Watercolor Landscape",
                RoomId = 1,
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 11, 0, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Oil Painting for Beginners",
                RoomId = 2,
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 11, 0, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
            },
            new RecurringAppointment {
                Text = "Testing",
                RoomId = 3,
                StartDate = new DateTime(2017, 5, 1, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 1, 13, 0, 0),
                RecurrenceRule = "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
            },
            new RecurringAppointment {
                Text = "Meeting of Instructors",
                RoomId = 4,
                StartDate = new DateTime(2017, 5, 1, 9, 0, 0),
                EndDate = new DateTime(2017, 5, 1, 9, 15, 0),
                RecurrenceRule = "FREQ=DAILY;BYDAY=WE;UNTIL=20170601"
            },
            new RecurringAppointment {
                Text = "Recruiting students",
                RoomId = 5,
                StartDate = new DateTime(2017, 5, 26, 10, 0, 0),
                EndDate = new DateTime(2017, 5, 26, 11, 0, 0),
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=23",
                RecurrenceException = "20170611T100000"
            },
            new RecurringAppointment {
                Text = "Final exams",
                RoomId = 3,
                StartDate = new DateTime(2017, 5, 26, 12, 0, 0),
                EndDate = new DateTime(2017, 5, 26, 13, 35, 0),
                RecurrenceRule = "FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR"
            },
            new RecurringAppointment {
                Text = "Monthly Planning",
                RoomId = 4,
                StartDate = new DateTime(2017, 5, 26, 14, 30, 0),
                EndDate = new DateTime(2017, 5, 26, 15, 45, 0),
                RecurrenceRule = "FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1"
            },
            new RecurringAppointment {
                Text = "Open Day",
                RoomId = 5,
                StartDate = new DateTime(2017, 5, 1, 9, 30, 0),
                EndDate = new DateTime(2017, 5, 1, 13, 0, 0),
                RecurrenceRule = "FREQ=YEARLY;BYYEARDAY=148"
            }
        };
    }
}
