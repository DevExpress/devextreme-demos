using Microsoft.AspNetCore.Mvc;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class VectorMapController : Controller {
        public ActionResult ColorsCustomization() {
            return View();
        }

        #region ZoomingAndCentering
        public ActionResult ZoomingAndCentering() {
            return View();
        }

        [HttpGet]
        public object GetMarkersForZoommingAndCentering() {
            return SampleData.VectorMapMarkerData;
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
        public object GetWeatherData() {
            return SampleData.WeatherData;
        }
        #endregion

        #region BubbleMarkers
        public ActionResult BubbleMarkers() {
            return View();
        }

        [HttpGet]
        public object GetBubbleMarkers() {
            return SampleData.BubbleMarkers;
        }
        #endregion

        #region PieMarkers
        public ActionResult PieMarkers() {
            return View();
        }

        [HttpGet]
        public object GetPieMarkers() {
            return SampleData.PieMarkersData;
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
        public object GetAreaWithLabelsAndTwoLegendsData() {
            return SampleData.AreaMarkers;
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
        public object GetCoordLinesData() {
            return SampleData.GetCoordLinesData();
        }
        #endregion

        #region FloorPlan
        public ActionResult FloorPlan() {
            return View();
        }

        [HttpGet]
        public object GetBuildingData() {
            return SampleData.BuildingData;
        }

        [HttpGet]
        public object GetRoomData() {
            return SampleData.RoomData;
        }
        #endregion

        #region MultipleLayers
        public ActionResult MultipleLayers() {
            return View();
        }

        [HttpGet]
        public object GetStreamsData() {
            return SampleData.StreamsData;
        }
        #endregion


        #region CustomMapData
        public ActionResult CustomMapData() {
            return View();
        }

        [HttpGet]
        public object GetPangaeaBorders() {
            return SampleData.PangaeaBorders;
        }

        [HttpGet]
        public object GetPangaeaContinents() {
            return SampleData.PangaeaContinents;
        }
        #endregion
    }
}
