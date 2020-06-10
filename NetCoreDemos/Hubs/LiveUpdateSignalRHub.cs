using System;
using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.SignalR;
using Microsoft.AspNetCore.SignalR;

namespace DevExtreme.NETCore.Demos.Hubs {
    public class LiveUpdateSignalRHub : Hub {
        private readonly StockTicker _stockTicker;

        public LiveUpdateSignalRHub(StockTicker stockTicker) {
            _stockTicker = stockTicker;
        }

        public IEnumerable<Stock> GetAllStocks() {
            return _stockTicker.GetAllStocks();
        }
    }
}
