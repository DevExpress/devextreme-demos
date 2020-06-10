using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {

    public abstract class InMemoryDataContext<T> {
        protected ICollection<T> ItemsInternal {
            get {
                var session = HttpContext.Current.Session;
                var key = GetType().FullName;
                if(session[key] == null)
                    session[key] = DeepClone(Source);
                return (ICollection<T>)session[key];
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
