using System.Collections.Generic;
using DevExtreme.MVC.Demos.Models.SignalR;
using Microsoft.AspNet.SignalR;

namespace DevExtreme.MVC.Demos.Hubs {

    public class LiveUpdateSignalRHub : Hub {
        private readonly StockTicker _stockTicker;

        public LiveUpdateSignalRHub() {
            _stockTicker = StockTicker.Instance;
        }

        public IEnumerable<Stock> GetAllStocks() {
            return _stockTicker.GetAllStocks();
        }
    }
}
