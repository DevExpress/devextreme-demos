using DevExtreme.MVC.Demos.Models.FileManagement;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Auth;
using Microsoft.Azure.Storage.Blob;
using System;
using System.Net.Http;
using System.Web.Http;

namespace DevExtreme.MVC.Demos.Controllers.ApiControllers {
    public class FileUploaderAzureAccessApiController : ApiController {
        const long MaxBlobSize = 1048576;

        CloudBlobClient _client;
        CloudBlobClient Client {
            get {
                if(this._client == null) {
                    AzureStorageAccount accountModel = AzureStorageAccount.FileUploader.Value;
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
                    AzureStorageAccount accountModel = AzureStorageAccount.FileUploader.Value;
                    this._container = Client.GetContainerReference(accountModel.ContainerName);
                }
                return this._container;
            }
        }

        [HttpGet]
        [Route("api/file-uploader-azure-access", Name = "FileUploaderAzureAccessApi")]
        public HttpResponseMessage Process(string command, string blobName) {
            object result;
            try {
                result = UploadBlob(blobName);
            } catch {
                result = CreateErrorResult();
            }
            return Request.CreateResponse(result);
        }

        object UploadBlob(string blobName) {
            if(blobName.Contains("/"))
                return CreateErrorResult("Invalid blob name.");

            string prefix = Guid.NewGuid().ToString("N");
            string fullBlobName = $"{prefix}_{blobName}";
            CloudBlockBlob blob = Container.GetBlockBlobReference(fullBlobName);

            if(blob.Exists() && blob.Properties.Length > MaxBlobSize) {
                blob.Delete();
                return CreateErrorResult();
            }

            var policy = new SharedAccessBlobPolicy {
                SharedAccessExpiryTime = DateTime.UtcNow.AddMinutes(1),
                Permissions = SharedAccessBlobPermissions.Write
            };
            string url = blob.Uri + blob.GetSharedAccessSignature(policy, null, null, SharedAccessProtocol.HttpsOnly, null);

            return CreateSuccessResult(url);
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
