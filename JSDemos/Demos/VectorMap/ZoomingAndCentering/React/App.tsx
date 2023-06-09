import React from 'react';

import VectorMap, {
  Layer,
  Tooltip,
} from 'devextreme-react/vector-map';

import Button from 'devextreme-react/button';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { markers } from './data.js';

const bounds = [-180, 85, 180, -60];

class App extends React.Component {
  reset: any;

  storeVectorMap: any;

  vectorMap: any;

  constructor(props) {
    super(props);

    this.storeVectorMap = (component) => {
      this.vectorMap = component.instance;
    };

    this.reset = () => {
      this.vectorMap.center(null);
      this.vectorMap.zoomFactor(null);
    };
  }

  customizeTooltip(arg) {
    if (arg.layer.type === 'marker') {
      return { text: arg.attribute('name') };
    }
    return null;
  }

  markerClick(e) {
    if (e.target && e.target.layer.type === 'marker') {
      e.component.center(e.target.coordinates()).zoomFactor(10);
    }
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
        <VectorMap
          ref={this.storeVectorMap}
          id="vector-map"
          onClick={this.markerClick}
          bounds={bounds}>
          // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
          <Layer
            // @ts-expect-error TS(2322): Type '{ children: never[]; dataSource: any; hoverE... Remove this comment to see the full error message
            dataSource={mapsData.world}
            hoverEnabled={false}>
          </Layer>
          // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
          <Layer
            // @ts-expect-error TS(2322): Type '{ dataSource: { coordinates: number[]; attri... Remove this comment to see the full error message
            dataSource={markers}
          />
          // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
          <Tooltip enabled={true}
            customizeTooltip={this.customizeTooltip}
          ></Tooltip>
        </VectorMap>
        // @ts-expect-error TS(2786): 'Button' cannot be used as a JSX component.
        <Button
          text="Reset"
          id="reset"
          onClick={this.reset}
        ></Button>
      </React.Fragment>
    );
  }
}
export default App;
