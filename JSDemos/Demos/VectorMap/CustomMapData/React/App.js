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

const App = () => {
  const customizeLayer = (elements) => {
    elements.forEach((element) => {
      element.applySettings({
        color: element.attribute('color'),
      });
    });
  };

  return (
    <VectorMap id="vector-map" maxZoomFactor={2} projection={projection}>
      <Title text="Map of Pangaea" subtitle="with modern continental outlines" />
      <Layer dataSource={pangaeaBorders} hoverEnabled={false} name="pangaea" color="#bb7862" />
      <Layer dataSource={pangaeaContinents} customize={customizeLayer}>
        <Label enabled={true} dataField="name" />
      </Layer>
      <Export enabled={true} />
    </VectorMap>
  );
};

export default App;