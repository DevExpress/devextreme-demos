using System.Collections.Generic;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public partial class SampleData {
        public static readonly IEnumerable<WorldPopulationDataItem> WorldPopulationData = new[] {
            new WorldPopulationDataItem { Arg= "Asia", Val= 3007613498, ParentID= "" },
            new WorldPopulationDataItem { Arg= "North America", Val= 493603615, ParentID= "" },
            new WorldPopulationDataItem { Arg= "Europe", Val= 438575293, ParentID= "" },
            new WorldPopulationDataItem { Arg= "Africa", Val= 381331438, ParentID= "" },
            new WorldPopulationDataItem { Arg= "South America", Val= 331126555, ParentID= "" },
            new WorldPopulationDataItem { Arg= "Nigeria", Val= 181562056, ParentID= "Africa" },
            new WorldPopulationDataItem { Arg= "Egypt", Val= 88487396, ParentID= "Africa" },
            new WorldPopulationDataItem { Arg= "Congo", Val= 77433744, ParentID= "Africa" },
            new WorldPopulationDataItem { Arg= "Morocco", Val= 33848242, ParentID= "Africa" },
            new WorldPopulationDataItem { Arg= "China", Val= 1380083000, ParentID= "Asia" },
            new WorldPopulationDataItem { Arg= "India", Val= 1306687000, ParentID= "Asia" },
            new WorldPopulationDataItem { Arg= "Pakistan", Val= 193885498, ParentID= "Asia" },
            new WorldPopulationDataItem { Arg= "Japan", Val= 126958000, ParentID= "Asia" },
            new WorldPopulationDataItem { Arg= "Russia", Val= 146804372, ParentID= "Europe" },
            new WorldPopulationDataItem { Arg= "Germany", Val= 82175684, ParentID= "Europe" },
            new WorldPopulationDataItem { Arg= "Turkey", Val= 79463663, ParentID= "Europe" },
            new WorldPopulationDataItem { Arg= "France", Val= 66736000, ParentID= "Europe" },
            new WorldPopulationDataItem { Arg= "United Kingdom", Val= 63395574, ParentID= "Europe" },
            new WorldPopulationDataItem { Arg= "United States", Val= 325310275, ParentID= "North America" },
            new WorldPopulationDataItem { Arg= "Mexico", Val= 121005815, ParentID= "North America" },
            new WorldPopulationDataItem { Arg= "Canada", Val= 36048521, ParentID= "North America" },
            new WorldPopulationDataItem { Arg= "Cuba", Val= 11239004, ParentID= "North America" },
            new WorldPopulationDataItem { Arg= "Brazil", Val= 205737996, ParentID= "South America" },
            new WorldPopulationDataItem { Arg= "Colombia", Val= 48400388, ParentID= "South America" },
            new WorldPopulationDataItem { Arg= "Venezuela", Val= 30761000, ParentID= "South America" },
            new WorldPopulationDataItem { Arg= "Peru", Val= 28220764, ParentID= "South America" },
            new WorldPopulationDataItem { Arg= "Chile", Val= 18006407, ParentID= "South America" }
        };
    }
}
