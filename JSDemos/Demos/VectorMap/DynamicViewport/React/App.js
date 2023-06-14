import React, { useState, useRef } from 'react';
import VectorMap, {
  Layer,
  ControlBar,
} from 'devextreme-react/vector-map';
import TextBox from 'devextreme-react/text-box';
import SelectBox from 'devextreme-react/select-box';
import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import Switch from 'devextreme-react/switch';
import {
  viewportCoordinates, centerLabel, zoomLabel, continentLabel,
} from './data.js';

const bounds = [-180, 85, 180, -60];

const App = () => {
  const [coordinates, setCoordinates] = useState(viewportCoordinates[0].coordinates);
  const [zoomFactor, setZoomFactor] = useState('1.00');
  const [center, setCenter] = useState('0.000, 46.036');
  const [panVisible, setPanVisible] = useState(true);
  const [zoomVisible, setZoomVisible] = useState(true);
  const mapRef = useRef(null);

  const continentChanged = ({ value }) => {
    setCoordinates(value);
    mapRef.current.instance.viewport(value);
  };
  const zoomFactorChanged = ({ zoomFactor }) => {
    setZoomFactor(zoomFactor.toFixed(2));
  };
  const centerChanged = ({ center }) => {
    const value = `${center[0].toFixed(3)}, ${center[1].toFixed(3)}`;
    setCenter(value);
  };
  const panVisibleChange = (value) => {
    setPanVisible(value);
  };
  const zoomVisibleChange = (value) => {
    setZoomVisible(value);
  };

  return (
    <div>
      <VectorMap
        id="vector-map"
        bounds={bounds}
        ref={mapRef}
        onZoomFactorChanged={zoomFactorChanged}
        onCenterChanged={centerChanged}>
        <ControlBar zoomVisible={zoomVisible} panVisible={panVisible} />
        <Layer dataSource={mapsData.world} />
      </VectorMap>

      <div className="options">
        <div className="caption">Options</div>
        <div className="wrapper-option">
          <div className="column">
            <div className="option">
              <span>Continent</span>
              <SelectBox
                dataSource={viewportCoordinates}
                displayExpr="continent"
                valueExpr="coordinates"
                inputAttr={continentLabel}
                value={coordinates}
                onValueChanged={continentChanged}
                width={210}
              />
            </div>
            <div className="option">
              <span>Zoom factor</span>
              <TextBox
                value={zoomFactor}
                inputAttr={zoomLabel}
                readOnly={true}
                width={210}
              />
            </div>
            <div className="option">
              <span>Center</span>
              <TextBox
                value={center}
                readOnly={true}
                inputAttr={centerLabel}
                width={210}
              />
            </div>
          </div>
          <div className="column">
            <div className="option">
              <span>Pan control</span>
              <Switch
                value={panVisible}
                onValueChange={panVisibleChange} />
            </div>
            <div className="option">
              <span>Zoom bar</span>
              <Switch
                value={zoomVisible}
                onValueChange={zoomVisibleChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
