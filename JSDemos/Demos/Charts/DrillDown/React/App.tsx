import React from 'react';
import TreeMap, { Size, Title, Colorizer } from 'devextreme-react/tree-map';
import { citiesPopulation } from './data.ts';

import TreeMapBreadcrumbs from './TreeMapBreadcrumbs.tsx';

function drillInfoClick(node: { drillDown: () => void; }) {
  if (node) {
    node.drillDown();
  }
}

function nodeClick(e: { node: { drillDown: () => void; }; }) {
  e.node.drillDown();
}

function App() {
  const [drillInfo, setDrillInfo] = React.useState([]);

  const drill = React.useCallback((e: { node: { getParent: () => any; label: () => any; }; }) => {
    const newDrillInfo: ({ text: any; node: any; } | { text: any; })[] = [];
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
  }, [setDrillInfo]);

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
