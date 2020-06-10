using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class InMemoryListDataContext : InMemoryDataContext<ListItem> {
        public ICollection<ListItem> ListItems => ItemsInternal;
        protected override IEnumerable<ListItem> Source => SampleData.SampleData.ListPlainData;
        protected override int GetKey(ListItem item) => item.ID;
        protected override void SetKey(ListItem item, int key) => item.ID = key;
    }
}
