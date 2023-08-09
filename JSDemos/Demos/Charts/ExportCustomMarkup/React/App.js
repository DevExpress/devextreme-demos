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

function App() {
  const [childRef, setChildRef] = React.useState(null);
  const chartRef = React.useRef();

  const onClick = React.useCallback(() => {
    exportFromMarkup(
      prepareMarkup(chartRef.current.instance.svg(),
        childRef.current.getElement().innerHTML), {
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
      },
    );
  }, [childRef]);

  const onRef = React.useCallback((ref) => {
    setChildRef(ref);
  }, []);

  return (
    <div id="chart-demo">
      <div className="chart_environment">
        <Form onRef={onRef} />
        <Chart
          ref={chartRef}
          id="chart"
          dataSource={dataSource}
          palette="Violet"
        >
          <CommonSeriesSettings barPadding={barPadding} argumentField="state" type="bar" />
          <Series valueField="year1990" name="1990" />
          <Series valueField="year2000" name="2000" />
          <Series valueField="year2010" name="2010" />
          <Series valueField="year2016" name="2016" />
          <Series valueField="year2017" name="2017" />
          <Legend verticalAlignment="bottom" horizontalAlignment="center" />
          <Title text="Oil Production">
            <Subtitle text="(in millions tonnes)" />
          </Title>
        </Chart>
      </div>
      <div className="controls-pane">
        <Button
          id="export"
          width={145}
          icon="export"
          text="Export"
          type="default"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default App;
