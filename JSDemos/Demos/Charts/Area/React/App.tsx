import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  Chart,
  Series,
  ArgumentAxis,
  CommonSeriesSettings,
  Export,
  Legend,
  Margin,
} from 'devextreme-react/chart';

import { dataSource, seriesTypeLabel } from './data.js';

const types = ['area', 'stackedarea', 'fullstackedarea'];

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      type: types[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      type: e.value,
    });
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          palette="Harmony Light"
          title="Population: Age Structure (2018)"
          dataSource={dataSource}
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings
            // @ts-expect-error TS(2322): Type '{ argumentField: string; type: any; }' is no... Remove this comment to see the full error message
            argumentField="country"
            type={this.state.type}
          />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series valueField="y1564" name="15-64 years"></Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series valueField="y014" name="0-14 years"></Series>
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series valueField="y65" name="65 years and older"></Series>
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin bottom={20} />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis valueMarginsEnabled={false} />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend
            // @ts-expect-error TS(2322): Type '{ verticalAlignment: string; horizontalAlign... Remove this comment to see the full error message
            verticalAlignment="bottom"
            horizontalAlignment="center"
          />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
        </Chart>
        <div className="options">
          <div className="caption">Options</div>
          <div className="option">
            <span>Series Type </span>
            // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
            <SelectBox
              dataSource={types}
              value={this.state.type}
              inputAttr={seriesTypeLabel}
              onValueChanged={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
