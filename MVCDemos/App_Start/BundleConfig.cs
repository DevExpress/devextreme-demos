using System;
using System.Web.Optimization;

namespace DevExtreme.MVC.Demos {

    public class BundleConfig {
        public const string ScriptBundlePath = "~/script-bundle";
        public const string StyleBundlePath = "~/style-bundle";

        public static void RegisterBundles(BundleCollection bundles) {
            bundles.Add(CreateStyleBundle());
            bundles.Add(CreateScriptBundle());

#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }

        static StyleBundle CreateStyleBundle() {
            var bundle = new StyleBundle(StyleBundlePath);
            bundle.Include("~/Content/DevExtreme/dx-diagram.min.css");
            bundle.Include("~/Content/DevExtreme/dx-gantt.min.css");
            return bundle;
        }

        static ScriptBundle CreateScriptBundle() {
            var bundle = new ScriptBundle(ScriptBundlePath);
            bundle
                .Include("~/Scripts/dx-diagram.min.js")
                .Include("~/Scripts/dx-gantt.min.js")
                .Include("~/Scripts/jquery.min.js")
                .Include("~/Scripts/jszip.min.js")
                .Include("~/Scripts/dx.all.js")
                .Include("~/Scripts/dx.aspnet.mvc.js")
                .Include("~/Scripts/dx.aspnet.data.js")
                .Include("~/Scripts/vectormap-data/world.js")
                .Include("~/Scripts/vectormap-data/usa.js");
            return bundle;
        }
    }
}
