using System;
using System.Web.Configuration;

namespace DevExtreme.MVC.Demos.Models.FileManagement {
    public class AzureStorageAccount {
        const string AccountNameSetting = "AzureStorageAccountName";
        const string AccessKeySetting = "AzureStorageAccessKey";
        const string FileManagerBlobContainerNameSetting = "AzureFileManagerBlobContainerName";
        const string FileUploaderBlobContainerNameSetting = "AzureFileUploaderBlobContainerName";

        public static readonly Lazy<AzureStorageAccount> FileManager = new Lazy<AzureStorageAccount>(GetFileManagerAccount);
        public static readonly Lazy<AzureStorageAccount> FileUploader = new Lazy<AzureStorageAccount>(GetFileUploaderAccount);

        static AzureStorageAccount GetFileManagerAccount() {
            return new AzureStorageAccount {
                AccountName = WebConfigurationManager.AppSettings[AccountNameSetting],
                AccessKey = WebConfigurationManager.AppSettings[AccessKeySetting],
                ContainerName = WebConfigurationManager.AppSettings[FileManagerBlobContainerNameSetting]
            };
        }

        static AzureStorageAccount GetFileUploaderAccount() {
            return new AzureStorageAccount {
                AccountName = WebConfigurationManager.AppSettings[AccountNameSetting],
                AccessKey = WebConfigurationManager.AppSettings[AccessKeySetting],
                ContainerName = WebConfigurationManager.AppSettings[FileUploaderBlobContainerNameSetting]
            };
        }

        public string AccountName { get; set; }
        public string AccessKey { get; set; }
        public string ContainerName { get; set; }

        public bool IsEmpty() {
            return string.IsNullOrEmpty(AccountName) || string.IsNullOrEmpty(AccessKey) || string.IsNullOrEmpty(ContainerName);
        }
    }
}
