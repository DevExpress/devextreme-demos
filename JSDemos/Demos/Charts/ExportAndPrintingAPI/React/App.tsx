import React from 'react';

import Chart, {
  Series,
  Legend,
  Tooltip,
  ArgumentAxis,
  Label,
  ValueAxis,
  VisualRange,
} from 'devextreme-react/chart';
import Button from 'devextreme-react/button';
import { mountains } from './data.js';

class App extends React.Component {
  chartRef: any;

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.printChart = this.printChart.bind(this);
    this.exportChart = this.exportChart.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
        <Chart
          id="chart"
          ref={this.chartRef}
          dataSource={mountains}
          title="The Highest Mountains"
        >
          // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
          <Series argumentField="name" valueField="height" type="bar" color="#E55253" />
          // @ts-expect-error TS(2786): 'ArgumentAxis' cannot be used as a JSX component.
          <ArgumentAxis visible={true} />
          // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
          <ValueAxis>
            // @ts-expect-error TS(2786): 'VisualRange' cannot be used as a JSX component.
            <VisualRange startValue={8000} />
            // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
            <Label customizeText={customizeLabelText} />
          </ValueAxis>
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip
            // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (point... Remove this comment to see the full error message
            enabled={true}
            customizeTooltip={customizeTooltipText}
          />
          // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
          <Legend visible={false} />
        </Chart>
        <div id="buttonGroup">
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button icon="print"
            text="Print"
            onClick={this.printChart}
          />
          &nbsp;
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button icon="export"
            text="Export"
            onClick={this.exportChart}
          />
        </div>
      </React.Fragment>
    );
  }

  get chart() {
    return this.chartRef.current.instance;
  }

  printChart() {
    this.chart.print();
  }

  exportChart() {
    this.chart.exportTo('Example', 'png');
  }
}

function customizeTooltipText(pointInfo) {
  return {
    text: `<span class='title'>${pointInfo.argumentText
    }</span><br />&nbsp;<br />System: ${pointInfo.point.data.system
    }<br />Height: ${pointInfo.valueText} m`,
  };
}

function customizeLabelText({ value }) {
  return `${value} m`;
}

export default App;
