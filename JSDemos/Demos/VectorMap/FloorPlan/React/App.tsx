import React from 'react';

import VectorMap, {
  Layer,
  Tooltip,
  Label,
} from 'devextreme-react/vector-map';

import { roomsData, buildingData } from './data.js';

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100],
};

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map"
      maxZoomFactor={4}
      projection={projection}
    >
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={buildingData}
        hoverEnabled={false}
        name="building">
      </Layer>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={roomsData}
        name="rooms"
        borderWidth={1}
        color="transparent">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label enabled={true} dataField="name"></Label>
      </Layer>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip
        // @ts-expect-error TS(2322): Type '{ enabled: boolean; customizeTooltip: (arg: ... Remove this comment to see the full error message
        enabled={true}
        customizeTooltip={customizeTooltip}
      ></Tooltip>
    </VectorMap>
  );
}

function customizeTooltip(arg) {
  if (arg.layer.name === 'rooms') {
    return { text: `Square: ${arg.attribute('square')} ft&#178` };
  }
  return null;
}
