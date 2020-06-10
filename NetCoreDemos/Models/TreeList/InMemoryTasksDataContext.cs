using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.TreeList {
    public class InMemoryTasksDataContext : InMemoryDataContext<EmployeeTask> {

        public InMemoryTasksDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<EmployeeTask> Tasks => ItemsInternal;

        public IEnumerable<TaskEmployee> Employees => SampleData.SampleData.TaskEmployees;


        protected override IEnumerable<EmployeeTask> Source => SampleData.SampleData.EmployeeTasks;

        protected override int GetKey(EmployeeTask item) => item.Task_ID;

        protected override void SetKey(EmployeeTask item, int key) => item.Task_ID = key;
    }
}
