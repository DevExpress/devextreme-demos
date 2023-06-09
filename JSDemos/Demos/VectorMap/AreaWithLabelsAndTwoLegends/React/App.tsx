import React from 'react';

import VectorMap, {
  Label,
  Layer,
  Legend,
  Source,
  Tooltip,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { populations, markers } from './data.js';

const colorGroups = [0, 0.5, 0.8, 1, 2, 3, 100];
const sizeGroups = [0, 8000, 10000, 50000];

const bounds = [-180, 85, 180, -75];

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map" bounds={bounds}>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: any; name: ... Remove this comment to see the full error message
        dataSource={mapsData.world}
        name="areas"
        palette="Violet"
        colorGroups={colorGroups}
        colorGroupingField="population"
        customize={customizeLayer}>
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label enabled={true} dataField="name"></Label>
      </Layer>
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; dataSource: { type: str... Remove this comment to see the full error message
        dataSource={markers}
        name="markers"
        elementType="bubble"
        dataField="value"
        sizeGroups={sizeGroups}
        opacity="0.8">
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label enabled={false}></Label>
      </Layer>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element; title: string; horizont... Remove this comment to see the full error message
        title="World Population<br/>Percentages"
        horizontalAlignment="left"
        verticalAlignment="bottom"
        customizeItems={customizeItems}
        customizeText={customizeText}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="areas" grouping="color"></Source>
      </Legend>
      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend
        // @ts-expect-error TS(2322): Type '{ children: Element; title: string; markerSh... Remove this comment to see the full error message
        title="City Population"
        markerShape="circle"
        horizontalAlignment="right"
        verticalAlignment="bottom"
        customizeItems={customizeItems}
        customizeText={customizeMarkers}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="markers" grouping="size"></Source>
      </Legend>
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        customizeTooltip={customizeTooltip} />
    </VectorMap>
  );
}

function customizeText(arg) {
  if (arg.index === 0) {
    return '< 0.5%';
  } if (arg.index === 5) {
    return '> 3%';
  }
  return `${arg.start}% to ${arg.end}%`;
}

function customizeTooltip(arg) {
  return {
    text: arg.attribute('text'),
  };
}

function customizeMarkers(arg) {
  return ['< 8000K', '8000K to 10000K', '> 10000K'][arg.index];
}

function customizeItems(items) {
  return items.reverse();
}

function customizeLayer(elements) {
  elements.forEach((element) => {
    const name = element.attribute('name');
    const population = populations[name];
    if (population) {
      element.attribute('population', population);
    }
  });
}
