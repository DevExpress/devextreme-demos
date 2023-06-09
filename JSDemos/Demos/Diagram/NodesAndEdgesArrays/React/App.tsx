import React from 'react';
import Diagram, {
  Nodes, Edges, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  flowEdgesDataSource: any;

  flowNodesDataSource: any;

  constructor(props) {
    super(props);

    this.flowNodesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowNodes(),
    });
    this.flowEdgesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowEdges(),
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram">
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes dataSource={this.flowNodesDataSource} idExpr="id" typeExpr="type" textExpr="text">
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout type="layered" />
        </Nodes>
        // @ts-expect-error TS(2786): 'Edges' cannot be used as a JSX component.
        <Edges dataSource={this.flowEdgesDataSource} idExpr="id" textExpr="text" fromExpr="fromId" toExpr="toId" />
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="general" title="General" />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
