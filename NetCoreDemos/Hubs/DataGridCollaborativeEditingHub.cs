using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace DevExtreme.NETCore.Demos.Hubs {

    public class DataGridCollaborativeEditingHub : Hub {
        public override Task OnConnectedAsync() {
            var groupId = Context.GetHttpContext().Request.Query["GroupId"][0];
            Groups.AddToGroupAsync(Context.ConnectionId, groupId);
            return base.OnConnectedAsync();
        }
    }
}
