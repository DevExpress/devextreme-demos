import React, { useState } from 'react';
import PieChart, {
  Series,
  Label,
  Connector,
  Size,
  Export,
} from 'devextreme-react/pie-chart';
import { areas } from './data.js';

const App = () => {
  const [chartData, setChartData] = useState(areas);

  const pointClickHandler = (e) => {
    toggleVisibility(e.target);
  };

  const legendClickHandler = (e) => {
    const arg = e.target;
    const item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    toggleVisibility(item);
  };

  const toggleVisibility = (item) => {
    item.isVisible() ? item.hide() : item.show();
  };

  return (
    <PieChart
      id="pie"
      dataSource={chartData}
      palette="Bright"
      title="Area of Countries"
      onPointClick={pointClickHandler}
      onLegendClick={legendClickHandler}
    >
      <Series argumentField="country" valueField="area">
        <Label visible={true}>
          <Connector visible={true} width={1} />
        </Label>
      </Series>
      <Size width={500} />
      <Export enabled={true} />
    </PieChart>
  );
};

export default App;