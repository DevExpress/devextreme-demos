using DevExtreme.NETCore.Demos.Models.DataGrid;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.Models {
    public class GalleryItem {
        public int ID { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public int Beds { get; set; }
        public int Baths { get; set; }
        public int HouseSize { get; set; }
        public double LotSize { get; set; }
        public int Price { get; set; }
        public string Coordinates { get; set; }
        public string Features { get; set; }
        public string YearBuilt { get; set; }
        public int Type { get; set; }
        public int Status { get; set; }
        public string Image { get; set; }
        public Employee Agent { get; set; }
    }
}
