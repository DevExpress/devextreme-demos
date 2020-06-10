using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class InMemoryListDoingDataContext : InMemoryListTasksDataContext<ListTaskItem> {
        public override ICollection<ListTaskItem> ListItems => ItemsInternal;
        protected override IEnumerable<ListTaskItem> Source => SampleData.SampleData.ListDoingTasks.ToList<ListTaskItem>();
        protected override int GetKey(ListTaskItem item) => item.ID;
        protected override void SetKey(ListTaskItem item, int key) => item.ID = key;
    }
}
