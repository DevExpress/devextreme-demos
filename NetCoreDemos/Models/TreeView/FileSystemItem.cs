using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.TreeView {
    public class FileSystemItem {
        public string Id { get; set; }
        public string ParentId { get; set; }
        public string Name { get; set; }
        public string Icon { get; set; }
        public bool IsDirectory { get; set; }
        public bool IsExpanded { get; set; }
        public IEnumerable<FileSystemItem> Items { get; set; }
    }
}
