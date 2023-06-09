import React, { useState, useRef } from 'react';
import PieChart, {
  Series, Tooltip, Size, Legend,
} from 'devextreme-react/pie-chart';
import { SelectBox } from 'devextreme-react/select-box';
import { populationData, regionLabel } from './data.js';

function App() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const pieChartRef = useRef(null);

  const pieChart = pieChartRef.current?.instance;

  const onPointClick = ({ target: point }) => {
    showTooltip(point);
  };

  const onRegionChanged = ({ value }) => {
    const point = pieChart?.getAllSeries()[0].getPointsByArg(value)[0];
    showTooltip(point);
  };

  const showTooltip = (point) => {
    point?.showTooltip();
    setSelectedRegion(point?.argument);
  };

  const customizeTooltip = (pointInfo) => {
    return {
      text: `${pointInfo.argumentText}<br/>${pointInfo.valueText}`,
    };
  };

  return (
    <React.Fragment>
      <PieChart
        ref={pieChartRef}
        dataSource={populationData}
        onPointClick={onPointClick}
        type="doughnut"
        palette="Soft Pastel"
        title="The Population of Continents and Regions"
      >
        <Series argumentField="region" />
        <Size height={350} />
        <Tooltip
          enabled={false}
          format="millions"
          customizeTooltip={customizeTooltip}
        />
        <Legend visible={false} />
      </PieChart>
      <div className="controls-pane">
        <SelectBox
          width={250}
          dataSource={populationData}
          inputAttr={regionLabel}
          displayExpr="region"
          valueExpr="region"
          placeholder="Choose region"
          value={selectedRegion}
          onValueChanged={onRegionChanged}
        />
      </div>
    </React.Fragment>
  );
}

export default App;