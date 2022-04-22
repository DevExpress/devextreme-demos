using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Auth;
using Microsoft.Azure.Storage.Blob;
using DevExtreme.AspNet.Mvc.FileManagement;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class AzureBlobFileProvider : IFileSystemItemLoader, IFileSystemItemEditor, IFileUploader, IFileContentProvider {
        const string EmptyDirectoryDummyBlobName = "aspxAzureEmptyFolderBlob";
        const string TempFilePrefix = "azuredownload_";

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

        CloudBlobContainer _container;
        CloudBlobContainer Container {
            get {
                if(this._container == null) {
                    var credentials = new StorageCredentials(StorageAccountName, StorageAccessKey);
                    var account = new CloudStorageAccount(credentials, true);
                    var client = account.CreateCloudBlobClient();
                    this._container = client.GetContainerReference(ContainerName);
                }
                return this._container;
            }
        }

        public IEnumerable<FileSystemItem> GetItems(FileSystemLoadItemOptions options) {
            var result = new List<FileSystemItem>();
            BlobContinuationToken continuationToken = null;
            string dirKey = GetFileItemPath(options.Directory);
            if(!string.IsNullOrEmpty(dirKey))
                dirKey = dirKey + "/";
            CloudBlobDirectory dir = Container.GetDirectoryReference(dirKey);

            do {
                BlobResultSegment segmentResult = dir.ListBlobsSegmented(continuationToken);
                continuationToken = segmentResult.ContinuationToken;
                foreach(IListBlobItem blob in segmentResult.Results) {
                    var item = new FileSystemItem();
                    string name = GetFileItemName(blob);
                    if(name == EmptyDirectoryDummyBlobName)
                        continue;

                    if(blob is CloudBlob) {
                        var blockBlob = (CloudBlob)blob;
                        item.Name = name;
                        item.DateModified = blockBlob.Properties.LastModified.GetValueOrDefault().DateTime;
                        item.Size = blockBlob.Properties.Length;
                    } else if(blob is CloudBlobDirectory) {
                        var subDir = (CloudBlobDirectory)blob;
                        item.Name = name.Substring(0, name.Length - 1);
                        item.IsDirectory = true;
                        item.HasSubDirectories = GetHasDirectories(subDir);
                        item.DateModified = DateTime.UtcNow;
                    } else {
                        throw new Exception("Unsupported blob type");
                    }
                    result.Add(item);
                }
            } while(continuationToken != null);

            return result.OrderByDescending(item => item.IsDirectory)
                .ThenBy(item => item.Name)
                .ToList();
        }

        bool GetHasDirectories(CloudBlobDirectory dir) {
            bool result;
            BlobContinuationToken continuationToken = null;
            do {
                BlobResultSegment segmentResult = dir.ListBlobsSegmented(continuationToken);
                continuationToken = segmentResult.ContinuationToken;
                result = segmentResult.Results.Any(blob => blob is CloudBlobDirectory);
            } while(!result && continuationToken != null);
            return result;
        }

        public void CreateDirectory(FileSystemCreateDirectoryOptions options) {
            string path = GetFileItemPath(options.ParentDirectory);
            string blobKey = $"{options.DirectoryName}/{EmptyDirectoryDummyBlobName}";
            if(!string.IsNullOrEmpty(path))
                blobKey = $"{path}/{blobKey}";
            CloudBlockBlob dirBlob = Container.GetBlockBlobReference(blobKey);
            dirBlob.UploadText("");
        }

        public void RenameItem(FileSystemRenameItemOptions options) {
            string newName = options.ItemNewName;
            string key = GetFileItemPath(options.Item);
            int index = key.LastIndexOf('/');
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
            string destinationKey = GetFileItemPath(destinationItem) + "/" + sourceItem.Name;
            Copy(sourceKey, destinationKey, deleteSource);
        }

        void Copy(string sourceKey, string destinationKey, bool deleteSource) {
            CloudBlob blob = Container.GetBlobReference(sourceKey);
            bool isFile = blob.Exists();
            if(isFile)
                CopyFile(blob, destinationKey, deleteSource);
            else
                CopyDirectory(sourceKey, destinationKey + "/", deleteSource);
        }

        public void DeleteItem(FileSystemDeleteItemOptions options) {
            string key = GetFileItemPath(options.Item);
            CloudBlob blob = Container.GetBlobReference(key);
            bool isFile = blob.Exists();
            if(isFile)
                RemoveFile(blob);
            else
                RemoveDirectory(key + "/");
        }

        public void UploadFile(FileSystemUploadFileOptions options) {
            string destinationKey = $"{options.DestinationDirectory.Path}/{options.FileName}";
            CloudBlockBlob newBlob = Container.GetBlockBlobReference(destinationKey);
            newBlob.UploadFromFile(options.TempFile.FullName);
        }

        void RemoveFile(CloudBlob blob) {
            blob.Delete();
        }

        void RemoveDirectory(string key) {
            CloudBlobDirectory dir = Container.GetDirectoryReference(key);
            RemoveDirectory(dir);
        }

        void RemoveDirectory(CloudBlobDirectory dir) {
            var children = new List<IListBlobItem>();
            BlobContinuationToken continuationToken = null;

            do {
                BlobResultSegment segmentResult = dir.ListBlobsSegmented(continuationToken);
                continuationToken = segmentResult.ContinuationToken;
                children.AddRange(segmentResult.Results);
            } while(continuationToken != null);

            foreach(IListBlobItem blob in children) {
                if(blob is CloudBlob) {
                    RemoveFile((CloudBlob)blob);
                } else if(blob is CloudBlobDirectory) {
                    RemoveDirectory((CloudBlobDirectory)blob);
                } else {
                    throw new Exception("Unsupported blob type");
                }
            }
        }

        void CopyFile(CloudBlob blob, string destinationKey, bool deleteSource = false) {
            CloudBlob blobCopy = Container.GetBlobReference(destinationKey);
            blobCopy.StartCopy(blob.Uri);
            if(deleteSource)
                blob.Delete();
        }

        void CopyDirectory(string sourceKey, string destinationKey, bool deleteSource = false) {
            CloudBlobDirectory dir = Container.GetDirectoryReference(sourceKey);
            CopyDirectory(dir, destinationKey, deleteSource);
        }

        void CopyDirectory(CloudBlobDirectory dir, string destinationKey, bool deleteSource = false) {
            var children = new List<IListBlobItem>();
            BlobContinuationToken continuationToken = null;

            do {
                BlobResultSegment segmentResult = dir.ListBlobsSegmented(continuationToken);
                continuationToken = segmentResult.ContinuationToken;
                children.AddRange(segmentResult.Results);
            } while(continuationToken != null);

            foreach(IListBlobItem blob in children) {
                string childCopyName = GetFileItemName(blob);
                string childCopyKey = $"{destinationKey}{childCopyName}";
                if(blob is CloudBlob) {
                    CopyFile((CloudBlob)blob, childCopyKey, deleteSource);
                } else if(blob is CloudBlobDirectory) {
                    CopyDirectory((CloudBlobDirectory)blob, childCopyKey, deleteSource);
                } else {
                    throw new Exception("Unsupported blob type");
                }
            }
        }

        string GetFileItemName(IListBlobItem blob) {
            string escapedName = blob.Uri.Segments.Last();
            return Uri.UnescapeDataString(escapedName);
        }

        string GetFileItemPath(FileSystemItemInfo item) {
            return item.Path.Replace('\\', '/');
        }

        public void RemoveUploadedFile(FileInfo file) {
            file.Delete();
        }

        public Stream GetFileContent(FileSystemLoadFileContentOptions options) {
            if(!Directory.Exists(TempDirectoryPath))
                Directory.CreateDirectory(TempDirectoryPath);

            CleanUpDownloadedFiles();

            string tempFileName = string.Format("{0}{1}.tmp", TempFilePrefix, Guid.NewGuid().ToString("N"));
            string tempFilePath = Path.Combine(TempDirectoryPath, tempFileName);

            string key = GetFileItemPath(options.File);
            CloudBlockBlob blob = Container.GetBlockBlobReference(key);
            blob.DownloadToFile(tempFilePath, FileMode.Create);

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
