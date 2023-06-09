import React from 'react';
import DataSource from 'devextreme/data/data_source';

import {
  Chart,
  ZoomAndPan,
  ScrollBar,
  ArgumentAxis,
  ValueAxis,
  Title,
  Label,
  Font,
  Legend,
  Series,
  Animation,
  LoadingIndicator,
} from 'devextreme-react/chart';

const wholeRange = {
  startValue: new Date(2017, 0, 1),
  endValue: new Date(2017, 11, 31),
};

class App extends React.Component {
  HALFDAY: any;

  chartDataSource: any;

  packetsLock: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.packetsLock = 0;
    this.HALFDAY = 43200000;
    this.chartDataSource = new DataSource({
      store: [],
      sort: 'date',
      paginate: false,
    });
    this.state = {
      visualRange: {
        startValue: new Date(2017, 3, 1),
        endValue: new Date(2017, 3, 15),
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Temperature in Toronto (2017)"
        dataSource={this.chartDataSource}
        onOptionChanged={this.handleChange}
      >
        // @ts-expect-error TS(2786): 'ZoomAndPan' cannot be used as a JSX component.
        <ZoomAndPan argumentAxis="pan" />
        // @ts-expect-error TS(2786): 'ScrollBar' cannot be used as a JSX component.
        <ScrollBar visible={true} />
        // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
        <ArgumentAxis
          // @ts-expect-error TS(2322): Type '{ argumentType: string; visualRangeUpdateMod... Remove this comment to see the full error message
          argumentType="datetime"
          visualRangeUpdateMode="keep"
          visualRange={this.state.visualRange}
          wholeRange={wholeRange} />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis
          // @ts-expect-error TS(2322): Type '{ children: Element[]; name: string; allowDe... Remove this comment to see the full error message
          name="temperature"
          allowDecimals={false}
        >
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text={'Temperature, &deg;C'}>
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font color="#ff950c" />
          </Title>
          // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
          <Label>
            // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
            <Font color="#ff950c" />
          </Label>
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ color: string; type: string; argumentField... Remove this comment to see the full error message
          color="#ff950c"
          type="rangeArea"
          argumentField="date"
          rangeValue1Field="minTemp"
          rangeValue2Field="maxTemp"
          name="Temperature range" />
        // @ts-expect-error TS(2786): 'Animation' cannot be used as a JSX component.
        <Animation enabled={false} />
        // @ts-expect-error TS(2786): 'LoadingIndicator' cannot be used as a JSX compone... Remove this comment to see the full error message
        <LoadingIndicator backgroundColor="none">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={14} />
        </LoadingIndicator>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend visible={false} />
      </Chart>
    );
  }

  handleChange(e) {
    if (e.fullName === 'argumentAxis.visualRange') {
      const stateStart = this.state.visualRange.startValue;
      const currentStart = e.value.startValue;
      if (stateStart.valueOf() !== currentStart.valueOf()) {
        this.setState({ visualRange: e.value });
      }
      this.onVisualRangeChanged(e.component);
    }
  }

  onVisualRangeChanged(component) {
    const items = component.getDataSource().items();
    const { visualRange } = this.state;
    if (!items.length
      || items[0].date - visualRange.startValue >= this.HALFDAY
      || visualRange.endValue - items[items.length - 1].date >= this.HALFDAY) {
      this.uploadDataByVisualRange(visualRange, component);
    }
  }

  uploadDataByVisualRange(visualRange, component) {
    const dataSource = component.getDataSource();
    const storage = dataSource.items();
    const ajaxArgs = {
      startVisible: getDateString(visualRange.startValue),
      endVisible: getDateString(visualRange.endValue),
      startBound: getDateString(storage.length ? storage[0].date : null),
      endBound: getDateString(storage.length
        ? storage[storage.length - 1].date : null),
    };

    if (ajaxArgs.startVisible !== ajaxArgs.startBound
      && ajaxArgs.endVisible !== ajaxArgs.endBound && !this.packetsLock) {
      this.packetsLock += 1;
      component.showLoadingIndicator();

      getDataFrame(ajaxArgs)
        .then((dataFrame) => {
          this.packetsLock -= 1;

          const componentStorage = dataSource.store();

          dataFrame
            .map((i) => ({
              date: new Date(i.Date),
              minTemp: i.MinTemp,
              maxTemp: i.MaxTemp,
            }))
            .forEach((item) => componentStorage.insert(item));

          dataSource.reload();

          this.onVisualRangeChanged(component);
        })
        .catch(() => {
          this.packetsLock -= 1;
          dataSource.reload();
        });
    }
  }
}

function getDataFrame(args) {
  let params = '?';

  params += `startVisible=${args.startVisible}
    &endVisible=${args.endVisible}
    &startBound=${args.startBound}
    &endBound=${args.endBound}`;

  return fetch(`https://js.devexpress.com/Demos/WidgetsGallery/data/temperatureData${params}`)
    .then((response) => response.json());
}

function getDateString(dateTime) {
  return dateTime ? dateTime.toLocaleDateString('en-US') : '';
}

export default App;
