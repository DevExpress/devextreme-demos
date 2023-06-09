import React from 'react';

import VectorMap, {
  Layer,
  Export,
  Title,
  Label,
} from 'devextreme-react/vector-map';

import { pangaeaBorders, pangaeaContinents } from './data.js';

const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100],
};

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map"
      maxZoomFactor={2}
      projection={projection}
    >
      // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
      <Title text="Map of Pangaea" subtitle="with modern continental outlines"></Title>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={pangaeaBorders}
        hoverEnabled={false}
        name="pangaea"
        color="#bb7862">
      </Layer>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={pangaeaContinents}
        customize={customizeLayer}>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label enabled={true} dataField="name"></Label>
      </Layer>
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true}></Export>
    </VectorMap>
  );
}

function customizeLayer(elements) {
  elements.forEach((element) => {
    element.applySettings({
      color: element.attribute('color'),
    });
  });
}
