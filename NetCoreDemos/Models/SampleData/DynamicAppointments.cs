using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public partial class SampleData {
        public static IEnumerable<DynamicAppointment> DynamicAppointments {
            get {
                var today = DateTime.Today;
                var testDate = today.AddDays(3 - (int)today.DayOfWeek);

                return new[] {
                    new DynamicAppointment {
                        MovieId = 1,
                        StartDate = testDate.AddHours(-113.5),
                        EndDate = testDate.AddHours(-111.5),
                        RecurrenceRule = "FREQ=HOURLY;INTERVAL=15;COUNT=15"
                    },
                    new DynamicAppointment {
                        MovieId = 2,
                        StartDate = testDate.AddHours(-110.5),
                        EndDate = testDate.AddHours(-108.5),
                        RecurrenceRule = "FREQ=HOURLY;INTERVAL=15;COUNT=15"
                    },
                    new DynamicAppointment {
                        MovieId = 3,
                        StartDate = testDate.AddHours(-106.5),
                        EndDate = testDate.AddHours(-104.5),
                        RecurrenceRule = "FREQ=HOURLY;INTERVAL=15;COUNT=15"
                    },
                    new DynamicAppointment {
                        MovieId = 4,
                        StartDate = testDate.AddHours(-104),
                        EndDate = testDate.AddHours(-102),
                        RecurrenceRule = "FREQ=HOURLY;INTERVAL=15;COUNT=15"
                    },
                    new DynamicAppointment {
                        MovieId = 5,
                        StartDate = testDate.AddHours(-101),
                        EndDate = testDate.AddHours(-99),
                        RecurrenceRule = "FREQ=HOURLY;INTERVAL=15;COUNT=15"
                    }
                };
            }
        }
    }
}
