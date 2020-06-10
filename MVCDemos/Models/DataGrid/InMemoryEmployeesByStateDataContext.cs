using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class InMemoryEmployeesByStateDataContext : InMemoryDataContext<EmployeeByState> {
        public ICollection<EmployeeByState> EmployeesByState => ItemsInternal;
        protected override IEnumerable<EmployeeByState> Source => SampleData.SampleData.DataGridEmployeesByState;
        protected override int GetKey(EmployeeByState item) => item.ID;
        protected override void SetKey(EmployeeByState item, int key) => item.ID = key;
    }
}
