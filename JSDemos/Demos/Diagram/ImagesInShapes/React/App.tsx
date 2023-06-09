import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Edges, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  orgItemsDataSource: any;

  orgLinksDataSource: any;

  constructor(props) {
    super(props);

    this.orgItemsDataSource = new ArrayStore({
      key: 'id',
      data: service.getOrgItems(),
    });
    this.orgLinksDataSource = new ArrayStore({
      key: 'id',
      data: service.getOrgLinks(),
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram">
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes dataSource={this.orgItemsDataSource} imageUrlExpr="picture">
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout orientation="horizontal" type="tree" />
        </Nodes>
        // @ts-expect-error TS(2786): 'Edges' cannot be used as a JSX component.
        <Edges dataSource={this.orgLinksDataSource} />
        // @ts-expect-error TS(2786): 'Toolbox' cannot be used as a JSX component.
        <Toolbox>
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="general" title="General" />
          // @ts-expect-error TS(2786): 'Group' cannot be used as a JSX component.
          <Group category="orgChart" title="Organizational Chart" expanded={true} />
        </Toolbox>
      </Diagram>
    );
  }
}

export default App;
