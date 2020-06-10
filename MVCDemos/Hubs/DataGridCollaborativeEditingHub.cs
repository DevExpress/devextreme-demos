using Microsoft.AspNet.SignalR;
using System.Threading.Tasks;

namespace DevExtreme.MVC.Demos.Hubs {
    public class DataGridCollaborativeEditingHub : Hub {
        public override Task OnConnected() {
            var groupId = Context.QueryString["GroupId"];
            Groups.Add(Context.ConnectionId, groupId);
            return base.OnConnected();
        }
    }
}
