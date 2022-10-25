using DevExtreme.NETCore.Demos.Models.FileManagement;
using System;
using System.Net.Http;
using Azure.Storage;
using Azure.Storage.Sas;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Specialized;
using Microsoft.AspNetCore.Mvc;

namespace DevExtreme.NETCore.Demos.Controllers.ApiControllers {
    public class FileUploaderAzureAccessApiController : Controller {
        const long MaxBlobSize = 1048576;
        const string ServiceUri = "https://{0}.blob.core.windows.net";

        BlobServiceClient _client;
        BlobServiceClient Client {
            get {
                if(_client == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileUploader;
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
                    AzureStorageAccount accountModel = AzureStorageAccount.FileUploader;
                    _container = Client.GetBlobContainerClient(accountModel.ContainerName);
                }
                return _container;
            }
        }

        [Route("api/file-uploader-azure-access", Name = "FileUploaderAzureAccessApi")]
        public object Process(string command, string blobName) {
            try {
                return UploadBlob(blobName);
            } catch {
                return CreateErrorResult();
            }
        }
        object UploadBlob(string blobName) {
            if(blobName.Contains("/"))
                return CreateErrorResult("Invalid blob name.");

            string prefix = Guid.NewGuid().ToString("N");
            string fullBlobName = $"{prefix}_{blobName}";
            var blob = Container.GetBlockBlobClient(fullBlobName);

            if(blob.Exists() && blob.GetProperties().Value.ContentLength > MaxBlobSize) {
                return CreateErrorResult();
            }
            if(blob.CanGenerateSasUri) {
                var sasUri = blob.GenerateSasUri(BlobSasPermissions.Write, DateTimeOffset.UtcNow.AddHours(1));
                return CreateSuccessResult(sasUri.AbsoluteUri);
            } else {
                return CreateErrorResult("BlobClient cannot generate SasUri");
            }

        }
        object CreateSuccessResult(string url, string url2 = null) {
            return new {
                success = true,
                accessUrl = url,
                accessUrl2 = url2
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
