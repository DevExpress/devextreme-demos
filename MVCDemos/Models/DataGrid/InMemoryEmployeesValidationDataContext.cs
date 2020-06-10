using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class InMemoryEmployeesValidationDataContext : InMemoryDataContext<EmployeeValidation> {
        public ICollection<EmployeeValidation> Employees => ItemsInternal;

        protected override IEnumerable<EmployeeValidation> Source => SampleData.SampleData.DataGridEmployees
            .Where(employee => employee.ID <= 10)
            .Select(employee => new EmployeeValidation {
                ID = employee.ID,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                Phone = employee.Phone,
                Position = employee.Position,
                Email = employee.Email
            });

        protected override int GetKey(EmployeeValidation item) => item.ID;
        protected override void SetKey(EmployeeValidation item, int key) => item.ID = key;
    }
}
