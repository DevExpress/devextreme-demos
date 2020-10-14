using System.Collections;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public class FlowData {
        public IEnumerable Nodes { get; set; }
        public IEnumerable Edges { get; set; }
    }
    public partial class SampleData {
        public static readonly IEnumerable<FlowNode> FlowNodes = new[] {
            new FlowNode() {
                ID = 107,
                Text = "A new ticket",
                Type = "terminator"
            },
            new FlowNode() {
                ID = 108,
                Text = "Analyze the issue",
                Type = "process"
            },
            new FlowNode() {
                ID = 118,
                Text = "Do we have all information to work with?",
                Type = "diamond"
            },
            new FlowNode() {
                ID = 120,
                Text = "Answered",
                Type = "terminator"
            },
            new FlowNode() {
                ID = 121,
                Text = "Request additional information or clarify the scenario",
                Type = "rectangle"
            },
            new FlowNode() {
                ID = 125,
                Text = "Prepare an example in Code Central",
                Type = "rectangle"
            },
            new FlowNode() {
                ID = 127,
                Text = "Update the documentation",
                Type = "rectangle"
            },
            new FlowNode() {
                ID = 131,
                Text = "Process the ticket",
                Type = "rectangle"
            },
            new FlowNode() {
                ID = 133,
                Text = "Work with the R&D team",
                Type = "rectangle"
            }
        };
        public static readonly IEnumerable<FlowEdge> FlowEdges = new[] {
            new FlowEdge() {
              FromID = 107,
              ID = 116,
              ToID = 108
            },
            new FlowEdge() {
              FromID = 108,
              ID = 117,
              ToID = 118
            },
            new FlowEdge() {
              FromID = 118,
              ID = 122,
              Text = "No",
              ToID = 121
            },
            new FlowEdge() {
              FromID = 121,
              ID = 123,
              ToID = 108
            },
            new FlowEdge() {
              FromID = 131,
              ID = 124,
              ToID = 120
            },
            new FlowEdge() {
              FromID = 120,
              ID = 126,
              Text = "",
              ToID = 125
            },
            new FlowEdge() {
              FromID = 120,
              ID = 128,
              ToID = 120
            },
            new FlowEdge() {
              FromID = 127,
              ID = 129,
              ToID = 127
            },
            new FlowEdge() {
              FromID = 120,
              ID = 130,
              Text = "",
              ToID = 127
            },
            new FlowEdge() {
              FromID = 118,
              ID = 132,
              Text = "Yes",
              ToID = 131
            },
            new FlowEdge() {
              FromID = 131,
              ID = 134,
              Text = "Need developer assistance?",
              ToID = 133
            },
            new FlowEdge() {
              FromID = 133,
              ID = 135,
              ToID = 120
            }
        };
    }
}
