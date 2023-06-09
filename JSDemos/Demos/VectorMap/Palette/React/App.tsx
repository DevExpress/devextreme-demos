import React from 'react';

import VectorMap, {
  Layer,
  Legend,
  Source,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { populations } from './data.js';

const colorGroups = [0, 0.5, 0.8, 1, 2, 3, 100];

const bounds = [-180, 85, 180, -60];

function App() {
  return (
    <VectorMap
      id="vector-map" bounds={bounds}>
      <Layer
        dataSource={mapsData.world}
        palette="Violet"
        name="areas"
        colorGroupingField="population"
        colorGroups={colorGroups}
        customize={customizeLayer}
      >
      </Layer>

      <Legend
        customizeText={customizeText}>
        <Source layer="areas" grouping="color"></Source>
      </Legend>
    </VectorMap>
  );
}

function customizeLayer(elements: any[]) {
  elements.forEach((element: { attribute: (arg0: string,arg1: undefined) => string | number; }) => {
    element.attribute('population', populations[element.attribute('name')]);
  });
}

function customizeText(arg: { index: number; start: any; end: any; }) {
  let text;
  if (arg.index === 0) {
    text = '< 0.5%';
  } else if (arg.index === 5) {
    text = '> 3%';
  } else {
    text = `${arg.start}% to ${arg.end}%`;
  }
  return text;
}

export default App;
