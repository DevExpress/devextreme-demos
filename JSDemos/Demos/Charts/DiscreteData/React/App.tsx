import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Margin,
} from 'devextreme-react/polar-chart';
import { types, dataSource, seriesTypeLabel } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      currentType: types[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <div className="long-title">
          <h3>Average temperature in London</h3>
        </div>
        <div id="chart-demo">
          // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
          <PolarChart
            id="radarChart"
            dataSource={dataSource}
          >
            // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
            <CommonSeriesSettings type={this.state.currentType} />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series
              // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
              valueField="day"
              name="Day"
              color="#ba4d51"
            />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series
              // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; color: s... Remove this comment to see the full error message
              valueField="night"
              name="Night"
              color="#5f8b95"
            />
            // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
            <Margin
              // @ts-expect-error TS(2322): Type '{ top: number; bottom: number; left: number;... Remove this comment to see the full error message
              top={50}
              bottom={50}
              left={100}
            />
          </PolarChart>
          <div className="center">
            <div>Series Type</div>&nbsp;&nbsp;
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              width={200}
              inputAttr={seriesTypeLabel}
              dataSource={types}
              value={this.state.currentType}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  handleChange(e) {
    this.setState({ currentType: e.value });
  }
}

export default App;
