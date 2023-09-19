import React from 'react';
import {
  Chart, Series, Legend, ValueAxis,
} from 'devextreme-react/chart';
import { Button } from 'devextreme-react/button';
import service from './data.js';

const colors = ['#6babac', '#e55253'];

function App() {
  const [isFirstLevel, setIsFirstLevel] = React.useState(true);
  const [data, setData] = React.useState(service.filterData(''));

  const customizePoint = React.useCallback(() => ({
    color: colors[Number(isFirstLevel)],
    hoverStyle: !isFirstLevel ? {
      hatching: 'none',
    } : {},
  }), [isFirstLevel]);

  const onPointClick = React.useCallback((e: { target: { originalArgument: any; }; }) => {
    if (isFirstLevel) {
      setIsFirstLevel(false);
      setData(service.filterData(e.target.originalArgument));
    }
  }, [isFirstLevel, setData, setIsFirstLevel]);

  const onButtonClick = React.useCallback(() => {
    if (!isFirstLevel) {
      setIsFirstLevel(true);
      setData(service.filterData(''));
    }
  }, [isFirstLevel, setData, setIsFirstLevel]);

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
}

export default App;
