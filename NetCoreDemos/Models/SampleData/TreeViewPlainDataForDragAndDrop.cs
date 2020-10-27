using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.TreeView;

namespace DevExtreme.NETCore.Demos.Models.SampleData {
    public static class TreeViewPlainDataForDragAndDrop {
        public static readonly IEnumerable<FileSystemItem> FileSystemItems = new[] {
            new FileSystemItem {
                Id = "1",
                Name =  "Documents",
                Icon = "activefolder",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "2",
                ParentId = "1",
                Name =  "Projects",
                Icon = "activefolder",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "3",
                ParentId = "2",
                Name =  "About.rtf",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "4",
                ParentId = "2",
                Name =  "Passwords.rtf",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "5",
                ParentId = "2",
                Name =  "About.xml",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "6",
                ParentId = "2",
                Name =  "Managers.rtf",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "7",
                ParentId = "2",
                Name =  "ToDo.txt",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "8",
                Name =  "Images",
                Icon = "activefolder",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "9",
                ParentId = "8",
                Name =  "logo.png",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "10",
                ParentId = "8",
                Name =  "banner.gif",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "11",
                Name =  "System",
                Icon = "activefolder",
                IsDirectory= true,
                IsExpanded = true
            }, new FileSystemItem {
                Id = "12",
                ParentId = "11",
                Name =  "Employees.txt",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "13",
                ParentId = "11",
                Name =  "PasswordList.txt",
                Icon = "file",
                IsDirectory= false,
            }, new FileSystemItem {
                Id = "14",
                Name =  "Description.rtf",
                Icon = "file",
                IsDirectory= false
            }, new FileSystemItem {
                Id = "15",
                Name =  "Description.txt",
                Icon = "file",
                IsDirectory= false
            }
        };
    }
}
