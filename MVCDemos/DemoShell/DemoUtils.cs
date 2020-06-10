using System;
using System.Web;
using System.Web.WebPages;

namespace DevExtreme.MVC.Demos.DemoShell {

    public static class DemoUtils {

        public static void SetLayout(WebPageRenderingBase page) {
            if(IsNavigationEnabled(page.Context))
                page.Layout = "~/Views/Shared/_LayoutNavigation.cshtml";
            else
                page.Layout = "~/Views/Shared/_Layout.cshtml";
        }

        public static string GetCurrentTheme(HttpContextBase http) {
            var theme = http.Request.QueryString["theme"];

            if(!string.IsNullOrEmpty(theme))
                return theme;

            return "light";
        }

        public static string GetCurrentDevice(HttpContextBase http) {
            var device = http.Request.QueryString["device"];
            if(device == "mobile")
                return "iPhone";

            return "desktop";
        }

        public static bool IsNavigationDisabled(HttpContextBase http) {
            return !String.IsNullOrEmpty(http.Request.QueryString["onlyview"]);
        }

        public static bool IsNavigationEnabled(HttpContextBase http) {
            return !IsNavigationDisabled(http);
        }
    }

}
