import React from 'react';
import Chart, { Series, Label, Legend } from 'devextreme-react/chart';
import PieChart, { Series as PieSeries, Label as PieLabel, Connector } from 'devextreme-react/pie-chart';
import { Button } from 'devextreme-react/button';
import { exportWidgets } from 'devextreme/viz/export';
import { allMedals, goldMedals } from './data.js';

class App extends React.Component {
  chartRef: any;

  pieChartRef: any;

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.pieChartRef = React.createRef();
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div id="chart-demo">
        <div className="charts">
          // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
          <Chart
            id="chart"
            ref={this.chartRef}
            dataSource={goldMedals}
            rotated={true}
            title="Olympic Gold Medals in 2008"
          >
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series
              // @ts-expect-error TS(2322): Type '{ children: Element; type: string; argumentF... Remove this comment to see the full error message
              type="bar"
              argumentField="country"
              valueField="medals"
              color="#f3c40b"
            >
              // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
              <Label visible={true} />
            </Series>
            // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
            <Legend visible={false} />
          </Chart>
          // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
          <PieChart
            id="pieChart"
            ref={this.pieChartRef}
            dataSource={allMedals}
            palette="Harmony Light"
            title={'Total Olympic Medals\n in 2008'}
          >
            // @ts-expect-error TS(2786): 'PieSeries' cannot be used as a JSX component.
            <PieSeries
              // @ts-expect-error TS(2322): Type '{ children: Element; argumentField: string; ... Remove this comment to see the full error message
              argumentField="country"
              valueField="medals"
            >
              // @ts-expect-error TS(2786): 'PieLabel' cannot be used as a JSX component.
              <PieLabel visible={true}>
                // @ts-expect-error TS(2786): 'Connector' cannot be used as a JSX component.
                <Connector visible={true} />
              </PieLabel>
            </PieSeries>
          </PieChart>
        </div>
        <div className="controls-pane">
          // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
          <Button
            id="export"
            width={145}
            icon="export"
            text="Export"
            type="default"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }

  get chart() {
    return this.chartRef.current.instance;
  }

  get pieChart() {
    return this.pieChartRef.current.instance;
  }

  onClick() {
    exportWidgets([[this.chart, this.pieChart]], {
      fileName: 'chart',
      format: 'PNG',
    });
  }
}

export default App;
