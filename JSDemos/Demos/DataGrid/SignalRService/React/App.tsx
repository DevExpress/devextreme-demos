import React from 'react';
import DataGrid, {
  Column,
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';

import PriceCell from './PriceCell.js';
import ChangeCell from './ChangeCell.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = { connectionStarted: false, dataSource: null };

    const hubConnection = new HubConnectionBuilder()
      .withUrl('https://js.devexpress.com/Demos/NetCore/liveUpdateSignalRHub', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    const store = new CustomStore({
      load: () => hubConnection.invoke('getAllStocks'),
      key: 'symbol',
    });

    hubConnection
      .start()
      .then(() => {
        hubConnection.on('updateStockPrice', (data) => {
          store.push([{ type: 'update', key: data.symbol, data }]);
        });
        this.setState({ connectionStarted: true, dataSource: store });
      });
  }

  render() {
    return (
      <div>
        {this.state.connectionStarted
          // @ts-expect-error TS(2786): 'DataGrid' cannot be used as a JSX component.
          && (<DataGrid
            id="gridContainer"
            dataSource={this.state.dataSource}
            showBorders={true}
            repaintChangesOnly={true}
            highlightChanges={true}
          >
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="lastUpdate" dataType="date" width={115} format="longTime" />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="symbol" />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="price" dataType="number" format="#0.####" cellRender={PriceCell} />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="change" dataType="number" width={140} format="#0.####" cellRender={ChangeCell} />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="dayOpen" dataType="number" format="#0.####" />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="dayMin" dataType="number" format="#0.####" />
            // @ts-expect-error TS(2786): 'Column' cannot be used as a JSX component.
            <Column dataField="dayMax" dataType="number" format="#0.####" />
          </DataGrid>)
        }
      </div>
    );
  }
}

export default App;
