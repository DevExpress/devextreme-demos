import React, { useState } from 'react';
import TreeMap, { Size, Title, Colorizer } from 'devextreme-react/tree-map';
import { citiesPopulation } from './data.js';

import TreeMapBreadcrumbs from './TreeMapBreadcrumbs.js';

function App() {
  const [drillInfo, setDrillInfo] = useState([]);

  const nodeClick = (e) => {
    e.node.drillDown();
  };

  const drill = (e) => {
    const newDrillInfo = [];
    for (let node = e.node.getParent(); node; node = node.getParent()) {
      newDrillInfo.unshift({
        text: node.label() || 'All Continents',
        node,
      });
    }
    if (newDrillInfo.length) {
      newDrillInfo.push({
        text: e.node.label(),
      });
    }

    setDrillInfo(newDrillInfo);
  };

  const drillInfoClick = (node) => {
    if (node) {
      node.drillDown();
    }
  };

  return (
    <React.Fragment>
      <TreeMap
        dataSource={citiesPopulation}
        interactWithGroup={true}
        maxDepth={2}
        onClick={nodeClick}
        onDrill={drill}
      >
        <Size height={440} />
        <Colorizer palette="Soft" />
        <Title
          text="The Most Populated Cities by Continents"
          placeholderSize={80}
        />
      </TreeMap>
      <TreeMapBreadcrumbs
        className="drill-down-title"
        onItemClick={drillInfoClick}
        treeInfo={drillInfo}
      />
    </React.Fragment>
  );
}

export default App;