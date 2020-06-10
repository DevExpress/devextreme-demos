using System;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace DevExtreme.MVC.Demos.Hubs {
    public class SchedulerSignalRHub : Hub {
        public static string GroupIdKey = "dx-SchedulerSignalRHub-groupId";
        private static readonly Random random = new Random();

        public override Task OnConnected() {
            Cookie cookie;
            Context.RequestCookies.TryGetValue(GroupIdKey, out cookie);
            string groupId;
            if(cookie != null) {
                groupId = cookie.Value;
            } else {
                groupId = random.Next(0, int.MaxValue).ToString();
                var newCookie = new HttpCookie(GroupIdKey, groupId);
                Context.Request.GetHttpContext().Response.Cookies.Add(newCookie);
            }

            Groups.Add(Context.ConnectionId, groupId);

            return base.OnConnected();
        }
    }
}
