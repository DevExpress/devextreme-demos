using System;
using System.Collections.Generic;
using System.Threading;
using DevExtreme.MVC.Demos.Hubs;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace DevExtreme.MVC.Demos.Models.SignalR {
    public class StockTicker {
        public readonly static StockTicker Instance = new StockTicker(GlobalHost.ConnectionManager.GetHubContext<LiveUpdateSignalRHub>().Clients);

        private readonly IEnumerable<Stock> _stocks;
        private IHubConnectionContext<dynamic> Clients { get; set; }

        private readonly TimeSpan _updateInterval = TimeSpan.FromMilliseconds(500);
        private readonly Random _updateOrNotRandom = new Random();

        private readonly Timer _timer;

        private readonly object _updateStockPricesLock = new object();

        static readonly Random random = new Random();

        private StockTicker(IHubConnectionContext<dynamic> clients) {
            Clients = clients;

            _stocks = GenerateStocks();

            _timer = new Timer(UpdateStockPrices, null, _updateInterval, _updateInterval);

        }

        public IEnumerable<Stock> GetAllStocks() {
            return _stocks;
        }

        static IEnumerable<Stock> GenerateStocks() {
            return new[] {
                new Stock(37.95M) { Symbol = "MSFT", DayOpen=36.5M, LastUpdate = DateTime.Now },
                new Stock(24.85M) { Symbol = "INTC", DayOpen=24.9M, LastUpdate = DateTime.Now },
                new Stock(22.99M){ Symbol = "CSCO", DayOpen=22.7M, LastUpdate = DateTime.Now },
                new Stock(30.71M){ Symbol = "SIRI", DayOpen=30.7M, LastUpdate = DateTime.Now },
                new Stock(58.73M){ Symbol = "AAPL", DayOpen=54.9M, LastUpdate = DateTime.Now },
                new Stock(110M){ Symbol = "HOKU", DayOpen=121.2M, LastUpdate = DateTime.Now },
                new Stock(38.11M){ Symbol = "ORCL", DayOpen=37.9M, LastUpdate = DateTime.Now },
                new Stock(17.61M) { Symbol = "AMAT", DayOpen=17.5M, LastUpdate = DateTime.Now },
                new Stock(40.80M){ Symbol = "YHOO", DayOpen=39.9M, LastUpdate = DateTime.Now },
                new Stock(31.85M){ Symbol = "LVLT", DayOpen=32.9M, LastUpdate = DateTime.Now },
                new Stock(20.63M){ Symbol = "DELL", DayOpen=17.9M, LastUpdate = DateTime.Now },
                new Stock(63.70M) { Symbol = "GOOG", DayOpen=55.9M, LastUpdate = DateTime.Now }
            };
        }
        private void UpdateStockPrices(object state) {
            lock(_updateStockPricesLock) {
                foreach(var stock in _stocks) {
                    if(TryUpdateStockPrice(stock)) {
                        BroadcastStockPrice(stock);
                    }
                }
            }
        }

        private bool TryUpdateStockPrice(Stock stock) {
            var r = _updateOrNotRandom.NextDouble();
            if(r > .1) {
                return false;
            }

            stock.Update();
            return true;
        }

        private void BroadcastStockPrice(Stock stock) {
            Clients.All.updateStockPrice(stock);
        }
    }
}
