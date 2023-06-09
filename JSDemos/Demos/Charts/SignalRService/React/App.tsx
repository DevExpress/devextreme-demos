import React from 'react';
import Chart, {
  ArgumentAxis,
  ValueAxis,
  Aggregation,
  Legend,
  Series,
  ScrollBar,
  ZoomAndPan,
  LoadingIndicator,
  Pane,
  Tooltip,
  Crosshair,
  Margin,
  HorizontalLine,
} from 'devextreme-react/chart';
import CustomStore from 'devextreme/data/custom_store';
import { HubConnectionBuilder, HttpTransportType } from '@aspnet/signalr';
import TooltipTemplate from './TooltipTemplate.js';

const minVisualRangeLength = { minutes: 10 };
const defaultVisualRange = { length: 'hour' };

class App extends React.Component {
  chartRef: any;

  setState: any;

  state: any;

  storeChartRef: any;

  constructor(props) {
    super(props);
    this.state = { dataSource: null };

    const hubConnection = new HubConnectionBuilder()
      .withUrl('https://js.devexpress.com/Demos/NetCore/stockTickDataHub', {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets,
      })
      .build();

    const store = new CustomStore({
      load: () => hubConnection.invoke('getAllData'),
      key: 'date',
    });

    hubConnection
      .start()
      .then(() => {
        hubConnection.on('updateStockPrice', (data) => {
          store.push([{ type: 'insert', key: data.date, data }]);
        });
        this.setState({ dataSource: store });
      });

    this.customizePoint = this.customizePoint.bind(this);
    this.storeChartRef = (ref) => { this.chartRef = ref; };
  }

  calculateCandle(e) {
    const prices = e.data.map((d) => d.price);
    if (prices.length) {
      return {
        date: new Date((e.intervalStart.valueOf() + e.intervalEnd.valueOf()) / 2),
        open: prices[0],
        high: Math.max.apply(null, prices),
        low: Math.min.apply(null, prices),
        close: prices[prices.length - 1],
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          ref={this.storeChartRef}
          dataSource={this.state.dataSource}
          title="Stock Price"
          customizePoint={this.customizePoint}>
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin right={30} />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; pane: string; argumentF... Remove this comment to see the full error message
            pane="Price"
            argumentField="date"
            type="CandleStick">
            // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
            <Aggregation
              // @ts-expect-error TS(2322): Type '{ enabled: boolean; method: string; calculat... Remove this comment to see the full error message
              enabled={true}
              method="custom"
              calculate={this.calculateCandle} />
          </Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series
            // @ts-expect-error TS(2322): Type '{ children: Element; pane: string; name: str... Remove this comment to see the full error message
            pane="Volume"
            name="Volume"
            argumentField="date"
            valueField="volume"
            color="red"
            type="bar">
            // @ts-expect-error TS(2786): 'Aggregation' cannot be used as a JSX component.
            <Aggregation
              // @ts-expect-error TS(2322): Type '{ enabled: boolean; method: string; }' is no... Remove this comment to see the full error message
              enabled={true}
              method="sum" />
          </Series>
          // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
          <Pane name="Price"></Pane>
          // @ts-expect-error TS(2786): 'Pane' cannot be used as a JSX component.
          <Pane name="Volume" height={80}></Pane>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ argumentType: string; minVisualRangeLength... Remove this comment to see the full error message
            argumentType="datetime"
            minVisualRangeLength={minVisualRangeLength}
            defaultVisualRange={defaultVisualRange} />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis placeholderSize={50} />
          // @ts-expect-error TS(2786): 'ZoomAndPan' cannot be used as a JSX component.
          <ZoomAndPan argumentAxis="both" />
          // @ts-expect-error TS(2786): 'ScrollBar' cannot be used as a JSX component.
          <ScrollBar visible={true} />
          // @ts-expect-error TS(2786): 'LoadingIndicator' cannot be used as a JSX compone... Remove this comment to see the full error message
          <LoadingIndicator enabled={true} />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; shared: boolean; argumen... Remove this comment to see the full error message
            enabled={true}
            shared={true}
            argumentFormat="shortDateShortTime"
            contentRender={TooltipTemplate}
          />
          // @ts-expect-error TS(2786): 'Crosshair' cannot be used as a JSX component.
          <Crosshair
            // @ts-expect-error TS(2322): Type '{ children: Element; enabled: boolean; }' is... Remove this comment to see the full error message
            enabled={true}>
            // @ts-expect-error TS(2786): 'HorizontalLine' cannot be used as a JSX component... Remove this comment to see the full error message
            <HorizontalLine visible={false} />
          </Crosshair>
        </Chart>
      </div>
    );
  }

  customizePoint(arg) {
    if (arg.seriesName === 'Volume') {
      const point = this.chartRef.instance.getAllSeries()[0].getPointsByArg(arg.argument)[0].data;
      if (point && point.close >= point.open) {
        return { color: '#1db2f5' };
      }
    }
    return null;
  }
}

export default App;
