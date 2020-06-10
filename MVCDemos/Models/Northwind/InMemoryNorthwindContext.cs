using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace DevExtreme.MVC.Demos.Models.Northwind {
    public class InMemoryNorthwindContext : InMemoryDataContext<Order> {
        readonly NorthwindContext _nwind = new NorthwindContext();

        public DbSet<Customer> Customers => _nwind.Customers;
        public DbSet<Order_Detail> Order_Details => _nwind.Order_Details;
        public ICollection<Order> Orders => ItemsInternal;
        public DbSet<Shipper> Shippers => _nwind.Shippers;

        protected override IEnumerable<Order> Source => _nwind.Orders;
        protected override int GetKey(Order item) => item.OrderID;
        protected override void SetKey(Order item, int key) => item.OrderID = key;
    }
}
