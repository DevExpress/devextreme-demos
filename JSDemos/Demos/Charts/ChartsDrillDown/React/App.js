import React, { useState } from 'react';
import {
  Chart, Series, Legend, ValueAxis,
} from 'devextreme-react/chart';
import { Button } from 'devextreme-react/button';
import service from './data.js';

const colors = ['#6babac', '#e55253'];

const App = () => {
  const [isFirstLevel, setIsFirstLevel] = useState(true);
  const [data, setData] = useState(service.filterData(''));

  const customizePoint = () => ({
    color: colors[Number(isFirstLevel)],
    hoverStyle: !isFirstLevel ? {
      hatching: 'none',
    } : {},
  });

  const onPointClick = (e) => {
    if (isFirstLevel) {
      setIsFirstLevel(false);
      setData(service.filterData(e.target.originalArgument));
    }
  };

  const onButtonClick = () => {
    if (!isFirstLevel) {
      setIsFirstLevel(true);
      setData(service.filterData(''));
    }
  };

  return (
    <div>
      <Chart
        id="chart"
        title="The Most Populated Countries by Continents"
        customizePoint={customizePoint}
        onPointClick={onPointClick}
        className={isFirstLevel ? 'pointer-on-bars' : ''}
        dataSource={data}
      >
        <Series type="bar" />
        <ValueAxis showZero={false} />
        <Legend visible={false} />
      </Chart>
      <Button className="button-container"
        text="Back"
        icon="chevronleft"
        visible={!isFirstLevel}
        onClick={onButtonClick}
      />
    </div>
  );
};

export default App;
