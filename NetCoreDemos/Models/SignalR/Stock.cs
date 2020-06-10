using System;

namespace DevExtreme.NETCore.Demos.Models.SignalR {
    public class Stock {
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

        decimal _initPrice;
        public void Update() {
            bool isNewDay = LastUpdate.Day != DateTime.Now.Day;
            decimal change = GenerateChange();
            decimal newPrice = _initPrice + _initPrice * change;

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
