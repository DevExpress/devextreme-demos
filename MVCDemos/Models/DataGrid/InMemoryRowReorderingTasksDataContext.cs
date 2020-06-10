using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class InMemoryRowReorderingTasksDataContext : InMemoryDataContext<RowReorderingTask> {
        public ICollection<RowReorderingTask> Tasks => ItemsInternal;
        protected override IEnumerable<RowReorderingTask> Source => SampleData.SampleData.RowReorderingTasks;
        protected override int GetKey(RowReorderingTask item) => item.ID;
        protected override void SetKey(RowReorderingTask item, int key) => item.ID = key;
    }
}
