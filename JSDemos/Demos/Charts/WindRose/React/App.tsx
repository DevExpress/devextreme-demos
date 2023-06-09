import React from 'react';
import SelectBox from 'devextreme-react/select-box';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  ArgumentAxis,
  ValueAxis,
  Margin,
  Export,
} from 'devextreme-react/polar-chart';
import { windSources, windRoseData, periodLabel } from './data.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      periodValues: windRoseData[0].values,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div id="chart-demo">
        // @ts-expect-error TS(2786): 'PolarChart' cannot be used as a JSX component.
        <PolarChart
          id="radarChart"
          palette="Soft"
          dataSource={this.state.periodValues}
          onLegendClick={this.onLegendClick}
          title="Wind Rose, Philadelphia PA"
        >
          // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
          <CommonSeriesSettings type="stackedbar" />
          {
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            windSources.map((item) => <Series
              key={item.value}
              // @ts-expect-error TS(2322): Type '{ key: string; valueField: string; name: str... Remove this comment to see the full error message
              valueField={item.value}
              name={item.name} />)
          }
          // @ts-expect-error TS(2786): 'Margin' cannot be used as a JSX component.
          <Margin
            // @ts-expect-error TS(2322): Type '{ bottom: number; left: number; }' is not as... Remove this comment to see the full error message
            bottom={50}
            left={100}
          />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis
            // @ts-expect-error TS(2322): Type '{ discreteAxisDivisionMode: string; firstPoi... Remove this comment to see the full error message
            discreteAxisDivisionMode="crossLabels"
            firstPointOnStartAngle={true}
          />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis valueMarginsEnabled={false} />
          // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
          <Export enabled={true} />
        </PolarChart>
        <div className="center">
          // @ts-expect-error TS(2786): 'SelectBox' cannot be used as a JSX component.
          <SelectBox
            width="300"
            dataSource={windRoseData}
            inputAttr={periodLabel}
            displayExpr="period"
            valueExpr="values"
            value={this.state.periodValues}
            // @ts-expect-error TS(2322): Type '({ value }: { value: any; }) => void' is not... Remove this comment to see the full error message
            onValueChanged={this.handleChange}
          />
        </div>
      </div>
    );
  }

  onLegendClick({ target: series }) {
    if (series.isVisible()) {
      series.hide();
    } else {
      series.show();
    }
  }

  handleChange({ value }) {
    this.setState({ periodValues: value });
  }
}

export default App;
