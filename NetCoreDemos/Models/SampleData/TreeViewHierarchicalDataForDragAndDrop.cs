using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.TreeView;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewHierarchicalDataForDragAndDrop {
        public static readonly IEnumerable<FileSystemItem> FileSystemItems = new[] {
            new FileSystemItem {
                Id = "1",
                Name = "Documents",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "2",
                        Name = "Projects",
                        IsDirectory = true,
                        IsExpanded = true,
                        Items = new[] {
                            new FileSystemItem {
                                Id = "3",
                                Name = "About.rtf",
                                IsDirectory = false
                            },
                            new FileSystemItem {
                                Id = "4",
                                Name = "Passwords.rtf",
                                IsDirectory = false
                            }
                        }
                    },
                    new FileSystemItem {
                        Id = "5",
                        Name = "About.xml",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "6",
                        Name = "Managers.rtf",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "7",
                        Name = "ToDo.txt",
                        IsDirectory = false
                    }
                },
            },
            new FileSystemItem {
                Id = "8",
                Name = "Images",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "9",
                        Name = "logo.png",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "10",
                        Name = "banner.gif",
                        IsDirectory = false
                    }
                }
            },
            new FileSystemItem {
                Id = "11",
                Name = "System",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "12",
                        Name = "Employees.txt",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "13",
                        Name = "PasswordList.txt",
                        IsDirectory = false
                    }
                }
            },
            new FileSystemItem {
                Id = "14",
                Name = "Description.rtf",
                IsDirectory = false
            },
            new FileSystemItem {
                Id = "15",
                Name = "Description.txt",
                IsDirectory = false
            }
        };
    }
}
