using System;
using System.Collections.Generic;
using System.Linq;

namespace DevExtreme.NETCore.Demos.ViewModels {
    public class ImageItem {
        public string imageSrc { get; set; }
        public string imageAlt { get; set; }
    }

    public class GalleryViewModel {
        public IEnumerable<ImageItem> Images { get; set; }
    }
}
