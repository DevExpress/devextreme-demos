using DevExtreme.NETCore.Demos.Models.FileManagement;
using System;
using System.Net.Http;
using Azure.Storage;
using Azure.Storage.Sas;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers {
    public class FileManagerAzureAccessApiController : Controller {
        const string EmptyDirDummyBlobName = "aspxAzureEmptyFolderBlob";
        const string ServiceUri = "https://{0}.blob.core.windows.net";
        const long MaxBlobSize = 1048576;

        public FileManagerAzureAccessApiController() {
            AllowDownload = true;
            //uncomment the code below to enable file/folder management
            //AllowCreate = true;
            //AllowRemove = true;
            //AllowRenameOrMoveOrCopy = true;
            //AllowUpload = true;
        }

        bool AllowCreate { get; }
        bool AllowRemove { get; }
        bool AllowRenameOrMoveOrCopy { get; }
        bool AllowUpload { get; }
        bool AllowDownload { get; }

        BlobServiceClient _client;
        BlobServiceClient Client {
            get {
                if(_client == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager;
                    StorageSharedKeyCredential credential = new StorageSharedKeyCredential(accountModel.AccountName, accountModel.AccessKey);
                    _client = new BlobServiceClient(new Uri(string.Format(ServiceUri, accountModel.AccountName)), credential);
                }
                return _client;
            }
        }
        BlobContainerClient _container;
        BlobContainerClient Container {
            get {
                if(_container == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager;
                    _container = Client.GetBlobContainerClient(accountModel.ContainerName);
                }
                return _container;
            }
        }

        [Route("api/file-manager-azure-access", Name = "FileManagerAzureAccessApi")]
        public object Process(string command, string blobName = null, string blobName2 = null) {
            try {
                return ProcessCommand(command, blobName, blobName2);
            } catch {
                return CreateErrorResult();
            }
        }
        object ProcessCommand(string command, string blobName, string blobName2) {
            switch(command) {
                case "BlobList":
                    return GetBlobList();
                case "CreateDirectory":
                    if(!AllowCreate)
                        return CreateErrorResult();
                    return CreateDirectory(blobName);
                case "DeleteBlob":
                    if(!AllowRemove)
                        return CreateErrorResult();
                    return DeleteBlob(blobName);
                case "CopyBlob":
                    if(!AllowRenameOrMoveOrCopy)
                        return CreateErrorResult();
                    return CopyBlob(blobName, blobName2);
                case "UploadBlob":
                    if(!AllowUpload)
                        return CreateErrorResult();
                    return UploadBlob(blobName);
                case "GetBlob":
                    if(!AllowDownload)
                        return CreateErrorResult();
                    return GetBlob(blobName);
            }
            return null;
        }
        object GetBlobList() {
            if(Container.CanGenerateSasUri) {
                var sasUri = Container.GenerateSasUri(BlobContainerSasPermissions.List, DateTimeOffset.UtcNow.AddHours(1));
                return CreateSuccessResult(sasUri);
            } else {
                return CreateErrorResult("BlobContainerClient cannot generate SasUri");
            }
        }
        object CreateDirectory(string directoryName) {
            string blobName = $"{directoryName}/{EmptyDirDummyBlobName}";

            var blob = Container.GetBlobClient(blobName);
            if(blob.Exists()) {
                return CreateErrorResult();
            }
            var sasUri = TryGetBlobUri(blob, BlobSasPermissions.Write);
            if(sasUri != null) {
                return CreateSuccessResult(sasUri);
            } else {
                return CreateErrorResult("BlobClient cannot generate SasUri");
            }
        }
        object DeleteBlob(string blobName) {
            var sasUri = TryGetBlobUri(blobName, BlobSasPermissions.Delete);
            if(sasUri != null) {
                return CreateSuccessResult(sasUri);
            } else {
                return CreateErrorResult("BlobClient cannot generate SasUri");
            }
        }
        object CopyBlob(string sourceBlobName, string destinationBlobName) {
            var sourceSasUri = TryGetBlobUri(sourceBlobName, BlobSasPermissions.Read);
            var destinationSasUri = TryGetBlobUri(destinationBlobName, BlobSasPermissions.Create);
            if(sourceSasUri != null && destinationSasUri != null) {
                return CreateSuccessResult(sourceSasUri, destinationSasUri);
            } else {
                return CreateErrorResult("BlobClient cannot generate SasUri");
            }
        }
        object UploadBlob(string blobName) {
            if(blobName.EndsWith("/"))
                return CreateErrorResult("Invalid blob name.");

            var blob = Container.GetBlockBlobClient(blobName);
            if(blob.Exists() && blob.GetProperties().Value.ContentLength > MaxBlobSize) {
                return CreateErrorResult();
            }

            var sasUri = TryGetBlobUri(blobName, BlobSasPermissions.Write);
            return CreateSuccessResult(sasUri);
        }
        object GetBlob(string blobName) {
            var headers = new BlobHttpHeaders {
                ContentType = "application/octet-stream"
            };
            var blob = Container.GetBlobClient(blobName);
            blob.SetHttpHeaders(headers);
            var sasUri = TryGetBlobUri(blob, BlobSasPermissions.Read);
            return CreateSuccessResult(sasUri);
        }
        Uri TryGetBlobUri(string blobName, BlobSasPermissions permissions) {
            if(!string.IsNullOrEmpty(blobName)) {
                return TryGetBlobUri(Container.GetBlobClient(blobName), permissions);
            } else {
                return null;
            }
        }
        Uri TryGetBlobUri(BlobClient blob, BlobSasPermissions permissions) {
            if(blob.CanGenerateSasUri) {
                return blob.GenerateSasUri(permissions, DateTimeOffset.UtcNow.AddHours(1));
            } else {
                return null;
            }
        }
        object CreateSuccessResult(Uri uri, Uri uri2 = null) {
            return new {
                success = true,
                accessUrl = uri.AbsoluteUri,
                accessUrl2 = uri2 != null ? uri2.AbsoluteUri : null
            };
        }
        object CreateErrorResult(string error = null) {
            if(string.IsNullOrEmpty(error))
                error = "Unspecified error.";

            return new {
                success = false,
                error = error
            };
        }
    }
}
