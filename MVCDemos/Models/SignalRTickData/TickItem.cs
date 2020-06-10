using System;

namespace DevExtreme.MVC.Demos.Models.SignalRTickData {
    public class TickItem {
        public DateTime Date { get; set; }
        public decimal Price { get; set; }
        public int Volume { get; set; }

        public TickItem(decimal price, int volume, DateTime date) {
            Date = date;
            Price = price;
            Volume = volume;
        }
    }
}
