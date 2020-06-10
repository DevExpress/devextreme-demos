using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace DevExtreme.MVC.Demos.Models {
    public class EuropeanCountry {
        public string NameAr { get; set; }

        [Display(Name = "Name")]
        public string NameEn { get; set; }
        public int Population { get; set; }
        public double Area { get; set; }

        [Display(Name = "Capital")]
        public string CapitalEn { get; set; }
        public string CapitalAr { get; set; }
        public int Accession { get; set; }
    }
}
