using DevExtreme.MVC.Demos.Models.FileManagement;
using Azure;
using Azure.Core;
using Azure.Storage;
//using Azure.Storage.Auth;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs.Specialized;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Azure.Storage.Sas;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileManagerAzureAccessApiController : ApiController {
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

        BlobServiceClient _serviceClient;
        BlobServiceClient ServiceClient {
            get {
                if(_serviceClient == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager.Value;
                    StorageSharedKeyCredential credential = new StorageSharedKeyCredential(accountModel.AccountName, accountModel.AccessKey);
                    _serviceClient = new BlobServiceClient(new Uri(string.Format(ServiceUri, accountModel.AccountName)), credential);
                }
                return _serviceClient;
            }
        }

        BlobContainerClient _container;
        BlobContainerClient Container {
            get {
                if(_container == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileManager.Value;
                    _container = ServiceClient.GetBlobContainerClient(accountModel.ContainerName); // TODO
                }
                return _container;
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
            SharedAccessBlobPermissions permissions = SharedAccessBlobPermissions.List;
            BlobSignedIdentifier policy = CreateSharedAccessBlobPolicy(permissions);
            if (Container.CanGenerateSasUri) {
                var sasUri = Container.GenerateSasUri(BlobContainerSasPermissions.List, DateTimeOffset.UtcNow.AddHours(1));
                return CreateSuccessResult(sasUri.AbsoluteUri);
            } else {
                return CreateErrorResult("BlobContainerClient cannot generate SasUri");
            }
        }

        object CreateDirectory(string directoryName) {
            throw new NotImplementedException();
            //string blobName = $"{directoryName}/{EmptyDirDummyBlobName}";

            //CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
            //if(blob.Exists()) {
            //    if(blob.Properties.Length > 0) {
            //        blob.Delete();
            //    }
            //    return CreateErrorResult();
            //}

            //string url = GetSharedAccessSignature(blob, SharedAccessBlobPermissions.Write);
            //return CreateSuccessResult(url);
        }

        object DeleteBlob(string blobName) {
            throw new NotImplementedException();
            //string url = GetSharedAccessSignature(blobName, SharedAccessBlobPermissions.Delete);
            //return CreateSuccessResult(url);
        }

        object CopyBlob(string sourceBlobName, string destinationBlobName) {
            throw new NotImplementedException();
            //string sourceUrl = GetSharedAccessSignature(sourceBlobName, SharedAccessBlobPermissions.Read);
            //string destinationUrl = GetSharedAccessSignature(destinationBlobName, SharedAccessBlobPermissions.Create);
            //return CreateSuccessResult(sourceUrl, destinationUrl);
        }

        object UploadBlob(string blobName) {
            throw new NotImplementedException();
            //if(blobName.EndsWith("/"))
            //    return CreateErrorResult("Invalid blob name.");

            //CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
            //if(blob.Exists() && blob.Properties.Length > MaxBlobSize) {
            //    blob.Delete();
            //    return CreateErrorResult();
            //}

            //string url = GetSharedAccessSignature(blob, SharedAccessBlobPermissions.Write);
            //return CreateSuccessResult(url);
        }

        object GetBlob(string blobName) {
            throw new NotImplementedException();
            //var headers = new SharedAccessBlobHeaders {
            //    ContentType = "application/octet-stream"
            //};
            //string url = GetSharedAccessSignature(blobName, SharedAccessBlobPermissions.Read, headers);
            //return CreateSuccessResult(url);
        }

        //string GetSharedAccessSignature(string blobName, SharedAccessBlobPermissions permissions, SharedAccessBlobHeaders headers = null) {
        //    throw new NotImplementedException();
        //    //CloudBlockBlob blob = Container.GetBlockBlobReference(blobName);
        //    //return GetSharedAccessSignature(blob, permissions, headers);
        //}
        //string GetSharedAccessSignature(CloudBlockBlob blob, SharedAccessBlobPermissions permissions, SharedAccessBlobHeaders headers = null) {
        //    throw new NotImplementedException();
        //    //SharedAccessBlobPolicy policy = CreateSharedAccessBlobPolicy(permissions);
        //    //return blob.Uri + blob.GetSharedAccessSignature(policy, headers, null, SharedAccessProtocol.HttpsOnly, null);
        //}
        BlobSignedIdentifier CreateSharedAccessBlobPolicy(SharedAccessBlobPermissions permissions) {
            return new BlobSignedIdentifier {
                Id = "tempSignedIdentifier", // TODO
                AccessPolicy = new BlobAccessPolicy {
                    PolicyStartsOn = DateTimeOffset.UtcNow.AddHours(-1),
                    PolicyExpiresOn = DateTimeOffset.UtcNow.AddMinutes(1), // TODO: in doc AddDays(1)
                    Permissions = SharedAccessBlobPermissionsHelper.GetPermissionString(permissions)
                }
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
