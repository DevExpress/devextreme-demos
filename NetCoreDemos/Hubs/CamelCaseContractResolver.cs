using System.Linq;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace DevExtreme.NETCore.Demos.Hubs {
    public class CamelCaseContractResolver : CamelCasePropertyNamesContractResolver {
        protected override JsonProperty CreateProperty(MemberInfo member,
            MemberSerialization memberSerialization) {
            var res = base.CreateProperty(member, memberSerialization);

            var attrs = member
                .GetCustomAttributes(typeof(JsonPropertyAttribute), true);
            if(attrs.Any()) {
                var attr = (attrs[0] as JsonPropertyAttribute);
                if(res.PropertyName != null)
                    res.PropertyName = attr.PropertyName;
            }

            return res;
        }
    }
}
