import React from 'react';
import {
  Chart, CommonSeriesSettings, Series, Legend, Title, Subtitle,
} from 'devextreme-react/chart';
import { Button } from 'devextreme-react/button';
import { exportFromMarkup } from 'devextreme/viz/export';
import toCanvas from 'canvg';
import { dataSource } from './data.js';
import Form from './Form.js';

const barPadding = 0.3;

function prepareMarkup(chartSvg, markup) {
  return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="820px" height="420px">'
    + `${markup}<g transform="translate(305,12)">${chartSvg}</g></svg>`;
}

class App extends React.Component {
  chartRef: any;

  child: any;

  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
    this.onClick = this.onClick.bind(this);
    this.onRef = this.onRef.bind(this);
  }

  render() {
    return (
      <div id="chart-demo">
        <div className="chart_environment">
          // @ts-expect-error TS(2786): 'Form' cannot be used as a JSX component.
          <Form onRef={this.onRef} />
          // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
          <Chart
            ref={this.chartRef}
            id="chart"
            dataSource={dataSource}
            palette="Violet"
          >
            // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
            <CommonSeriesSettings barPadding={barPadding} argumentField="state" type="bar" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series valueField="year1990" name="1990" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series valueField="year2000" name="2000" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series valueField="year2010" name="2010" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series valueField="year2016" name="2016" />
            // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
            <Series valueField="year2017" name="2017" />
            // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
            <Legend verticalAlignment="bottom" horizontalAlignment="center" />
            // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
            <Title text="Oil Production">
              // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
              <Subtitle text="(in millions tonnes)" />
            </Title>
          </Chart>
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

  onClick() {
    exportFromMarkup(prepareMarkup(this.chart.svg(), this.child.getElement().innerHTML), {
      width: 820,
      height: 420,
      margin: 0,
      format: 'png',
      svgToCanvas(svg, canvas) {
        return new Promise((resolve) => {
          toCanvas(canvas, new XMLSerializer().serializeToString(svg), {
            ignoreDimensions: true,
            ignoreClear: true,
            renderCallback: resolve,
          });
        });
      },
    });
  }

  onRef(arg) {
    this.child = arg;
  }
}

export default App;
