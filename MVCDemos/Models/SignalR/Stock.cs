using System;

namespace DevExtreme.MVC.Demos.Models.SignalR {
    public class Stock {
        readonly decimal _initPrice;

        public Stock(decimal price) {
            Price = price;
            DayMax = price;
            DayMin = price;
            _initPrice = Price;
        }
        public string Symbol { get; set; }
        public decimal Price { get; set; }
        public decimal DayMax { get; set; }
        public decimal DayMin { get; set; }
        public decimal DayOpen { get; set; }
        public DateTime LastUpdate { get; set; }
        public decimal Change {
            get {
                return Price - DayOpen;
            }
        }
        public double PercentChange {
            get {
                return (double)Math.Round(Change * 100 / DayOpen, 2);
            }
        }

        public void Update() {
            var isNewDay = LastUpdate.Day != DateTime.Now.Day;
            var change = GenerateChange();
            var newPrice = _initPrice + _initPrice * change;

            Price = newPrice;
            LastUpdate = DateTime.Now;
            if(Price > DayMax || isNewDay)
                DayMax = Price;
            if(Price < DayMin || isNewDay)
                DayMin = Price;
        }

        static Random random = new Random();

        decimal GenerateChange() {
            return (decimal)random.Next(-200, 200) / 10000;
        }
    }
}
