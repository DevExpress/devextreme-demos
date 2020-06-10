using System;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace DevExtreme.NETCore.Demos.Hubs {

    public class SchedulerSignalRHub : Hub {
        public static string GroupIdKey = "dx-SchedulerSignalRHub-groupId";
        public override Task OnConnectedAsync() {
            string groupId;
            Context.GetHttpContext().Request.Cookies.TryGetValue(GroupIdKey, out groupId);
            Groups.AddToGroupAsync(Context.ConnectionId, groupId);

            return base.OnConnectedAsync();
        }
    }
}
