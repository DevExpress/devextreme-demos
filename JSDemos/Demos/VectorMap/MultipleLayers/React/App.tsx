import React from 'react';

import VectorMap, {
  Export,
  Layer,
  Legend,
  Source,
  Font,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { streamsData } from './data.js';

const colorGroups = [0, 1, 2];
const streamsPalette = ['#3c20c8', '#d82020'];

const bounds = [-180, 85, 180, -75];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      title="Sea Currents"
      maxZoomFactor={3}
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
        dataSource={streamsData}
        name="water"
        colorGroupingField="tag"
        colorGroups={colorGroups}
        palette={streamsPalette}
        borderColor="none"
        hoverEnabled={false}
      >
      </Layer>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element[]; horizontalAlignment: ... Remove this comment to see the full error message
        horizontalAlignment="right"
        verticalAlignment= "top"
        customizeText={customizeText}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="water" grouping="color"></Source>
        // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
        <Font size={14} />
      </Legend>
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true}></Export>
    </VectorMap>
  );
}

function customizeText(itemInfo) {
  if (itemInfo.color === '#3c20c8') {
    return 'Cold';
  }
  return 'Warm';
}
