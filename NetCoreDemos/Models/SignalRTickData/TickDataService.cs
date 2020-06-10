using DevExtreme.NETCore.Demos.Hubs;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Threading;

namespace DevExtreme.NETCore.Demos.Models.SignalRTickData {
    public class TickDataService {
        private IHubContext<StockTickDataHub> hubContext { get; set; }

        private readonly object updateStockPricesLock = new object();

        private TickItem[] tickData;
        private int lastTickIndex;
        private Timer timer;

        public TickDataService(IHubContext<StockTickDataHub> hubCtx) {
            hubContext = hubCtx;
            tickData = GenerateTestData();
            lastTickIndex = tickData.Length - 1;
            timer = new Timer(Update, null, 1000, 1000);
        }

        public IEnumerable<TickItem> GetAllData() {
            var data = new List<TickItem>();
            lock(updateStockPricesLock) {
                for(var i = lastTickIndex; data.Count < 10000; i--) {
                    data.Add(tickData[i]);
                    if(i == 0) {
                        i = tickData.Length - 1;
                    }
                }
            }

            return data;
        }

        private void Update(object state) {
            lock(updateStockPricesLock) {
                lastTickIndex = (lastTickIndex + 1) % tickData.Length;
                var tick = tickData[lastTickIndex];
                tick.Date = DateTime.Now;

                BroadcastStockPrice(tick);
            }
        }

        private void BroadcastStockPrice(TickItem item) {
            hubContext.Clients.All.SendAsync("updateStockPrice", item);
        }

        private TickItem[] GenerateTestData() {
            var lastPrice = 140m;
            var random = new Random();
            var slowRandomValue = random.NextDouble();
            var data = new TickItem[60 * 60 * 20];
            var curTime = DateTime.Now;

            for(var i = 0; i < data.Length / 2; i++) {
                lastPrice = Math.Round(lastPrice * (decimal)(1 + 0.002 * (-1 + 2 * random.NextDouble())), 2);

                if(i % 50 == 0) {
                    slowRandomValue = random.NextDouble();
                    if(slowRandomValue > 0.3 && slowRandomValue <= 0.5) slowRandomValue -= 0.2;
                    if(slowRandomValue > 0.5 && slowRandomValue <= 0.7) slowRandomValue += 0.2;
                }
                var volume = (int)(100 + 1900 * random.NextDouble() * slowRandomValue);

                data[data.Length - 1 - i] = new TickItem(lastPrice, volume, curTime.AddSeconds(-1 * i));
                data[i] = new TickItem(lastPrice, volume, curTime.AddSeconds(-1 * (data.Length - 1 - i)));
            }

            return data;
        }
    }
}
