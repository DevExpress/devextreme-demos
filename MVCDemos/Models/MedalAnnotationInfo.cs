using System;
using DevExtreme.AspNet.Mvc;

namespace DevExtreme.MVC.Demos.Models {
    public class MedalAnnotationInfo {
        public string Country { get; set; }
        public string Image { get; set; }
        public object Data { get; set; }
        public PieChartAnnotationLocation Location { get; set; }
        public double? OffsetX { get; set; }
        public double? OffsetY { get; set; }
        public string Color { get; set; }
        public string BorderColor { get; set; }
        public double? ShadowOpacity { get; set; }

        public MedalAnnotationInfo ShallowCopy() {
            return (MedalAnnotationInfo)this.MemberwiseClone();
        }
    }
}
