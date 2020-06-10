using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models.DataGrid {
    public class InMemoryEmployeesValidationDataContext : InMemoryDataContext<EmployeeValidation> {

        public InMemoryEmployeesValidationDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<EmployeeValidation> Employees => ItemsInternal;


        protected override IEnumerable<EmployeeValidation> Source => SampleData.SampleData.DataGridEmployees
            .Where(e => e.ID <= 10)
            .Select(e => new EmployeeValidation {
                ID = e.ID,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Phone = e.Phone,
                Position = e.Position,
                Email = e.Email
            });

        protected override int GetKey(EmployeeValidation item) => item.ID;

        protected override void SetKey(EmployeeValidation item, int key) => item.ID = key;
    }
}
