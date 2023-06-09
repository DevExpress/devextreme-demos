import React from 'react';

import VectorMap, {
  Label,
  Layer,
  Legend,
  Source,
  Tooltip,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { markers } from './data.js';

const sizeGroups = [0, 8000, 10000, 50000];

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
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={markers}
        name="bubbles"
        elementType="bubble"
        dataField="value"
        minSize={20}
        maxSize={40}
        sizeGroups={sizeGroups}
        opacity="0.8">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label enabled={false}></Label>
      </Layer>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        customizeTooltip={customizeTooltip}
      ></Tooltip>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element; markerShape: string; cu... Remove this comment to see the full error message
        markerShape="circle"
        customizeItems={customizeItems}
        customizeText={customizeText}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="bubbles" grouping="size"></Source>
      </Legend>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        customizeTooltip={customizeTooltip} />
    </VectorMap>
  );
}

function customizeTooltip(arg) {
  if (arg.layer.type === 'marker') {
    return { text: arg.attribute('tooltip') };
  }
  return null;
}

function customizeText(arg) {
  return ['< 8000K', '8000K to 10000K', '> 10000K'][arg.index];
}

function customizeItems(items) {
  return items.reverse();
}
