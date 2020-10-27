using System.Collections.Generic;
using DevExtreme.MVC.Demos.Models.TreeView;

namespace DevExtreme.MVC.Demos.Models.SampleData {
    public static class TreeViewHierarchicalDataForDragAndDrop {
        public static readonly IEnumerable<FileSystemItem> FileSystemItems = new[] {
            new FileSystemItem {
                Id = "1",
                Name = "Documents",
                Icon = "activefolder",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "2",
                        Name = "Projects",
                        Icon = "activefolder",
                        IsDirectory = true,
                        IsExpanded = true,
                        Items = new[] {
                            new FileSystemItem {
                                Id = "3",
                                Name = "About.rtf",
                                Icon = "file",
                                IsDirectory = false
                            },
                            new FileSystemItem {
                                Id = "4",
                                Name = "Passwords.rtf",
                                Icon = "file",
                                IsDirectory = false
                            }
                        }
                    },
                    new FileSystemItem {
                        Id = "5",
                        Name = "About.xml",
                        Icon = "file",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "6",
                        Name = "Managers.rtf",
                        Icon = "file",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "7",
                        Name = "ToDo.txt",
                        Icon = "file",
                        IsDirectory = false
                    }
                },
            },
            new FileSystemItem {
                Id = "8",
                Name = "Images",
                Icon = "activefolder",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "9",
                        Name = "logo.png",
                        Icon = "file",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "10",
                        Name = "banner.gif",
                        Icon = "file",
                        IsDirectory = false
                    }
                }
            },
            new FileSystemItem {
                Id = "11",
                Name = "System",
                Icon = "activefolder",
                IsDirectory = true,
                IsExpanded = true,
                Items = new[] {
                    new FileSystemItem {
                        Id = "12",
                        Name = "Employees.txt",
                        Icon = "file",
                        IsDirectory = false
                    },
                    new FileSystemItem {
                        Id = "13",
                        Name = "PasswordList.txt",
                        Icon = "file",
                        IsDirectory = false
                    }
                }
            },
            new FileSystemItem {
                Id = "14",
                Name = "Description.rtf",
                Icon = "file",
                IsDirectory = false
            },
            new FileSystemItem {
                Id = "15",
                Name = "Description.txt",
                Icon = "file",
                IsDirectory = false
            }
        };
    }
}
