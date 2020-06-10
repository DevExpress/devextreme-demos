using DevExtreme.MVC.Demos.Models.FileManagement;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Auth;
using Microsoft.Azure.Storage.Blob;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerAzureAccessApiController : ApiController {
        const string EmptyDirDummyBlobName = "aspxAzureEmptyFolderBlob";
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

        CloudBlobClient _client;
        CloudBlobClient Client {
            get {
                if(this._client == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager.Value;
                    var credentials = new StorageCredentials(accountModel.AccountName, accountModel.AccessKey);
                    var account = new CloudStorageAccount(credentials, true);
                    this._client = account.CreateCloudBlobClient();
                }
                return this._client;
            }
        }

        CloudBlobContainer _container;
        CloudBlobContainer Container {
            get {
                if(this._container == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager.Value;
                    this._container = Client.GetContainerReference(accountModel.ContainerName);
                }
                return this._container;
            }
        }

        [HttpGet]
        [Route("api/file-manager-azure-access", Name = "FileManagerAzureAccessApi")]
        public HttpResponseMessage Process(string command, string blobName = null, string blobName2 = null) {
            object result;
            try {
                result = ProcessCommand(command, blobName, blobName2);
            } catch {
                result = CreateErrorResult();
            }
            return Request.CreateResponse(result);
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
            var policy = CreateSharedAccessBlobPolicy(SharedAccessBlobPermissions.List);
            string url = Container.Uri + Container.GetSharedAccessSignature(policy, null, SharedAccessProtocol.HttpsOnly, null);
            return CreateSuccessResult(url);
        }

        object CreateDirectory(string directoryName) {
            string blobName = $"{directoryName}/{EmptyDirDummyBlobName}";

            CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
            if(blob.Exists()) {
                if(blob.Properties.Length > 0) {
                    blob.Delete();
                }
                return CreateErrorResult();
            }

            string url = GetSharedAccessSignature(blob, SharedAccessBlobPermissions.Write);
            return CreateSuccessResult(url);
        }

        object DeleteBlob(string blobName) {
            string url = GetSharedAccessSignature(blobName, SharedAccessBlobPermissions.Delete);
            return CreateSuccessResult(url);
        }

        object CopyBlob(string sourceBlobName, string destinationBlobName) {
            string sourceUrl = GetSharedAccessSignature(sourceBlobName, SharedAccessBlobPermissions.Read);
            string destinationUrl = GetSharedAccessSignature(destinationBlobName, SharedAccessBlobPermissions.Create);
            return CreateSuccessResult(sourceUrl, destinationUrl);
        }

        object UploadBlob(string blobName) {
            if(blobName.EndsWith("/"))
                return CreateErrorResult("Invalid blob name.");

            CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
            if(blob.Exists() && blob.Properties.Length > MaxBlobSize) {
                blob.Delete();
                return CreateErrorResult();
            }

            string url = GetSharedAccessSignature(blob, SharedAccessBlobPermissions.Write);
            return CreateSuccessResult(url);
        }

        object GetBlob(string blobName) {
            var headers = new SharedAccessBlobHeaders {
                ContentType = "application/octet-stream"
            };
            string url = GetSharedAccessSignature(blobName, SharedAccessBlobPermissions.Read, headers);
            return CreateSuccessResult(url);
        }

        string GetSharedAccessSignature(string blobName, SharedAccessBlobPermissions permissions, SharedAccessBlobHeaders headers = null) {
            CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
            return GetSharedAccessSignature(blob, permissions, headers);
        }
        string GetSharedAccessSignature(CloudBlockBlob blob, SharedAccessBlobPermissions permissions, SharedAccessBlobHeaders headers = null) {
            SharedAccessBlobPolicy policy = CreateSharedAccessBlobPolicy(permissions);
            return blob.Uri + blob.GetSharedAccessSignature(policy, headers, null, SharedAccessProtocol.HttpsOnly, null);
        }
        SharedAccessBlobPolicy CreateSharedAccessBlobPolicy(SharedAccessBlobPermissions permissions) {
            return new SharedAccessBlobPolicy {
                SharedAccessExpiryTime = DateTime.UtcNow.AddMinutes(1),
                Permissions = permissions
            };
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
