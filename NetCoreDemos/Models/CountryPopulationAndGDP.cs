using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class CountryPopulationAndGDP {
        public int ID { get; set; }
        public string Country { get; set; }
        public int Area { get; set; }

        [Display(Name = "Urban")]
        public double Population_Urban { get; set; }
        public double Population_Rural { get; set; }

        [Display(Name = "Total")]
        public int Population_Total { get; set; }

        [Display(Name = "Agriculture")]
        public double GDP_Agriculture { get; set; }

        [Display(Name = "Industry")]
        public double GDP_Industry { get; set; }

        [Display(Name = "Services")]
        public double GDP_Services { get; set; }

        [Display(Name = "Total, mln $")]
        public int GDP_Total { get; set; }
    }
}
