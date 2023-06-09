import React from 'react';
import TreeMap, { Tooltip } from 'devextreme-react/tree-map';
import { citiesPopulation } from './data.js';

function App() {
  return (
    // @ts-expect-error TS(2786): 'TreeMap' cannot be used as a JSX component.
    <TreeMap
      id="treemap"
      dataSource={citiesPopulation}
      title="The Most Populated Cities by Continents"
      idField="id"
      parentField="parentId"
    >
      // @ts-expect-error TS(2786): 'Tooltip' cannot be used as a JSX component.
      <Tooltip
        // @ts-expect-error TS(2322): Type '{ enabled: boolean; format: string; customiz... Remove this comment to see the full error message
        enabled={true}
        format="thousands"
        customizeTooltip={customizeTooltip}
      />
    </TreeMap>
  );
}

function customizeTooltip(arg) {
  const { data } = arg.node;

  return {
    text: arg.node.isLeaf()
      ? `<span class="city">${data.name}</span> (${data.country})<br/>Population: ${arg.valueText}`
      : null,
  };
}

export default App;
