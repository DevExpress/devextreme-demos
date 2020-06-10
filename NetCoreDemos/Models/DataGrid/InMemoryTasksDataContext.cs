using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.DataGrid {
    public class InMemoryTasksDataContext : InMemoryDataContext<CustomEditorsTask> {

        public InMemoryTasksDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<CustomEditorsTask> Tasks => ItemsInternal;

        protected override IEnumerable<CustomEditorsTask> Source => SampleData.SampleData.CustomEditorsTasks;

        protected override int GetKey(CustomEditorsTask item) => item.ID;

        protected override void SetKey(CustomEditorsTask item, int key) => item.ID = key;
    }
}
