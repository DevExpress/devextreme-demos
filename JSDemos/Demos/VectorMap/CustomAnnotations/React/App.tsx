import React from 'react';
import VectorMap, {
  Layer,
  CommonAnnotationSettings,
  Annotation,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/usa.js';
import { statesData } from './data.js';
import AnnotationTemplate from './AnnotationTemplate.js';

const bounds = [-118, 55, -80, 23];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map"
      bounds={bounds}>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: any; }' is ... Remove this comment to see the full error message
        dataSource={mapsData.usa}
      >
      </Layer>
      // @ts-expect-error TS(2786): 'CommonAnnotationSettings' cannot be used as a JSX... Remove this comment to see the full error message
      <CommonAnnotationSettings
        // @ts-expect-error TS(2322): Type '{ children: never[]; type: string; render: (... Remove this comment to see the full error message
        type="custom"
        render={AnnotationTemplate}
      >
      </CommonAnnotationSettings>
      {statesData.map((state) => (
        // @ts-expect-error TS(2786): 'Annotation' cannot be used as a JSX component.
        <Annotation
          // @ts-expect-error TS(2322): Type '{ children: never[]; coordinates: number[]; ... Remove this comment to see the full error message
          coordinates={state.coordinates}
          offsetX={state.offsetX}
          offsetY={state.offsetY}
          key={state.data.name}
          data={state.data}
        >
        </Annotation>
      ))
      }
    </VectorMap>
  );
}

