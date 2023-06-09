import React from 'react';

import {
  Chart, Series, CommonSeriesSettings, Legend, ValueAxis, Title, Export, Tooltip, Border,
} from 'devextreme-react/chart';
import service from './data.js';

const dataSource = service.getMaleAgeData();

class App extends React.Component {
  render() {
    return (
      // @ts-expect-error TS(2786): 'Chart' cannot be used as a JSX component.
      <Chart
        id="chart"
        title="Population: Age Structure"
        dataSource={dataSource}
      >
        // @ts-expect-error TS(2786): 'CommonSeriesSettings' cannot be used as a JSX com... Remove this comment to see the full error message
        <CommonSeriesSettings argumentField="state" type="stackedBar" />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="maleyoung"
          name="Male: 0-14"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="malemiddle"
          name="Male: 15-64"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="maleolder"
          name="Male: 65 and older"
          stack="male"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femaleyoung"
          name="Female: 0-14"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femalemiddle"
          name="Female: 15-64"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
        <Series
          // @ts-expect-error TS(2322): Type '{ valueField: string; name: string; stack: s... Remove this comment to see the full error message
          valueField="femaleolder"
          name="Female: 65 and older"
          stack="female"
        />
        // @ts-expect-error TS(2786): 'ValueAxis' cannot be used as a JSX component.
        <ValueAxis>
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title text="Populations, millions" />
        </ValueAxis>
        // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
        <Legend position="inside"
          columnCount={2}
          customizeItems={customizeItems}
          horizontalAlignment="right">
          // @ts-expect-error TS(2786): 'Border' cannot be used as a JSX component.
          <Border visible={true} />
        </Legend>
        // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
        <Export enabled={true} />
        // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
        <Tooltip enabled={true} />
      </Chart>
    );
  }
}

function customizeItems(items) {
  const sortedItems = [];

  items.forEach((item) => {
    const startIndex = item.series.stack === 'male' ? 0 : 3;
    sortedItems.splice(startIndex, 0, item);
  });
  return sortedItems;
}

export default App;
