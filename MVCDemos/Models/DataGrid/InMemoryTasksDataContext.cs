using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.DataGrid {
    public class InMemoryTasksDataContext : InMemoryDataContext<CustomEditorsTask> {
        public ICollection<CustomEditorsTask> Tasks => ItemsInternal;
        protected override IEnumerable<CustomEditorsTask> Source => SampleData.SampleData.CustomEditorsTasks;
        protected override int GetKey(CustomEditorsTask item) => item.ID;
        protected override void SetKey(CustomEditorsTask item, int key) => item.ID = key;
    }
}
