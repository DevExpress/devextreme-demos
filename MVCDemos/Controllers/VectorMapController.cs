using DevExtreme.MVC.Demos.Models.SampleData;
using Newtonsoft.Json;
using System.Web.Mvc;

namespace DevExtreme.MVC.Demos.Controllers {
    public class VectorMapController : Controller {
        public ActionResult ColorsCustomization() {
            return View();
        }

        #region ZoomingAndCentering
        public ActionResult ZoomingAndCentering() {
            return View();
        }

        [HttpGet]
        public ContentResult GetMarkersForZoommingAndCentering() {
            return Content(JsonConvert.SerializeObject(SampleData.VectorMapMarkerData), "application/json");
        }
        #endregion

        public ActionResult Palette() {
            return View();
        }

        #region ImageMarkers
        public ActionResult ImageMarkers() {
            return View();
        }

        [HttpGet]
        public ContentResult GetWeatherData() {
            return Content(JsonConvert.SerializeObject(SampleData.WeatherData), "application/json");
        }
        #endregion

        #region BubbleMarkers
        public ActionResult BubbleMarkers() {
            return View();
        }

        [HttpGet]
        public ContentResult GetBubbleMarkers() {
            return Content(JsonConvert.SerializeObject(SampleData.BubbleMarkers), "application/json");
        }
        #endregion

        #region PieMarkers
        public ActionResult PieMarkers() {
            return View();
        }

        [HttpGet]
        public ContentResult GetPieMarkers() {
            return Content(JsonConvert.SerializeObject(SampleData.PieMarkersData), "application/json");
        }
        #endregion

        public ActionResult DynamicViewport() {
            return View(SampleData.ViewportCoordinateData);
        }

        #region AreaWithLabelsAndTwoLegends
        public ActionResult AreaWithLabelsAndTwoLegends() {
            return View();
        }

        [HttpGet]
        public ContentResult GetAreaWithLabelsAndTwoLegendsData() {
            return Content(JsonConvert.SerializeObject(SampleData.AreaMarkers), "application/json");
        }
        #endregion

        public ActionResult TooltipHTMLSupport() {
            return View();
        }


        public ActionResult Overview() {
            return View();
        }

        #region CustomProjection     
        public ActionResult CustomProjection() {
            return View();
        }

        [HttpGet]
        public ContentResult GetCoordLinesData() {
            return Content(JsonConvert.SerializeObject(SampleData.GetCoordLinesData()), "application/json");
        }
        #endregion

        #region FloorPlan     
        public ActionResult FloorPlan() {
            return View();
        }

        [HttpGet]
        public ContentResult GetBuildingData() {
            return Content(JsonConvert.SerializeObject(SampleData.BuildingData), "application/json");
        }

        [HttpGet]
        public ContentResult GetRoomData() {
            return Content(JsonConvert.SerializeObject(SampleData.RoomData), "application/json");
        }
        #endregion

        #region MultipleLayers     
        public ActionResult MultipleLayers() {
            return View();
        }

        [HttpGet]
        public ContentResult GetStreamsData() {
            return Content(JsonConvert.SerializeObject(SampleData.StreamsData), "application/json");
        }
        #endregion

        #region CustomMapData     
        public ActionResult CustomMapData() {
            return View();
        }

        [HttpGet]
        public ContentResult GetPangaeaBorders() {
            return Content(JsonConvert.SerializeObject(SampleData.PangaeaBorders), "application/json");
        }

        [HttpGet]
        public ContentResult GetPangaeaContinents() {
            return Content(JsonConvert.SerializeObject(SampleData.PangaeaContinents), "application/json");
        }
        #endregion
    }
}
