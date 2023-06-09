import React from 'react';
import RangeSelector, {
  Chart as RsChart, Series as RsSeries, Scale, Label as RsLabel, SliderMarker, Behavior,
} from 'devextreme-react/range-selector';
import Chart, {
  ArgumentAxis, Legend, Series, Label, Grid, MinorGrid,
} from 'devextreme-react/chart';
import { dataSource } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      range: [],
    };
    this.updateRange = this.updateRange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="zoomed-chart"
          dataSource={dataSource}
          resizePanesOnZoom={true}
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ children: Element[]; visualRange: any; val... Remove this comment to see the full error message
            visualRange={this.state.range}
            valueMarginsEnabled={false}
            minorTickCount={10}
            type="logarithmic"
          >
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label format="exponential" />
            // @ts-expect-error TS(2786): 'Grid' cannot be used as a JSX component.
            <Grid visible={true} />
            // @ts-expect-error TS(2786): 'MinorGrid' cannot be used as a JSX component.
            <MinorGrid visible={true} />
          </ArgumentAxis>
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
        </Chart>
        // @ts-expect-error TS(2786): 'RangeSelector' cannot be used as a JSX component.
        <RangeSelector
          id="range-selector"
          dataSource={dataSource}
          onValueChanged={this.updateRange}
        >
          // @ts-expect-error TS(2786): 'RsChart' cannot be used as a JSX component.
          <RsChart>
            // @ts-expect-error TS(2786): 'RsSeries' cannot be used as a JSX component.
            <RsSeries />
          </RsChart>
          // @ts-expect-error TS(2786): 'Scale' cannot be used as a JSX component.
          <Scale minRange={1} minorTickCount={10} type="logarithmic">
            // @ts-expect-error TS(2786): 'RsLabel' cannot be used as a JSX component.
            <RsLabel format="exponential" />
          </Scale>
          // @ts-expect-error TS(2786): 'SliderMarker' cannot be used as a JSX component.
          <SliderMarker format="exponential" />
          // @ts-expect-error TS(2786): 'Behavior' cannot be used as a JSX component.
          <Behavior snapToTicks={false} valueChangeMode="onHandleMove" />
        </RangeSelector>
      </React.Fragment>
    );
  }

  updateRange(data) {
    this.setState({
      range: data.value,
    });
  }
}

export default App;
