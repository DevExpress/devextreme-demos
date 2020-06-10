using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {

    public class InMemorySelectBoxDataContext : InMemoryDataContext<ElectronicsSimpleItem> {

        public InMemorySelectBoxDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
        }

        public ICollection<ElectronicsSimpleItem> Items => ItemsInternal;

        protected override IEnumerable<ElectronicsSimpleItem> Source => SampleData.SampleData.ElectronicsSimple;

        protected override int GetKey(ElectronicsSimpleItem item) => item.ID;

        protected override void SetKey(ElectronicsSimpleItem item, int key) => item.ID = key;
    }

}
