using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class InMemoryListPlannedDataContext : InMemoryListTasksDataContext<ListTaskItem> {
        public InMemoryListPlannedDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }
        public override ICollection<ListTaskItem> ListItems => ItemsInternal;
        protected override IEnumerable<ListTaskItem> Source => SampleData.SampleData.ListPlannedTasks.ToList<ListTaskItem>();
        protected override int GetKey(ListTaskItem item) => item.ID;
        protected override void SetKey(ListTaskItem item, int key) => item.ID = key;
    }
}
