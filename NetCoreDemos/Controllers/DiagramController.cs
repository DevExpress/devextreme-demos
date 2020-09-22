using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class DiagramController : Controller {
        public IActionResult Overview() {
            return View();
        }
        public IActionResult NodesAndEdgesArrays() {
            return View(new FlowData { Nodes = SampleData.FlowNodes, Edges = SampleData.FlowEdges });
        }
        public IActionResult NodesArrayHierarchicalStructure() {
            return View(SampleData.OrgItemsHierarchy);
        }
        public IActionResult NodesArrayPlainStructure() {
            return View(SampleData.OrgItemsPlain);
        }
        public IActionResult AdvancedDataBinding() {
            return View(new OrgData { Items = SampleData.OrgItemsAdvanced, Links = SampleData.OrgLinksAdvanced });
        }
        public IActionResult WebAPIService() {
            return View();
        }
        public IActionResult ImagesInShapes() {
            return View(new OrgData { Items = SampleData.OrgItemsWidthImage, Links = SampleData.OrgLinksWithImage });
        }
        public IActionResult Containers() {
            return View();
        }
        public IActionResult CustomShapesWithIcons() {
            return View();
        }
        public IActionResult CustomShapesWithTexts() {
            return View(SampleData.OrgItemsPlain);
        }
        public IActionResult CustomShapesWithTemplates() {
            return View(SampleData.OrgItemsPlain);
        }
        public ActionResult CustomShapesWithTemplatesWithEditing() {
            return View(SampleData.OrgItemsPlain);
        }
        public IActionResult ReadOnly() {
            return View();
        }
        public IActionResult SimpleView() {
            return View(SampleData.OrgItemsPlain);
        }
        public IActionResult ItemSelection() {
            return View(SampleData.OrgItemsPlain);
        }
        public IActionResult OperationRestrictions() {
            return View(SampleData.OrgItemsRestrictions);
        }
        public IActionResult UICustomization() {
            return View();
        }
        public IActionResult Adaptability() {
            return View();
        }
    }
}
