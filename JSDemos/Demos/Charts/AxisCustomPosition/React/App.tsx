import React from 'react';
import NumberBox from 'devextreme-react/number-box';
import {
  Chart,
  CommonSeriesSettings,
  Series,
  Point,
  ArgumentAxis,
  ValueAxis,
  Legend,
} from 'devextreme-react/chart';
import { generateDataSource, customPositionLabel, offsetLabel } from './data.js';

const dataSource = generateDataSource();
const defaultVisualRange = [-20, 20];

class App extends React.Component {
  changeArgumentOffset: any;

  changeArgumentPosition: any;

  changeValueOffset: any;

  changeValuePosition: any;

  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      argumentCustomPosition: 0,
      argumentOffset: 0,
      valueCustomPosition: 0,
      valueOffset: 0,
    };
    this.changeArgumentPosition = (e) => {
      this.setState({ argumentCustomPosition: e.value });
    };
    this.changeArgumentOffset = (e) => {
      this.setState({ argumentOffset: e.value });
    };
    this.changeValuePosition = (e) => {
      this.setState({ valueCustomPosition: e.value });
    };
    this.changeValueOffset = (e) => {
      this.setState({ valueOffset: e.value });
    };
  }

  render() {
    const {
      argumentCustomPosition,
      argumentOffset,
      valueCustomPosition,
      valueOffset,
    } = this.state;
    return (
      <div>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          dataSource={dataSource}
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings type='scatter' />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField='x1' valueField='y1' />
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField='x2' valueField='y2'>
            // @ts-expect-error TS(2786): 'Point' cannot be used as a JSX component.
            <Point symbol='triangleDown' />
          </Series>
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ defaultVisualRange: number[]; customPositi... Remove this comment to see the full error message
            defaultVisualRange={defaultVisualRange}
            customPosition={argumentCustomPosition}
            offset={argumentOffset}
          />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis
            // @ts-expect-error TS(2322): Type '{ defaultVisualRange: number[]; customPositi... Remove this comment to see the full error message
            defaultVisualRange={defaultVisualRange}
            customPosition={valueCustomPosition}
            offset={valueOffset}
            endOnTick={false}
          />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
        </Chart>
        <div className='options'>
          <div className='caption'>Options</div>
          <div className="common">
            <div className='block left'>
              <span>Argument Axis</span>
              <div className='option'>
                <span>Custom position:</span>
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={argumentCustomPosition}
                  showSpinButtons={true}
                  inputAttr={customPositionLabel}
                  onValueChanged={this.changeArgumentPosition} />
              </div>
              <div className='option'>
                <span>Offset:</span>
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={argumentOffset}
                  showSpinButtons={true}
                  inputAttr={offsetLabel}
                  onValueChanged={this.changeArgumentOffset} />
              </div>
            </div>
            <div className='block right'>
              <span>Value Axis</span>
              <div className='option'>
                <span>Custom position:</span>
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={valueCustomPosition}
                  showSpinButtons={true}
                  inputAttr={customPositionLabel}
                  onValueChanged={this.changeValuePosition} />
              </div>
              <div className='option'>
                <span>Offset:</span>
                // @ts-expect-error TS(2786): 'NumberBox' cannot be used as a JSX component.
                <NumberBox
                  value={valueOffset}
                  showSpinButtons={true}
                  inputAttr={offsetLabel}
                  onValueChanged={this.changeValueOffset} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
