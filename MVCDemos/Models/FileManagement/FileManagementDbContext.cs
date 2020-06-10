
using System.Data.Entity;

namespace DevExtreme.MVC.Demos.Models.FileManagement {
    public class FileManagementDbContext : DbContext {
        public FileManagementDbContext()
           : base("name=FileManagement") {
        }

        public DbSet<FileItem> FileItems { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
