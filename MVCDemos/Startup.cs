
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Owin;

[assembly: OwinStartup(typeof(DevExtreme.MVC.Demos.Startup))]

namespace DevExtreme.MVC.Demos {
    public class Startup {
        public void Configuration(IAppBuilder app) {
            var signalRBackstageConnectionString = System.Configuration
                .ConfigurationManager.ConnectionStrings["backstage"];
            if(signalRBackstageConnectionString != null) {
                GlobalHost.DependencyResolver.UseSqlServer(signalRBackstageConnectionString.ConnectionString);
            }
            app.Map("/signalr", map => {
                map.UseCors(CorsOptions.AllowAll);
                map.RunSignalR();
            });
            app.Map("/RemoteValidation", map => {
                map.UseCors(CorsOptions.AllowAll);
            });
        }
    }
}
