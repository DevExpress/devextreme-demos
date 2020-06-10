using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.DataGrid {
    public class InMemoryEmployeesByStateDataContext : InMemoryDataContext<EmployeeByState> {

        public InMemoryEmployeesByStateDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<EmployeeByState> EmployeesByState => ItemsInternal;


        protected override IEnumerable<EmployeeByState> Source => SampleData.SampleData.DataGridEmployeesByState;

        protected override int GetKey(EmployeeByState item) => item.ID;

        protected override void SetKey(EmployeeByState item, int key) => item.ID = key;
    }
}
