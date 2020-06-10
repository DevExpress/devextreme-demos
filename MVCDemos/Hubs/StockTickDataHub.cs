using System.Collections.Generic;
using DevExtreme.MVC.Demos.Models.SignalRTickData;
using Microsoft.AspNet.SignalR;

namespace DevExtreme.MVC.Demos.Hubs {
    public class StockTickDataHub : Hub {
        private readonly TickDataService _service;

        public StockTickDataHub() {
            _service = TickDataService.Instance;
        }

        public IEnumerable<TickItem> GetAllData() {
            return _service.GetAllData();
        }
    }
}
