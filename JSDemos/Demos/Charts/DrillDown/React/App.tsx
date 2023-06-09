import React from 'react';
import TreeMap, { Size, Title, Colorizer } from 'devextreme-react/tree-map';
import { citiesPopulation } from './data.js';

import TreeMapBreadcrumbs from './TreeMapBreadcrumbs.js';

class App extends React.Component {
  setState: any;

  state: any;

  constructor(props) {
    super(props);
    this.state = {
      drillInfo: [],
    };
    this.nodeClick = this.nodeClick.bind(this);
    this.drill = this.drill.bind(this);
    this.drillInfoClick = this.drillInfoClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        // @ts-expect-error TS(2786): 'TreeMap' cannot be used as a JSX component.
        <TreeMap
          dataSource={citiesPopulation}
          interactWithGroup={true}
          maxDepth={2}
          onClick={this.nodeClick}
          onDrill={this.drill}
        >
          // @ts-expect-error TS(2786): 'Size' cannot be used as a JSX component.
          <Size height={440} />
          // @ts-expect-error TS(2786): 'Colorizer' cannot be used as a JSX component.
          <Colorizer palette="Soft" />
          // @ts-expect-error TS(2786): 'Title' cannot be used as a JSX component.
          <Title
            // @ts-expect-error TS(2322): Type '{ text: string; placeholderSize: number; }' ... Remove this comment to see the full error message
            text="The Most Populated Cities by Continents"
            placeholderSize={80}
          />
        </TreeMap>
        // @ts-expect-error TS(2786): 'TreeMapBreadcrumbs' cannot be used as a JSX compo... Remove this comment to see the full error message
        <TreeMapBreadcrumbs
          className="drill-down-title"
          // @ts-expect-error TS(2322): Type '{ className: string; onItemClick: (node: any... Remove this comment to see the full error message
          onItemClick={this.drillInfoClick}
          treeInfo={this.state.drillInfo}
        />
      </React.Fragment>
    );
  }

  nodeClick(e) {
    e.node.drillDown();
  }

  drill(e) {
    const drillInfo = [];
    for (let node = e.node.getParent(); node; node = node.getParent()) {
      drillInfo.unshift({
        text: node.label() || 'All Continents',
        node,
      });
    }
    if (drillInfo.length) {
      drillInfo.push({
        text: e.node.label(),
      });
    }

    this.setState({ drillInfo });
  }

  drillInfoClick(node) {
    if (node) {
      node.drillDown();
    }
  }
}

export default App;
