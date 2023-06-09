import React from 'react';

import VectorMap, {
  Layer,
  Legend,
  Source,
  Tooltip,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { names, markers } from './data.js';

const bounds = [-180, 85, 180, -60];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map" bounds={bounds}>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: any; hoverE... Remove this comment to see the full error message
        dataSource={mapsData.world}
        hoverEnabled={false}>
      </Layer>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={markers}
        name="pies"
        elementType="pie"
        dataField="values"
      >
      </Layer>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        customizeTooltip={customizeTooltip}
      ></Tooltip>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element; customizeText: (arg: an... Remove this comment to see the full error message
        customizeText={customizeText}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="pies" grouping="color"></Source>
      </Legend>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        customizeTooltip={customizeTooltip} />
    </VectorMap>
  );
}

function customizeTooltip(arg) {
  if (arg.layer.type === 'marker') {
    return {
      text: arg.attribute('tooltip'),
    };
  }
  return 0;
}

function customizeText(arg) {
  return names[arg.index];
}
