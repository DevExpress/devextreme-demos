using System;
using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models {
    public class InMemorySelectBoxDataContext : InMemoryDataContext<ElectronicsSimpleItem> {
        public ICollection<ElectronicsSimpleItem> Items => ItemsInternal;
        protected override IEnumerable<ElectronicsSimpleItem> Source => SampleData.SampleData.ElectronicsSimple;
        protected override int GetKey(ElectronicsSimpleItem item) => item.ID;
        protected override void SetKey(ElectronicsSimpleItem item, int key) => item.ID = key;
    }
}
