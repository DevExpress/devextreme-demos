using Newtonsoft.Json;

namespace DevExtreme.NETCore.Demos.Models {
    public class TileViewItem {
        public int ID { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Price { get; set; }
        public string ImageSrc { get; set; }

        [JsonProperty("heightRatio")]
        public int? HeightRatio { get; set; }

        [JsonProperty("widthRatio")]
        public int? WidthRatio { get; set; }
    }
}
