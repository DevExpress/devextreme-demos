import React, { useState, useCallback } from 'react';

import Map from 'devextreme-react/map';
import SelectBox from 'devextreme-react/select-box';

import { mapTypes } from './data.js';

const apiKey = {
  bing: 'Aq3LKP2BOmzWY47TZoT1YdieypN_rB6RY9FqBfx-MDCKjvvWBbT68R51xwbL-AqC',
};

export default function App() {
  const [mapTypeValue, setMapTypeValue] = useState(mapTypes[0].key);

  const onMapTypeChange = useCallback((value) => {
    setMapTypeValue(value);
  }, []);

  return (
    <div>
      <Map
        defaultCenter="Brooklyn Bridge,New York,NY"
        defaultZoom={14}
        height={400}
        width="100%"
        provider="bing"
        type={mapTypeValue}
        apiKey={apiKey}
      >
      </Map>
      <div className="options">
        <div className="caption">Options</div>
        <div className="option">
          <span>Map Type</span>
          <SelectBox
            value={mapTypeValue}
            onValueChange={onMapTypeChange}
            dataSource={mapTypes}
            displayExpr="name"
            valueExpr="key"
          />
        </div>
      </div>
    </div>
  );
}
