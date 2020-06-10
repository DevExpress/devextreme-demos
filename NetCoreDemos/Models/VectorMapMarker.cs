using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class VectorMapMarker {
        public IEnumerable<double> Coordinates { get; set; }
        public MarkerAttribute Attributes { get; set; }
    }
}
