import React from 'react';

import VectorMap, {
  Label,
  Layer,
  Font,
  LoadingIndicator,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/usa.js';
import { weatherData } from './data.js';

const bounds = [-118, 52, -80, 20];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map"
      bounds={bounds}>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: any; hoverE... Remove this comment to see the full error message
        dataSource={mapsData.usa}
        hoverEnabled={false}
        borderColor="#ffffff"
      >
      </Layer>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={weatherData}
        type="marker"
        elementType="image"
        dataField="url"
        size={51}>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label dataField="text">
          // @ts-expect-error TS(2786): 'Font' cannot be used as a JSX component.
          <Font size={14} />
        </Label>
      </Layer>
      // @ts-expect-error TS(2786): 'LoadingIndicator' cannot be used as a JSX compone... Remove this comment to see the full error message
      <LoadingIndicator show={true} />
    </VectorMap>
  );
}
