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

const App = () => {
  const customizeTooltip = (arg) => {
    if (arg.layer.type === 'marker') {
      return {
        text: arg.attribute('tooltip'),
      };
    }
    return 0;
  };

  const customizeText = (arg) => names[arg.index];

  return (
    <VectorMap id="vector-map" bounds={bounds}>
      <Layer dataSource={mapsData.world} hoverEnabled={false} />
      <Layer
        dataSource={markers}
        name="pies"
        elementType="pie"
        dataField="values"
      />
      <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
      <Legend customizeText={customizeText}>
        <Source layer="pies" grouping="color" />
      </Legend>
      <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
    </VectorMap>
  );
};

export default App;
