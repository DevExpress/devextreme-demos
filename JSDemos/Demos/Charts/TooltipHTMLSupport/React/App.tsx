import React from 'react';

import PieChart, {
  Series,
  Tooltip,
  Export,
} from 'devextreme-react/pie-chart';

import { populationData } from './data.js';
import TooltipTemplate from './TooltipTemplate.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'PieChart' cannot be used as a JSX component.
    <PieChart
      id="pie-chart"
      dataSource={populationData}
      title="Top 10 Most Populated States in US"
      palette="Bright"
    >
      // @ts-expect-error TS(2786): 'Series' cannot be used as a JSX component.
      <Series
        // @ts-expect-error TS(2322): Type '{ argumentField: string; valueField: string;... Remove this comment to see the full error message
        argumentField="name"
        valueField="population"
      />
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip
        // @ts-expect-error TS(2322): Type '{ enabled: boolean; contentRender: (info: an... Remove this comment to see the full error message
        enabled={true}
        contentRender={TooltipTemplate}
      />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
    </PieChart>
  );
}

export default App;
