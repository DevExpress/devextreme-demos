using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.TreeView;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewPlainDataForDragAndDrop {
        public static readonly IEnumerable<FileSystemItem> FileSystemItems = new[] {
            new FileSystemItem {
                Id = "1",
                Name =  "Documents",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "2",
                ParentId = "1",
                Name =  "Projects",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "3",
                ParentId = "2",
                Name =  "About.rtf",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "4",
                ParentId = "2",
                Name =  "Passwords.rtf",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "5",
                ParentId = "2",
                Name =  "About.xml",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "6",
                ParentId = "2",
                Name =  "Managers.rtf",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "7",
                ParentId = "2",
                Name =  "ToDo.txt",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "8",
                Name =  "Images",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "9",
                ParentId = "8",
                Name =  "logo.png",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "10",
                ParentId = "8",
                Name =  "banner.gif",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "11",
                Name =  "System",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "12",
                ParentId = "11",
                Name =  "Employees.txt",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "13",
                ParentId = "11",
                Name =  "PasswordList.txt",
                IsDirectory= false,
            }, new FileSystemItem {
                Id = "14",
                Name =  "Description.rtf",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "15",
                Name =  "Description.txt",
                IsDirectory= false
            }
        };
    }
}
