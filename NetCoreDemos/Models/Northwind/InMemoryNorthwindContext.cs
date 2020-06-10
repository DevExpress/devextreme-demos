using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;

namespace DevExtreme.NETCore.Demos.Models.Northwind {
    public class InMemoryNorthwindContext : InMemoryDataContext<Order> {
        NorthwindContext _nwind;

        public InMemoryNorthwindContext(NorthwindContext nwind, IHttpContextAccessor contextAccessor, IMemoryCache memoryCache)
            : base(contextAccessor, memoryCache) {
            _nwind = nwind;
        }
        public ICollection<Order> Orders => ItemsInternal;

        public DbSet<Customer> Customers => _nwind.Customers;

        public DbSet<Order_Detail> Order_Details => _nwind.Order_Details;

        public DbSet<Shipper> Shippers => _nwind.Shippers;


        protected override IEnumerable<Order> Source => _nwind.Orders;

        protected override int GetKey(Order item) => item.OrderID;

        protected override void SetKey(Order item, int key) => item.OrderID = key;
    }
}
