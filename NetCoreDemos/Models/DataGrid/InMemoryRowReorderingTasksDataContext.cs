using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models;

namespace DevExtreme.NETCore.Demos.Models.DataGrid {
    public class InMemoryRowReorderingTasksDataContext : InMemoryDataContext<RowReorderingTask> {

        public InMemoryRowReorderingTasksDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<RowReorderingTask> Tasks => ItemsInternal;

        protected override IEnumerable<RowReorderingTask> Source => SampleData.SampleData.RowReorderingTasks;

        protected override int GetKey(RowReorderingTask item) => item.ID;

        protected override void SetKey(RowReorderingTask item, int key) => item.ID = key;
    }
}
