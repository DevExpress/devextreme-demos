import React from 'react';
import Diagram, {
  Nodes, AutoLayout, Toolbox, Group,
} from 'devextreme-react/diagram';
import ArrayStore from 'devextreme/data/array_store';
import service from './data.js';

class App extends React.Component {
  dataSource: any;

  constructor(props) {
    super(props);

    this.dataSource = new ArrayStore({
      key: 'ID',
      data: service.getEmployees(),
    });
  }

  render() {
    return (
      // @ts-expect-error TS(2786): 'Diagram' cannot be used as a JSX component.
      <Diagram id="diagram">
        // @ts-expect-error TS(2786): 'Nodes' cannot be used as a JSX component.
        <Nodes dataSource={this.dataSource} keyExpr="ID" textExpr="Title" parentKeyExpr="Head_ID">
          // @ts-expect-error TS(2786): 'AutoLayout' cannot be used as a JSX component.
          <AutoLayout type="tree" />
        </Nodes>
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
