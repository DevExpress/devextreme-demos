using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {

    public abstract class InMemoryDataContext<T> {
        IHttpContextAccessor _contextAccessor;
        IMemoryCache _memoryCache;

        public InMemoryDataContext(IHttpContextAccessor contextAccessor, IMemoryCache memoryCache) {
            _contextAccessor = contextAccessor;
            _memoryCache = memoryCache;
        }

        protected ICollection<T> ItemsInternal {
            get {
                var session = _contextAccessor.HttpContext.Session;
                if(!session.IsAvailable)
                    throw new NotSupportedException("Session is required");

                var key = session.Id + "_" + GetType().FullName;
                return _memoryCache.GetOrCreate(key, entry => {
                    session.SetInt32("dirty", 1);
                    entry.SlidingExpiration = TimeSpan.FromMinutes(10);
                    return DeepClone(Source);
                });
            }
        }

        protected abstract IEnumerable<T> Source { get; }

        public void SaveChanges() {
            foreach(var item in ItemsInternal.Where(i => GetKey(i) == 0))
                SetKey(item, ItemsInternal.Max(GetKey) + 1);
        }

        protected abstract int GetKey(T item);

        protected abstract void SetKey(T item, int key);

        static ICollection<T> DeepClone(IEnumerable<T> source) {
            return JsonConvert.DeserializeObject<List<T>>(JsonConvert.SerializeObject(source));
        }
    }
}
