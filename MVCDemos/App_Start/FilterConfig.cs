using System.Web;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos {
    public class FilterConfig {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters) {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
