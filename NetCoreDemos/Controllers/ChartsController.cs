using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using DevExtreme.NETCore.Demos.Models;
using DevExtreme.NETCore.Demos.Models.SampleData;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class ChartsController : Controller {
        public ActionResult SimpleArray() {
            return View();
        }

        public ActionResult AjaxRequest() {
            return View();
        }

        #region ClientSideDataProcessing
        public ActionResult ClientSideDataProcessing() {
            return View();
        }

        public object GetMonthWeatherData() {
            return SampleData.MonthWeather;
        }
        #endregion

        public ActionResult ServerSideDataProcessing() {
            return View(SampleData.MonthNames);
        }

        public ActionResult SignalRService() {
            return View();
        }

        public ActionResult LoadDataOnDemand() {
            return View();
        }

        public ActionResult StandardBar() {
            return View();
        }

        public ActionResult Timeline() {
            return View();
        }

        public ActionResult SideBySideBar() {
            return View();
        }

        public ActionResult StackedBar() {
            return View();
        }

        public ActionResult FullStackedBar() {
            return View();
        }

        public ActionResult SideBySideStackedBar() {
            return View();
        }

        public ActionResult SideBySideFullStackedBar() {
            return View();
        }

        public ActionResult AutoCalculatedBarWidth() {
            return View();
        }

        public ActionResult CustomBarWidth() {
            return View();
        }

        public ActionResult CustomLegendMarkers() {
            return View(SampleData.GetCustomLegendMarkersSampleData());
        }

        public ActionResult DiscreteAggregation() {
            return View(SampleData.OilProductionByMonths);
        }

        public ActionResult ColorEachBar() {
            return View();
        }

        public ActionResult Line() {
            return View();
        }

        public ActionResult Spline() {
            return View();
        }

        public ActionResult ScaleBreaks() {
            return View();
        }

        public ActionResult BiDirectionalBarChart() {
            return View(SampleData.PopulationPyramidData);
        }

        public ActionResult Scatter() {
            return View(SampleData.GetScatterData());
        }

        public ActionResult AxisCustomPosition() {
            return View(SampleData.GetDataForCustomPosition());
        }

        public ActionResult StepLine() {
            return View(SampleData.AustralianOlympicMedals);
        }

        public ActionResult Bubble() {
            return View();
        }

        public ActionResult Stock() {
            return View(SampleData.FinancialData);
        }

        public ActionResult Candlestick() {
            return View(SampleData.FinancialData);
        }

        public ActionResult Annotation() {
            return View(SampleData.AnnotationData);
        }

        public ActionResult FunnelChart() {
            return View();
        }

        public ActionResult Area() {
            return View();
        }

        public ActionResult SplineArea() {
            return View();
        }

        public ActionResult StepArea() {
            return View(SampleData.AustralianOlympicMedals);
        }

        public ActionResult RangeBar() {
            return View();
        }

        public ActionResult RangeArea() {
            return View();
        }

        public ActionResult Palette() {
            return View();
        }

        public ActionResult Pie() {
            return View();
        }

        public ActionResult PiesWithEqualSize() {
            return View();
        }

        public ActionResult PieWithCustomLabels() {
            return View();
        }

        public ActionResult PieWithSmallValuesGrouped() {
            return View(SampleData.LanguagesPercentage);
        }

        public ActionResult PieWithResolvedLabelOverlapping() {
            return View();
        }

        public ActionResult PieWithMultipleSeries() {
            return View();
        }

        public ActionResult PieWithAnnotations() {
            return View(SampleData.GetAnnotationsInfo());
        }

        public ActionResult Doughnut() {
            return View(SampleData.PopulationData);
        }

        public ActionResult DoughnutSelection() {
            return View();
        }

        public ActionResult DoughnutWithTopNSeries() {
            return View();
        }
        public ActionResult DoughnutWithCustomLabelInCenter() {
            return View(SampleData.DoughnutWithCustomLabelInCenterData);
        }

        public ActionResult ZoomingAndScrolling() {
            return View(SampleData.PointsData);
        }

        public ActionResult ZoomingOnAreaSelection() {
            return View();
        }

        public ActionResult ZoomingAndScrollingAPI() {
            return View(SampleData.PointsData);
        }

        public ActionResult AxisLabelsOverlapping() {
            return View();
        }

        public ActionResult ChartsDrillDown() {
            return View();
        }

        public ActionResult MultipleAxes() {
            return View();
        }

        public ActionResult MultiplePanes() {
            return View();
        }

        public ActionResult AxisLabelsTemplates() {
            return View();
        }

        public ActionResult HoverMode() {
            return View();
        }

        public ActionResult SankeyChart() {
            return View();
        }

        public ActionResult Selection() {
            return View();
        }

        public ActionResult MultipleSeriesSelection() {
            return View();
        }

        public ActionResult MultiplePointSelection() {
            return View();
        }

        public ActionResult SeriesTemplates() {
            return View(SampleData.OilProductionData);
        }

        public ActionResult NullPointSupport() {
            return View();
        }

        public ActionResult APISelectAPoint() {
            return View();
        }

        public ActionResult APIDisplayATooltip() {
            return View(SampleData.PopulationData);
        }

        public ActionResult TooltipHTMLSupport() {
            return View();
        }

        public ActionResult CustomAnnotations() {
            return View();
        }

        public ActionResult Crosshair() {
            return View();
        }

        public ActionResult PointImage() {
            return View();
        }

        public ActionResult CustomizePointsAndLabels() {
            return View();
        }

        public ActionResult LogarithmicAxis() {
            return View();
        }

        #region PointsAggregationFinancialChart
        public ActionResult PointsAggregationFinancialChart() {
            return View();
        }

        [HttpGet]
        public object GetStockPrices() {
            return SampleData.StockPrices;
        }
        #endregion

        #region PointsAggregation
        public ActionResult PointsAggregation() {
            return View();
        }

        [HttpGet]
        public object GetWeatherIndicators() {
            return SampleData.WeatherIndicators;
        }
        #endregion

        public ActionResult DiscreteAxisZoomingAndScrolling() {
            return View();
        }

        public ActionResult ErrorBars() {
            return View();
        }

        public ActionResult ExportAndPrintingAPI() {
            return View();
        }

        public ActionResult ExportSeveralCharts() {
            return View();
        }

        public ActionResult ExportCustomMarkup() {
            return View();
        }

        #region ParetoChart
        public ActionResult ParetoChart() {
            return View();
        }
        public ActionResult Overview() {
            return View();
        }

        [HttpGet]
        public IEnumerable<object> GetComplaintsData() {
            var dataSource = new List<object>();
            var sortedParetoData = SampleData.ParetoChartData.OrderByDescending(i => i.count);
            var totalCount = sortedParetoData.Sum(i => i.count);
            var cumulativeCount = 0;

            foreach(var item in sortedParetoData) {
                cumulativeCount += item.count;
                dataSource.Add(new {
                    item.complaint,
                    item.count,
                    cumulativePercentage = Math.Round((double)cumulativeCount * 100 / totalCount)
                });
            }

            return dataSource;
        }
        #endregion

        public ActionResult ContinuousData() {
            return View();
        }

        public ActionResult DiscreteData() {
            return View();
        }

        public ActionResult SpiderWeb() {
            return View();
        }

        public ActionResult WindRose() {
            return View(SampleData.WindRoseData);
        }

        public ActionResult PeriodicData() {
            return View();
        }

        public ActionResult InvertedChart() {
            return View();
        }

        public ActionResult PolarChartAnnotations() {
            return View(SampleData.DiscreteScaleTemperatures);
        }

        public ActionResult SimpleSparklines() {
            return View(SampleData.MonthlyPrices);
        }

        public ActionResult AreaSparklines() {
            return View(SampleData.MonthlyPrices);
        }

        #region BarSparklines
        public ActionResult BarSparklines() {
            return View();
        }

        [HttpGet]
        public object GetMonthlyPrices(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.MonthlyPrices, loadOptions);
        }
        #endregion

        public ActionResult WinlossSparklines() {
            return View(SampleData.MonthlyPrices);
        }

        public ActionResult SimpleBullets() {
            return View();
        }

        public ActionResult HierarchicalDataStructure() {
            return View();
        }

        public ActionResult FlatDataStructure() {
            return View();
        }

        public ActionResult TilingAlgorithms() {
            return View();
        }

        public ActionResult Colorization() {
            return View();
        }

        public ActionResult DrillDown() {
            return View(SampleData.ContinentsPopulation);
        }

        public ActionResult PyramidChart() {
            return View();
        }
        public ActionResult LogarithmicVsLinearAxes() {
            return View();
        }

        public ActionResult PolarChartZoomingAndScrollingAPI() {
            return View(SampleData.GetStochasticProcessResearchData());
        }
    }
}
