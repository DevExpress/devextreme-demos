import React from 'react';

import VectorMap, {
  Export,
  Label,
  Layer,
  Legend,
  Source,
  Subtitle,
  Title,
  Tooltip,
  Size,
} from 'devextreme-react/vector-map';

import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import { countriesGDP } from './data.js';
import TooltipTemplate from './TooltipTemplate.js';

const colorGroups = [0, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000];
const mapBounds = [-180, 85, 180, -60];

const { format } = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
});

export default function App() {
  return (
    // @ts-expect-error TS(2786): 'VectorMap' cannot be used as a JSX component.
    <VectorMap
      id="vector-map"
      // @ts-expect-error TS(2322): Type '{ children: Element[]; id: string; palette: ... Remove this comment to see the full error message
      palette="Violet"
      bounds={mapBounds}>
      // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
      <Size height={700} />
      // @ts-expect-error TS(2786): 'Layer' cannot be used as a JSX component.
      <Layer
        // @ts-expect-error TS(2322): Type '{ children: Element; name: string; dataSourc... Remove this comment to see the full error message
        name="areas"
        dataSource={mapsData.world}
        colorGroups={colorGroups}
        colorGroupingField="total"
        customize={customizeLayer}
        palette="violet"
      >
        // @ts-expect-error TS(2786): 'Label' cannot be used as a JSX component.
        <Label dataField="name" enabled={true} />
      </Layer>

      // @ts-expect-error TS(2786): 'Legend' cannot be used as a JSX component.
      <Legend customizeText={customizeLegendText}>
        // @ts-expect-error TS(2786): 'Source' cannot be used as a JSX component.
        <Source layer="areas" grouping="color" />
      </Legend>

      // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
      <Title text="Nominal GDP">
        // @ts-expect-error TS(2786): 'Subtitle' cannot be used as a JSX component.
        <Subtitle text="(in millions of US dollars)" />
      </Title>

      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip enabled={true}
        contentRender={TooltipTemplate} />
      // @ts-expect-error TS(2786): 'Export' cannot be used as a JSX component.
      <Export enabled={true} />
    </VectorMap>
  );
}

function customizeLayer(elements) {
  elements.forEach((element) => {
    const countryGDPData = countriesGDP[element.attribute('name')];
    element.attribute('total', (countryGDPData && countryGDPData.total) || 0);
  });
}

function customizeLegendText(arg) {
  return `${format(arg.start)} to ${format(arg.end)}`;
}

