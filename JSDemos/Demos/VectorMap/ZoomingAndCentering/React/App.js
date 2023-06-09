import React, { useRef } from 'react';
import VectorMap, {
  Layer,
  Tooltip,
} from 'devextreme-react/vector-map';
import Button from 'devextreme-react/button';
import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { markers } from './data.js';

const bounds = [-180, 85, 180, -60];

const App = () => {
  const vectorMapRef = useRef(null);

  const customizeTooltip = (arg) => {
    if (arg.layer.type === 'marker') {
      return { text: arg.attribute('name') };
    }
    return null;
  };

  const markerClick = (e) => {
    if (e.target && e.target.layer.type === 'marker') {
      vectorMapRef.current.instance
        .center(e.target.coordinates())
        .zoomFactor(10);
    }
  };

  const reset = () => {
    vectorMapRef.current.instance.center(null).zoomFactor(null);
  };

  return (
    <>
      <VectorMap
        ref={vectorMapRef}
        id="vector-map"
        onClick={markerClick}
        bounds={bounds}
      >
        <Layer dataSource={mapsData.world} hoverEnabled={false} />
        <Layer dataSource={markers} />
        <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
      </VectorMap>
      <Button text="Reset" id="reset" onClick={reset} />
    </>
  );
};

export default App;