using System.Web.Mvc;
using DevExtreme.MVC.Demos.Models.SampleData;

namespace DevExtreme.MVC.Demos.Controllers {
    public class DiagramController : Controller {
        public ActionResult Overview() {
            return View();
        }
        public ActionResult NodesAndEdgesArrays() {
            return View(new OrgData { Items = SampleData.OrgItems, Links = SampleData.OrgLinks });
        }
        public ActionResult NodesArrayHierarchicalStructure() {
            return View(SampleData.OrgItemsHierarchy);
        }
        public ActionResult NodesArrayPlainStructure() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult AdvancedDataBinding() {
            return View(new OrgData { Items = SampleData.OrgItemsAdvanced, Links = SampleData.OrgLinksAdvanced });
        }
        public ActionResult WebAPIService() {
            return View();
        }
        public ActionResult ImagesInShapes() {
            return View(new OrgData { Items = SampleData.OrgItemsWidthImage, Links = SampleData.OrgLinksWithImage });
        }
        public ActionResult Containers() {
            return View();
        }
        public ActionResult CustomShapesWithIcons() {
            return View();
        }
        public ActionResult CustomShapesWithTexts() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult CustomShapesWithTemplates() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult CustomShapesWithTemplatesWithEditing() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult ReadOnly() {
            return View();
        }
        public ActionResult SimpleView() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult UICustomization() {
            return View();
        }
        public ActionResult Adaptability() {
            return View();
        }
    }
}
