using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.TreeList {
    public class InMemoryTasksDataContext : InMemoryDataContext<EmployeeTask> {
        public ICollection<EmployeeTask> Tasks => ItemsInternal;
        public IEnumerable<TaskEmployee> TaskEmployees => SampleData.SampleData.TaskEmployees;

        protected override IEnumerable<EmployeeTask> Source => SampleData.SampleData.EmployeeTasks;
        protected override int GetKey(EmployeeTask item) => item.Task_ID;
        protected override void SetKey(EmployeeTask item, int key) => item.Task_ID = key;
    }
}
