using Microsoft.EntityFrameworkCore;

namespace DevExtreme.NETCore.Demos.Models.Northwind {

    public partial class NorthwindContext : DbContext {

        public NorthwindContext(DbContextOptions<NorthwindContext> options)
            : base(options) {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Order_Detail> Order_Details { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Shipper> Shippers { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Customer>(entity => {
                entity.HasIndex(e => e.City)
                    .HasDatabaseName("City");

                entity.HasIndex(e => e.CompanyName)
                    .HasDatabaseName("CompanyName");

                entity.HasIndex(e => e.PostalCode)
                    .HasDatabaseName("PostalCode");

                entity.HasIndex(e => e.Region)
                    .HasDatabaseName("Region");
            });

            modelBuilder.Entity<Employee>(entity => {
                entity.HasIndex(e => e.LastName)
                    .HasDatabaseName("LastName");

                entity.HasIndex(e => e.PostalCode)
                    .HasDatabaseName("PostalCode");
            });

            modelBuilder.Entity<Order_Detail>(entity => {
                entity.HasKey(e => new { e.OrderID, e.ProductID })
                    .HasName("PK_Order_Details");

                entity.HasIndex(e => e.OrderID)
                    .HasDatabaseName("OrdersOrder_Details");

                entity.HasIndex(e => e.ProductID)
                    .HasDatabaseName("ProductsOrder_Details");

                entity.Property(e => e.Discount).HasDefaultValueSql("0");

                entity.Property(e => e.Quantity).HasDefaultValueSql("1");

                entity.Property(e => e.UnitPrice).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Order>(entity => {
                entity.HasIndex(e => e.CustomerID)
                    .HasDatabaseName("CustomersOrders");

                entity.HasIndex(e => e.EmployeeID)
                    .HasDatabaseName("EmployeesOrders");

                entity.HasIndex(e => e.OrderDate)
                    .HasDatabaseName("OrderDate");

                entity.HasIndex(e => e.ShipPostalCode)
                    .HasDatabaseName("ShipPostalCode");

                entity.HasIndex(e => e.ShipVia)
                    .HasDatabaseName("ShippersOrders");

                entity.HasIndex(e => e.ShippedDate)
                    .HasDatabaseName("ShippedDate");

                entity.Property(e => e.Freight).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Category>(entity => {
                entity.HasIndex(e => e.CategoryName)
                    .HasDatabaseName("CategoryName");
            });

            modelBuilder.Entity<Product>(entity => {
                entity.HasIndex(e => e.CategoryID)
                    .HasDatabaseName("CategoryID");

                entity.HasIndex(e => e.ProductName)
                    .HasDatabaseName("ProductName");

                entity.HasIndex(e => e.SupplierID)
                    .HasDatabaseName("SuppliersProducts");

                entity.Property(e => e.Discontinued).HasDefaultValueSql("0");

                entity.Property(e => e.ReorderLevel).HasDefaultValueSql("0");

                entity.Property(e => e.UnitPrice).HasDefaultValueSql("0");

                entity.Property(e => e.UnitsInStock).HasDefaultValueSql("0");

                entity.Property(e => e.UnitsOnOrder).HasDefaultValueSql("0");
            });

            modelBuilder.Entity<Supplier>(entity => {
                entity.HasIndex(e => e.CompanyName)
                    .HasDatabaseName("CompanyName");

                entity.HasIndex(e => e.PostalCode)
                    .HasDatabaseName("PostalCode");
            });
        }
    }
}
