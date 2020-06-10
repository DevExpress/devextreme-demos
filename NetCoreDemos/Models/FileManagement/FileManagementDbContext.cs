using Microsoft.EntityFrameworkCore;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class FileManagementDbContext : DbContext {
        public FileManagementDbContext(DbContextOptions<FileManagementDbContext> options)
           : base(options) {
        }

        public DbSet<FileItem> FileItems { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
