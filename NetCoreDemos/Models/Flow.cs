using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models {
    public class FlowNode {
        public int ID { set; get; }
        public string Text { set; get; }
        public string Type { set; get; }
    }
    public class FlowEdge {
        public int ID { set; get; }
        public int FromID { set; get; }
        public int ToID { set; get; }
        public string Text { set; get; }
    }
}
