using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DevExtreme.NETCore.Demos.Models.FileManagement {
    public class InMemoryFileManagementDataContext : InMemoryDataContext<FileItem> {
        public InMemoryFileManagementDataContext(FileManagementDbContext fileManagementDb, IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
            FileManagementDb = fileManagementDb;
        }

        protected FileManagementDbContext FileManagementDb { get; }

        public ICollection<FileItem> FileItems {
            get {
                EnsureModifiedByColumn();
                return ItemsInternal;
            }
        }

        public DbSet<User> Users => FileManagementDb.Users;


        protected override IEnumerable<FileItem> Source => FileManagementDb.FileItems.Include(i => i.ModifiedBy);

        protected override int GetKey(FileItem item) {
            return item.Id;
        }

        protected override void SetKey(FileItem item, int key) {
            item.Id = key;
        }

        void EnsureModifiedByColumn() {
            foreach(var item in ItemsInternal) {
                if(item.ModifiedBy != null && item.ModifiedBy.UserId == item.ModifiedById) continue;
                item.ModifiedBy = FileManagementDb.Users.Find(item.ModifiedById);
            }
        }
    }
}
