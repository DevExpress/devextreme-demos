using DevExtreme.AspNet.Mvc.FileManagement;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Azure;
using Azure.Storage;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class AzureBlobFileProvider : IFileSystemItemLoader, IFileSystemItemEditor, IFileUploader, IFileContentProvider {
        const string EmptyDirectoryDummyBlobName = "aspxAzureEmptyFolderBlob";
        const string TempFilePrefix = "azuredownload_";
        const string ServiceUri = "https://{0}.blob.core.windows.net";
        const string PathSeparator = "/";

        public AzureBlobFileProvider(string storageAccountName, string storageAccessKey, string containerName, string tempDirPath) {
            StorageAccountName = storageAccountName;
            StorageAccessKey = storageAccessKey;
            ContainerName = containerName;
            TempDirectoryPath = tempDirPath;
        }

        string StorageAccountName { get; set; }
        string StorageAccessKey { get; set; }
        string ContainerName { get; set; }
        string TempDirectoryPath { get; set; }

        BlobContainerClient _container;
        BlobContainerClient Container {
            get {
                if(_container == null) {
                    StorageSharedKeyCredential credential = new StorageSharedKeyCredential(StorageAccountName, StorageAccessKey);
                    BlobServiceClient client = new BlobServiceClient(new Uri(string.Format(ServiceUri, StorageAccountName)), credential);
                    _container = client.GetBlobContainerClient(ContainerName);
                }
                return _container;
            }
        }
        public IEnumerable<FileSystemItem> GetItems(FileSystemLoadItemOptions options) {
            var result = new List<FileSystemItem>();
            string dirKey = GetFileItemPath(options.Directory);
            var oneLevelItemsList = GetOneLevelHierarchyBlobs(dirKey);
            foreach(BlobHierarchyItem hierarchyItem in oneLevelItemsList) {
                var fileItem = GetFileSystemItem(hierarchyItem);
                if(fileItem != null) {
                    result.Add(fileItem);
                }
            }
            return result.OrderByDescending(item => item.IsDirectory)
                .ThenBy(item => item.Name)
                .ToList();
        }
        Pageable<BlobHierarchyItem> GetOneLevelHierarchyBlobs(string prefix) {
            if(!string.IsNullOrEmpty(prefix) && !prefix.EndsWith(PathSeparator))
                prefix = prefix + PathSeparator;
            return Container.GetBlobsByHierarchy(prefix: prefix, delimiter: PathSeparator);
        }
        FileSystemItem GetFileSystemItem(BlobHierarchyItem hierarchyItem) {
            var item = new FileSystemItem();
            string name = GetBlobName(hierarchyItem);
            if(name == EmptyDirectoryDummyBlobName)
                return null;
            item.Name = name;
            if(hierarchyItem.IsBlob) {
                var blobItem = hierarchyItem.Blob;
                item.DateModified = blobItem.Properties.LastModified.GetValueOrDefault().DateTime;
                item.Size = blobItem.Properties.ContentLength ?? 0;
            } else if(hierarchyItem.IsPrefix) {
                item.IsDirectory = true;
                item.HasSubDirectories = GetHasDirectories(hierarchyItem);
                item.DateModified = DateTime.UtcNow;
            } else {
                throw new Exception("Unsupported blob type");
            }
            return item;
        }
        bool GetHasDirectories(BlobHierarchyItem dir) {
            string dirKey = GetBlobRelativePath(dir);
            var oneLevelItemsList = GetOneLevelHierarchyBlobs(dirKey);
            return oneLevelItemsList != null && oneLevelItemsList.Any(bItem => bItem.IsPrefix);
        }
        public void CreateDirectory(FileSystemCreateDirectoryOptions options) {
            string path = GetFileItemPath(options.ParentDirectory);
            string blobKey = $"{options.DirectoryName}{PathSeparator}{EmptyDirectoryDummyBlobName}";
            if(!string.IsNullOrEmpty(path))
                blobKey = $"{path}{PathSeparator}{blobKey}";
            Container.UploadBlob(blobKey, BinaryData.FromString(string.Empty));
        }
        public void RenameItem(FileSystemRenameItemOptions options) {
            string newName = options.ItemNewName;
            string key = GetFileItemPath(options.Item);
            int index = key.LastIndexOf(PathSeparator);
            string newKey;
            if(index >= 0) {
                string parentKey = key.Substring(0, index + 1);
                newKey = parentKey + newName;
            } else
                newKey = newName;
            Copy(key, newKey, true);
        }
        public void MoveItem(FileSystemMoveItemOptions options) {
            Copy(options.Item, options.DestinationDirectory, true);
        }
        public void CopyItem(FileSystemCopyItemOptions options) {
            Copy(options.Item, options.DestinationDirectory, false);
        }
        void Copy(FileSystemItemInfo sourceItem, FileSystemItemInfo destinationItem, bool deleteSource = false) {
            string sourceKey = GetFileItemPath(sourceItem);
            string destinationKey = GetFileItemPath(destinationItem) + PathSeparator + sourceItem.Name;
            Copy(sourceKey, destinationKey, deleteSource);
        }
        void Copy(string sourceKey, string destinationKey, bool deleteSource) {
            var blobClient = Container.GetBlobClient(sourceKey);
            bool isFile = blobClient.Exists();
            if(isFile)
                CopyFile(blobClient, destinationKey, deleteSource);
            else
                CopyDirectory(sourceKey, destinationKey, deleteSource);
        }
        public void DeleteItem(FileSystemDeleteItemOptions options) {
            string key = GetFileItemPath(options.Item);
            var blobClient = Container.GetBlobClient(key);
            bool isFile = blobClient.Exists();
            if(isFile)
                RemoveFile(blobClient);
            else
                RemoveDirectory(key);
        }
        public void UploadFile(FileSystemUploadFileOptions options) {
            string destinationKey = $"{options.DestinationDirectory.Path}{PathSeparator}{options.FileName}";
            var blobClient = Container.GetBlobClient(destinationKey);
            blobClient.Upload(options.TempFile.FullName, overwrite: true);
            RemoveUploadedFile(options.TempFile.FullName);
        }
        void RemoveFile(BlobClient blob) {
            blob.Delete();
        }
        void RemoveDirectory(string dirKey) {
            var children = GetOneLevelHierarchyBlobs(dirKey);
            foreach(var blob in children) {
                string childRelativePath = GetBlobRelativePath(blob);
                if(blob.IsBlob) {
                    RemoveFile(Container.GetBlobClient(childRelativePath));
                } else if(blob.IsPrefix) {
                    RemoveDirectory(childRelativePath);
                } else {
                    throw new Exception("Unsupported blob type");
                }
            }
        }
        void CopyFile(BlobClient blob, string destinationKey, bool deleteSource = false) {
            var blobCopy = Container.GetBlobClient(destinationKey);
            blobCopy.StartCopyFromUri(blob.Uri);
            if(deleteSource)
                blob.Delete();
        }
        void CopyDirectory(string sourceKey, string destinationKey, bool deleteSource = false) {
            var children = GetOneLevelHierarchyBlobs(sourceKey);
            foreach(var blob in children) {
                string childSourceRelativePath = GetBlobRelativePath(blob);
                string childName = GetBlobName(blob);
                string childDestinationRelativePath = $"{destinationKey}{PathSeparator}{childName}";
                if(blob.IsBlob) {
                    CopyFile(Container.GetBlobClient(childSourceRelativePath), childDestinationRelativePath, deleteSource);
                } else if(blob.IsPrefix) {
                    CopyDirectory(GetBlobRelativePath(blob), childDestinationRelativePath, deleteSource);
                } else {
                    throw new Exception("Unsupported blob type");
                }
            }
        }
        string GetBlobName(BlobHierarchyItem hierarchyItem) {
            var relativePath = GetBlobRelativePath(hierarchyItem);
            return relativePath != null ? GetFileItemName(relativePath) : null;
        }
        string GetBlobRelativePath(BlobHierarchyItem hierarchyItem) {
            if(hierarchyItem.IsBlob) {
                return hierarchyItem.Blob.Name;
            } else if(hierarchyItem.IsPrefix) {
                return hierarchyItem.Prefix.Substring(0, hierarchyItem.Prefix.Length - 1);
            } else {
                return null;
            }
        }
        string GetFileItemName(string relativeName) {
            var lastDelimiterIndex = relativeName.LastIndexOf(PathSeparator) == -1
                ? 0
                : relativeName.LastIndexOf(PathSeparator) + 1;
            return relativeName.Substring(lastDelimiterIndex);
        }
        string GetFileItemPath(FileSystemItemInfo item) {
            return item.Path.Replace("\\", PathSeparator);
        }
        public void RemoveUploadedFile(string fileFullPath) {
            FileInfo file = new FileInfo(fileFullPath);
            file.Delete();
        }
        public Stream GetFileContent(FileSystemLoadFileContentOptions options) {
            if(!Directory.Exists(TempDirectoryPath))
                Directory.CreateDirectory(TempDirectoryPath);

            CleanUpDownloadedFiles();

            string tempFileName = string.Format("{0}{1}.tmp", TempFilePrefix, Guid.NewGuid().ToString("N"));
            string tempFilePath = Path.Combine(TempDirectoryPath, tempFileName);

            string key = GetFileItemPath(options.File);
            var blob = Container.GetBlobClient(key);
            blob.DownloadTo(tempFilePath);

            return File.Open(tempFilePath, FileMode.Open, FileAccess.Read, FileShare.Read);
        }
        void CleanUpDownloadedFiles() {
            var timeout = TimeSpan.FromMinutes(10);
            try {
                var dir = new DirectoryInfo(TempDirectoryPath);
                var files = dir.GetFiles(TempFilePrefix + "*.tmp")
                    .Where(file => DateTime.UtcNow - file.LastWriteTimeUtc > timeout);
                foreach(FileInfo file in files) {
                    try {
                        file.Delete();
                    } catch { }
                }
            } catch { }
        }
    }
}
