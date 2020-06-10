using Microsoft.Extensions.Configuration;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class AzureStorageAccount {
        const string AccountNameSetting = "AccountName";
        const string AccessKeySetting = "AccessKey";
        const string FileManagerBlobContainerNameSetting = "FileManagerBlobContainerName";
        const string FileUploaderBlobContainerNameSetting = "FileUploaderBlobContainerName";

        public static AzureStorageAccount FileManager { get; private set; }
        public static AzureStorageAccount FileUploader { get; private set; }

        public static void Load(IConfigurationSection config) {
            FileManager = new AzureStorageAccount {
                AccountName = config[AccountNameSetting],
                AccessKey = config[AccessKeySetting],
                ContainerName = config[FileManagerBlobContainerNameSetting]
            };

            FileUploader = new AzureStorageAccount {
                AccountName = config[AccountNameSetting],
                AccessKey = config[AccessKeySetting],
                ContainerName = config[FileUploaderBlobContainerNameSetting]
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
