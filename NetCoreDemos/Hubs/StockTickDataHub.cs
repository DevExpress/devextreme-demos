using System.Collections.Generic;
using DevExtreme.NETCore.Demos.Models.SignalRTickData;
using Microsoft.AspNetCore.SignalR;

namespace DevExtreme.NETCore.Demos.Hubs {
    public class StockTickDataHub : Hub {

        private readonly TickDataService _service;

        public StockTickDataHub(TickDataService service) {
            _service = service;
        }

        public IEnumerable<TickItem> GetAllData() {
            return _service.GetAllData();
        }
    }
}
