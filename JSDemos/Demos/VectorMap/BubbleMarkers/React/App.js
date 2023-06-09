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

const App = () => {
  const customizeTooltip = (arg) => {
    if (arg.layer.type === 'marker') {
      return { text: arg.attribute('tooltip') };
    }
    return null;
  };

  const customizeText = (arg) => {
    return ['< 8000K', '8000K to 10000K', '> 10000K'][arg.index];
  };

  const customizeItems = (items) => {
    return items.reverse();
  };

  return (
    <VectorMap id="vector-map" bounds={bounds}>
      <Layer dataSource={mapsData.world} hoverEnabled={false} />
      <Layer
        dataSource={markers}
        name="bubbles"
        elementType="bubble"
        dataField="value"
        minSize={20}
        maxSize={40}
        sizeGroups={sizeGroups}
        opacity="0.8"
      >
        <Label enabled={false} />
      </Layer>
      <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
      <Legend
        markerShape="circle"
        customizeItems={customizeItems}
        customizeText={customizeText}
      >
        <Source layer="bubbles" grouping="size" />
      </Legend>
      <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
    </VectorMap>
  );
};

export default App;